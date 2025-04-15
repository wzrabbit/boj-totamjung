import type { FontNo } from '@/types/font';
import type { V1 } from '@/types/legacyData';

const V1_FONT_REGEX = /^(none|font-\d{1,2})$/;

export const isV1FontNo = (data: unknown): data is V1.FontNo => {
  return typeof data === 'string' && V1_FONT_REGEX.test(data);
};

export const isFontNo = (data: unknown): data is FontNo => {
  return typeof data === 'number' && !isNaN(data) && data % 1 === 0;
};
