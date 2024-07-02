import type {
  QuickSlotsResponse,
  LegacyQuickSlotsResponse,
} from '~types/randomDefense';

export const convertLegacyToLatestQuickSlots = (
  legacyQuickSlots: LegacyQuickSlotsResponse,
): QuickSlotsResponse => {
  const { selectedNo, ...legacyQuickSlotsWithoutSelectedNo } = legacyQuickSlots;

  return {
    selectedSlotNo: selectedNo,
    slots: legacyQuickSlotsWithoutSelectedNo,
    hotkey: 'Alt',
  };
};
