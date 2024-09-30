import { useState, useEffect } from 'react';
import type { QuickSlots, SlotNo, Hotkey } from '@/types/randomDefense';
import {
  fetchQuickSlots,
  saveQuickSlots,
} from '@/domains/dataHandlers/quickSlotsDataHandler';

const emptySlots: QuickSlots = {
  1: { isEmpty: true },
  2: { isEmpty: true },
  3: { isEmpty: true },
  4: { isEmpty: true },
  5: { isEmpty: true },
  6: { isEmpty: true },
  7: { isEmpty: true },
  8: { isEmpty: true },
  9: { isEmpty: true },
  0: { isEmpty: true },
};

const useRandomDefenseManageMenu = () => {
  const [slots, setSlots] = useState<QuickSlots>(emptySlots);
  const [selectedSlotNo, setSelectedSlotNo] = useState<SlotNo>(1);
  const [hotkey, setHotkey] = useState<Hotkey>('Alt');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const { slots, selectedSlotNo, hotkey } = await fetchQuickSlots();

      setSlots(slots);
      setSelectedSlotNo(selectedSlotNo);
      setHotkey(hotkey);
      setIsLoaded(true);
    })();
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    saveQuickSlots(selectedSlotNo, slots, hotkey);
  }, [selectedSlotNo, slots, hotkey]);

  const updateSlot = (title: string, query: string) => {
    setSlots((prev) => ({
      ...prev,
      [selectedSlotNo]: { isEmpty: false, title, query },
    }));
  };

  const deleteSlot = () => {
    setSlots((prev) => ({
      ...prev,
      [selectedSlotNo]: { isEmpty: true },
    }));
  };

  return {
    slots,
    selectedSlotNo,
    hotkey,
    isLoaded,
    setSelectedSlotNo,
    setHotkey,
    updateSlot,
    deleteSlot,
  };
};

export default useRandomDefenseManageMenu;
