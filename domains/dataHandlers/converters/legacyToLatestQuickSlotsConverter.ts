import type { QuickSlots } from '@/types/randomDefense';
import type { V1 } from '@/types/legacyData';

export const convertV1ToLatestQuickSlots = (
  legacyQuickSlots: V1.QuickSlots,
): QuickSlots => {
  const { selectedNo, ...legacyQuickSlotsWithoutSelectedNo } = legacyQuickSlots;

  return {
    selectedSlotNo: selectedNo,
    slots: legacyQuickSlotsWithoutSelectedNo,
    hotkey: 'Alt',
  };
};
