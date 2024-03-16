import type {
  LocalRandomDefenseHistoryInfo,
  RandomDefenseHistoryResponse,
} from '~types/randomDefense';
import { solvedAcNumericTierIcons } from '~images/svg/tier';

const isObject = (data: unknown): data is object => {
  return typeof data === 'object' && data !== null;
};

const isLocalRandomDefenseHistoryInfo = (
  data: unknown,
): data is LocalRandomDefenseHistoryInfo => {
  return (
    isObject(data) &&
    'problemId' in data &&
    'title' in data &&
    'tier' in data &&
    'createdAt' in data &&
    typeof data.problemId === 'number' &&
    typeof data.title === 'string' &&
    typeof data.tier === 'number' &&
    typeof data.createdAt === 'number' &&
    data.tier in solvedAcNumericTierIcons
  );
};

export const isLocalRandomDefenseHistoryInfos = (
  data: unknown,
): data is LocalRandomDefenseHistoryInfo[] => {
  return (
    Array.isArray(data) &&
    data.every((item) => isLocalRandomDefenseHistoryInfo(item))
  );
};

export const isRandomDefenseHistoryResponse = (
  data: unknown,
): data is RandomDefenseHistoryResponse => {
  return (
    isObject(data) &&
    'randomDefenseHistory' in data &&
    'isHidden' in data &&
    isLocalRandomDefenseHistoryInfos(data.randomDefenseHistory) &&
    typeof data.isHidden === 'boolean'
  );
};
