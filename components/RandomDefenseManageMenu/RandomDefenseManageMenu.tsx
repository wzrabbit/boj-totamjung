import RandomDefenseCreateMenu from '@/components/RandomDefenseCreateMenu';
import QuickSlotsMenu from '@/components/QuickSlotsMenu';
import useRandomDefenseManageMenu from '@/hooks/useRandomDefenseSection';
import * as S from './RandomDefenseManageMenu.styled';

const RandomDefenseManageMenu = () => {
  const {
    slots,
    selectedSlotNo,
    hotkey,
    isLoaded,
    setSelectedSlotNo,
    setHotkey,
    updateSlot,
    deleteSlot,
  } = useRandomDefenseManageMenu();
  const quickSlotsInfo = { slots, selectedSlotNo, hotkey };

  return (
    <S.Container>
      <RandomDefenseCreateMenu
        isLoaded={isLoaded}
        selectedSlotNo={selectedSlotNo}
        onSubmit={updateSlot}
      />
      <QuickSlotsMenu
        quickSlotsInfo={quickSlotsInfo}
        isLoaded={isLoaded}
        onHotkeyChange={setHotkey}
        onSlotChange={updateSlot}
        onSlotDelete={deleteSlot}
        onSlotNoChange={setSelectedSlotNo}
      />
    </S.Container>
  );
};

export default RandomDefenseManageMenu;
