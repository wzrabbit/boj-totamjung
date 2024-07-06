import { useState, useEffect } from 'react';
import { COMMANDS } from '~constants/commands';
import {
  isTotamjungTheme,
  isTotamjungThemeResponse,
} from '~domains/dataHandlers/validators/totamjungThemeValidator';
import { isFontNoResponse } from '~domains/dataHandlers/validators/fontNoValidator';
import { TotamjungTheme } from '~types/totamjungTheme';

const UseAppearanceFieldsetMenu = () => {
  const [totamjungTheme, setTotamjungTheme] = useState<
    TotamjungTheme | undefined
  >(undefined);
  const [fontNo, setFontNo] = useState<number | undefined>(undefined);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const loadAppearanceFieldsetMenuData = async () => {
      const [totamjungThemeResponse, fontNoResponse] = await Promise.all([
        chrome.runtime.sendMessage({
          command: COMMANDS.FETCH_TOTAMJUNG_THEME,
        }),
        chrome.runtime.sendMessage({
          command: COMMANDS.FETCH_FONT_NO,
        }),
      ]);
      if (!isTotamjungThemeResponse(totamjungThemeResponse)) {
        return;
      }

      if (!isFontNoResponse(fontNoResponse)) {
        return;
      }

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

    chrome.runtime.sendMessage({
      command: COMMANDS.SAVE_TOTAMJUNG_THEME,
      totamjungTheme,
    });
  }, [totamjungTheme]);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    chrome.runtime.sendMessage({
      command: COMMANDS.SAVE_FONT_NO,
      fontNo,
    });
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
