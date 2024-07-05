import {
  isLegacyTimer,
  isLegacyHiderOptions,
} from '../validators/hiderOptionsValidator';
import { DEFAULT_HIDER_OPTIONS } from '~constants/defaultValues';
import type { HiderOptionsResponse } from '~types/algorithm';

interface HiderOptionsUsage {
  algorithmHiderUsage: 'click' | 'always';
  problemTagLockUsage: 'click' | 'auto';
}

export const convertLegacyToLatestHiderOptions = (
  legacyTimer: unknown,
  legacyHiderOptions: unknown,
): HiderOptionsResponse => {
  const duration = isLegacyTimer(legacyTimer)
    ? { hours: Number(legacyTimer.hour), minutes: Number(legacyTimer.minute) }
    : { hours: 0, minutes: 20 };
  const hiderOptions: HiderOptionsUsage = isLegacyHiderOptions(
    legacyHiderOptions,
  )
    ? {
        algorithmHiderUsage: legacyHiderOptions.predict,
        problemTagLockUsage:
          legacyHiderOptions.lock === 'always' ? 'auto' : 'click',
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
