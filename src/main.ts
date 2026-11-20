import { inject } from '@vercel/analytics';
import gsap from 'gsap';
import { mountPage } from './page/mount';
import { startAutoMode } from './ui/autoMode';
import { dismissBootLoader, mountBootLoader } from './ui/bootLoader';
import './ui/bootLoader.css';
import { DemoPanel, loadSettings } from './ui/demoPanel';
import { applyLanguage, getLocale, type Locale } from './ui/i18n';
import { InkTransition, SPREAD } from './ui/inkTransition';
import { applyTheme, getTheme } from './ui/theme';

// Vite/vanilla (not Astro): inject once on the client.
inject();

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('#app root missing');

mountBootLoader();
mountPage(app);

const toggle = document.querySelector<HTMLButtonElement>('#theme-toggle');
applyTheme(getTheme(), toggle);

const canvas = document.createElement('canvas');
canvas.className = 'ink-canvas';
canvas.setAttribute('aria-hidden', 'true');
canvas.setAttribute('data-html2canvas-ignore', '');
document.body.append(canvas);

const params = new URLSearchParams(location.search);
const settings = loadSettings();

// ?gl=0 forces the CSS fallback (what browsers without WebGL2 get).
const ink = new InkTransition(canvas, toggle, { webgl: params.get('gl') !== '0' });
void dismissBootLoader(ink.whenReady);

let showMarker = settings.showMarker;
const panel = new DemoPanel(ink, {
  showMarker,
  onMarkerChange: (show) => {
    showMarker = show;
  },
});

toggle?.addEventListener('click', (e) => {
  // detail === 0 means a keyboard-activated click (Enter/Space): spread from the button.
  ink.toggle(e.detail === 0 ? undefined : { x: e.clientX, y: e.clientY });
  panel.refresh();
});

app.querySelectorAll<HTMLButtonElement>('.lang-toggle__btn[data-lang]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const next = btn.dataset.lang as Locale | undefined;
    if (!next || next === getLocale()) return;
    applyLanguage(next, app);
    // Wait a frame so reflow from longer/shorter copy lands before capture scheduling.
    requestAnimationFrame(() => ink.recapture());
  });
});

// Text-entry fields swallow shortcuts; sliders and checkboxes in the demo panel don't.
const TEXT_ENTRY =
  'input:not([type="range"]):not([type="checkbox"]):not([type="button"]), textarea, select, [contenteditable="true"]';

window.addEventListener('keydown', (e) => {
  if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
  const target = e.target;
  if (target instanceof Element && target.closest(TEXT_ENTRY)) return;

  switch (e.key.toLowerCase()) {
    case 't':
      ink.toggle();
      panel.refresh();
      break;
    case 'd':
      panel.toggle();
      break;
    case 'r':
      ink.replay();
      break;
    default:
      return;
  }
  e.preventDefault();
});

if (params.get('auto') === '1') {
  startAutoMode(ink, () => showMarker, () => panel.refresh());
}

// ?panel=1 opens the controls on load (phones have no "D" key).
if (params.get('panel') === '1') {
  panel.toggle();
}

if (import.meta.env.DEV) {
  Object.assign(window, { __ink: ink, __gsap: gsap, __spread: SPREAD, __panel: panel });
  void import('./dev/probe').then((m) => m.installProbe(ink));
}
