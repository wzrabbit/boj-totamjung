import { isObject } from '@/types/typeGuards';
import {
  FontNoResponse,
  LegacyFontNo,
  LegacyFontNoResponse,
} from '@/types/font';

const LEGACY_FONT_REGEX = /^(none|font-\d{1,2})$/;

export const isFontNo = (data: unknown): data is number => {
  return typeof data === 'number' && !isNaN(data) && data % 1 === 0;
};

export const isFontNoResponse = (data: unknown): data is FontNoResponse => {
  return isObject(data) && 'fontNo' in data && isFontNo(data.fontNo);
};

export const isLegacyFontNo = (data: unknown): data is LegacyFontNo => {
  return typeof data === 'string' && LEGACY_FONT_REGEX.test(data);
};

export const isLegacyFontNoResponse = (
  data: unknown,
): data is LegacyFontNoResponse => {
  return (
    isObject(data) &&
    'font' in data &&
    typeof data.font === 'string' &&
    LEGACY_FONT_REGEX.test(data.font)
  );
};
