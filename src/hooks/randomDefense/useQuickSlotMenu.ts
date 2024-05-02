import { useState, useEffect } from 'react';
import { isQuickSlotsResponse } from '~types/typeGuards';
import { COMMANDS } from '~constants/commands';
import type { QuickSlots, SlotNo, Hotkey } from '~types/randomDefense';

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

const SLOT_NOS: SlotNo[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const useQuickSlotMenu = () => {
  const [slots, setSlots] = useState<QuickSlots>(emptySlots);
  const [selectedSlotNo, setSelectedSlotNo] = useState<SlotNo>(1);
  const [hotkey, setHotkey] = useState<Hotkey>('Alt');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchQuickSlots = async () => {
      const response = await chrome.runtime.sendMessage({
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

    chrome.runtime.sendMessage({
      command: COMMANDS.SAVE_QUICK_SLOTS,
      slots,
      selectedSlotNo,
      hotkey,
    });
  }, [slots, selectedSlotNo, hotkey]);

  const updateSelectedSlotNo = (newSlotNo: SlotNo) => {
    setSelectedSlotNo(newSlotNo);
  };

  const switchHotkey = () => {
    setHotkey((prev) => (prev === 'Alt' ? 'F2' : 'Alt'));
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

  const slot = slots[selectedSlotNo];

  return {
    slot,
    selectedSlotNo,
    occupiedSlotNos: getOccupiedSlotNos(),
    hotkey,
    isLoaded,
    updateSelectedSlotNo,
    switchHotkey,
  };
};

export default useQuickSlotMenu;
