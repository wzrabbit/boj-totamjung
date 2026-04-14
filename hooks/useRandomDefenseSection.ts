import type { QuickSlotOptions, QuickSlotNo } from '@/types/randomDefense';
import { STORAGE_KEY } from '@/constants/commands';
import { DEFAULT_QUICK_SLOT_OPTIONS } from '@/constants/defaultValues';
import {
  fetchQuickSlotOptions,
  saveQuickSlotOptions,
} from '@/domains/dataHandlers/quickSlotsDataHandler';
import { isQuickSlotOptions } from '@/domains/dataHandlers/validators/quickSlotsValidator';
import useStorageState from '@/hooks/useStorageState';

const useRandomDefenseManageMenu = () => {
  const {
    data: quickSlotOptions,
    setData: setQuickSlotOptions,
    isLoaded,
  } = useStorageState<QuickSlotOptions>({
    type: 'function',
    storageKey: STORAGE_KEY.QUICK_SLOT_OPTIONS,
    defaultValue: DEFAULT_QUICK_SLOT_OPTIONS,
    fetchFunction: fetchQuickSlotOptions,
    saveFunction: saveQuickSlotOptions,
    validatorFunction: isQuickSlotOptions,
  });

  const { slots, selectedSlotNo, hotkey } = quickSlotOptions;

  const setSelectedSlotNo = (slotNo: QuickSlotNo) => {
    setQuickSlotOptions({ ...quickSlotOptions, selectedSlotNo: slotNo });
  };

  const setHotkey = (hotkey: QuickSlotOptions['hotkey']) => {
    setQuickSlotOptions({ ...quickSlotOptions, hotkey });
  };

  const updateSlot = (title: string, query: string) => {
    setQuickSlotOptions({
      ...quickSlotOptions,
      slots: {
        ...slots,
        [selectedSlotNo]: { isEmpty: false, title, query },
      },
    });
  };

  const deleteSlot = () => {
    setQuickSlotOptions({
      ...quickSlotOptions,
      slots: {
        ...slots,
        [selectedSlotNo]: { isEmpty: true },
      },
    });
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
