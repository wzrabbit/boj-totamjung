import { isObject } from '~types/typeGuards';
import { isLegacyFontNo } from '../validators/fontNoValidator';

export const convertLegacyToLatestFontNoBySettings = (
  settings: unknown,
): number => {
  if (!isObject(settings) || !('font' in settings)) {
    return 0;
  }

  const legacyFontNo = settings.font;

  if (!isLegacyFontNo(legacyFontNo)) {
    return 0;
  }

  if (legacyFontNo === 'none') {
    return 0;
  }

  const fontNo = Number(legacyFontNo.split('-')[1]);
  return fontNo;
};
