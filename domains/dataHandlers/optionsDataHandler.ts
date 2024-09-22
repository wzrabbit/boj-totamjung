import { STORAGE_KEY } from '@/constants/commands';
import { fetchCheckedAlgorithmIds } from './checkedAlgorithmsHandler';
import { fetchQuickSlots } from './quickSlotsDataHandler';
import { fetchTotamjungTheme } from './totamjungThemeDataHandler';
import { fetchHiderOptions } from './hiderOptionsDataHandler';
import { fetchRandomDefenseHistory } from './randomDefenseHistoryDataHandler';
import { fetchFontNo } from './fontNoDataHandler';
import { fetchTimers } from './timersDataHandler';
import type { OptionsDataResponse } from '@/types/options';
import { DEFAULT_INITIAL_DATA } from '@/constants/defaultValues';
import { isOptionsDataResponse } from './validators/optionsDataValidator';

export const fetchOptionsData = async (): Promise<OptionsDataResponse> => {
  const [
    checkedAlgorithmIdsResponse,
    quickSlotsResponse,
    totamjungThemeResponse,
    hiderOptionsResponse,
    randomDefenseHistoryResponse,
    timersResponse,
    fontNoResponse,
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
    [STORAGE_KEY.CHECKED_ALGORITHM_IDS]: checkedAlgorithmIdsResponse.checkedIds,
    [STORAGE_KEY.QUICK_SLOTS]: quickSlotsResponse,
    [STORAGE_KEY.TOTAMJUNG_THEME]: totamjungThemeResponse.totamjungTheme,
    [STORAGE_KEY.HIDER_OPTIONS]: hiderOptionsResponse,
    [STORAGE_KEY.RANDOM_DEFENSE_HISTORY]:
      randomDefenseHistoryResponse.randomDefenseHistory,
    [STORAGE_KEY.IS_TIER_HIDDEN]: randomDefenseHistoryResponse.isHidden,
    [STORAGE_KEY.FONT_NO]: fontNoResponse['fontNo'],
    [STORAGE_KEY.TIMERS]: timersResponse['timers'],
    [STORAGE_KEY.DATA_VERSION]: 'v1.2',
  };
};

export const saveOptionsData = async (data: unknown) => {
  if (!isOptionsDataResponse(data)) {
    return false;
  }

  await chrome.storage.local.set(data);

  return true;
};

export const deleteOptionsData = async () => {
  await chrome.storage.local.set(DEFAULT_INITIAL_DATA);

  return true;
};
