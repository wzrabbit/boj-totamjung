import {
  isQuickSlot,
  isHotkey,
  isV1RepairableQuickSlotOptions,
  isRepairableQuickSlotOptions,
  isV1QuickSlotOptions,
  isQuickSlotOptions,
  isQuickSlotNo,
} from '../validators/quickSlotsValidator';
import {
  DEFAULT_QUICK_SLOTS,
  DEFAULT_V1_QUICK_SLOTS,
} from '@/constants/defaultValues';
import {
  MAX_CUSTOM_QUERY_LENGTH,
  TITLE_MAX_LENGTH,
} from '@/constants/randomDefense';
import type { QuickSlots, QuickSlot, QuickSlotNo } from '@/types/randomDefense';
import { V1 } from '@/types/legacyData';

const QUICK_SLOT_NOS: QuickSlotNo[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const sanitizeQuickSlot = (slot: unknown, slotNo: QuickSlotNo): QuickSlot => {
  if (!isQuickSlot(slot)) {
    return { isEmpty: true };
  }

  if (slot.isEmpty) {
    return { isEmpty: true };
  }

  if (slot.query.trim() === '' || slot.query.length > MAX_CUSTOM_QUERY_LENGTH) {
    return { isEmpty: true };
  }

  if (slot.title.trim() === '' || slot.title.length > TITLE_MAX_LENGTH) {
    return {
      ...slot,
      isEmpty: false,
      title: `추첨 ${slotNo}`,
    };
  }

  return slot;
};

export const sanitizeQuickSlots = (quickSlots: unknown): QuickSlots => {
  if (!isRepairableQuickSlotOptions(quickSlots)) {
    return DEFAULT_QUICK_SLOTS;
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

  QUICK_SLOT_NOS.forEach((slotNo) => {
    const slot = sanitizedQuickSlots.slots[slotNo];
    sanitizedQuickSlots.slots[slotNo] = sanitizeSlot(slot, slotNo);
  });

  return isQuickSlots(sanitizedQuickSlots)
    ? sanitizedQuickSlots
    : DEFAULT_QUICK_SLOTS;
};

export const sanitizeV1QuickSlots = (
  legacyQuickSlots: unknown,
): V1.QuickSlots => {
  if (!isV1RepairableQuickSlots(legacyQuickSlots)) {
    return DEFAULT_V1_QUICK_SLOTS;
  }

  const { selectedNo, ...slots } = legacyQuickSlots;

  const sanitizedSlotNo = isSlotNo(selectedNo)
    ? legacyQuickSlots.selectedNo
    : 1;

  const sanitizedLegacyQuickSlots = {
    ...slots,
    selectedNo: sanitizedSlotNo,
  };

  QUICK_SLOT_NOS.forEach((slotNo) => {
    const slot = sanitizedLegacyQuickSlots[slotNo];
    sanitizedLegacyQuickSlots[slotNo] = sanitizeSlot(slot, slotNo);
  });

  return isV1QuickSlots(sanitizedLegacyQuickSlots)
    ? sanitizedLegacyQuickSlots
    : DEFAULT_V1_QUICK_SLOTS;
};
