import { isNumericObject, isObject } from '@/types/typeGuards';
import type {
  Hotkey,
  QuickSlots,
  RepairableQuickSlotOptions,
  QuickSlot,
  QuickSlotNo,
} from '@/types/randomDefense';
import type { V1 } from '@/types/legacyData';

export const isHotkey = (data: unknown): data is Hotkey => {
  return data === null || data === 'Alt' || data === 'F2';
};

export const isQuickSlot = (data: unknown): data is QuickSlot => {
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

export const isQuickSlotNo = (data: unknown): data is QuickSlotNo => {
  if (typeof data !== 'number') {
    return false;
  }

  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(data);
};

export const isV1QuickSlotOptions = (
  data: unknown,
): data is V1.QuickSlotOptions => {
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
    (_, key) => key in slots && isQuickSlot(slots[key]),
  );
};

export const isQuickSlotOptions = (data: unknown): data is QuickSlots => {
  if (
    !(
      isObject(data) &&
      'hotkey' in data &&
      'selectedSlotNo' in data &&
      'slots' in data &&
      typeof data.hotkey === 'string' &&
      ['Alt', 'F2'].includes(data.hotkey) &&
      isQuickSlotNo(data.selectedSlotNo)
    )
  ) {
    return false;
  }

  const { slots } = data;

  if (!isNumericObject(slots)) {
    return false;
  }

  return Array.from({ length: 10 }).every(
    (_, key) => key in slots && isQuickSlot(slots[key]),
  );
};

export const isV1RepairableQuickSlotOptions = (
  data: unknown,
): data is V1.RepairableQuickSlotOptions => {
  return (
    isObject(data) && Array.from({ length: 10 }).every((_, key) => key in data)
  );
};

export const isRepairableQuickSlotOptions = (
  data: unknown,
): data is RepairableQuickSlotOptions => {
  if (!isObject(data) || !('slots' in data)) {
    return false;
  }

  const { slots } = data;

  return (
    isObject(slots) &&
    Array.from({ length: 10 }).every((_, key) => key in slots)
  );
};
