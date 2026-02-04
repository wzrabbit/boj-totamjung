import { STORAGE_KEY } from '@/constants/commands';
import type { QuickSlotOptions } from '@/types/randomDefense';
import type { TotamjungTheme } from '@/types/mainTheme';
import type { HiderOptions } from '@/types/algorithm';
import type { RandomDefenseHistoryOptions } from '@/types/randomDefense';
import type { FontNo } from '@/types/font';
import type { GachaOptions } from '@/types/gacha';

export interface OptionsData {
  [STORAGE_KEY.QUICK_SLOT_OPTIONS]: QuickSlotOptions;
  [STORAGE_KEY.THEME]: TotamjungTheme;
  [STORAGE_KEY.HIDER_OPTIONS]: HiderOptions;
  [STORAGE_KEY.RANDOM_DEFENSE_HISTORY_OPTIONS]: RandomDefenseHistoryOptions;
  [STORAGE_KEY.FONT_NO]: FontNo;
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
