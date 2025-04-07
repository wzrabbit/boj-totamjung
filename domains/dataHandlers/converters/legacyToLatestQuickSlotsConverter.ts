import type { QuickSlots, LegacyQuickSlots } from '@/types/randomDefense';

export const convertLegacyToLatestQuickSlots = (
  legacyQuickSlots: LegacyQuickSlots,
): QuickSlots => {
  const { selectedNo, ...legacyQuickSlotsWithoutSelectedNo } = legacyQuickSlots;

  return {
    selectedSlotNo: selectedNo,
    slots: legacyQuickSlotsWithoutSelectedNo,
    hotkey: 'Alt',
  };
};
