import { useState, useEffect } from 'react';
import { isTotamjungTheme } from '@/domains/dataHandlers/validators/totamjungThemeValidator';
import { TotamjungTheme } from '@/types/totamjungTheme';
import {
  fetchTotamjungTheme,
  saveTotamjungTheme,
} from '@/domains/dataHandlers/totamjungThemeDataHandler';
import {
  fetchFontNo,
  saveFontNo,
} from '@/domains/dataHandlers/fontNoDataHandler';

const UseAppearanceFieldsetMenu = () => {
  const [totamjungTheme, setTotamjungTheme] = useState<
    TotamjungTheme | undefined
  >(undefined);
  const [fontNo, setFontNo] = useState<number | undefined>(undefined);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const loadAppearanceFieldsetMenuData = async () => {
      const [totamjungThemeResponse, fontNoResponse] = await Promise.all([
        fetchTotamjungTheme(),
        fetchFontNo(),
      ]);

      const { totamjungTheme: currentTheme } = totamjungThemeResponse;
      const { fontNo: currentFontNo } = fontNoResponse;

      setTotamjungTheme(currentTheme);
      setFontNo(currentFontNo);
      setIsLoaded(true);
    };

    loadAppearanceFieldsetMenuData();
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    saveTotamjungTheme(totamjungTheme);
  }, [totamjungTheme]);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    saveFontNo(fontNo);
  }, [fontNo]);

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

export default UseAppearanceFieldsetMenu;
