import { useEffect, useRef, useState } from 'react';
import { CheckIcon } from '@/assets/svg';
import { i18nButton } from '@/assets/png';
import useRovingFocus from '@/hooks/useRovingFocus';
import { useTranslation } from '@/i18n';
import type { UserLanguagePreference } from '@/i18n';
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

const LanguageSelector = () => {
  const { preference, updatePreference, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const shouldRestoreFocusRef = useRef(false);

  const handleSelectByIndex = async (index: number) => {
    const option = LANGUAGE_PREFERENCES[index];
    await updatePreference(option);
    shouldRestoreFocusRef.current = true;
    setIsOpen(false);
  };

  const { getRovingProps, focusItem } = useRovingFocus<HTMLLIElement>({
    count: LANGUAGE_PREFERENCES.length,
    direction: 'vertical',
    shouldResetFocusIndexOnItemChange: false,
    onSelect: handleSelectByIndex,
  });

  useEffect(() => {
    if (!isOpen) {
      if (shouldRestoreFocusRef.current) {
        buttonRef.current?.focus();
        shouldRestoreFocusRef.current = false;
      }
      return;
    }

    const selectedIndex = LANGUAGE_PREFERENCES.indexOf(preference);
    focusItem(selectedIndex === -1 ? 0 : selectedIndex);

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }
      if (!wrapperRef.current?.contains(target)) {
        shouldRestoreFocusRef.current = false;
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        shouldRestoreFocusRef.current = true;
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, preference, focusItem]);

  const handleToggle = () => {
    setIsOpen((prev) => {
      if (prev) {
        shouldRestoreFocusRef.current = true;
      }
      return !prev;
    });
  };

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.Button
        ref={buttonRef}
        type="button"
        aria-label={t('language.label')}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        $isOpen={isOpen}
        onClick={handleToggle}
      >
        <S.ButtonImage src={i18nButton} alt="" />
      </S.Button>
      {isOpen && (
        <S.Menu role="listbox" aria-label={t('language.label')}>
          {LANGUAGE_PREFERENCES.map((option, index) => {
            const isSelected = preference === option;
            return (
              <S.MenuItem
                key={option}
                {...getRovingProps(index)}
                role="option"
                aria-selected={isSelected}
                $isSelected={isSelected}
                onClick={() => handleSelectByIndex(index)}
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
