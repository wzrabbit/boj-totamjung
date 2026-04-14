import { STORAGE_KEY } from '@/constants/commands';
import { sanitizeQuickSlotOptions } from './sanitizers/quickSlotsSanitizer';
import { isRepairableQuickSlotOptions } from './validators/quickSlotsValidator';

export const fetchQuickSlotOptions = async () => {
  const data = await browser.storage.local.get(STORAGE_KEY.QUICK_SLOT_OPTIONS);
  const quickSlotOptions = data[STORAGE_KEY.QUICK_SLOT_OPTIONS];

  const sanitizedQuickSlotOptions = sanitizeQuickSlotOptions(quickSlotOptions);
  return sanitizedQuickSlotOptions;
};

export const saveQuickSlotOptions = (quickSlotOptions: unknown) => {
  if (!isRepairableQuickSlotOptions(quickSlotOptions)) {
    return;
  }

  const sanitizedQuickSlotOptions =
    sanitizeQuickSlotOptions(quickSlotOptions);

  browser.storage.local.set({
    [STORAGE_KEY.QUICK_SLOT_OPTIONS]: sanitizedQuickSlotOptions,
  });
};
