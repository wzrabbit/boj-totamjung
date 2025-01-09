import { isObject } from '@/types/typeGuards';
import type { GachaOptionsResponse } from '@/types/gacha';

export const isGachaOptionsResponse = (
  data: unknown,
): data is GachaOptionsResponse => {
  return (
    isObject(data) &&
    'isTierHidden' in data &&
    'isAudioMuted' in data &&
    typeof data.isTierHidden === 'boolean' &&
    typeof data.isAudioMuted === 'boolean'
  );
};
