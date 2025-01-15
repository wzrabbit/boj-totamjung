import { STORAGE_KEY } from '@/constants/commands';
import { isGachaOptionsResponse } from './validators/gachaOptionsValidator';
import { sanitizeGachaOptionsResponse } from './sanitizers/gachaOptionsSanitizer';
import type { GachaOptionsResponse } from '@/types/gacha';

export const fetchGachaOptions = async (): Promise<GachaOptionsResponse> => {
  const data = await browser.storage.local.get(STORAGE_KEY.GACHA_OPTIONS);
  const gachaOptions = data[STORAGE_KEY.GACHA_OPTIONS];

  return sanitizeGachaOptionsResponse(gachaOptions);
};

export const saveGachaOptions = (gachaOptions: unknown) => {
  if (!isGachaOptionsResponse(gachaOptions)) {
    return;
  }

  browser.storage.local.set({
    [STORAGE_KEY.GACHA_OPTIONS]: gachaOptions,
  });
};
