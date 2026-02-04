import { STORAGE_KEY } from '@/constants/commands';
import { sanitizeRandomDefenseHistory } from './sanitizers/randomDefenseHistorySanitizer';
import { sanitizeIsTierHidden } from './sanitizers/isTierHiddenSanitizer';
import type { RandomDefenseHistoryResponse } from '@/types/randomDefense';
import { isRandomDefenseHistoryInfos } from './validators/randomDefenseHistoryValidator';

export const fetchRandomDefenseHistoryOptions =
  async (): Promise<RandomDefenseHistoryResponse> => {
    const data = await browser.storage.local.get([
      STORAGE_KEY.RANDOM_DEFENSE_HISTORY_OPTIONS,
    ]);
    const randomDefenseHistory = data[STORAGE_KEY.RANDOM_DEFENSE_HISTORY];
    const isTierHidden = data[STORAGE_KEY.IS_TIER_HIDDEN];
    const sanitizedRandomDefenseHistory =
      sanitizeRandomDefenseHistory(randomDefenseHistory);
    const sanitizedIsTierHidden = sanitizeIsTierHidden(isTierHidden);

    return {
      randomDefenseHistory: sanitizedRandomDefenseHistory,
      isHidden: sanitizedIsTierHidden,
    };
  };

export const saveRandomDefenseHistory = async (
  randomDefenseHistory: unknown,
  isHidden: unknown,
) => {
  if (!Array.isArray(randomDefenseHistory) || typeof isHidden !== 'boolean') {
    return;
  }

  const sanitizedRandomDefenseHistory =
    sanitizeRandomDefenseHistory(randomDefenseHistory);

  browser.storage.local.set({
    [STORAGE_KEY.RANDOM_DEFENSE_HISTORY]: sanitizedRandomDefenseHistory,
    [STORAGE_KEY.IS_TIER_HIDDEN]: isHidden,
  });
};

export const addRandomDefenseInfosToHistory = async (
  newRandomDefenseHistoryInfos: unknown,
) => {
  const { randomDefenseHistory, isHidden } = await fetchRandomDefenseHistory();

  if (
    !isRandomDefenseHistoryInfos(randomDefenseHistory) ||
    !isRandomDefenseHistoryInfos(newRandomDefenseHistoryInfos)
  ) {
    return;
  }

  saveRandomDefenseHistory(
    [...randomDefenseHistory, ...newRandomDefenseHistoryInfos],
    isHidden,
  );
};
