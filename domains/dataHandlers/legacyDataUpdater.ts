import {
  V1_SYNC_STORAGE_KEY,
  V1_LOCAL_STORAGE_KEY,
  V2_STORAGE_KEY,
  STORAGE_KEY,
} from '@/constants/commands';
import { sanitizeCheckedAlgorithmIds } from './sanitizers/checkedAlgorithmIdsSanitizer';
import {
  sanitizeV1QuickSlots,
  sanitizeQuickSlots,
} from './sanitizers/quickSlotsSanitizer';
import {
  sanitizeV1RandomDefenseHistory,
  sanitizeRandomDefenseHistory,
} from './sanitizers/randomDefenseHistorySanitizer';
import { sanitizeIsTierHidden } from './sanitizers/isTierHiddenSanitizer';
import { sanitizeFontNo } from './sanitizers/fontNoSanitizer';
import { sanitizeTimers } from './sanitizers/timersSanitizer';
import { sanitizeV2HiderOptions } from './sanitizers/hiderOptionsSanitizer';
import { convertV1ToLatestQuickSlots } from './converters/legacyToLatestQuickSlotsConverter';
import { convertV1ToLatestRandomDefenseHistory } from './converters/legacyToLatestRandomDefenseHistory';
import {
  convertV1ToV2HiderOptions,
  convertV2ToLatestHiderOptions,
} from './converters/legacyToLatestHiderOptionsConverter';
import { convertV1ToLatestTotamjungThemeBySettings } from './converters/legacyToLatestTotamjungThemeConverter';
import { convertV1ToLatestFontNoBySettings } from './converters/legacyToLatestFontNo';
import { convertV1ToLatestTimers } from './converters/legacyToLatestTimers';
import { sanitizeTotamjungTheme } from './sanitizers/totamjungThemeSanitizer';
import { DEFAULT_GACHA_OPTIONS } from '@/constants/defaultValues';
import { deleteOptionsData } from './optionsDataHandler';

const validVersions = [2, 'v1.2', 3] as const;

export const updateV1ToV2Data = async () => {
  const { dataVersion } = await browser.storage.local.get(
    STORAGE_KEY.DATA_VERSION,
  );

  if (dataVersion === 'v1.2') {
    return;
  }

  if (typeof dataVersion === 'number' && dataVersion !== 1) {
    return;
  }

  const [legacySyncData, legacyLocalData] = await Promise.all([
    browser.storage.sync.get(Object.values(V1_SYNC_STORAGE_KEY)),
    browser.storage.local.get(Object.values(V1_LOCAL_STORAGE_KEY)),
  ]);

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

  browser.storage.local.set({
    [V2_STORAGE_KEY.CHECKED_ALGORITHM_IDS]: checkedAlgorithmIds,
    [V2_STORAGE_KEY.QUICK_SLOTS]: quickSlots,
    [V2_STORAGE_KEY.TOTAMJUNG_THEME]: totamjungTheme,
    [V2_STORAGE_KEY.HIDER_OPTIONS]: hiderOptions,
    [V2_STORAGE_KEY.RANDOM_DEFENSE_HISTORY]: randomDefenseHistory,
    [V2_STORAGE_KEY.IS_TIER_HIDDEN]: isTierHidden,
    [V2_STORAGE_KEY.FONT_NO]: fontNo,
    [V2_STORAGE_KEY.TIMERS]: timers,
    [V2_STORAGE_KEY.DATA_VERSION]: 2,
  });
};

export const updateV2ToLatestData = async () => {
  const { dataVersion } = await browser.storage.local.get(
    STORAGE_KEY.DATA_VERSION,
  );

  if (!['v1.2', 2].includes(dataVersion)) {
    return;
  }

  const legacyData = await browser.storage.local.get(
    Object.values(V2_STORAGE_KEY),
  );

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

  browser.storage.local.set({
    [STORAGE_KEY.CHECKED_ALGORITHM_IDS]: checkedAlgorithmIds,
    [STORAGE_KEY.QUICK_SLOTS]: quickSlots,
    [STORAGE_KEY.TOTAMJUNG_THEME]: totamjungTheme,
    [STORAGE_KEY.HIDER_OPTIONS]: hiderOptions,
    [STORAGE_KEY.RANDOM_DEFENSE_HISTORY]: randomDefenseHistory,
    [STORAGE_KEY.IS_TIER_HIDDEN]: isTierHidden,
    [STORAGE_KEY.FONT_NO]: fontNo,
    [STORAGE_KEY.TIMERS]: timers,
    [STORAGE_KEY.GACHA_OPTIONS]: DEFAULT_GACHA_OPTIONS,
    [STORAGE_KEY.DATA_VERSION]: 3,
  });
};

export const updateAllLegacyData = async () => {
  const { dataVersion } = await browser.storage.local.get(
    STORAGE_KEY.DATA_VERSION,
  );

  if (!validVersions.includes(dataVersion) && typeof dataVersion === 'number') {
    await deleteOptionsData();
    return;
  }

  if (!dataVersion) {
    await updateV1ToV2Data();
    await updateV2ToLatestData();
    return;
  }

  if (dataVersion === 'v1.2' || dataVersion < 3) {
    await updateV2ToLatestData();
  }
};
