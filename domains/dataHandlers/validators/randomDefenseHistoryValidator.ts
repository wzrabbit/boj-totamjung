import { solvedAcNumericTierIcons } from '@/assets/svg/tier';
import type {
  RandomDefenseHistoryItem,
  RandomDefenseHistoryOptions,
} from '@/types/randomDefense';
import type { V1 } from '@/types/legacyData';
import { isIsoString, isObject } from '@/types/typeGuards';

export const isV1RandomDefenseHistoryItem = (
  data: unknown,
): data is V1.RandomDefenseHistoryItem => {
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

export const isRandomDefenseHistoryItem = (
  data: unknown,
): data is RandomDefenseHistoryItem => {
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

export const isRandomDefenseHistoryItems = (
  data: unknown,
): data is RandomDefenseHistoryItem[] => {
  return (
    Array.isArray(data) &&
    data.every((item) => isRandomDefenseHistoryItem(item))
  );
};

export const isRandomDefenseHistoryOptions = (
  data: unknown,
): data is RandomDefenseHistoryOptions => {
  return (
    isObject(data) &&
    'randomDefenseHistory' in data &&
    'isHidden' in data &&
    isRandomDefenseHistoryItems(data.randomDefenseHistory) &&
    typeof data.isHidden === 'boolean'
  );
};
