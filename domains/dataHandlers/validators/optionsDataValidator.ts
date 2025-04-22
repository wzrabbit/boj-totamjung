import { isValidCheckedAlgorithmIds } from './checkedAlgorithmIdsValidator';
import { isQuickSlots } from './quickSlotsValidator';
import { isTotamjungTheme } from './totamjungThemeValidator';
import { isHiderOptions } from './hiderOptionsValidator';
import { isRandomDefenseHistoryInfos } from './randomDefenseHistoryValidator';
import { isFontNo } from './fontNoValidator';
import { isTimers } from './isTimersValidator';
import { STORAGE_KEY } from '@/constants/commands';
import { isObject } from '@/types/typeGuards';
import type { OptionsData } from '@/types/options';

export const isOptionsData = (data: unknown): data is OptionsData => {
  if (
    !(
      isObject(data) &&
      STORAGE_KEY.DATA_VERSION in data &&
      STORAGE_KEY.CHECKED_ALGORITHM_IDS in data &&
      STORAGE_KEY.QUICK_SLOTS in data &&
      STORAGE_KEY.TOTAMJUNG_THEME in data &&
      STORAGE_KEY.HIDER_OPTIONS in data &&
      STORAGE_KEY.RANDOM_DEFENSE_HISTORY in data &&
      STORAGE_KEY.IS_TIER_HIDDEN in data &&
      STORAGE_KEY.FONT_NO in data &&
      STORAGE_KEY.TIMERS in data
    )
  ) {
    return false;
  }

  return (
    data[STORAGE_KEY.DATA_VERSION] === 'v1.2' &&
    isValidCheckedAlgorithmIds(data[STORAGE_KEY.CHECKED_ALGORITHM_IDS]) &&
    isQuickSlots(data[STORAGE_KEY.QUICK_SLOTS]) &&
    isTotamjungTheme(data[STORAGE_KEY.TOTAMJUNG_THEME]) &&
    isHiderOptions(data[STORAGE_KEY.HIDER_OPTIONS]) &&
    isRandomDefenseHistoryInfos(data[STORAGE_KEY.RANDOM_DEFENSE_HISTORY]) &&
    typeof data[STORAGE_KEY.IS_TIER_HIDDEN] === 'boolean' &&
    isFontNo(data[STORAGE_KEY.FONT_NO]) &&
    isTimers(data[STORAGE_KEY.TIMERS])
  );
};
