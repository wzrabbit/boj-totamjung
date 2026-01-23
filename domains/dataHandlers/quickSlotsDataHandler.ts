import { STORAGE_KEY } from '@/constants/commands';
import { sanitizeQuickSlots } from './sanitizers/quickSlotsSanitizer';
import { isRepairableQuickSlots } from './validators/quickSlotsValidator';

export const fetchQuickSlots = async () => {
  const data = await browser.storage.local.get(STORAGE_KEY.QUICK_SLOTS);
  const quickSlotsData = data[STORAGE_KEY.QUICK_SLOTS];

  return sanitizeQuickSlots(quickSlotsData);
};

export const saveQuickSlots = (quickSlotsData: unknown) => {
  if (!isRepairableQuickSlots(quickSlotsData)) {
    return;
  }

  browser.storage.local.set({
    [STORAGE_KEY.QUICK_SLOTS]: sanitizeQuickSlots(quickSlotsData),
  });
};
