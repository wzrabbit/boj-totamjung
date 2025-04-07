import { STORAGE_KEY } from '@/constants/commands';
import { fetchCheckedAlgorithmIds } from './checkedAlgorithmsHandler';
import { fetchQuickSlots } from './quickSlotsDataHandler';
import { fetchTotamjungTheme } from './totamjungThemeDataHandler';
import { fetchHiderOptions } from './hiderOptionsDataHandler';
import { fetchRandomDefenseHistory } from './randomDefenseHistoryDataHandler';
import { fetchFontNo } from './fontNoDataHandler';
import { fetchTimers } from './timersDataHandler';
import type { OptionsDataResponse } from '@/types/options';
import { DEFAULT_EMPTY_DATA } from '@/constants/defaultValues';
import { isOptionsDataResponse } from './validators/optionsDataValidator';

export const fetchOptionsData = async (): Promise<OptionsDataResponse> => {
  const [
    checkedAlgorithmIds,
    quickSlotsResponse,
    totamjungTheme,
    hiderOptionsResponse,
    randomDefenseHistoryResponse,
    timers,
    fontNo,
  ] = await Promise.all([
    fetchCheckedAlgorithmIds(),
    fetchQuickSlots(),
    fetchTotamjungTheme(),
    fetchHiderOptions(),
    fetchRandomDefenseHistory(),
    fetchTimers(),
    fetchFontNo(),
  ]);

  return {
    [STORAGE_KEY.CHECKED_ALGORITHM_IDS]: checkedAlgorithmIds,
    [STORAGE_KEY.QUICK_SLOTS]: quickSlotsResponse,
    [STORAGE_KEY.TOTAMJUNG_THEME]: totamjungTheme,
    [STORAGE_KEY.HIDER_OPTIONS]: hiderOptionsResponse,
    [STORAGE_KEY.RANDOM_DEFENSE_HISTORY]:
      randomDefenseHistoryResponse.randomDefenseHistory,
    [STORAGE_KEY.IS_TIER_HIDDEN]: randomDefenseHistoryResponse.isHidden,
    [STORAGE_KEY.FONT_NO]: fontNo,
    [STORAGE_KEY.TIMERS]: timers,
    [STORAGE_KEY.DATA_VERSION]: 'v1.2',
  };
};

export const saveOptionsData = async (data: unknown) => {
  if (!isOptionsDataResponse(data)) {
    return false;
  }

  await browser.storage.local.set({
    ...data,
    [STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE]: false,
  });

  return true;
};

export const deleteOptionsData = async () => {
  await browser.storage.local.set(DEFAULT_EMPTY_DATA);

  return true;
};
