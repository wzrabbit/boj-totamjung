import type { Slots, QuickSlots } from '@/types/randomDefense';
import type { V1, V2 } from '@/types/legacyData';
import { STORAGE_KEY } from './commands';
import { HiderOptions } from '@/types/algorithm';

export const DEFAULT_CHECKED_ALGORITHM_IDS = [1, 2];

export const DEFAULT_SLOTS: Slots = {
  1: { isEmpty: true },
  2: { isEmpty: true },
  3: { isEmpty: true },
  4: { isEmpty: true },
  5: { isEmpty: true },
  6: { isEmpty: true },
  7: { isEmpty: true },
  8: { isEmpty: true },
  9: { isEmpty: true },
  0: { isEmpty: true },
} as const;

export const DEFAULT_QUICK_SLOTS: QuickSlots = {
  hotkey: 'Alt',
  selectedSlotNo: 1,
  slots: DEFAULT_SLOTS,
};

export const DEFAULT_V2_HIDER_OPTIONS: V2.HiderOptions = {
  problemTagLockDuration: {
    hours: 0,
    minutes: 20,
  },
  shouldHideTier: false,
  shouldWarnHighTier: false,
  warnTier: 1,
  algorithmHiderUsage: 'click',
  problemTagLockUsage: 'click',
} as const;

export const DEFAULT_HIDER_OPTIONS: HiderOptions = {
  ...DEFAULT_V2_HIDER_OPTIONS,
  shouldRevealTierOnHover: false,
} as const;

export const DEFAULT_TOTAMJUNG_THEME = 'none';

export const DEFAULT_IS_TIER_HIDDEN = false;

export const DEFAULT_RANDOM_DEFENSE_HISTORY = [];

export const DEFAULT_FONT_NO = 0;

export const DEFAULT_TIMERS = [];

export const DEFAULT_GACHA_OPTIONS = {
  isTierHidden: false,
  isAudioMuted: true,
} as const;

export const DEFAULT_V1_QUICK_SLOTS: V1.QuickSlots = {
  selectedNo: 1,
  ...DEFAULT_SLOTS,
};

export const DEFAULT_V2_EMPTY_DATA = {
  [STORAGE_KEY.DATA_VERSION]: 2,
  [STORAGE_KEY.CHECKED_ALGORITHM_IDS]: DEFAULT_CHECKED_ALGORITHM_IDS,
  [STORAGE_KEY.QUICK_SLOTS]: DEFAULT_QUICK_SLOTS,
  [STORAGE_KEY.TOTAMJUNG_THEME]: DEFAULT_TOTAMJUNG_THEME,
  [STORAGE_KEY.HIDER_OPTIONS]: DEFAULT_HIDER_OPTIONS,
  [STORAGE_KEY.RANDOM_DEFENSE_HISTORY]: DEFAULT_RANDOM_DEFENSE_HISTORY,
  [STORAGE_KEY.IS_TIER_HIDDEN]: DEFAULT_IS_TIER_HIDDEN,
  [STORAGE_KEY.FONT_NO]: DEFAULT_FONT_NO,
  [STORAGE_KEY.TIMERS]: DEFAULT_TIMERS,
  [STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE]: false,
};

export const DEFAULT_EMPTY_DATA = {
  ...DEFAULT_V2_EMPTY_DATA,
  [STORAGE_KEY.DATA_VERSION]: 3,
  [STORAGE_KEY.GACHA_OPTIONS]: DEFAULT_GACHA_OPTIONS,
};
