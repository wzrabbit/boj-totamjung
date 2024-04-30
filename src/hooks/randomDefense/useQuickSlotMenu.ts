import { useState } from 'react';
import type { Hotkey } from '~types/randomDefense';

const useQuickSlotMenu = () => {
  const [selectedSlotNo, setSelectedSlotNo] = useState(1);
  const [hotkey, setHotkey] = useState<Hotkey>('Alt');

  const updateSelectedSlotNo = (newSlotNo: number) => {
    setSelectedSlotNo(() => newSlotNo);
  };

  const switchHotkey = () => {
    setHotkey((prev) => (prev === 'Alt' ? 'F2' : 'Alt'));
  };

  return {
    selectedSlotNo,
    hotkey,
    updateSelectedSlotNo,
    switchHotkey,
  };
};

export default useQuickSlotMenu;
