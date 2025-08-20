// src/lib/i18n/index.ts
import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

const defaultLocale = 'en';

register('en', () => import('./locales/en.json'));
// register('es', () => import('./locales/es.json'));
// register('fr', () => import('./locales/fr.json'));
// register('de', () => import('./locales/de.json'));

init({
  fallbackLocale: defaultLocale,
  initialLocale: browser ? window.navigator.language : defaultLocale,
});

// Helper function to change language
export function changeLanguage(locale: string): void {
  import('svelte-i18n').then(({ locale: setLocale }) => {
    setLocale.set(locale);
    if (browser) {
      localStorage.setItem('locale', locale);
    }
  });
}