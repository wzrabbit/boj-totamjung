import type { GeneratedI18nStructure } from '#i18n';

export type UserLanguagePreference = 'auto' | 'ko' | 'en';

export type ResolvedLanguage = 'ko' | 'en';

export type TranslationKey = Exclude<
  keyof GeneratedI18nStructure,
  `@@${string}`
>;

/**
 * 번역 키와 치환 인자를 함께 담아 나르는 직렬화 가능한 메시지 표현입니다.
 *
 * UI에서 표시 시점에 `t(message.key, message.substitutions)`로 풀어 사용합니다.
 * 비즈니스 로직(domains/) 또는 백그라운드 스크립트가 표시할 메시지를 만들 때,
 * 표시 언어를 알지 못한 채 "어떤 메시지인지"만 식별하여 UI 레이어로 넘기는 용도입니다.
 */
export type LocalizableMessage = {
  key: TranslationKey;
  substitutions?: readonly string[];
};
