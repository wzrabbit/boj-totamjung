import { STORAGE_KEY } from '~constants/commands';
import { isValidCheckedAlgorithmIds } from './validators/checkedAlgorithmIdsValidator';
import { sanitizeCheckedAlgorithmIds } from '~domains/dataHandlers/sanitizers/checkedAlgorithmIdsSanitizer';
import type { CheckedAlgorithmIdsResponse } from '~types/algorithm';

export const fetchCheckedAlgorithmIds =
  async (): Promise<CheckedAlgorithmIdsResponse> => {
    const data = await chrome.storage.local.get(
      STORAGE_KEY.CHECKED_ALGORITHM_IDS,
    );
    const checkedAlgorithmIds = data[STORAGE_KEY.CHECKED_ALGORITHM_IDS];

    const sanitizedAlgorithmIds =
      sanitizeCheckedAlgorithmIds(checkedAlgorithmIds);
    return {
      checkedIds: sanitizedAlgorithmIds,
    };
  };

export const saveCheckedAlgorithmIds = (checkedAlgorithmIds: unknown) => {
  if (!isValidCheckedAlgorithmIds(checkedAlgorithmIds)) {
    return;
  }

  chrome.storage.local.set({
    [STORAGE_KEY.CHECKED_ALGORITHM_IDS]: checkedAlgorithmIds,
  });
};
