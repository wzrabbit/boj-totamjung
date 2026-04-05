import {
  isQuickSlot,
  isHotkey,
  isV1RepairableLegacyQuickSlotOptions,
  isRepairableQuickSlotOptions,
  isV1QuickSlotOptions,
  isQuickSlotOptions,
  isQuickSlotNo,
} from '../validators/quickSlotsValidator';
import {
  DEFAULT_QUICK_SLOT_OPTIONS,
  DEFAULT_V1_QUICK_SLOTS,
} from '@/constants/defaultValues';
import {
  MAX_CUSTOM_QUERY_LENGTH,
  TITLE_MAX_LENGTH,
} from '@/constants/randomDefense';
import type { QuickSlotOptions, QuickSlotNo, QuickSlot } from '@/types/randomDefense';
import { V1 } from '@/types/legacyData';

const SLOT_NOS: QuickSlotNo[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

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

export const sanitizeQuickSlotOptions = (quickSlots: unknown): QuickSlotOptions => {
  if (!isRepairableQuickSlotOptions(quickSlots)) {
    return DEFAULT_QUICK_SLOT_OPTIONS;
  }

  const hotkey =
    'hotkey' in quickSlots && isHotkey(quickSlots.hotkey)
      ? quickSlots.hotkey
      : 'Alt';
  const selectedSlotNo =
    'selectedSlotNo' in quickSlots && isQuickSlotNo(quickSlots.selectedSlotNo)
      ? quickSlots.selectedSlotNo
      : 1;

  const sanitizedQuickSlots = {
    ...quickSlots,
    hotkey,
    selectedSlotNo,
  };

  SLOT_NOS.forEach((slotNo) => {
    const slot = sanitizedQuickSlots.slots[slotNo];
    sanitizedQuickSlots.slots[slotNo] = sanitizeQuickSlot(slot, slotNo);
  });

  return isQuickSlotOptions(sanitizedQuickSlots)
    ? sanitizedQuickSlots
    : DEFAULT_QUICK_SLOT_OPTIONS;
};

export const sanitizeV1QuickSlotOptions = (
  legacyQuickSlots: unknown,
): V1.QuickSlotOptions => {
  if (!isV1RepairableLegacyQuickSlotOptions(legacyQuickSlots)) {
    return DEFAULT_V1_QUICK_SLOTS;
  }

  const { selectedNo, ...slots } = legacyQuickSlots;

  const sanitizedSlotNo = isQuickSlotNo(selectedNo)
    ? legacyQuickSlots.selectedNo
    : 1;

  const sanitizedLegacyQuickSlots = {
    ...slots,
    selectedNo: sanitizedSlotNo,
  };

  SLOT_NOS.forEach((slotNo) => {
    const slot = sanitizedLegacyQuickSlots[slotNo];
    sanitizedLegacyQuickSlots[slotNo] = sanitizeQuickSlot(slot, slotNo);
  });

  return isV1QuickSlotOptions(sanitizedLegacyQuickSlots)
    ? sanitizedLegacyQuickSlots
    : DEFAULT_V1_QUICK_SLOTS;
};
