import markup from './page.html?raw';
import { applyLanguage, readStoredLocale } from '../ui/i18n';
import './page.css';

/** Injects the static portfolio markup. Called synchronously before first paint. */
export function mountPage(target: HTMLElement): void {
  target.innerHTML = markup;

  // Static on purpose: the page is snapshotted for the ink transition, so content
  // must not change between capture and reveal.
  const time = target.querySelector<HTMLElement>('#local-time');
  if (time) {
    time.textContent = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Africa/Casablanca',
    }).format(new Date());
  }

  applyLanguage(readStoredLocale(), target);
}
