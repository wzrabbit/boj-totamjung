import { isObject } from '@/types/typeGuards';
import { TotamjungTheme, TotamjungThemeResponse } from '@/types/totamjungTheme';

export const isTotamjungThemeResponse = (
  data: unknown,
): data is TotamjungThemeResponse => {
  return (
    isObject(data) &&
    'totamjungTheme' in data &&
    isTotamjungTheme(data.totamjungTheme)
  );
};

export const isTotamjungTheme = (data: unknown): data is TotamjungTheme => {
  return data === 'none' || data === 'totamjung';
};
