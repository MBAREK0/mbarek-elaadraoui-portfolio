import { mirage } from 'ldrs';

const FADE_MS = 420;
/** Safety: never trap the user if capture stalls. */
const MAX_WAIT_MS = 10_000;

mirage.register();

/**
 * Full-page Mirage splash (uiball/ldrs) that covers the portfolio until the ink
 * theme toggle has both light/dark snapshots ready.
 */
export function mountBootLoader(): HTMLElement {
  const existing = document.getElementById('boot-loader');
  const root = existing ?? document.createElement('div');
  if (!existing) {
    root.id = 'boot-loader';
    document.body.prepend(root);
  }

  root.className = 'boot-loader';
  root.setAttribute('data-html2canvas-ignore', '');
  root.setAttribute('role', 'status');
  root.setAttribute('aria-live', 'polite');
  root.setAttribute('aria-busy', 'true');
  root.innerHTML = '';

  const spinner = document.createElement('l-mirage');
  spinner.setAttribute('size', '72');
  spinner.setAttribute('speed', '2.5');
  spinner.setAttribute('color', 'currentColor');
  spinner.setAttribute('aria-hidden', 'true');
  root.append(spinner);

  const label = document.createElement('span');
  label.className = 'boot-loader__label';
  label.textContent = 'Loading';
  root.append(label);

  document.documentElement.classList.add('is-booting');
  return root;
}

export async function dismissBootLoader(ready: Promise<void>): Promise<void> {
  const root = document.getElementById('boot-loader');
  if (!root) {
    document.documentElement.classList.remove('is-booting');
    return;
  }

  await Promise.race([
    ready,
    new Promise<void>((resolve) => window.setTimeout(resolve, MAX_WAIT_MS)),
  ]);

  root.classList.add('is-done');
  root.setAttribute('aria-busy', 'false');
  document.documentElement.classList.remove('is-booting');

  window.setTimeout(() => root.remove(), FADE_MS);
}
