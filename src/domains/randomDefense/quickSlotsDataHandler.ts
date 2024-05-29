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

const sanitizeSlot = (slot: unknown, slotNo: SlotNo): Slot => {
  if (!isSlot(slot)) {
    return { isEmpty: true };
  }

  if (
    !slot.isEmpty &&
    (slot.query.trim() === '' || slot.query.length > MAX_CUSTOM_QUERY_LENGTH)
  ) {
    return { isEmpty: true };
  }

  if (
    !slot.isEmpty &&
    (slot.title.trim() === '' || slot.title.length > TITLE_MAX_LENGTH)
  ) {
    return {
      ...slot,
      isEmpty: false,
      title: `추첨 ${slotNo}`,
    };
  }

  return slot;
};

const sanitizeQuickSlots = (quickSlots: unknown): QuickSlotsResponse => {
  if (!isRepairableQuickSlotsResponse(quickSlots)) {
    return EMPTY_VALID_QUICK_SLOTS_RESPONSE;
  }

  const hotkey =
    'hotkey' in quickSlots && isHotkey(quickSlots.hotkey)
      ? quickSlots.hotkey
      : 'Alt';
  const selectedSlotNo =
    'selectedSlotNo' in quickSlots && isSlotNo(quickSlots.selectedSlotNo)
      ? quickSlots.selectedSlotNo
      : 1;

  const sanitizedQuickSlots = {
    ...quickSlots,
    hotkey,
    selectedSlotNo,
  };

  SLOT_NOS.forEach((slotNo) => {
    const slot = sanitizedQuickSlots.slots[slotNo];
    sanitizedQuickSlots.slots[slotNo] = sanitizeSlot(slot, slotNo);
  });

  return isQuickSlotsResponse(sanitizedQuickSlots)
    ? sanitizedQuickSlots
    : EMPTY_VALID_QUICK_SLOTS_RESPONSE;
};

const sanitizeLegacyQuickSlots = (
  legacyQuickSlots: unknown,
): LegacyQuickSlotsResponse => {
  if (!isRepairableLegacyQuickSlotsResponse(legacyQuickSlots)) {
    return EMPTY_VALID_LEGACY_QUICK_SLOTS_RESPONSE;
  }

  const { selectedNo, ...slots } = legacyQuickSlots;

  const sanitizedSlotNo = isSlotNo(selectedNo)
    ? legacyQuickSlots.selectedNo
    : 1;

  const sanitizedLegacyQuickSlots = {
    ...slots,
    selectedNo: sanitizedSlotNo,
  };

  SLOT_NOS.forEach((slotNo) => {
    const slot = sanitizedLegacyQuickSlots[slotNo];
    sanitizedLegacyQuickSlots[slotNo] = sanitizeSlot(slot, slotNo);
  });

  return isLegacyQuickSlotsResponse(sanitizedLegacyQuickSlots)
    ? sanitizedLegacyQuickSlots
    : EMPTY_VALID_LEGACY_QUICK_SLOTS_RESPONSE;
};

const convertLegacyToLatestQuickSlots = (
  legacyQuickSlots: LegacyQuickSlotsResponse,
): QuickSlotsResponse => {
  const { selectedNo, ...legacyQuickSlotsWithoutSelectedNo } = legacyQuickSlots;

  return {
    selectedSlotNo: selectedNo,
    slots: legacyQuickSlotsWithoutSelectedNo,
    hotkey: 'Alt',
  };
};
