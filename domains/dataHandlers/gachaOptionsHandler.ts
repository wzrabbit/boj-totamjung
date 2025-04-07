import { STORAGE_KEY } from '@/constants/commands';
import { isGachaOptions } from './validators/gachaOptionsValidator';
import { sanitizeGachaOptions } from './sanitizers/gachaOptionsSanitizer';
import type { GachaOptions } from '@/types/gacha';

export const fetchGachaOptions = async (): Promise<GachaOptions> => {
  const data = await browser.storage.local.get(STORAGE_KEY.GACHA_OPTIONS);
  const gachaOptions = data[STORAGE_KEY.GACHA_OPTIONS];

  return sanitizeGachaOptions(gachaOptions);
};

export const saveGachaOptions = (gachaOptions: unknown) => {
  if (!isGachaOptions(gachaOptions)) {
    return;
  }

  browser.storage.local.set({
    [STORAGE_KEY.GACHA_OPTIONS]: gachaOptions,
  });
};
