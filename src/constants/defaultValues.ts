import type {
  QuickSlots,
  QuickSlotsResponse,
  LegacyQuickSlotsResponse,
} from '~types/randomDefense';

export const DEFAULT_CHECKED_ALGORITHM_IDS = [1, 2];

const DEFAULT_QUICK_SLOTS: QuickSlots = {
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

export const DEFAULT_QUICK_SLOTS_RESPONSE: QuickSlotsResponse = {
  hotkey: 'Alt',
  selectedSlotNo: 1,
  slots: DEFAULT_QUICK_SLOTS,
};

export const DEFAULT_LEGACY_QUICK_SLOTS_RESPONSE: LegacyQuickSlotsResponse = {
  selectedNo: 1,
  ...DEFAULT_QUICK_SLOTS,
};

export const DEFAULT_HIDER_OPTIONS = {
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

export const DEFAULT_TOTAMJUNG_THEME = 'none';

export const DEFAULT_IS_TIER_HIDDEN = false;

export const DEFAULT_RANDOM_DEFENSE_HISTORY = [];
