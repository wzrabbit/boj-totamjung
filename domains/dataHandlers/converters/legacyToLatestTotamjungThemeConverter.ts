import type { TotamjungTheme } from '@/types/totamjungTheme';
import { isObject } from '@/types/typeGuards';

/**
 * 이 컨버터 함수에는 유효하지 않은 구버전 설정 값이 주어져도 괜찮습니다.
 */
export const convertV1ToLatestTotamjungThemeBySettings = (
  legacySettings: unknown,
): TotamjungTheme => {
  if (!isObject(legacySettings) || !('theme' in legacySettings)) {
    return 'none';
  }

  const { theme } = legacySettings;

  return theme === 'yes' ? 'totamjung' : 'none';
};
