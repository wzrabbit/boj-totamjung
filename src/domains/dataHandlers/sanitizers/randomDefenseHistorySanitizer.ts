import {
  MAX_HISTORY_LIMIT,
  MAX_PROBLEM_ID,
  MAX_PROBLEM_NAME_LENGTH,
  MAX_TIER,
  MIN_PROBLEM_ID,
  MIN_TIER,
} from '~constants/randomDefense';
import {
  isLegacyRandomDefenseHistoryInfo,
  isRandomDefenseHistoryInfo,
} from '~domains/dataHandlers/validators/randomDefenseHistoryValidator';
import {
  LegacyRandomDefenseHistoryInfo,
  RandomDefenseHistoryInfo,
} from '~types/randomDefense';
import { isValidIsoString } from '~utils/isValidIsoString';
import { isValidDate } from '~utils/isValidDate';
import { DEFAULT_RANDOM_DEFENSE_HISTORY } from '~constants/defaultValues';

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
    item.tier <= MAX_TIER
  );
};

const isValidLegacyRandomDefenseHistoryInfo = (item: unknown) => {
  return (
    isLegacyRandomDefenseHistoryInfo(item) &&
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

  return sanitizedRandomDefenseHistory.slice(0, MAX_HISTORY_LIMIT);
};

export const sanitizeLegacyRandomDefenseHistory = (
  legacyRandomDefenseHistory: unknown,
): LegacyRandomDefenseHistoryInfo[] => {
  if (!Array.isArray(legacyRandomDefenseHistory)) {
    return DEFAULT_RANDOM_DEFENSE_HISTORY;
  }

  const sanitizedLegacyRandomDefenseHistory: LegacyRandomDefenseHistoryInfo[] =
    [];

  legacyRandomDefenseHistory.forEach((item) => {
    if (
      isLegacyRandomDefenseHistoryInfo(item) &&
      isValidLegacyRandomDefenseHistoryInfo(item)
    ) {
      sanitizedLegacyRandomDefenseHistory.push(item);
    }
  });

  return sanitizedLegacyRandomDefenseHistory.slice(0, MAX_HISTORY_LIMIT);
};
