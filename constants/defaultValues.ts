import type { QuickSlots, QuickSlotOptions } from '@/types/randomDefense';
import type { V1, V2, V3, V4 } from '@/types/legacyData';
import { STORAGE_KEY } from './commands';
import type { HiderOptions } from '@/types/algorithm';
import type { RandomDefenseHistoryOptions } from '@/types/randomDefense';
import type { WidgetTimerOptions } from '@/types/widgetTimer';

export const DEFAULT_CHECKED_ALGORITHM_IDS = [1, 2];

export const DEFAULT_QUICK_SLOTS: QuickSlots = {
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

export const DEFAULT_QUICK_SLOT_OPTIONS: QuickSlotOptions = {
  hotkey: 'Alt',
  selectedSlotNo: 1,
  slots: DEFAULT_QUICK_SLOTS,
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

export const DEFAULT_V3_HIDER_OPTIONS: V3.HiderOptions = {
  ...DEFAULT_V2_HIDER_OPTIONS,
  shouldRevealTierOnHover: false,
} as const;

export const DEFAULT_V4_HIDER_OPTIONS: V4.HiderOptions = {
  ...DEFAULT_V3_HIDER_OPTIONS,
  shouldHideSource: false,
} as const;

export const DEFAULT_HIDER_OPTIONS: HiderOptions = {
  ...DEFAULT_V4_HIDER_OPTIONS,
  checkedAlgorithmIds: DEFAULT_CHECKED_ALGORITHM_IDS,
  timers: [],
} as const;

export const DEFAULT_THEME = 'none';

export const DEFAULT_IS_TIER_HIDDEN = false;

export const DEFAULT_RANDOM_DEFENSE_HISTORY = [];

export const DEFAULT_FONT_NO = 0;

export const DEFAULT_TIMERS = [];

export const DEFAULT_GACHA_OPTIONS = {
  isTierHidden: false,
  isAudioMuted: true,
} as const;

export const DEFAULT_RANDOM_DEFENSE_HISTORY_OPTIONS: RandomDefenseHistoryOptions =
  {
    history: [],
    isTierHidden: false,
  };

export const DEFAULT_WIDGET_TIMER_OPTIONS: WidgetTimerOptions = {
  mode: 'none',
  durationInfo: {
    type: 'fixed',
    fixed: { hours: 1, minutes: 0 },
    byTier: Array.from({ length: 31 }, () => ({ hours: 0, minutes: 0 })),
  },
  basicTimer: null,
  problemTimers: [],
  isTierHidden: false,
  shouldDeleteExpiredTimers: false,
  warnThreshold: { hours: 0, minutes: 15 },
  dangerThreshold: { hours: 0, minutes: 5 },
  isCollapsed: false,
};

export const DEFAULT_V1_QUICK_SLOTS: V1.QuickSlotOptions = {
  selectedNo: 1,
  ...DEFAULT_QUICK_SLOTS,
};

export const DEFAULT_V2_EMPTY_DATA = {
  dataVersion: 2,
  checkedAlgorithmIds: DEFAULT_CHECKED_ALGORITHM_IDS,
  quickSlots: DEFAULT_QUICK_SLOT_OPTIONS,
  totamjungTheme: DEFAULT_THEME,
  hiderOptions: DEFAULT_V2_HIDER_OPTIONS,
  randomDefenseHistory: DEFAULT_RANDOM_DEFENSE_HISTORY,
  isTierHidden: DEFAULT_IS_TIER_HIDDEN,
  fontNo: DEFAULT_FONT_NO,
  timers: DEFAULT_TIMERS,
  shouldShowWelcomeMessage: false,
};

export const DEFAULT_V3_EMPTY_DATA = {
  ...DEFAULT_V2_EMPTY_DATA,
  dataVersion: 3,
  hiderOptions: DEFAULT_V3_HIDER_OPTIONS,
  gachaOptions: DEFAULT_GACHA_OPTIONS,
};

export const DEFAULT_V4_EMPTY_DATA = {
  ...DEFAULT_V3_EMPTY_DATA,
  dataVersion: 4,
  hiderOptions: DEFAULT_V4_HIDER_OPTIONS,
};

export const DEFAULT_EMPTY_DATA = {
  [STORAGE_KEY.DATA_VERSION]: 5,
  [STORAGE_KEY.QUICK_SLOT_OPTIONS]: DEFAULT_QUICK_SLOT_OPTIONS,
  [STORAGE_KEY.THEME]: DEFAULT_THEME,
  [STORAGE_KEY.HIDER_OPTIONS]: DEFAULT_HIDER_OPTIONS,
  [STORAGE_KEY.RANDOM_DEFENSE_HISTORY_OPTIONS]:
    DEFAULT_RANDOM_DEFENSE_HISTORY_OPTIONS,
  [STORAGE_KEY.WIDGET_TIMER_OPTIONS]: DEFAULT_WIDGET_TIMER_OPTIONS,
  [STORAGE_KEY.FONT_NO]: DEFAULT_FONT_NO,
  [STORAGE_KEY.GACHA_OPTIONS]: DEFAULT_GACHA_OPTIONS,
  [STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE]: false,
};
