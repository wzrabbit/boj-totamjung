import {
  isLegacyTimer,
  isLegacySettings,
} from '../validators/hiderOptionsValidator';
import { DEFAULT_HIDER_OPTIONS } from '@/constants/defaultValues';
import type { HiderOptionsResponse } from '@/types/algorithm';

interface HiderOptionsUsage {
  algorithmHiderUsage: 'click' | 'always';
  problemTagLockUsage: 'click' | 'auto';
}

/**
 * 이 컨버터 함수에는 유효하지 않은 구버전 타이머 값, 또는 구버전 설정 값이 주어져도 괜찮습니다.
 */
export const convertLegacyToLatestHiderOptions = (
  legacyTimer: unknown,
  legacySettings: unknown,
): HiderOptionsResponse => {
  const duration = isLegacyTimer(legacyTimer)
    ? { hours: Number(legacyTimer.hour), minutes: Number(legacyTimer.minute) }
    : { hours: 0, minutes: 20 };
  const hiderOptions: HiderOptionsUsage = isLegacySettings(legacySettings)
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
    ...DEFAULT_HIDER_OPTIONS,
    problemTagLockDuration: duration,
    ...hiderOptions,
  };
};
