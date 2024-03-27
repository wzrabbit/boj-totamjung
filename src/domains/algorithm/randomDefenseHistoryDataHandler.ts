import {
  LEGACY_LOCAL_STORAGE_KEY,
  LOCAL_STORAGE_KEY,
} from '~constants/commands';
import { isRandomDefenseHistoryInfo } from '~types/typeGuards';
import {
  MIN_PROBLEM_ID,
  MAX_PROBLEM_ID,
  MAX_PROBLEM_NAME_LENGTH,
  MIN_TIER,
  MAX_TIER,
  MAX_HISTORY_LIMIT,
} from '~constants/randomDefense';
import { isValidIsoString } from '~utils/isValidIsoString';
import type { RandomDefenseHistoryInfo } from '~types/randomDefense';

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

const sanitizeRandomDefenseHistory = (
  randomDefenseHistory: unknown[],
): RandomDefenseHistoryInfo[] => {
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

const getSortedRandomDefenseHistory = (
  randomDefenseHistory: RandomDefenseHistoryInfo[],
) => {
  return [...randomDefenseHistory].sort((a, b) =>
    a.createdAt > b.createdAt ? -1 : 1,
  );
};

export const fetchRandomDefenseHistory = async () => {
  return new Promise((resolve) => {
    chrome.storage.local.get(
      [
        LOCAL_STORAGE_KEY.RANDOM_DEFENSE_HISTORY,
        LOCAL_STORAGE_KEY.IS_TIER_HIDDEN,
        LEGACY_LOCAL_STORAGE_KEY.RANDOM_DEFENSE_HISTORY,
      ],
      (data: Record<string, unknown>) => {
        const rawRandomDefenseHistory = Array.isArray(data.randomDefenseHistory)
          ? data.randomDefenseHistory
          : Array.isArray(data.queryLog)
            ? data.queryLog
            : [];

        const isRandomDefenseHistoryHidden = data.isTierHidden ?? false;

        const sanitizedRandomDefenseHistory = sanitizeRandomDefenseHistory(
          rawRandomDefenseHistory,
        );
        const sortedRandomDefenseHistory = getSortedRandomDefenseHistory(
          sanitizedRandomDefenseHistory,
        );

        resolve({
          randomDefenseHistory: sortedRandomDefenseHistory,
          isHidden: isRandomDefenseHistoryHidden,
        });
      },
    );
  });
};

export const saveRandomDefenseHistory = (
  randomDefenseHistory: unknown,
  isHidden: unknown,
) => {
  if (!Array.isArray(randomDefenseHistory) || typeof isHidden !== 'boolean') {
    return;
  }

  const sanitizedRandomDefenseHistory =
    sanitizeRandomDefenseHistory(randomDefenseHistory);
  const sortedRandomDefenseHistory = getSortedRandomDefenseHistory(
    sanitizedRandomDefenseHistory,
  );

  chrome.storage.local.set({
    [LOCAL_STORAGE_KEY.RANDOM_DEFENSE_HISTORY]: sortedRandomDefenseHistory,
    [LOCAL_STORAGE_KEY.IS_TIER_HIDDEN]: isHidden,
  });
};
