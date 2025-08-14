import { useState } from 'react';
import type { SlotNo, Hotkey, QuickSlots } from '@/types/randomDefense';

interface UseQuickSlotMenuParams {
  quickSlotsInfo: QuickSlots;
  isLoaded: boolean;
  onHotkeyChange: (hotkey: Hotkey) => void;
  onSlotChange: (title: string, query: string) => void;
  onSlotDelete: () => void;
  onSlotNoChange: (slotNo: SlotNo) => void;
}

const SLOT_NOS: SlotNo[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const useQuickSlotMenu = (params: UseQuickSlotMenuParams) => {
  const {
    quickSlotsInfo,
    isLoaded,
    onHotkeyChange,
    onSlotChange,
    onSlotDelete,
    onSlotNoChange,
  } = params;
  const { selectedSlotNo, slots, hotkey } = quickSlotsInfo;
  const [shouldEditModalShow, setShouldEditModalShow] = useState(false);
  const [gachaProblemCount, setGachaProblemCount] = useState(0);

  const switchHotkey = () => {
    if (!isLoaded) {
      return;
    }

    if (hotkey === null) {
      onHotkeyChange('Alt');
      return;
    }

    if (hotkey === 'Alt') {
      onHotkeyChange('F2');
      return;
    }

    onHotkeyChange(null);
  };

  const getOccupiedSlotNos = () => {
    const occupiedSlotNos: SlotNo[] = [];

    SLOT_NOS.forEach((slotNo) => {
      if (!slots[slotNo].isEmpty) {
        occupiedSlotNos.push(slotNo);
      }
    });

    return occupiedSlotNos;
  };

  const openEditModal = () => {
    setShouldEditModalShow(true);
  };

  const closeEditModal = () => {
    setShouldEditModalShow(false);
  };

  const updateSlot = (title: string, query: string) => {
    if (!isLoaded) {
      return;
    }

    const finalTitle = title.trim() === '' ? `추첨 ${selectedSlotNo}` : title;

    onSlotChange(finalTitle, query);
    closeEditModal();
  };

  const deleteSlot = () => {
    if (!isLoaded) {
      return;
    }

    onSlotDelete();
  };

  const setSelectedSlotNo = (slotNo: SlotNo) => {
    onSlotNoChange(slotNo);
  };

  const slot = slots[selectedSlotNo];

  return {
    slot,
    selectedSlotNo,
    hotkey,
    occupiedSlotNos: getOccupiedSlotNos(),
    gachaProblemCount,
    shouldEditModalShow,
    switchHotkey,
    openEditModal,
    closeEditModal,
    updateSlot,
    deleteSlot,
    setSelectedSlotNo,
    setGachaProblemCount,
  };
};

export default useQuickSlotMenu;
