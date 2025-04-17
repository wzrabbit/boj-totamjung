import {
  STORAGE_KEY,
  V1_LOCAL_STORAGE_KEY,
  V1_SYNC_STORAGE_KEY,
  V2_STORAGE_KEY,
} from '@/constants/commands';
import type { OptionsData } from '@/types/options';
import type { V2 } from '@/types/legacyData';
import { DEFAULT_GACHA_OPTIONS } from '@/constants/defaultValues';
import { sanitizeV2HiderOptions } from '@/domains/dataHandlers/sanitizers/hiderOptionsSanitizer';
import { sanitizeCheckedAlgorithmIds } from '@/domains/dataHandlers/sanitizers/checkedAlgorithmIdsSanitizer';
import {
  sanitizeQuickSlots,
  sanitizeV1QuickSlots,
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
import {
  convertV1ToV2HiderOptions,
  convertV2ToLatestHiderOptions,
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
  const legacyQuickSlots = sanitizeV1QuickSlots(
    legacySyncData[V1_SYNC_STORAGE_KEY.QUICK_SLOTS],
  );
  const legacyRandomDefenseHistory = sanitizeV1RandomDefenseHistory(
    legacyLocalData[V1_LOCAL_STORAGE_KEY.RANDOM_DEFENSE_HISTORY],
  );
  const checkedAlgorithmIds = sanitizeCheckedAlgorithmIds(
    legacySyncData[V1_SYNC_STORAGE_KEY.CHECKED_ALGORITHM_IDS],
  );
  const isTierHidden = sanitizeIsTierHidden(
    legacySyncData[STORAGE_KEY.IS_TIER_HIDDEN],
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

export const convertV2ToLatestOptionsData = (
  legacyData: Record<string, unknown>,
): OptionsData => {
  const legacyHiderOptions = sanitizeV2HiderOptions(
    legacyData[V2_STORAGE_KEY.HIDER_OPTIONS],
  );

  const checkedAlgorithmIds = sanitizeCheckedAlgorithmIds(
    legacyData[V2_STORAGE_KEY.CHECKED_ALGORITHM_IDS],
  );
  const quickSlots = sanitizeQuickSlots(legacyData[V2_STORAGE_KEY.QUICK_SLOTS]);
  const totamjungTheme = sanitizeTotamjungTheme(
    legacyData[V2_STORAGE_KEY.TOTAMJUNG_THEME],
  );
  const hiderOptions = convertV2ToLatestHiderOptions(legacyHiderOptions);
  const randomDefenseHistory = sanitizeRandomDefenseHistory(
    legacyData[V2_STORAGE_KEY.RANDOM_DEFENSE_HISTORY],
  );
  const isTierHidden = sanitizeIsTierHidden(
    legacyData[STORAGE_KEY.IS_TIER_HIDDEN],
  );
  const fontNo = sanitizeFontNo(legacyData[V2_STORAGE_KEY.FONT_NO]);
  const timers = sanitizeTimers(legacyData[V2_STORAGE_KEY.TIMERS]);
  const shouldShowWelcomeMessage = sanitizeShouldShowWelcomeMessage(
    legacyData[V2_STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE],
  );

  return {
    [STORAGE_KEY.CHECKED_ALGORITHM_IDS]: checkedAlgorithmIds,
    [STORAGE_KEY.QUICK_SLOTS]: quickSlots,
    [STORAGE_KEY.TOTAMJUNG_THEME]: totamjungTheme,
    [STORAGE_KEY.HIDER_OPTIONS]: hiderOptions,
    [STORAGE_KEY.RANDOM_DEFENSE_HISTORY]: randomDefenseHistory,
    [STORAGE_KEY.IS_TIER_HIDDEN]: isTierHidden,
    [STORAGE_KEY.FONT_NO]: fontNo,
    [STORAGE_KEY.TIMERS]: timers,
    [STORAGE_KEY.GACHA_OPTIONS]: DEFAULT_GACHA_OPTIONS,
    [STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE]: shouldShowWelcomeMessage,
    [STORAGE_KEY.DATA_VERSION]: 3,
  };
};
