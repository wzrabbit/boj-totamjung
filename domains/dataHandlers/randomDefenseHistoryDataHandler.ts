import { STORAGE_KEY } from '@/constants/commands';
import { sanitizeRandomDefenseHistory } from './sanitizers/randomDefenseHistorySanitizer';
import type { RandomDefenseHistoryOptions } from '@/types/randomDefense';
import { isRandomDefenseHistoryInfos } from './validators/randomDefenseHistoryValidator';
import { isObject } from '@/types/typeGuards';
import { DEFAULT_RANDOM_DEFENSE_HISTORY_OPTIONS } from '@/constants/defaultValues';

export const fetchRandomDefenseHistoryOptions =
  async (): Promise<RandomDefenseHistoryOptions> => {
    const data = await browser.storage.local.get(
      STORAGE_KEY.RANDOM_DEFENSE_HISTORY_OPTIONS,
    );
    const options = data[STORAGE_KEY.RANDOM_DEFENSE_HISTORY_OPTIONS];

    if (
      !isObject(options) ||
      !('history' in options) ||
      !('isTierHidden' in options)
    ) {
      return DEFAULT_RANDOM_DEFENSE_HISTORY_OPTIONS;
    }

    const history = sanitizeRandomDefenseHistory(options.history);
    const isTierHidden =
      typeof options.isTierHidden === 'boolean' ? options.isTierHidden : false;

    return { history, isTierHidden };
  };

export const saveRandomDefenseHistoryOptions = async (
  history: unknown,
  isTierHidden: unknown,
) => {
  if (!Array.isArray(history) || typeof isTierHidden !== 'boolean') {
    return;
  }

  const sanitizedHistory = sanitizeRandomDefenseHistory(history);

  await browser.storage.local.set({
    [STORAGE_KEY.RANDOM_DEFENSE_HISTORY_OPTIONS]: {
      history: sanitizedHistory,
      isTierHidden,
    },
  });
};

export const addRandomDefenseInfosToHistory = async (newItems: unknown) => {
  const { history, isTierHidden } = await fetchRandomDefenseHistoryOptions();

  if (
    !isRandomDefenseHistoryInfos(history) ||
    !isRandomDefenseHistoryInfos(newItems)
  ) {
    return;
  }

  await saveRandomDefenseHistoryOptions(
    [...history, ...newItems],
    isTierHidden,
  );
};
