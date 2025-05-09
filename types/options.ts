import { STORAGE_KEY } from '@/constants/commands';
import type { CheckedAlgorithmIds } from '@/types/algorithm';
import type { QuickSlots } from '@/types/randomDefense';
import type { TotamjungTheme } from '@/types/mainTheme';
import type { HiderOptions } from '@/types/algorithm';
import type { RandomDefenseHistoryResponse } from '@/types/randomDefense';
import type { FontNo } from '@/types/font';
import type { Timer } from '@/types/algorithm';
import type { GachaOptions } from '@/types/gacha';

export interface OptionsData {
  [STORAGE_KEY.CHECKED_ALGORITHM_IDS]: CheckedAlgorithmIds;
  [STORAGE_KEY.QUICK_SLOTS]: QuickSlots;
  [STORAGE_KEY.TOTAMJUNG_THEME]: TotamjungTheme;
  [STORAGE_KEY.HIDER_OPTIONS]: HiderOptions;
  [STORAGE_KEY.RANDOM_DEFENSE_HISTORY]: RandomDefenseHistoryResponse['randomDefenseHistory'];
  [STORAGE_KEY.IS_TIER_HIDDEN]: RandomDefenseHistoryResponse['isHidden'];
  [STORAGE_KEY.FONT_NO]: FontNo;
  [STORAGE_KEY.TIMERS]: Timer[];
  [STORAGE_KEY.GACHA_OPTIONS]: GachaOptions;
  [STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE]: boolean;
  [STORAGE_KEY.DATA_VERSION]: 3;
}

export interface OptionsSectionProps {
  show: boolean;
}

export type OptionsNavCategory =
  | 'algorithmHider'
  | 'randomDefense'
  | 'appearanceAndDataManage';
