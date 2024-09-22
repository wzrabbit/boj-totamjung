import { STORAGE_KEY } from '@/constants/commands';
import { sanitizeFontNo } from './sanitizers/fontNoSanitizer';
import { isFontNo } from './validators/fontNoValidator';
import { FontNoResponse } from '@/types/font';

export const fetchFontNo = async (): Promise<FontNoResponse> => {
  const data = await chrome.storage.local.get(STORAGE_KEY.FONT_NO);
  const fontNo = data[STORAGE_KEY.FONT_NO];

  return {
    [STORAGE_KEY.FONT_NO]: sanitizeFontNo(fontNo),
  };
};

export const saveFontNo = (fontNo: unknown) => {
  if (!isFontNo(fontNo)) {
    return;
  }

  chrome.storage.local.set({
    [STORAGE_KEY.FONT_NO]: fontNo,
  });
};
