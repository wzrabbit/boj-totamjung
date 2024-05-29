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
import { solvedAcNumericTierIcons } from '~images/svg/tier';
import type { IsoString } from '~types/utils';
import type { Tier, TierWithoutNotRatable } from '~types/randomDefense';

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
