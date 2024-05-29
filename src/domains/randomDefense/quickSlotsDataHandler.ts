import { LEGACY_SYNC_STORAGE_KEY, SYNC_STORAGE_KEY } from '~constants/commands';
import { TITLE_MAX_LENGTH } from '~constants/randomDefense';
import {
  isSlot,
  isRepairableQuickSlotsResponse,
  isRepairableLegacyQuickSlotsResponse,
  isHotkey,
  isSlotNo,
  isQuickSlotsResponse,
  isLegacyQuickSlotsResponse,
} from '~types/typeGuards';
import { MAX_CUSTOM_QUERY_LENGTH } from '~constants/randomDefense';
import type {
  QuickSlotsResponse,
  LegacyQuickSlotsResponse,
  Slot,
  SlotNo,
  QuickSlots,
} from '~types/randomDefense';

const EMPTY_VALID_QUICK_SLOTS: QuickSlots = {
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

const EMPTY_VALID_QUICK_SLOTS_RESPONSE: QuickSlotsResponse = {
  hotkey: 'Alt',
  selectedSlotNo: 1,
  slots: EMPTY_VALID_QUICK_SLOTS,
};

const EMPTY_VALID_LEGACY_QUICK_SLOTS_RESPONSE: LegacyQuickSlotsResponse = {
  selectedNo: 1,
  ...EMPTY_VALID_QUICK_SLOTS,
};

const SLOT_NOS: SlotNo[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
