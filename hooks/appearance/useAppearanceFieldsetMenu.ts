import { isTotamjungTheme } from '@/domains/dataHandlers/validators/totamjungThemeValidator';
import { isFontNo } from '@/domains/dataHandlers/validators/fontNoValidator';
import type { TotamjungTheme } from '@/types/mainTheme';
import type { FontNo } from '@/types/font';
import { STORAGE_KEY } from '@/constants/commands';
import {
  fetchTotamjungTheme,
  saveTotamjungTheme,
} from '@/domains/dataHandlers/totamjungThemeDataHandler';
import {
  fetchFontNo,
  saveFontNo,
} from '@/domains/dataHandlers/fontNoDataHandler';
import useStorageState from '@/hooks/useStorageState';

const useAppearanceFieldsetMenu = () => {
  const {
    data: totamjungTheme,
    setData: setTotamjungTheme,
    isLoaded: isThemeLoaded,
  } = useStorageState<TotamjungTheme>({
    type: 'function',
    storageKey: STORAGE_KEY.THEME,
    defaultValue: 'none',
    fetchFunction: fetchTotamjungTheme,
    saveFunction: saveTotamjungTheme,
    validatorFunction: isTotamjungTheme,
  });

  const {
    data: fontNo,
    setData: setFontNo,
    isLoaded: isFontNoLoaded,
  } = useStorageState<FontNo>({
    type: 'function',
    storageKey: STORAGE_KEY.FONT_NO,
    defaultValue: 0,
    fetchFunction: fetchFontNo,
    saveFunction: saveFontNo,
    validatorFunction: isFontNo,
  });

  const isLoaded = isThemeLoaded && isFontNoLoaded;

  const updateTotamjungTheme = (totamjungTheme: string) => {
    if (!isLoaded) {
      return;
    }

    if (!isTotamjungTheme(totamjungTheme)) {
      return;
    }

    setTotamjungTheme(totamjungTheme);
  };

  const updateFontNo = (fontNo: string) => {
    const numericFontNo = Number(fontNo);

    if (!isLoaded || isNaN(numericFontNo)) {
      return;
    }

    setFontNo(numericFontNo);
  };

  return {
    totamjungTheme,
    fontNo,
    isLoaded,
    updateTotamjungTheme,
    updateFontNo,
  };
};

export default useAppearanceFieldsetMenu;
