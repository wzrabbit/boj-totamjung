import type {
  RandomDefenseHistoryInfo,
  LegacyRandomDefenseHistoryInfo,
  RandomDefenseHistoryResponse,
  Hotkey,
  Slot,
  QuickSlotsResponse,
  LegacyQuickSlotsResponse,
  RandomDefenseFormData,
  RepairableQuickSlotsResponse,
  RepairableLegacyQuickSlotsResponse,
  SlotNo,
} from '~types/randomDefense';
import type { TotamjungThemeResponse } from '~types/totamjungTheme';
import { solvedAcNumericTierIcons } from '~images/svg/tier';
import type { IsoString } from '~types/utils';
import type { Tier, TierWithoutNotRatable } from '~types/randomDefense';
import type {
  HiderOptionsResponse,
  LegacyTimer,
  LegacyHiderOptions,
} from '~types/algorithm';
import type { RatedTier } from '~types/tierHider';
import {
  isNumericString,
  isNumericStringAllowsLeadingZeroes,
} from '~utils/numericStringChecker';

export const isObject = (data: unknown): data is object => {
  return typeof data === 'object' && data !== null;
};

export const isNumericObject = (
  data: unknown,
): data is Record<number, unknown> => {
  return (
    isObject(data) && Object.keys(data).every((key) => !isNaN(Number(key)))
  );
};

export const isNumericArray = (data: unknown): data is number[] => {
  return (
    Array.isArray(data) && data.every((value) => typeof value === 'number')
  );
};

export const isIsoString = (data: unknown): data is IsoString => {
  return (
    typeof data === 'string' &&
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(data)
  );
};

export const isRandomDefenseHistoryInfo = (
  data: unknown,
): data is RandomDefenseHistoryInfo => {
  return (
    isObject(data) &&
    'problemId' in data &&
    'title' in data &&
    'tier' in data &&
    'createdAt' in data &&
    typeof data.problemId === 'number' &&
    typeof data.title === 'string' &&
    typeof data.tier === 'number' &&
    data.tier in solvedAcNumericTierIcons &&
    isIsoString(data.createdAt)
  );
};

export const isLegacyRandomDefenseHistoryInfo = (
  data: unknown,
): data is LegacyRandomDefenseHistoryInfo => {
  return (
    isObject(data) &&
    'no' in data &&
    'title' in data &&
    'tier' in data &&
    'date' in data &&
    typeof data.no === 'number' &&
    typeof data.title === 'string' &&
    typeof data.tier === 'number' &&
    typeof data.date === 'string' &&
    data.tier in solvedAcNumericTierIcons
  );
};

export const isRandomDefenseHistoryInfos = (
  data: unknown,
): data is RandomDefenseHistoryInfo[] => {
  return (
    Array.isArray(data) &&
    data.every((item) => isRandomDefenseHistoryInfo(item))
  );
};

export const isRandomDefenseHistoryResponse = (
  data: unknown,
): data is RandomDefenseHistoryResponse => {
  return (
    isObject(data) &&
    'randomDefenseHistory' in data &&
    'isHidden' in data &&
    isRandomDefenseHistoryInfos(data.randomDefenseHistory) &&
    typeof data.isHidden === 'boolean'
  );
};

export const isTier = (data: unknown): data is Tier => {
  return typeof data === 'number' && data % 1 === 0 && data >= 0 && data <= 31;
};

export const isTierWithoutNotRatable = (
  data: unknown,
): data is TierWithoutNotRatable => {
  return isTier(data) && data !== 31;
};

export const isHotkey = (data: unknown): data is Hotkey => {
  return data === 'Alt' || data === 'F2';
};

export const isSlot = (data: unknown): data is Slot => {
  if (
    !isObject(data) ||
    !('isEmpty' in data) ||
    typeof data.isEmpty !== 'boolean'
  ) {
    return false;
  }

  if (data.isEmpty) {
    return true;
  }

  return (
    'title' in data &&
    'query' in data &&
    typeof data.title === 'string' &&
    typeof data.query === 'string'
  );
};

export const isSlotNo = (data: unknown): data is SlotNo => {
  if (typeof data !== 'number') {
    return false;
  }

  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(data);
};

export const isQuickSlotsResponse = (
  data: unknown,
): data is QuickSlotsResponse => {
  if (
    !(
      isObject(data) &&
      'hotkey' in data &&
      'selectedSlotNo' in data &&
      'slots' in data &&
      typeof data.hotkey === 'string' &&
      ['Alt', 'F2'].includes(data.hotkey) &&
      isSlotNo(data.selectedSlotNo)
    )
  ) {
    return false;
  }

  const { slots } = data;

  if (!isNumericObject(slots)) {
    return false;
  }

  return Array.from({ length: 10 }).every(
    (_, key) => key in slots && isSlot(slots[key]),
  );
};

export const isRandomDefenseFormData = (
  data: unknown,
): data is RandomDefenseFormData => {
  return (
    isObject(data) &&
    'mode' in data &&
    'title' in data &&
    'handle' in data &&
    'solvedMin' in data &&
    'solvedMax' in data &&
    'startTier' in data &&
    'endTier' in data &&
    'searchOperator' in data &&
    'algorithmIds' in data &&
    'customQuery' in data &&
    typeof data.mode === 'string' &&
    ['easy', 'manual'].includes(data.mode) &&
    typeof data.title === 'string' &&
    typeof data.handle === 'string' &&
    typeof data.solvedMin === 'string' &&
    typeof data.solvedMax === 'string' &&
    isNumericArray(data.algorithmIds) &&
    isTierWithoutNotRatable(data.startTier) &&
    isTierWithoutNotRatable(data.endTier) &&
    typeof data.searchOperator === 'string' &&
    ['OR', 'AND', 'NOR'].includes(data.searchOperator) &&
    typeof data.customQuery === 'string'
  );
};

export const isLegacyQuickSlotsResponse = (
  data: unknown,
): data is LegacyQuickSlotsResponse => {
  if (
    !(
      isObject(data) &&
      'selectedNo' in data &&
      typeof data.selectedNo === 'number'
    )
  ) {
    return false;
  }

  const { selectedNo, ...slots } = data;

  if (!(selectedNo % 1 === 0 && selectedNo >= 0 && selectedNo <= 9)) {
    return false;
  }

  if (!isNumericObject(slots)) {
    return false;
  }

  return Array.from({ length: 10 }).every(
    (_, key) => key in slots && isSlot(slots[key]),
  );
};

export const isRepairableLegacyQuickSlotsResponse = (
  data: unknown,
): data is RepairableLegacyQuickSlotsResponse => {
  return (
    isObject(data) && Array.from({ length: 10 }).every((_, key) => key in data)
  );
};

export const isRepairableQuickSlotsResponse = (
  data: unknown,
): data is RepairableQuickSlotsResponse => {
  if (!isObject(data) || !('slots' in data)) {
    return false;
  }

  const { slots } = data;

  return (
    isObject(slots) &&
    Array.from({ length: 10 }).every((_, key) => key in slots)
  );
};

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

export const isRatedTier = (data: unknown): data is RatedTier => {
  return isTier(data) && data !== 0 && data !== 31;
};

export const isHiderOptionsResponse = (
  data: unknown,
): data is HiderOptionsResponse => {
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

export const isLegacyTimer = (data: unknown): data is LegacyTimer => {
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
    isNumericStringAllowsLeadingZeroes(data.minute)
  );
};

export const isLegacyHiderSettings = (
  data: unknown,
): data is LegacyHiderOptions => {
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
