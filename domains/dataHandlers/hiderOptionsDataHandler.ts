import { STORAGE_KEY } from '@/constants/commands';
import { DEFAULT_HIDER_OPTIONS } from '@/constants/defaultValues';
import { isHiderOptions } from './validators/hiderOptionsValidator';
import type { HiderOptions } from '@/types/algorithm';

export const fetchHiderOptions = async (): Promise<HiderOptions> => {
  const data = await browser.storage.local.get(STORAGE_KEY.HIDER_OPTIONS);
  const hiderOptions = data[STORAGE_KEY.HIDER_OPTIONS];

  return isHiderOptions(hiderOptions) ? hiderOptions : DEFAULT_HIDER_OPTIONS;
};

export const saveHiderOptions = (hiderOptions: unknown) => {
  if (!isHiderOptions(hiderOptions)) {
    return;
  }

  browser.storage.local.set({
    [STORAGE_KEY.HIDER_OPTIONS]: hiderOptions,
  });
};
