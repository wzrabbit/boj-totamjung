import { solvedAcNumericTierIcons } from '@/assets/svg/tier';
import type {
  RandomDefenseHistoryInfo,
  RandomDefenseHistoryResponse,
} from '@/types/randomDefense';
import type { V1 } from '@/types/legacyData';
import { isIsoString, isObject } from '@/types/typeGuards';

export const isV1RandomDefenseHistoryInfo = (
  data: unknown,
): data is V1.RandomDefenseHistoryInfo => {
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
