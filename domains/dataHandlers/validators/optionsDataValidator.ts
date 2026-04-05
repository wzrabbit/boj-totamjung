import { isValidCheckedAlgorithmIds } from './checkedAlgorithmIdsValidator';
import { isQuickSlotOptions } from './quickSlotsValidator';
import { isTotamjungTheme } from './totamjungThemeValidator';
import {
  isHiderOptions,
  isV2HiderOptions,
  isV3HiderOptions,
  isV4HiderOptions,
} from './hiderOptionsValidator';
import {
  isRandomDefenseHistoryInfos,
  isRandomDefenseHistoryOptions,
} from './randomDefenseHistoryValidator';
import { isFontNo } from './fontNoValidator';
import { isTagLockTimers } from './isTimersValidator';
import {
  STORAGE_KEY,
  V2_STORAGE_KEY,
  V3_STORAGE_KEY,
  V4_STORAGE_KEY,
} from '@/constants/commands';
import { isObject } from '@/types/typeGuards';
import type { OptionsData } from '@/types/options';
import type { V2, V3, V4 } from '@/types/legacyData';
import { isGachaOptions } from './gachaOptionsValidator';
import { isShouldShowWelcomeMessage } from './isShouldShowWelcomeMessageDataValidator';
import { isWidgetTimerOptions } from './widgetTimerOptionsValidator';

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
    (data[V2_STORAGE_KEY.DATA_VERSION] === 'v1.2' ||
      data[V2_STORAGE_KEY.DATA_VERSION] === 2) &&
    isValidCheckedAlgorithmIds(data[V2_STORAGE_KEY.CHECKED_ALGORITHM_IDS]) &&
    isQuickSlotOptions(data[V2_STORAGE_KEY.QUICK_SLOTS]) &&
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
    isQuickSlotOptions(data[V3_STORAGE_KEY.QUICK_SLOTS]) &&
    isTotamjungTheme(data[V3_STORAGE_KEY.TOTAMJUNG_THEME]) &&
    isV3HiderOptions(data[V3_STORAGE_KEY.HIDER_OPTIONS]) &&
    isRandomDefenseHistoryInfos(data[V3_STORAGE_KEY.RANDOM_DEFENSE_HISTORY]) &&
    typeof data[V3_STORAGE_KEY.IS_TIER_HIDDEN] === 'boolean' &&
    isFontNo(data[V3_STORAGE_KEY.FONT_NO]) &&
    isTagLockTimers(data[V3_STORAGE_KEY.TIMERS]) &&
    isGachaOptions(data[V3_STORAGE_KEY.GACHA_OPTIONS]) &&
    isShouldShowWelcomeMessage(data[V3_STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE])
  );
};

export const isV4OptionsData = (data: unknown): data is V4.OptionsData => {
  if (
    !(
      isObject(data) &&
      V4_STORAGE_KEY.DATA_VERSION in data &&
      V4_STORAGE_KEY.CHECKED_ALGORITHM_IDS in data &&
      V4_STORAGE_KEY.QUICK_SLOTS in data &&
      V4_STORAGE_KEY.TOTAMJUNG_THEME in data &&
      V4_STORAGE_KEY.HIDER_OPTIONS in data &&
      V4_STORAGE_KEY.RANDOM_DEFENSE_HISTORY in data &&
      V4_STORAGE_KEY.IS_TIER_HIDDEN in data &&
      V4_STORAGE_KEY.FONT_NO in data &&
      V4_STORAGE_KEY.TIMERS in data &&
      V4_STORAGE_KEY.GACHA_OPTIONS in data &&
      V4_STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE in data
    )
  ) {
    return false;
  }

  return (
    data[V4_STORAGE_KEY.DATA_VERSION] === 4 &&
    isValidCheckedAlgorithmIds(data[V4_STORAGE_KEY.CHECKED_ALGORITHM_IDS]) &&
    isQuickSlotOptions(data[V4_STORAGE_KEY.QUICK_SLOTS]) &&
    isTotamjungTheme(data[V4_STORAGE_KEY.TOTAMJUNG_THEME]) &&
    isV4HiderOptions(data[V4_STORAGE_KEY.HIDER_OPTIONS]) &&
    isRandomDefenseHistoryInfos(data[V4_STORAGE_KEY.RANDOM_DEFENSE_HISTORY]) &&
    typeof data[V4_STORAGE_KEY.IS_TIER_HIDDEN] === 'boolean' &&
    isFontNo(data[V4_STORAGE_KEY.FONT_NO]) &&
    isTagLockTimers(data[V4_STORAGE_KEY.TIMERS]) &&
    isGachaOptions(data[V4_STORAGE_KEY.GACHA_OPTIONS]) &&
    isShouldShowWelcomeMessage(data[V4_STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE])
  );
};

export const isOptionsData = (data: unknown): data is OptionsData => {
  if (
    !(
      isObject(data) &&
      STORAGE_KEY.DATA_VERSION in data &&
      STORAGE_KEY.QUICK_SLOT_OPTIONS in data &&
      STORAGE_KEY.THEME in data &&
      STORAGE_KEY.HIDER_OPTIONS in data &&
      STORAGE_KEY.RANDOM_DEFENSE_HISTORY_OPTIONS in data &&
      STORAGE_KEY.WIDGET_TIMER_OPTIONS in data &&
      STORAGE_KEY.FONT_NO in data &&
      STORAGE_KEY.GACHA_OPTIONS in data &&
      STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE in data
    )
  ) {
    return false;
  }

  return (
    data[STORAGE_KEY.DATA_VERSION] === 5 &&
    isQuickSlotOptions(data[STORAGE_KEY.QUICK_SLOT_OPTIONS]) &&
    isTotamjungTheme(data[STORAGE_KEY.THEME]) &&
    isHiderOptions(data[STORAGE_KEY.HIDER_OPTIONS]) &&
    isRandomDefenseHistoryOptions(
      data[STORAGE_KEY.RANDOM_DEFENSE_HISTORY_OPTIONS],
    ) &&
    isWidgetTimerOptions(data[STORAGE_KEY.WIDGET_TIMER_OPTIONS]) &&
    isFontNo(data[STORAGE_KEY.FONT_NO]) &&
    isGachaOptions(data[STORAGE_KEY.GACHA_OPTIONS]) &&
    isShouldShowWelcomeMessage(data[STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE])
  );
};
