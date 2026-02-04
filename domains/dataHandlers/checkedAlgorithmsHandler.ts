import { STORAGE_KEY } from '@/constants/commands';
import { isValidCheckedAlgorithmIds } from './validators/hiderOptionsValidator';
import { sanitizeCheckedAlgorithmIds } from '@/domains/dataHandlers/sanitizers/checkedAlgorithmIdsSanitizer';
import type { CheckedAlgorithmIds } from '@/types/algorithm';

export const fetchCheckedAlgorithmIds =
  async (): Promise<CheckedAlgorithmIds> => {
    const data = await browser.storage.local.get(STORAGE_KEY.HIDER_OPTIONS);
    const { checkedAlgorithmIds } = data[STORAGE_KEY.HIDER_OPTIONS];

    return sanitizeCheckedAlgorithmIds(checkedAlgorithmIds);
  };

export const saveCheckedAlgorithmIds = async (checkedAlgorithmIds: unknown) => {
  if (!isValidCheckedAlgorithmIds(checkedAlgorithmIds)) {
    return;
  }

  const hiderOptions = await browser.storage.local.get(
    STORAGE_KEY.HIDER_OPTIONS,
  );

  browser.storage.local.set({
    [STORAGE_KEY.HIDER_OPTIONS]: {
      ...hiderOptions,
      checkedAlgorithmIds,
    },
  });
};
