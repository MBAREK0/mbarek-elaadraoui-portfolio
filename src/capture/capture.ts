import type { Theme } from '../ui/theme';

/**
 * Full-document snapshots of the page in a given theme.
 *
 * We capture the whole document (not just the viewport) so a snapshot stays valid
 * while the user scrolls; the shader picks the visible window using the live scroll
 * offset. The theme is applied to html2canvas' *cloned* document via `onclone`, so the
 * live page never flickers during pre-capture.
 */

export interface Snapshot {
  theme: Theme;
  canvas: HTMLCanvasElement;
  /** Texture pixels per CSS pixel. */
  scale: number;
  /** Layout this snapshot is valid for; see {@link layoutKey}. */
  key: string;
  ms: number;
}

export interface CaptureOptions {
  /**
   * Fast first paint for the ink toggle: skip decoding project photos in the clone
   * and use a lower scale. A later full capture upgrades the GPU textures.
   */
  draft?: boolean;
}

const BACKGROUND: Record<Theme, string> = {
  light: '#f0e5d8',
  dark: '#2e4052',
};

const isCoarsePointer = (): boolean => window.matchMedia('(pointer: coarse)').matches;

/** Device-pixel ratio used for both the snapshots and the overlay canvas. */
export function renderScale(): number {
  const cap = isCoarsePointer() ? 1.5 : 2;
  return Math.min(window.devicePixelRatio || 1, cap);
}

/** True once fonts + project thumbnails have loaded (for a quality recapture). */
export async function whenAssetsReady(): Promise<void> {
  await document.fonts.ready;
  const imgs = Array.from(document.querySelectorAll<HTMLImageElement>('.project__visual img'));
  await Promise.all(
    imgs.map(async (img) => {
      if (!img.complete) {
        await new Promise<void>((resolve) => {
          img.addEventListener('load', () => resolve(), { once: true });
          img.addEventListener('error', () => resolve(), { once: true });
        });
      }
      try {
        await img.decode();
      } catch {
        /* broken image — still proceed */
      }
    }),
  );
}

export function documentSize(): { width: number; height: number } {
  const el = document.documentElement;
  return { width: el.clientWidth, height: Math.max(el.scrollHeight, el.clientHeight) };
}

/**
 * Identifies the layout a snapshot depends on. Viewport height is deliberately
 * excluded (mobile URL-bar show/hide changes it without reflowing the document).
 */
export function layoutKey(scale: number): string {
  const { width, height } = documentSize();
  return `${width}x${height}@${scale}`;
}

export async function capturePage(
  theme: Theme,
  scale: number,
  maxTextureSize: number,
  opts: CaptureOptions = {},
): Promise<Snapshot> {
  const t0 = performance.now();
  const key = layoutKey(scale);
  const { width, height } = documentSize();
  const draft = opts.draft === true;

  // Tall pages + big JPGs: keep capture scale modest so dual-theme prep stays snappy.
  const area = width * height;
  const areaCap = draft ? 0.75 : area > 1_800_000 ? 1 : area > 1_000_000 ? 1.25 : scale;
  const safeScale = Math.min(scale, areaCap, maxTextureSize / width, maxTextureSize / height);

  const { default: html2canvas } = await import('html2canvas');
  const canvas = await html2canvas(document.body, {
    scale: safeScale,
    backgroundColor: BACKGROUND[theme],
    x: 0,
    y: 0,
    width,
    height,
    scrollX: 0,
    scrollY: 0,
    windowWidth: width,
    windowHeight: document.documentElement.clientHeight,
    logging: false,
    useCORS: true,
    // Draft must not stall on photo decode; full capture still bounds waits.
    imageTimeout: draft ? 0 : 1500,
    onclone: (doc) => {
      doc.documentElement.dataset.theme = theme;
      doc.querySelectorAll<HTMLElement>('[data-ink-live]').forEach((el) => {
        el.style.visibility = 'hidden';
      });
      if (draft) {
        // Keep the 16:9 frames, skip painting multi‑MB JPEGs for the first toggle.
        doc.querySelectorAll<HTMLImageElement>('.project__visual img').forEach((img) => {
          img.removeAttribute('src');
          img.removeAttribute('srcset');
          img.style.visibility = 'hidden';
        });
      }
    },
  });

  return { theme, canvas, scale: safeScale, key, ms: performance.now() - t0 };
}
