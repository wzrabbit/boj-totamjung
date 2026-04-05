import type { QuickSlotOptions } from '@/types/randomDefense';
import type { V1 } from '@/types/legacyData';

export const convertV1ToLatestQuickSlots = (
  legacyQuickSlots: V1.QuickSlotOptions,
): QuickSlotOptions => {
  const { selectedNo, ...legacyQuickSlotsWithoutSelectedNo } = legacyQuickSlots;

  return {
    selectedSlotNo: selectedNo,
    slots: legacyQuickSlotsWithoutSelectedNo,
    hotkey: 'Alt',
  };
};
