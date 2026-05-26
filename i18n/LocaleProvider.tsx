import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { PropsWithChildren } from 'react';
import { STORAGE_KEY } from '@/constants/commands';
import { getMessage } from './dict';
import { detectBrowserLanguage } from './detectBrowserLanguage';
import type {
  ResolvedLanguage,
  TranslationKey,
  UserLanguagePreference,
} from './types';

interface LocaleContextValue {
  /** 현재 화면에 표시 중인 언어. 'auto' 모드일 때는 브라우저 UI 언어를 기준으로 합니다. */
  language: ResolvedLanguage;
  /** 사용자의 선호 언어. 'auto'면 브라우저 언어를 따라가는 자동 모드입니다. */
  preference: UserLanguagePreference;
  /**
   * 사용자의 선호 언어를 변경합니다. 변경 사항은 `browser.storage.local`에 저장되며,
   * 다른 탭에서도 즉시 반영됩니다.
   *
   * @param newPreference 새로 적용할 언어 선호도. `'auto'`라면, 브라우저 언어를 자동으로 감지합니다.
   */
  updatePreference: (newPreference: UserLanguagePreference) => Promise<void>;
  /**
   * 키로 번역 문자열을 가져옵니다. Chrome `browser.i18n.getMessage`와 호환되는 치환 문법을 사용합니다.
   *
   * @param key 번역 키. dot-path 형식으로 중첩된 객체를 가리킵니다. (예: `'options.dataManage.title'`)
   * @param substitutions `$1`, `$2`, ... 자리에 들어갈 값들의 배열. `$` 문자 자체를 사용하고 싶은 경우,`$$`로 작성해 주세요.
   * @returns 현재 언어로 번역된 문자열. 해당 언어의 키가 존재하지 않는 경우 한국어의 키에 대응하는 문자열을 반환하며, 그마저도 없을 경우 키 값 자체가 반환됩니다.
   *
   * @example
   * t('options.dataManage.title');
   * // 현재 언어가 영어인 경우 → 'Data Management'
   *
   * t('quickSlots.deleteConfirmMessage', ['3']);
   * // → '3번 슬롯에 저장되어 있는 추첨을 삭제할까요?'
   *
   * t('somePriceKey', ['1000']);
   * // 원문: '현재 가격: $$1 → 새 가격: $1'
   * // → '현재 가격: $1 → 새 가격: 1000'
   */
  t: (key: TranslationKey, substitutions?: readonly string[]) => string;
}

export const LocaleContext = createContext<LocaleContextValue | null>(null);

const isUserLanguagePreference = (
  value: unknown,
): value is UserLanguagePreference =>
  value === 'auto' || value === 'ko' || value === 'en';

const resolveLanguage = (
  preference: UserLanguagePreference,
): ResolvedLanguage =>
  preference === 'auto' ? detectBrowserLanguage() : preference;

const LocaleProvider = ({ children }: PropsWithChildren) => {
  const [preference, setPreference] = useState<UserLanguagePreference>('auto');

  useEffect(() => {
    let cancelled = false;

    browser.storage.local
      .get(STORAGE_KEY.USER_LANGUAGE_PREFERENCE)
      .then((result) => {
        const stored = result[STORAGE_KEY.USER_LANGUAGE_PREFERENCE];
        if (!cancelled && isUserLanguagePreference(stored)) {
          setPreference(stored);
        }
      });

    const handleStorageChange = (
      changes: Record<string, { newValue?: unknown }>,
      areaName: string,
    ) => {
      if (areaName !== 'local') return;
      const change = changes[STORAGE_KEY.USER_LANGUAGE_PREFERENCE];
      if (!change) return;
      if (isUserLanguagePreference(change.newValue)) {
        setPreference(change.newValue);
      } else if (change.newValue === undefined) {
        setPreference('auto');
      }
    };

    browser.storage.onChanged.addListener(handleStorageChange);

    return () => {
      cancelled = true;
      browser.storage.onChanged.removeListener(handleStorageChange);
    };
  }, []);

  const updatePreference = useCallback(
    async (newPreference: UserLanguagePreference) => {
      setPreference(newPreference);
      await browser.storage.local.set({
        [STORAGE_KEY.USER_LANGUAGE_PREFERENCE]: newPreference,
      });
    },
    [],
  );

  const language = useMemo(() => resolveLanguage(preference), [preference]);

  const t = useCallback(
    (key: TranslationKey, substitutions?: readonly string[]) =>
      getMessage(language, key, substitutions),
    [language],
  );

  const value = useMemo<LocaleContextValue>(
    () => ({ language, preference, updatePreference, t }),
    [language, preference, updatePreference, t],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export default LocaleProvider;
