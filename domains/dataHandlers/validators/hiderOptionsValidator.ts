import { isObject, isRatedTier } from '@/types/typeGuards';
import type { HiderOptions } from '@/types/algorithm';
import type { V1, V2 } from '@/types/legacyData';
import {
  isNumericString,
  isNumericStringAllowsLeadingZeroes,
} from '@/utils/numericStringChecker';

export const isV2HiderOptions = (data: unknown): data is V2.HiderOptions => {
  if (
    !(
      isObject(data) &&
      'problemTagLockDuration' in data &&
      'shouldHideTier' in data &&
      'shouldWarnHighTier' in data &&
      'warnTier' in data &&
      'algorithmHiderUsage' in data &&
      'problemTagLockUsage' in data &&
      isObject(data.problemTagLockDuration) &&
      'hours' in data.problemTagLockDuration &&
      'minutes' in data.problemTagLockDuration &&
      typeof data.problemTagLockDuration.hours === 'number' &&
      typeof data.problemTagLockDuration.minutes === 'number' &&
      typeof data.shouldHideTier === 'boolean' &&
      typeof data.shouldWarnHighTier === 'boolean' &&
      isRatedTier(data.warnTier) &&
      typeof data.algorithmHiderUsage === 'string' &&
      ['click', 'always'].includes(data.algorithmHiderUsage) &&
      typeof data.problemTagLockUsage === 'string' &&
      ['click', 'auto'].includes(data.problemTagLockUsage)
    )
  ) {
    return false;
  }

  const { hours, minutes } = data.problemTagLockDuration;

  return (
    hours >= 0 &&
    hours < 100 &&
    minutes >= 0 &&
    minutes < 60 &&
    hours % 1 === 0 &&
    minutes % 1 === 0
  );
};

export const isHiderOptions = (data: unknown): data is HiderOptions => {
  return (
    isV2HiderOptions(data) &&
    'shouldRevealTierOnHover' in data &&
    typeof data.shouldRevealTierOnHover === 'boolean'
  );
};

export const isV1Timer = (data: unknown): data is V1.Timer => {
  return (
    isObject(data) &&
    'expire' in data &&
    'hour' in data &&
    'minute' in data &&
    'problem' in data &&
    typeof data.expire === 'number' &&
    typeof data.hour === 'string' &&
    typeof data.minute === 'string' &&
    typeof data.problem === 'number' &&
    data.hour.length >= 1 &&
    data.hour.length <= 2 &&
    isNumericStringAllowsLeadingZeroes(data.hour) &&
    data.minute.length >= 1 &&
    data.minute.length <= 2 &&
    isNumericStringAllowsLeadingZeroes(data.minute) &&
    ((data.problem >= 1_000 && data.problem % 1 === 0) || data.problem === -1)
  );
};

export const isV1Settings = (data: unknown): data is V1.Settings => {
  if (
    !(
      isObject(data) &&
      'font' in data &&
      'lock' in data &&
      'predict' in data &&
      'theme' in data &&
      typeof data.font === 'string' &&
      typeof data.lock === 'string' &&
      typeof data.predict === 'string' &&
      typeof data.theme === 'string' &&
      typeof data.lock === 'string' &&
      ['click', 'always'].includes(data.lock) &&
      typeof data.predict === 'string' &&
      ['click', 'always'].includes(data.predict) &&
      typeof data.theme === 'string' &&
      ['yes', 'no'].includes(data.theme)
    )
  ) {
    return false;
  }

  if (data.font === 'none') {
    return true;
  }

  if (!/^font-\d+$/.test(data.font)) {
    return false;
  }

  const fontNoString = data.font.split('-')[1];

  if (!isNumericString(fontNoString)) {
    return false;
  }

  const fontNo = Number(fontNoString);

  return fontNo >= 1 && fontNo <= 19;
};
