import { STORAGE_KEY } from '@/constants/commands';
import type { CheckedAlgorithmIds } from '@/types/algorithm';
import type { QuickSlotsResponse } from '@/types/randomDefense';
import type { TotamjungTheme } from '@/types/totamjungTheme';
import type { HiderOptionsResponse } from '@/types/algorithm';
import type { RandomDefenseHistoryResponse } from '@/types/randomDefense';
import type { FontNo } from '@/types/font';
import type { TimersResponse } from '@/types/algorithm';

export interface OptionsDataResponse {
  [STORAGE_KEY.CHECKED_ALGORITHM_IDS]: CheckedAlgorithmIds;
  [STORAGE_KEY.QUICK_SLOTS]: QuickSlotsResponse;
  [STORAGE_KEY.TOTAMJUNG_THEME]: TotamjungTheme;
  [STORAGE_KEY.HIDER_OPTIONS]: HiderOptionsResponse;
  [STORAGE_KEY.RANDOM_DEFENSE_HISTORY]: RandomDefenseHistoryResponse['randomDefenseHistory'];
  [STORAGE_KEY.IS_TIER_HIDDEN]: RandomDefenseHistoryResponse['isHidden'];
  [STORAGE_KEY.FONT_NO]: FontNo;
  [STORAGE_KEY.TIMERS]: TimersResponse['timers'];
  [STORAGE_KEY.DATA_VERSION]: 'v1.2';
}

export interface OptionsSectionProps {
  show: boolean;
}

export type OptionsNavCategory =
  | 'algorithmHider'
  | 'randomDefense'
  | 'appearanceAndDataManage';
