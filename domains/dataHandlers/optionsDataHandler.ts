import { STORAGE_KEY } from '@/constants/commands';
import { fetchQuickSlotOptions } from './quickSlotsDataHandler';
import { fetchTotamjungTheme } from './totamjungThemeDataHandler';
import { fetchHiderOptions } from './hiderOptionsDataHandler';
import { fetchRandomDefenseHistoryOptions } from './randomDefenseHistoryDataHandler';
import { fetchFontNo } from './fontNoDataHandler';
import type { OptionsData } from '@/types/options';
import { DEFAULT_EMPTY_DATA } from '@/constants/defaultValues';
import {
  isOptionsData,
  isV2OptionsData,
  isV3OptionsData,
  isV4OptionsData,
} from './validators/optionsDataValidator';
import { fetchGachaOptions } from './gachaOptionsHandler';
import { fetchShouldShowWelcomeMessage } from './shouldShowWelcomeMessageDataHandler';
import { isObject } from '@/types/typeGuards';
import { VALID_VERSIONS } from '@/constants/validVersions';
import { updateAllLegacyData } from './legacyDataUpdater';
import { fetchWidgetTimerOptions } from './widgetTimerOptionsDataHandler';

export const fetchOptionsData = async (): Promise<OptionsData> => {
  const [
    quickSlotOptions,
    totamjungTheme,
    hiderOptions,
    randomDefenseHistoryOptions,
    widgetTimerOptions,
    gachaOptions,
    fontNo,
    shouldShowWelcomeMessage,
  ] = await Promise.all([
    fetchQuickSlotOptions(),
    fetchTotamjungTheme(),
    fetchHiderOptions(),
    fetchRandomDefenseHistoryOptions(),
    fetchWidgetTimerOptions(),
    fetchGachaOptions(),
    fetchFontNo(),
    fetchShouldShowWelcomeMessage(),
  ]);

  return {
    [STORAGE_KEY.QUICK_SLOT_OPTIONS]: quickSlotOptions,
    [STORAGE_KEY.THEME]: totamjungTheme,
    [STORAGE_KEY.HIDER_OPTIONS]: hiderOptions,
    [STORAGE_KEY.RANDOM_DEFENSE_HISTORY_OPTIONS]: randomDefenseHistoryOptions,
    [STORAGE_KEY.WIDGET_TIMER_OPTIONS]: widgetTimerOptions,
    [STORAGE_KEY.FONT_NO]: fontNo,
    [STORAGE_KEY.GACHA_OPTIONS]: gachaOptions,
    [STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE]: shouldShowWelcomeMessage,
    [STORAGE_KEY.DATA_VERSION]: 5,
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

  if (dataVersion === 3 && !isV3OptionsData(data)) {
    return false;
  }

  if (dataVersion === 4 && !isV4OptionsData(data)) {
    return false;
  }

  if (dataVersion !== 5) {
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
