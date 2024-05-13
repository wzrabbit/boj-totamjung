import type {
  RandomDefenseHistoryInfo,
  LegacyRandomDefenseHistoryInfo,
  RandomDefenseHistoryResponse,
  Slot,
  QuickSlotsResponse,
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

const isSlot = (data: unknown): data is Slot => {
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
    'slotName' in data &&
    'query' in data &&
    typeof data.slotName === 'string' &&
    typeof data.query === 'string'
  );
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
      typeof data.selectedSlotNo === 'number' &&
      data.selectedSlotNo % 1 === 0 &&
      data.selectedSlotNo >= 0 &&
      data.selectedSlotNo <= 9
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
