import {
  MAX_HISTORY_LIMIT,
  MAX_PROBLEM_ID,
  MAX_PROBLEM_NAME_LENGTH,
  MAX_TIER_INCLUDING_NOT_RATABLE,
  MIN_PROBLEM_ID,
  MIN_TIER,
  MAX_TIER,
} from '@/constants/randomDefense';
import {
  isRandomDefenseHistoryInfo,
  isV1RandomDefenseHistoryInfo,
} from '@/domains/dataHandlers/validators/randomDefenseHistoryValidator';
import { RandomDefenseHistoryInfo } from '@/types/randomDefense';
import { isValidIsoString } from '@/utils/isValidIsoString';
import { isValidDate } from '@/utils/isValidDate';
import { DEFAULT_RANDOM_DEFENSE_HISTORY } from '@/constants/defaultValues';
import type { V1 } from '@/types/legacyData';

const isValidRandomDefenseHistoryInfo = (item: unknown) => {
  return (
    isRandomDefenseHistoryInfo(item) &&
    item.problemId % 1 === 0 &&
    item.problemId >= MIN_PROBLEM_ID &&
    item.problemId <= MAX_PROBLEM_ID &&
    item.title.length <= MAX_PROBLEM_NAME_LENGTH &&
    isValidIsoString(item.createdAt) &&
    item.tier % 1 === 0 &&
    item.tier >= MIN_TIER &&
    item.tier <= MAX_TIER_INCLUDING_NOT_RATABLE
  );
};

const isValidV1RandomDefenseHistoryInfo = (item: unknown) => {
  return (
    isV1RandomDefenseHistoryInfo(item) &&
    item.no % 1 === 0 &&
    item.no >= MIN_PROBLEM_ID &&
    item.no <= MAX_PROBLEM_ID &&
    item.title.length <= MAX_PROBLEM_NAME_LENGTH &&
    isValidDate(item.date) &&
    item.tier % 1 === 0 &&
    item.tier >= MIN_TIER &&
    item.tier <= MAX_TIER
  );
};

const getSortedRandomDefenseHistory = (
  randomDefenseHistory: RandomDefenseHistoryInfo[],
) => {
  return [...randomDefenseHistory].sort((a, b) =>
    a.createdAt > b.createdAt ? -1 : 1,
  );
};

export const sanitizeRandomDefenseHistory = (
  randomDefenseHistory: unknown,
): RandomDefenseHistoryInfo[] => {
  if (!Array.isArray(randomDefenseHistory)) {
    return DEFAULT_RANDOM_DEFENSE_HISTORY;
  }

  const sanitizedRandomDefenseHistory: RandomDefenseHistoryInfo[] = [];

  randomDefenseHistory.forEach((item) => {
    if (
      isRandomDefenseHistoryInfo(item) &&
      isValidRandomDefenseHistoryInfo(item)
    ) {
      sanitizedRandomDefenseHistory.push(item);
    }
  });

  return getSortedRandomDefenseHistory(sanitizedRandomDefenseHistory).slice(
    0,
    MAX_HISTORY_LIMIT,
  );
};

export const sanitizeV1RandomDefenseHistory = (
  legacyRandomDefenseHistory: unknown,
): V1.RandomDefenseHistoryInfo[] => {
  if (!Array.isArray(legacyRandomDefenseHistory)) {
    return DEFAULT_RANDOM_DEFENSE_HISTORY;
  }

  const sanitizedLegacyRandomDefenseHistory: V1.RandomDefenseHistoryInfo[] = [];

  legacyRandomDefenseHistory.forEach((item) => {
    if (
      isV1RandomDefenseHistoryInfo(item) &&
      isValidV1RandomDefenseHistoryInfo(item)
    ) {
      sanitizedLegacyRandomDefenseHistory.push(item);
    }
  });

  return sanitizedLegacyRandomDefenseHistory.slice(0, MAX_HISTORY_LIMIT);
};
