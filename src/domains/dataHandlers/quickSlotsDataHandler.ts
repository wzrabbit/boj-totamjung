import { STORAGE_KEY } from '~constants/commands';
import { sanitizeQuickSlots } from './sanitizers/quickSlotsSanitizer';
import { isRepairableQuickSlotsResponse } from './validators/quickSlotsValidator';

export const fetchQuickSlots = async () => {
  const data = await chrome.storage.local.get(STORAGE_KEY.QUICK_SLOTS);
  const quickSlots = data[STORAGE_KEY.QUICK_SLOTS];

  const sanitizedQuickSlots = sanitizeQuickSlots(quickSlots);
  return sanitizedQuickSlots;
};

export const saveQuickSlots = (
  selectedSlotNo: unknown,
  slots: unknown,
  hotkey: unknown,
) => {
  const quickSlotsData = { selectedSlotNo, slots, hotkey };

  if (!isRepairableQuickSlotsResponse(quickSlotsData)) {
    return;
  }

  const sanitizedQuickSlots = sanitizeQuickSlots(quickSlotsData);

  chrome.storage.local.set({
    [STORAGE_KEY.QUICK_SLOTS]: sanitizedQuickSlots,
  });
};
