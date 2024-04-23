import { useState } from 'react';
import type { Hotkey } from '~types/randomDefense';

const useQuickSlotMenu = () => {
  const [selectedSlotNumber, setSelectedSlotNumber] = useState(1);
  const [hotkey, setHotkey] = useState<Hotkey>('Alt');

  const updateSelectedSlotNumber = (newSlotNumber: number) => {
    setSelectedSlotNumber(() => newSlotNumber);
  };

  const switchHotkey = () => {
    setHotkey((prev) => (prev === 'Alt' ? 'F2' : 'Alt'));
  };

  return {
    selectedSlotNumber,
    hotkey,
    updateSelectedSlotNumber,
    switchHotkey,
  };
};

export default useQuickSlotMenu;
