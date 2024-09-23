import { STORAGE_KEY } from '@/constants/commands';
import { DEFAULT_HIDER_OPTIONS } from '@/constants/defaultValues';
import { isHiderOptionsResponse } from './validators/hiderOptionsValidator';
import type { HiderOptionsResponse } from '@/types/algorithm';

export const fetchHiderOptions = async (): Promise<HiderOptionsResponse> => {
  const data = await browser.storage.local.get(STORAGE_KEY.HIDER_OPTIONS);
  const hiderOptions = data[STORAGE_KEY.HIDER_OPTIONS];

  return isHiderOptionsResponse(hiderOptions)
    ? hiderOptions
    : DEFAULT_HIDER_OPTIONS;
};

export const saveHiderOptions = (hiderOptions: unknown) => {
  if (!isHiderOptionsResponse(hiderOptions)) {
    return;
  }

  browser.storage.local.set({
    [STORAGE_KEY.HIDER_OPTIONS]: hiderOptions,
  });
};
