import { SYNC_STORAGE_KEY } from '~constants/commands';
import { ALGORITHMS_COUNT } from '~constants/algorithmInfos';

export const saveCheckedAlgorithmIds = (checkedIds: unknown) => {
  if (!Array.isArray(checkedIds)) {
    return;
  }

  const filteredCheckedIds: number[] = checkedIds.filter(
    (value) =>
      typeof value === 'number' &&
      !isNaN(value) &&
      value % 1 === 0 &&
      value >= 1 &&
      value <= ALGORITHMS_COUNT,
  );

  chrome.storage.sync.set({
    [SYNC_STORAGE_KEY.CHECKED_ALGORITHM_IDS]: filteredCheckedIds,
  });
};
