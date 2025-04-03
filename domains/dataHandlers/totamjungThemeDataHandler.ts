import { STORAGE_KEY } from '@/constants/commands';
import { isTotamjungTheme } from '@/domains/dataHandlers/validators/totamjungThemeValidator';
import { sanitizeTotamjungTheme } from './sanitizers/totamjungThemeSanitizer';
import type { TotamjungTheme } from '@/types/totamjungTheme';

export const fetchTotamjungTheme = async (): Promise<TotamjungTheme> => {
  const data = await browser.storage.local.get(STORAGE_KEY.TOTAMJUNG_THEME);
  const totamjungTheme = data[STORAGE_KEY.TOTAMJUNG_THEME];

  return sanitizeTotamjungTheme(totamjungTheme);
};

export const saveTotamjungTheme = (totamjungTheme: unknown) => {
  if (!isTotamjungTheme(totamjungTheme)) {
    return;
  }

  browser.storage.local.set({
    [STORAGE_KEY.TOTAMJUNG_THEME]: totamjungTheme,
  });
};
