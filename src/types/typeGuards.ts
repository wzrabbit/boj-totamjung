import type {
  RandomDefenseHistoryInfo,
  LegacyRandomDefenseHistoryInfo,
  RandomDefenseHistoryResponse,
} from '~types/randomDefense';
import { solvedAcNumericTierIcons } from '~images/svg/tier';
import type { IsoString } from '~types/utils';
import type { Tier, TierWithoutNotRatable } from '~types/randomDefense';

export const isObject = (data: unknown): data is object => {
  return typeof data === 'object' && data !== null;
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
