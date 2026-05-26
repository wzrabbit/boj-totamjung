import type { ResolvedLanguage } from './types';

export const detectBrowserLanguage = (): ResolvedLanguage => {
  const uiLanguage = browser.i18n.getUILanguage();
  return uiLanguage.toLowerCase().startsWith('ko') ? 'ko' : 'en';
};
