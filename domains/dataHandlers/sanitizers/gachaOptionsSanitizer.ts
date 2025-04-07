import { isObject } from '@/types/typeGuards';
import type { GachaOptions } from '@/types/gacha';
import { DEFAULT_GACHA_OPTIONS } from '@/constants/defaultValues';

export const sanitizeGachaOptions = (data: unknown): GachaOptions => {
  if (!isObject(data)) {
    return DEFAULT_GACHA_OPTIONS;
  }

  const isTierHidden =
    'isTierHidden' in data && typeof data.isTierHidden === 'boolean'
      ? data.isTierHidden
      : DEFAULT_GACHA_OPTIONS.isTierHidden;
  const isAudioMuted =
    'isAudioMuted' in data && typeof data.isAudioMuted === 'boolean'
      ? data.isAudioMuted
      : DEFAULT_GACHA_OPTIONS.isAudioMuted;

  return {
    isTierHidden,
    isAudioMuted,
  };
};
