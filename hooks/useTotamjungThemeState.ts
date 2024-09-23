import { useState, useEffect } from 'react';
import { COMMANDS } from '@/constants/commands';
import { isTotamjungTheme } from '@/domains/dataHandlers/validators/totamjungThemeValidator';
import type { TotamjungTheme } from '@/types/totamjungTheme';

const useTotamjungThemeState = () => {
  const [totamjungTheme, setTotamjungTheme] = useState<TotamjungTheme>('none');
  const [isLoaded, setIsLoaded] = useState(false);

  const updateTotamjungThemeIfLocalChanged = (
    changes: { [key: string]: browser.storage.StorageChange },
    areaName: browser.storage.AreaName,
  ) => {
    if (areaName !== 'local' || !('totamjungTheme' in changes)) {
      return;
    }

    const { newValue } = changes.totamjungTheme;

    if (!isTotamjungTheme(newValue)) {
      return;
    }

    const html = document.documentElement;
    html.setAttribute('totamjungTheme', newValue);

    setTotamjungTheme(newValue);
  };

  const updateTotamjungTheme = (totamjungTheme: TotamjungTheme) => {
    if (!isTotamjungTheme(totamjungTheme)) {
      return;
    }

    browser.runtime.sendMessage({
      command: COMMANDS.SAVE_TOTAMJUNG_THEME,
      totamjungTheme,
    });
  };

  useEffect(() => {
    const fetchTotamjungTheme = async () => {
      const { totamjungTheme } = await browser.runtime.sendMessage({
        command: COMMANDS.FETCH_TOTAMJUNG_THEME,
      });

      if (!isTotamjungTheme(totamjungTheme)) {
        return;
      }

      setTotamjungTheme(totamjungTheme);
      setIsLoaded(true);
    };

    fetchTotamjungTheme();
    browser.storage.onChanged.addListener(updateTotamjungThemeIfLocalChanged);

    return () => {
      browser.storage.onChanged.removeListener(
        updateTotamjungThemeIfLocalChanged,
      );
    };
  }, []);

  return { totamjungTheme, isLoaded, updateTotamjungTheme };
};

export default useTotamjungThemeState;
