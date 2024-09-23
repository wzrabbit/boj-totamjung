import {
  LEGACY_SYNC_STORAGE_KEY,
  LEGACY_LOCAL_STORAGE_KEY,
  STORAGE_KEY,
} from '@/constants/commands';
import { sanitizeCheckedAlgorithmIds } from './sanitizers/checkedAlgorithmIdsSanitizer';
import { sanitizeLegacyQuickSlots } from './sanitizers/quickSlotsSanitizer';
import { sanitizeLegacyRandomDefenseHistory } from './sanitizers/randomDefenseHistorySanitizer';
import { sanitizeIsTierHidden } from './sanitizers/isTierHiddenSanitizer';
import { convertLegacyToLatestQuickSlots } from './converters/legacyToLatestQuickSlotsConverter';
import { convertLegacyToLatestRandomDefenseHistory } from './converters/legacyToLatestRandomDefenseHistory';
import { convertLegacyToLatestHiderOptions } from './converters/legacyToLatestHiderOptionsConverter';
import { convertLegacyToLatestTotamjungTheme } from './converters/legacyToLatestTotamjungThemeConverter';
import { convertLegacyToLatestFontNoBySettings } from './converters/legacyToLatestFontNo';

export const updateAllLegacyData = async () => {
  const { dataVersion } = await browser.storage.local.get(
    STORAGE_KEY.DATA_VERSION,
  );

  if (dataVersion === 'v1.2') {
    return;
  }

  const [legacySyncData, legacyLocalData] = await Promise.all([
    browser.storage.sync.get(Object.values(LEGACY_SYNC_STORAGE_KEY)),
    browser.storage.local.get(Object.values(LEGACY_LOCAL_STORAGE_KEY)),
  ]);

  const legacyQuickSlots = sanitizeLegacyQuickSlots(
    legacySyncData[LEGACY_SYNC_STORAGE_KEY.QUICK_SLOTS],
  );
  const legacyRandomDefenseHistory = sanitizeLegacyRandomDefenseHistory(
    legacyLocalData[LEGACY_LOCAL_STORAGE_KEY.RANDOM_DEFENSE_HISTORY],
  );

  const checkedAlgorithmIds = sanitizeCheckedAlgorithmIds(
    legacySyncData[LEGACY_SYNC_STORAGE_KEY.CHECKED_ALGORITHM_IDS],
  );
  const totamjungTheme = convertLegacyToLatestTotamjungTheme(
    legacySyncData[LEGACY_SYNC_STORAGE_KEY.TOTAMJUNG_THEME],
  );
  const hiderOptions = convertLegacyToLatestHiderOptions(
    legacySyncData[LEGACY_SYNC_STORAGE_KEY.TIMER],
    legacySyncData[LEGACY_SYNC_STORAGE_KEY.SETTINGS],
  );
  const quickSlots = convertLegacyToLatestQuickSlots(legacyQuickSlots);
  const randomDefenseHistory = convertLegacyToLatestRandomDefenseHistory(
    legacyRandomDefenseHistory,
  );
  const isTierHidden = sanitizeIsTierHidden(
    legacySyncData[STORAGE_KEY.IS_TIER_HIDDEN],
  );
  const fontNo = convertLegacyToLatestFontNoBySettings(
    legacySyncData[LEGACY_SYNC_STORAGE_KEY.SETTINGS],
  );

  browser.storage.local.set({
    [STORAGE_KEY.CHECKED_ALGORITHM_IDS]: checkedAlgorithmIds,
    [STORAGE_KEY.QUICK_SLOTS]: quickSlots,
    [STORAGE_KEY.TOTAMJUNG_THEME]: totamjungTheme,
    [STORAGE_KEY.HIDER_OPTIONS]: hiderOptions,
    [STORAGE_KEY.RANDOM_DEFENSE_HISTORY]: randomDefenseHistory,
    [STORAGE_KEY.IS_TIER_HIDDEN]: isTierHidden,
    [STORAGE_KEY.FONT_NO]: fontNo,
    [STORAGE_KEY.DATA_VERSION]: 'v1.2',
  });
};
