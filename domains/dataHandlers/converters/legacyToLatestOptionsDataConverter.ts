import {
  STORAGE_KEY,
  V1_LOCAL_STORAGE_KEY,
  V1_SYNC_STORAGE_KEY,
  V2_STORAGE_KEY,
  V3_STORAGE_KEY,
  V4_STORAGE_KEY,
} from '@/constants/commands';
import type { OptionsData } from '@/types/options';
import type { V2, V3, V4 } from '@/types/legacyData';
import {
  DEFAULT_GACHA_OPTIONS,
  DEFAULT_WIDGET_TIMER_OPTIONS,
} from '@/constants/defaultValues';
import {
  sanitizeV2HiderOptions,
  sanitizeV3HiderOptions,
  sanitizeV4HiderOptions,
} from '@/domains/dataHandlers/sanitizers/hiderOptionsSanitizer';
import { sanitizeCheckedAlgorithmIds } from '@/domains/dataHandlers/sanitizers/checkedAlgorithmIdsSanitizer';
import {
  sanitizeQuickSlotOptions,
  sanitizeV1QuickSlotOptions,
} from '@/domains/dataHandlers/sanitizers/quickSlotsSanitizer';
import { sanitizeTotamjungTheme } from '@/domains/dataHandlers/sanitizers/totamjungThemeSanitizer';
import {
  sanitizeRandomDefenseHistory,
  sanitizeV1RandomDefenseHistory,
} from '@/domains/dataHandlers/sanitizers/randomDefenseHistorySanitizer';
import { sanitizeIsTierHidden } from '@/domains/dataHandlers/sanitizers/isTierHiddenSanitizer';
import { sanitizeFontNo } from '@/domains/dataHandlers/sanitizers/fontNoSanitizer';
import { sanitizeTimers } from '@/domains/dataHandlers/sanitizers/timersSanitizer';
import { sanitizeShouldShowWelcomeMessage } from '@/domains/dataHandlers/sanitizers/shouldShowWelcomeMessageSanitizer';
import { sanitizeGachaOptions } from '@/domains/dataHandlers/sanitizers/gachaOptionsSanitizer';
import {
  convertV1ToV2HiderOptions,
  convertV2ToV3HiderOptions,
  convertV3ToV4HiderOptions,
  convertV4ToLatestHiderOptions,
} from './legacyToLatestHiderOptionsConverter';

import { convertV1ToLatestTotamjungThemeBySettings } from '@/domains/dataHandlers/converters/legacyToLatestTotamjungThemeConverter';
import { convertV1ToLatestQuickSlots } from '@/domains/dataHandlers/converters/legacyToLatestQuickSlotsConverter';
import { convertV1ToLatestRandomDefenseHistory } from '@/domains/dataHandlers/converters/legacyToLatestRandomDefenseHistory';
import { convertV1ToLatestFontNoBySettings } from '@/domains/dataHandlers/converters/legacyToLatestFontNo';
import { convertV1ToLatestTimers } from '@/domains/dataHandlers/converters/legacyToLatestTimers';

export const convertV1ToV2OptionsData = (
  legacySyncData: Record<string, unknown>,
  legacyLocalData: Record<string, unknown>,
): V2.OptionsData => {
  const legacyQuickSlots = sanitizeV1QuickSlotOptions(
    legacySyncData[V1_SYNC_STORAGE_KEY.QUICK_SLOTS],
  );
  const legacyRandomDefenseHistory = sanitizeV1RandomDefenseHistory(
    legacyLocalData[V1_LOCAL_STORAGE_KEY.RANDOM_DEFENSE_HISTORY],
  );
  const checkedAlgorithmIds = sanitizeCheckedAlgorithmIds(
    legacySyncData[V1_SYNC_STORAGE_KEY.CHECKED_ALGORITHM_IDS],
  );
  const isTierHidden = sanitizeIsTierHidden(
    legacySyncData[V2_STORAGE_KEY.IS_TIER_HIDDEN],
  );

  const totamjungTheme = convertV1ToLatestTotamjungThemeBySettings(
    legacySyncData[V1_SYNC_STORAGE_KEY.SETTINGS],
  );
  const hiderOptions = convertV1ToV2HiderOptions(
    legacySyncData[V1_SYNC_STORAGE_KEY.TIMER],
    legacySyncData[V1_SYNC_STORAGE_KEY.SETTINGS],
  );
  const quickSlots = convertV1ToLatestQuickSlots(legacyQuickSlots);
  const randomDefenseHistory = convertV1ToLatestRandomDefenseHistory(
    legacyRandomDefenseHistory,
  );
  const fontNo = convertV1ToLatestFontNoBySettings(
    legacySyncData[V1_SYNC_STORAGE_KEY.SETTINGS],
  );
  const timers = convertV1ToLatestTimers(
    legacySyncData[V1_SYNC_STORAGE_KEY.TIMER],
  );

  return {
    [V2_STORAGE_KEY.CHECKED_ALGORITHM_IDS]: checkedAlgorithmIds,
    [V2_STORAGE_KEY.QUICK_SLOTS]: quickSlots,
    [V2_STORAGE_KEY.TOTAMJUNG_THEME]: totamjungTheme,
    [V2_STORAGE_KEY.HIDER_OPTIONS]: hiderOptions,
    [V2_STORAGE_KEY.RANDOM_DEFENSE_HISTORY]: randomDefenseHistory,
    [V2_STORAGE_KEY.IS_TIER_HIDDEN]: isTierHidden,
    [V2_STORAGE_KEY.FONT_NO]: fontNo,
    [V2_STORAGE_KEY.TIMERS]: timers,
    [V2_STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE]: false,
    [V2_STORAGE_KEY.DATA_VERSION]: 2,
  };
};

