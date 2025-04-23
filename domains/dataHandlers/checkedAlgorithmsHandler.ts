import { STORAGE_KEY } from '@/constants/commands';
import { isValidCheckedAlgorithmIds } from './validators/checkedAlgorithmIdsValidator';
import { sanitizeCheckedAlgorithmIds } from '@/domains/dataHandlers/sanitizers/checkedAlgorithmIdsSanitizer';
import type { CheckedAlgorithmIds } from '@/types/algorithm';

export const fetchCheckedAlgorithmIds =
  async (): Promise<CheckedAlgorithmIds> => {
    const data = await browser.storage.local.get(
      STORAGE_KEY.CHECKED_ALGORITHM_IDS,
    );
    const checkedAlgorithmIds = data[STORAGE_KEY.CHECKED_ALGORITHM_IDS];

    return sanitizeCheckedAlgorithmIds(checkedAlgorithmIds);
  };

export const saveCheckedAlgorithmIds = (checkedAlgorithmIds: unknown) => {
  if (!isValidCheckedAlgorithmIds(checkedAlgorithmIds)) {
    return;
  }

  browser.storage.local.set({
    [STORAGE_KEY.CHECKED_ALGORITHM_IDS]: checkedAlgorithmIds,
  });
};
