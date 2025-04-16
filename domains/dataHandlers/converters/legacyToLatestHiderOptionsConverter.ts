import { isV1Timer, isV1Settings } from '../validators/hiderOptionsValidator';
import { DEFAULT_V2_HIDER_OPTIONS } from '@/constants/defaultValues';
import type { HiderOptions } from '@/types/algorithm';
import type { V2 } from '@/types/legacyData';

interface HiderOptionsUsage {
  algorithmHiderUsage: 'click' | 'always';
  problemTagLockUsage: 'click' | 'auto';
}

/**
 * 이 컨버터 함수에는 유효하지 않은 구버전 타이머 값, 또는 구버전 설정 값이 주어져도 괜찮습니다.
 */
export const convertV1ToV2HiderOptions = (
  legacyTimer: unknown,
  legacySettings: unknown,
): V2.HiderOptions => {
  const duration = isV1Timer(legacyTimer)
    ? { hours: Number(legacyTimer.hour), minutes: Number(legacyTimer.minute) }
    : { hours: 0, minutes: 20 };
  const hiderOptions: HiderOptionsUsage = isV1Settings(legacySettings)
    ? {
        algorithmHiderUsage: legacySettings.predict,
        problemTagLockUsage:
          legacySettings.lock === 'always' ? 'auto' : 'click',
      }
    : {
        algorithmHiderUsage: 'click',
        problemTagLockUsage: 'click',
      };

  return {
    ...DEFAULT_V2_HIDER_OPTIONS,
    problemTagLockDuration: duration,
    ...hiderOptions,
  };
};

export const convertV2ToLatestHiderOptions = (
  legacyHiderOptions: V2.HiderOptions,
): HiderOptions => {
  return {
    ...legacyHiderOptions,
    shouldRevealTierOnHover: false,
  };
};
