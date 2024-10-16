import { isObject } from '@/types/typeGuards';
import { isLegacyFontNo } from '../validators/fontNoValidator';

/**
 * 이 컨버터 함수에는 유효하지 않은 구버전 설정 값이 주어져도 괜찮습니다.
 */
export const convertLegacyToLatestFontNoBySettings = (
  legacySettings: unknown,
): number => {
  if (!isObject(legacySettings) || !('font' in legacySettings)) {
    return 0;
  }

  const legacyFontNo = legacySettings.font;

  if (!isLegacyFontNo(legacyFontNo)) {
    return 0;
  }

  if (legacyFontNo === 'none') {
    return 0;
  }

  const fontNo = Number(legacyFontNo.split('-')[1]);
  return fontNo;
};
