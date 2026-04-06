import { STORAGE_KEY } from '@/constants/commands';
import { isValidCheckedAlgorithmIds } from './validators/checkedAlgorithmIdsValidator';
import { sanitizeCheckedAlgorithmIds } from '@/domains/dataHandlers/sanitizers/checkedAlgorithmIdsSanitizer';
import type { CheckedAlgorithmIds } from '@/types/algorithm';
import { fetchHiderOptions } from './hiderOptionsDataHandler';

export const fetchCheckedAlgorithmIds =
  async (): Promise<CheckedAlgorithmIds> => {
    const { checkedAlgorithmIds } = await fetchHiderOptions();
    return sanitizeCheckedAlgorithmIds(checkedAlgorithmIds);
  };

export const saveCheckedAlgorithmIds = async (checkedAlgorithmIds: unknown) => {
  if (!isValidCheckedAlgorithmIds(checkedAlgorithmIds)) {
    return;
  }

  const hiderOptions = await fetchHiderOptions();

  browser.storage.local.set({
    [STORAGE_KEY.HIDER_OPTIONS]: {
      ...hiderOptions,
      checkedAlgorithmIds,
    },
  });
};
