import { STORAGE_KEY } from '@/constants/commands';
import { fetchCheckedAlgorithmIds } from './checkedAlgorithmsHandler';
import { fetchQuickSlots } from './quickSlotsDataHandler';
import { fetchTotamjungTheme } from './totamjungThemeDataHandler';
import { fetchHiderOptions } from './hiderOptionsDataHandler';
import { fetchRandomDefenseHistory } from './randomDefenseHistoryDataHandler';
import { fetchFontNo } from './fontNoDataHandler';
import { fetchTimers } from './timersDataHandler';
import type { OptionsData } from '@/types/options';
import { DEFAULT_EMPTY_DATA } from '@/constants/defaultValues';
import {
  isOptionsData,
  isV2OptionsData,
} from './validators/optionsDataValidator';
import { fetchGachaOptions } from './gachaOptionsHandler';
import { fetchShouldShowWelcomeMessage } from './shouldShowWelcomeMessageDataHandler';
import { isObject } from '@/types/typeGuards';
import { VALID_VERSIONS } from '@/constants/validVersions';
import { updateAllLegacyData } from './legacyDataUpdater';

export const fetchOptionsData = async (): Promise<OptionsData> => {
  const [
    checkedAlgorithmIds,
    quickSlots,
    totamjungTheme,
    hiderOptions,
    randomDefenseHistoryResponse,
    timers,
    gachaOptions,
    fontNo,
    shouldShowWelcomeMessage,
  ] = await Promise.all([
    fetchCheckedAlgorithmIds(),
    fetchQuickSlots(),
    fetchTotamjungTheme(),
    fetchHiderOptions(),
    fetchRandomDefenseHistory(),
    fetchTimers(),
    fetchGachaOptions(),
    fetchFontNo(),
    fetchShouldShowWelcomeMessage(),
  ]);

  return {
    [STORAGE_KEY.CHECKED_ALGORITHM_IDS]: checkedAlgorithmIds,
    [STORAGE_KEY.QUICK_SLOTS]: quickSlots,
    [STORAGE_KEY.TOTAMJUNG_THEME]: totamjungTheme,
    [STORAGE_KEY.HIDER_OPTIONS]: hiderOptions,
    [STORAGE_KEY.RANDOM_DEFENSE_HISTORY]:
      randomDefenseHistoryResponse.randomDefenseHistory,
    [STORAGE_KEY.IS_TIER_HIDDEN]: randomDefenseHistoryResponse.isHidden,
    [STORAGE_KEY.FONT_NO]: fontNo,
    [STORAGE_KEY.TIMERS]: timers,
    [STORAGE_KEY.GACHA_OPTIONS]: gachaOptions,
    [STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE]: shouldShowWelcomeMessage,
    [STORAGE_KEY.DATA_VERSION]: 3,
  };
};

export const saveOptionsData = async (data: unknown) => {
  if (!isObject(data) || !('dataVersion' in data)) {
    return false;
  }

  const { dataVersion } = data;

  if (
    (typeof dataVersion !== 'number' && typeof dataVersion !== 'string') ||
    !VALID_VERSIONS.includes(dataVersion)
  ) {
    return false;
  }

  if ((dataVersion === 'v1.2' || dataVersion === 2) && !isV2OptionsData(data)) {
    return false;
  }

  if (dataVersion !== 3) {
    await browser.storage.local.set(data);
    await updateAllLegacyData();
    return true;
  }

  if (!isOptionsData(data)) {
    return false;
  }

  await browser.storage.local.set(data);
  return true;
};

export const deleteOptionsData = async () => {
  await browser.storage.local.set(DEFAULT_EMPTY_DATA);

  return true;
};
