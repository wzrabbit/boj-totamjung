import { useEffect, useRef, useState } from 'react';
import { CheckIcon } from '@/assets/svg';
import { useTranslation } from '@/i18n';
import type { ResolvedLanguage, UserLanguagePreference } from '@/i18n';
import * as S from './LanguageSelector.styled';

const LANGUAGE_PREFERENCES: readonly UserLanguagePreference[] = [
  'auto',
  'ko',
  'en',
];

const LABEL_KEY_BY_PREFERENCE = {
  auto: 'language.auto',
  ko: 'language.ko',
  en: 'language.en',
} as const;

const SHORT_LABEL_BY_LANGUAGE: Record<ResolvedLanguage, string> = {
  ko: '한',
  en: 'EN',
};

const LanguageSelector = () => {
  const { preference, updatePreference, language, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }
      if (!wrapperRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = async (option: UserLanguagePreference) => {
    await updatePreference(option);
    setIsOpen(false);
  };

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.Button
        type="button"
        aria-label={t('language.label')}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        $isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {SHORT_LABEL_BY_LANGUAGE[language]}
      </S.Button>
      {isOpen && (
        <S.Menu role="listbox" aria-label={t('language.label')}>
          {LANGUAGE_PREFERENCES.map((option) => {
            const isSelected = preference === option;
            return (
              <S.MenuItem
                key={option}
                role="option"
                aria-selected={isSelected}
                $isSelected={isSelected}
                onClick={() => handleSelect(option)}
              >
                <span>{t(LABEL_KEY_BY_PREFERENCE[option])}</span>
                {isSelected && (
                  <S.CheckMark>
                    <CheckIcon />
                  </S.CheckMark>
                )}
              </S.MenuItem>
            );
          })}
        </S.Menu>
      )}
    </S.Wrapper>
  );
};

export default LanguageSelector;
