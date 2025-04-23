import { isValidCheckedAlgorithmIds } from './checkedAlgorithmIdsValidator';
import { isQuickSlots } from './quickSlotsValidator';
import { isTotamjungTheme } from './totamjungThemeValidator';
import { isHiderOptions, isV2HiderOptions } from './hiderOptionsValidator';
import { isRandomDefenseHistoryInfos } from './randomDefenseHistoryValidator';
import { isFontNo } from './fontNoValidator';
import { isTimers } from './isTimersValidator';
import { STORAGE_KEY, V2_STORAGE_KEY } from '@/constants/commands';
import { isObject } from '@/types/typeGuards';
import type { OptionsData } from '@/types/options';
import type { V2 } from '@/types/legacyData';
import { isGachaOptions } from './gachaOptionsValidator';
import { isShouldShowWelcomeMessage } from './isShouldShowWelcomeMessageDataValidator';

export const isV2OptionsData = (data: unknown): data is V2.OptionsData => {
  if (
    !(
      isObject(data) &&
      V2_STORAGE_KEY.DATA_VERSION in data &&
      V2_STORAGE_KEY.CHECKED_ALGORITHM_IDS in data &&
      V2_STORAGE_KEY.QUICK_SLOTS in data &&
      V2_STORAGE_KEY.TOTAMJUNG_THEME in data &&
      V2_STORAGE_KEY.HIDER_OPTIONS in data &&
      V2_STORAGE_KEY.RANDOM_DEFENSE_HISTORY in data &&
      V2_STORAGE_KEY.IS_TIER_HIDDEN in data &&
      V2_STORAGE_KEY.FONT_NO in data &&
      V2_STORAGE_KEY.TIMERS in data
    )
  ) {
    return false;
  }

  return (
    (data[STORAGE_KEY.DATA_VERSION] === 'v1.2' ||
      data[STORAGE_KEY.DATA_VERSION] === 2) &&
    isValidCheckedAlgorithmIds(data[STORAGE_KEY.CHECKED_ALGORITHM_IDS]) &&
    isQuickSlots(data[STORAGE_KEY.QUICK_SLOTS]) &&
    isTotamjungTheme(data[STORAGE_KEY.TOTAMJUNG_THEME]) &&
    isV2HiderOptions(data[STORAGE_KEY.HIDER_OPTIONS]) &&
    isRandomDefenseHistoryInfos(data[STORAGE_KEY.RANDOM_DEFENSE_HISTORY]) &&
    typeof data[STORAGE_KEY.IS_TIER_HIDDEN] === 'boolean' &&
    isFontNo(data[STORAGE_KEY.FONT_NO]) &&
    isTimers(data[STORAGE_KEY.TIMERS])
  );
};

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
      STORAGE_KEY.TIMERS in data &&
      STORAGE_KEY.GACHA_OPTIONS in data &&
      STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE in data
    )
  ) {
    return false;
  }

  return (
    data[STORAGE_KEY.DATA_VERSION] === 3 &&
    isValidCheckedAlgorithmIds(data[STORAGE_KEY.CHECKED_ALGORITHM_IDS]) &&
    isQuickSlots(data[STORAGE_KEY.QUICK_SLOTS]) &&
    isTotamjungTheme(data[STORAGE_KEY.TOTAMJUNG_THEME]) &&
    isHiderOptions(data[STORAGE_KEY.HIDER_OPTIONS]) &&
    isRandomDefenseHistoryInfos(data[STORAGE_KEY.RANDOM_DEFENSE_HISTORY]) &&
    typeof data[STORAGE_KEY.IS_TIER_HIDDEN] === 'boolean' &&
    isFontNo(data[STORAGE_KEY.FONT_NO]) &&
    isTimers(data[STORAGE_KEY.TIMERS]) &&
    isGachaOptions(data[STORAGE_KEY.GACHA_OPTIONS]) &&
    isShouldShowWelcomeMessage(data[STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE])
  );
};
