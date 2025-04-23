import { STORAGE_KEY } from '@/constants/commands';
import { sanitizeFontNo } from './sanitizers/fontNoSanitizer';
import { isFontNo } from './validators/fontNoValidator';
import { FontNo } from '@/types/font';

export const fetchFontNo = async (): Promise<FontNo> => {
  const data = await browser.storage.local.get(STORAGE_KEY.FONT_NO);
  const fontNo = data[STORAGE_KEY.FONT_NO];

  return sanitizeFontNo(fontNo);
};

export const saveFontNo = (fontNo: unknown) => {
  if (!isFontNo(fontNo)) {
    return;
  }

  browser.storage.local.set({
    [STORAGE_KEY.FONT_NO]: fontNo,
  });
};
