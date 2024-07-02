import { isObject } from '~types/typeGuards';
import { TotamjungThemeResponse } from '~types/totamjungTheme';

export const isTotamjungThemeResponse = (
  data: unknown,
): data is TotamjungThemeResponse => {
  return (
    isObject(data) &&
    'totamjungTheme' in data &&
    typeof data.totamjungTheme === 'string' &&
    ['none', 'totamjung'].includes(data.totamjungTheme)
  );
};
