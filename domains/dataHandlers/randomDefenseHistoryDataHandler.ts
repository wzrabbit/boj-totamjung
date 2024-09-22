import { STORAGE_KEY } from '@/constants/commands';
import { sanitizeRandomDefenseHistory } from './sanitizers/randomDefenseHistorySanitizer';
import { sanitizeIsTierHidden } from './sanitizers/isTierHiddenSanitizer';
import type {
  RandomDefenseHistoryInfo,
  RandomDefenseHistoryResponse,
} from '@/types/randomDefense';

const getSortedRandomDefenseHistory = (
  randomDefenseHistory: RandomDefenseHistoryInfo[],
) => {
  return [...randomDefenseHistory].sort((a, b) =>
    a.createdAt > b.createdAt ? -1 : 1,
  );
};

export const fetchRandomDefenseHistory =
  async (): Promise<RandomDefenseHistoryResponse> => {
    const data = await chrome.storage.local.get([
      STORAGE_KEY.RANDOM_DEFENSE_HISTORY,
      STORAGE_KEY.IS_TIER_HIDDEN,
    ]);
    const randomDefenseHistory = data[STORAGE_KEY.RANDOM_DEFENSE_HISTORY];
    const isTierHidden = data[STORAGE_KEY.IS_TIER_HIDDEN];
    const sanitizedRandomDefenseHistory =
      sanitizeRandomDefenseHistory(randomDefenseHistory);
    const sortedRandomDefenseHistory = getSortedRandomDefenseHistory(
      sanitizedRandomDefenseHistory,
    );
    const sanitizedIsTierHidden = sanitizeIsTierHidden(isTierHidden);

    return {
      randomDefenseHistory: sortedRandomDefenseHistory,
      isHidden: sanitizedIsTierHidden,
    };
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
    [STORAGE_KEY.RANDOM_DEFENSE_HISTORY]: sortedRandomDefenseHistory,
    [STORAGE_KEY.IS_TIER_HIDDEN]: isHidden,
  });
};

export const appendRandomDefenseInfoToHistory = async (
  randomDefenseHistoryInfo: unknown,
) => {
  const { randomDefenseHistory, isHidden } = await fetchRandomDefenseHistory();

  saveRandomDefenseHistory(
    [...randomDefenseHistory, randomDefenseHistoryInfo],
    isHidden,
  );
};
