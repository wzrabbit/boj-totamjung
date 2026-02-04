import { isValidCheckedAlgorithmIds } from './checkedAlgorithmIdsValidator';
import { isQuickSlots } from './quickSlotsValidator';
import { isTotamjungTheme } from './totamjungThemeValidator';
import {
  isHiderOptions,
  isV2HiderOptions,
  isTagLockTimers,
} from './hiderOptionsValidator';
import { isRandomDefenseHistoryInfos } from './randomDefenseHistoryValidator';
import { isFontNo } from './fontNoValidator';
import {
  STORAGE_KEY,
  V2_STORAGE_KEY,
  V3_STORAGE_KEY,
} from '@/constants/commands';
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
    isValidCheckedAlgorithmIds(data[V2_STORAGE_KEY.CHECKED_ALGORITHM_IDS]) &&
    isQuickSlots(data[V2_STORAGE_KEY.QUICK_SLOTS]) &&
    isTotamjungTheme(data[V2_STORAGE_KEY.TOTAMJUNG_THEME]) &&
    isV2HiderOptions(data[V2_STORAGE_KEY.HIDER_OPTIONS]) &&
    isRandomDefenseHistoryInfos(data[V2_STORAGE_KEY.RANDOM_DEFENSE_HISTORY]) &&
    typeof data[V2_STORAGE_KEY.IS_TIER_HIDDEN] === 'boolean' &&
    isFontNo(data[V2_STORAGE_KEY.FONT_NO]) &&
    isTagLockTimers(data[V2_STORAGE_KEY.TIMERS])
  );
};

export const isV3OptionsData = (data: unknown): data is V3.OptionsData => {
  if (
    !(
      isObject(data) &&
      V3_STORAGE_KEY.DATA_VERSION in data &&
      V3_STORAGE_KEY.CHECKED_ALGORITHM_IDS in data &&
      V3_STORAGE_KEY.QUICK_SLOTS in data &&
      V3_STORAGE_KEY.TOTAMJUNG_THEME in data &&
      V3_STORAGE_KEY.HIDER_OPTIONS in data &&
      V3_STORAGE_KEY.RANDOM_DEFENSE_HISTORY in data &&
      V3_STORAGE_KEY.IS_TIER_HIDDEN in data &&
      V3_STORAGE_KEY.FONT_NO in data &&
      V3_STORAGE_KEY.TIMERS in data &&
      V3_STORAGE_KEY.GACHA_OPTIONS in data &&
      V3_STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE in data
    )
  ) {
    return false;
  }

  return (
    data[V3_STORAGE_KEY.DATA_VERSION] === 3 &&
    isValidCheckedAlgorithmIds(data[V3_STORAGE_KEY.CHECKED_ALGORITHM_IDS]) &&
    isQuickSlots(data[V3_STORAGE_KEY.QUICK_SLOTS]) &&
    isTotamjungTheme(data[V3_STORAGE_KEY.TOTAMJUNG_THEME]) &&
    isHiderOptions(data[V3_STORAGE_KEY.HIDER_OPTIONS]) &&
    isRandomDefenseHistoryInfos(data[V3_STORAGE_KEY.RANDOM_DEFENSE_HISTORY]) &&
    typeof data[V3_STORAGE_KEY.IS_TIER_HIDDEN] === 'boolean' &&
    isFontNo(data[V3_STORAGE_KEY.FONT_NO]) &&
    isTagLockTimers(data[V3_STORAGE_KEY.TIMERS]) &&
    isGachaOptions(data[V3_STORAGE_KEY.GACHA_OPTIONS]) &&
    isShouldShowWelcomeMessage(data[V3_STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE])
  );
};
