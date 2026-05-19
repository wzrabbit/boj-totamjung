import type { GeneratedI18nStructure } from '#i18n';

export type UserLanguagePreference = 'auto' | 'ko' | 'en';

export type ResolvedLanguage = 'ko' | 'en';

export type TranslationKey = Exclude<
  keyof GeneratedI18nStructure,
  `@@${string}`
>;
