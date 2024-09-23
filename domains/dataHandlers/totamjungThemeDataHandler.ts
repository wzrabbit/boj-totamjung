import { STORAGE_KEY } from '@/constants/commands';
import { isTotamjungThemeResponse } from '@/domains/dataHandlers/validators/totamjungThemeValidator';
import { sanitizeTotamjungTheme } from './sanitizers/totamjungThemeSanitizer';
import type { TotamjungThemeResponse } from '@/types/totamjungTheme';

export const fetchTotamjungTheme =
  async (): Promise<TotamjungThemeResponse> => {
    const data = await browser.storage.local.get(STORAGE_KEY.TOTAMJUNG_THEME);
    const totamjungTheme = data[STORAGE_KEY.TOTAMJUNG_THEME];

    const sanitizedTotamjungTheme = sanitizeTotamjungTheme(totamjungTheme);

    return {
      [STORAGE_KEY.TOTAMJUNG_THEME]: sanitizedTotamjungTheme,
    };
  };

export const saveTotamjungTheme = (totamjungTheme: unknown) => {
  if (!isTotamjungThemeResponse({ totamjungTheme })) {
    return;
  }

  browser.storage.local.set({
    [STORAGE_KEY.TOTAMJUNG_THEME]: totamjungTheme,
  });
};
