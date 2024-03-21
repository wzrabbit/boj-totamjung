import { LEGACY_SYNC_STORAGE_KEY, SYNC_STORAGE_KEY } from '~constants/commands';
import { ALGORITHMS_COUNT } from '~constants/algorithmInfos';

export const fetchCheckedAlgorithmIds = async () => {
  return new Promise((resolve) => {
    chrome.storage.sync.get(
      [
        SYNC_STORAGE_KEY.CHECKED_ALGORITHM_IDS,
        LEGACY_SYNC_STORAGE_KEY.CHECKED_ALGORITHM_IDS,
      ],
      (data: Record<string, unknown>) => {
        const raw = Array.isArray(data.checkedAlgorithmIds)
          ? data.checkedAlgorithmIds
          : Array.isArray(data.algorithm)
            ? data.algorithm
            : null;

        if (!raw) {
          resolve({ checkedIds: [] });
          return;
        }

        const checkedAlgorithmIds: number[] = raw.filter(
          (value) =>
            typeof value === 'number' &&
            !isNaN(value) &&
            value % 1 === 0 &&
            value >= 1 &&
            value <= ALGORITHMS_COUNT,
        );

        resolve({ checkedIds: checkedAlgorithmIds });
      },
    );
  });
};
