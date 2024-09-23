import { useState, useEffect } from 'react';
import { isQuickSlotsResponse } from '@/domains/dataHandlers/validators/quickSlotsValidator';
import { COMMANDS } from '@/constants/commands';
import type { QuickSlots, SlotNo, Hotkey } from '@/types/randomDefense';

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
    const fetchQuickSlots = async () => {
      const response = await browser.runtime.sendMessage({
        command: COMMANDS.FETCH_QUICK_SLOTS,
      });

      if (!isQuickSlotsResponse(response)) {
        return;
      }

      setSlots(response.slots);
      setSelectedSlotNo(response.selectedSlotNo);
      setHotkey(response.hotkey);
      setIsLoaded(true);
    };

    fetchQuickSlots();
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    browser.runtime.sendMessage({
      command: COMMANDS.SAVE_QUICK_SLOTS,
      slots,
      selectedSlotNo,
      hotkey,
    });
  }, [slots, selectedSlotNo, hotkey]);

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