export const convertV2ToV3OptionsData = (
  legacyData: Record<string, unknown>,
): V3.OptionsData => {
  const legacyHiderOptions = sanitizeV2HiderOptions(
    legacyData[V2_STORAGE_KEY.HIDER_OPTIONS],
  );

  const checkedAlgorithmIds = sanitizeCheckedAlgorithmIds(
    legacyData[V2_STORAGE_KEY.CHECKED_ALGORITHM_IDS],
  );
  const quickSlots = sanitizeQuickSlotOptions(
    legacyData[V2_STORAGE_KEY.QUICK_SLOTS],
  );
  const totamjungTheme = sanitizeTotamjungTheme(
    legacyData[V2_STORAGE_KEY.TOTAMJUNG_THEME],
  );
  const hiderOptions = convertV2ToV3HiderOptions(legacyHiderOptions);
  const randomDefenseHistory = sanitizeRandomDefenseHistory(
    legacyData[V2_STORAGE_KEY.RANDOM_DEFENSE_HISTORY],
  );
  const isTierHidden = sanitizeIsTierHidden(
    legacyData[V2_STORAGE_KEY.IS_TIER_HIDDEN],
  );
  const fontNo = sanitizeFontNo(legacyData[V2_STORAGE_KEY.FONT_NO]);
  const timers = sanitizeTimers(legacyData[V2_STORAGE_KEY.TIMERS]);
  const shouldShowWelcomeMessage = sanitizeShouldShowWelcomeMessage(
    legacyData[V2_STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE],
  );

  return {
    [V3_STORAGE_KEY.CHECKED_ALGORITHM_IDS]: checkedAlgorithmIds,
    [V3_STORAGE_KEY.QUICK_SLOTS]: quickSlots,
    [V3_STORAGE_KEY.TOTAMJUNG_THEME]: totamjungTheme,
    [V3_STORAGE_KEY.HIDER_OPTIONS]: hiderOptions,
    [V3_STORAGE_KEY.RANDOM_DEFENSE_HISTORY]: randomDefenseHistory,
    [V3_STORAGE_KEY.IS_TIER_HIDDEN]: isTierHidden,
    [V3_STORAGE_KEY.FONT_NO]: fontNo,
    [V3_STORAGE_KEY.TIMERS]: timers,
    [V3_STORAGE_KEY.GACHA_OPTIONS]: DEFAULT_GACHA_OPTIONS,
    [V3_STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE]: shouldShowWelcomeMessage,
    [V3_STORAGE_KEY.DATA_VERSION]: 3,
  };
};

