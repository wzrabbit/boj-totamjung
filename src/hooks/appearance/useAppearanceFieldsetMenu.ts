import { useState, useEffect } from 'react';
import { COMMANDS } from '~constants/commands';
import { isTotamjungThemeResponse, isFontNoResponse } from '~types/typeGuards';
import { TotamjungTheme } from '~types/totamjungTheme';

const UseAppearanceFieldsetMenu = () => {
  const [totamjungTheme, setTotamjungTheme] = useState<
    TotamjungTheme | undefined
  >(undefined);
  const [fontNo, setFontNo] = useState<number | undefined>(undefined);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const loadAppearanceFieldsetMenuData = () => {
      const totamjungThemeResponse = chrome.runtime.sendMessage({
        command: COMMANDS.FETCH_TOTAMJUNG_THEME,
      });
      const fontNoResponse = chrome.runtime.sendMessage({
        command: COMMANDS.FETCH_FONT_NO,
      });

      Promise.all([totamjungThemeResponse, fontNoResponse]).then(
        ([loadedTotamjungThemeResponse, loadedFontNoResponse]) => {
          console.log(
            'sent',
            loadedTotamjungThemeResponse,
            loadedFontNoResponse,
          );
          if (!isTotamjungThemeResponse(loadedTotamjungThemeResponse)) {
            return;
          }

          if (!isFontNoResponse(loadedFontNoResponse)) {
            return;
          }

          const { totamjungTheme: currentTheme } = loadedTotamjungThemeResponse;
          const { fontNo: currentFontNo } = loadedFontNoResponse;

          setTotamjungTheme(currentTheme);
          setFontNo(currentFontNo);
          setIsLoaded(true);
        },
      );
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

    if (totamjungTheme !== 'none' && totamjungTheme !== 'totamjung') {
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
