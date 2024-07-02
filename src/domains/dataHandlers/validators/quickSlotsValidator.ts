import { isNumericObject, isObject } from '~types/typeGuards';
import type {
  Hotkey,
  LegacyQuickSlotsResponse,
  QuickSlotsResponse,
  RepairableLegacyQuickSlotsResponse,
  RepairableQuickSlotsResponse,
  Slot,
  SlotNo,
} from '~types/randomDefense';

export const isHotkey = (data: unknown): data is Hotkey => {
  return data === 'Alt' || data === 'F2';
};

export const isSlot = (data: unknown): data is Slot => {
  if (
    !isObject(data) ||
    !('isEmpty' in data) ||
    typeof data.isEmpty !== 'boolean'
  ) {
    return false;
  }

  if (data.isEmpty) {
    return true;
  }

  return (
    'title' in data &&
    'query' in data &&
    typeof data.title === 'string' &&
    typeof data.query === 'string'
  );
};

export const isSlotNo = (data: unknown): data is SlotNo => {
  if (typeof data !== 'number') {
    return false;
  }

  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(data);
};

export const isQuickSlotsResponse = (
  data: unknown,
): data is QuickSlotsResponse => {
  if (
    !(
      isObject(data) &&
      'hotkey' in data &&
      'selectedSlotNo' in data &&
      'slots' in data &&
      typeof data.hotkey === 'string' &&
      ['Alt', 'F2'].includes(data.hotkey) &&
      isSlotNo(data.selectedSlotNo)
    )
  ) {
    return false;
  }

  const { slots } = data;

  if (!isNumericObject(slots)) {
    return false;
  }

  return Array.from({ length: 10 }).every(
    (_, key) => key in slots && isSlot(slots[key]),
  );
};

export const isLegacyQuickSlotsResponse = (
  data: unknown,
): data is LegacyQuickSlotsResponse => {
  if (
    !(
      isObject(data) &&
      'selectedNo' in data &&
      typeof data.selectedNo === 'number'
    )
  ) {
    return false;
  }

  const { selectedNo, ...slots } = data;

  if (!(selectedNo % 1 === 0 && selectedNo >= 0 && selectedNo <= 9)) {
    return false;
  }

  if (!isNumericObject(slots)) {
    return false;
  }

  return Array.from({ length: 10 }).every(
    (_, key) => key in slots && isSlot(slots[key]),
  );
};

export const isRepairableLegacyQuickSlotsResponse = (
  data: unknown,
): data is RepairableLegacyQuickSlotsResponse => {
  return (
    isObject(data) && Array.from({ length: 10 }).every((_, key) => key in data)
  );
};

export const isRepairableQuickSlotsResponse = (
  data: unknown,
): data is RepairableQuickSlotsResponse => {
  if (!isObject(data) || !('slots' in data)) {
    return false;
  }

  const { slots } = data;

  return (
    isObject(slots) &&
    Array.from({ length: 10 }).every((_, key) => key in slots)
  );
};
