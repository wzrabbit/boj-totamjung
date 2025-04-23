import { isObject } from '@/types/typeGuards';
import type { GachaOptions } from '@/types/gacha';

export const isGachaOptions = (data: unknown): data is GachaOptions => {
  return (
    isObject(data) &&
    'isTierHidden' in data &&
    'isAudioMuted' in data &&
    typeof data.isTierHidden === 'boolean' &&
    typeof data.isAudioMuted === 'boolean'
  );
};
