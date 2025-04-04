import { FontNo, LegacyFontNo } from '@/types/font';

const LEGACY_FONT_REGEX = /^(none|font-\d{1,2})$/;

export const isFontNo = (data: unknown): data is FontNo => {
  return typeof data === 'number' && !isNaN(data) && data % 1 === 0;
};

export const isLegacyFontNo = (data: unknown): data is LegacyFontNo => {
  return typeof data === 'string' && LEGACY_FONT_REGEX.test(data);
};