export const convertV3ToV4OptionsData = (
  legacyData: Record<string, unknown>,
): V4.OptionsData => {
  const legacyHiderOptions = sanitizeV3HiderOptions(
    legacyData[V3_STORAGE_KEY.HIDER_OPTIONS],
  );

  const checkedAlgorithmIds = sanitizeCheckedAlgorithmIds(
    legacyData[V3_STORAGE_KEY.CHECKED_ALGORITHM_IDS],
  );
  const quickSlots = sanitizeQuickSlotOptions(
    legacyData[V3_STORAGE_KEY.QUICK_SLOTS],
  );
  const totamjungTheme = sanitizeTotamjungTheme(
    legacyData[V3_STORAGE_KEY.TOTAMJUNG_THEME],
  );
  const hiderOptions = convertV3ToV4HiderOptions(legacyHiderOptions);
  const randomDefenseHistory = sanitizeRandomDefenseHistory(
    legacyData[V3_STORAGE_KEY.RANDOM_DEFENSE_HISTORY],
  );
  const isTierHidden = sanitizeIsTierHidden(
    legacyData[V3_STORAGE_KEY.IS_TIER_HIDDEN],
  );
  const fontNo = sanitizeFontNo(legacyData[V3_STORAGE_KEY.FONT_NO]);
  const timers = sanitizeTimers(legacyData[V3_STORAGE_KEY.TIMERS]);
  const gachaOptions = sanitizeGachaOptions(
    legacyData[V3_STORAGE_KEY.GACHA_OPTIONS],
  );
  const shouldShowWelcomeMessage = sanitizeShouldShowWelcomeMessage(
    legacyData[V3_STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE],
  );

  return {
    [V4_STORAGE_KEY.CHECKED_ALGORITHM_IDS]: checkedAlgorithmIds,
    [V4_STORAGE_KEY.QUICK_SLOTS]: quickSlots,
    [V4_STORAGE_KEY.TOTAMJUNG_THEME]: totamjungTheme,
    [V4_STORAGE_KEY.HIDER_OPTIONS]: hiderOptions,
    [V4_STORAGE_KEY.RANDOM_DEFENSE_HISTORY]: randomDefenseHistory,
    [V4_STORAGE_KEY.IS_TIER_HIDDEN]: isTierHidden,
    [V4_STORAGE_KEY.FONT_NO]: fontNo,
    [V4_STORAGE_KEY.TIMERS]: timers,
    [V4_STORAGE_KEY.GACHA_OPTIONS]: gachaOptions,
    [V4_STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE]: shouldShowWelcomeMessage,
    [V4_STORAGE_KEY.DATA_VERSION]: 4,
  };
};

export const convertV4ToLatestOptionsData = (
  legacyData: Record<string, unknown>,
): OptionsData => {
  const legacyHiderOptions = sanitizeV4HiderOptions(
    legacyData[V4_STORAGE_KEY.HIDER_OPTIONS],
  );
  const checkedAlgorithmIds = sanitizeCheckedAlgorithmIds(
    legacyData[V4_STORAGE_KEY.CHECKED_ALGORITHM_IDS],
  );
  const timers = sanitizeTimers(legacyData[V4_STORAGE_KEY.TIMERS]);
  const quickSlotOptions = sanitizeQuickSlotOptions(
    legacyData[V4_STORAGE_KEY.QUICK_SLOTS],
  );
  const totamjungTheme = sanitizeTotamjungTheme(
    legacyData[V4_STORAGE_KEY.TOTAMJUNG_THEME],
  );
  const randomDefenseHistory = sanitizeRandomDefenseHistory(
    legacyData[V4_STORAGE_KEY.RANDOM_DEFENSE_HISTORY],
  );
  const isTierHidden = sanitizeIsTierHidden(
    legacyData[V4_STORAGE_KEY.IS_TIER_HIDDEN],
  );
  const fontNo = sanitizeFontNo(legacyData[V4_STORAGE_KEY.FONT_NO]);
  const gachaOptions = sanitizeGachaOptions(
    legacyData[V4_STORAGE_KEY.GACHA_OPTIONS],
  );
  const shouldShowWelcomeMessage = sanitizeShouldShowWelcomeMessage(
    legacyData[V4_STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE],
  );

  const hiderOptions = convertV4ToLatestHiderOptions(
    legacyHiderOptions,
    checkedAlgorithmIds,
    timers,
  );

  return {
    [STORAGE_KEY.DATA_VERSION]: 5,
    [STORAGE_KEY.QUICK_SLOT_OPTIONS]: quickSlotOptions,
    [STORAGE_KEY.THEME]: totamjungTheme,
    [STORAGE_KEY.HIDER_OPTIONS]: hiderOptions,
    [STORAGE_KEY.RANDOM_DEFENSE_HISTORY_OPTIONS]: {
      history: randomDefenseHistory,
      isTierHidden,
    },
    [STORAGE_KEY.WIDGET_TIMER_OPTIONS]: DEFAULT_WIDGET_TIMER_OPTIONS,
    [STORAGE_KEY.FONT_NO]: fontNo,
    [STORAGE_KEY.GACHA_OPTIONS]: gachaOptions,
    [STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE]: shouldShowWelcomeMessage,
  };
};
