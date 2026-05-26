import RandomDefenseCreateMenu from '@/components/RandomDefenseCreateMenu';
import QuickSlotsMenu from '@/components/QuickSlotsMenu';
import useRandomDefenseSection from '@/hooks/useRandomDefenseSection';
import RandomDefenseHistoryMenu from '@/components/RandomDefenseHistoryMenu';
import MenuTitle from '@/components/MenuTitle';
import { useTranslation } from '@/i18n';
import * as S from './RandomDefenseSection.styled';
import type { OptionsSectionProps } from '@/types/options';

const RandomDefenseSection = (props: OptionsSectionProps) => {
  const {
    slots,
    selectedSlotNo,
    hotkey,
    isLoaded,
    setSelectedSlotNo,
    setHotkey,
    updateSlot,
    deleteSlot,
  } = useRandomDefenseSection();
  const { show } = props;
  const { t } = useTranslation();
  const quickSlotsInfo = { slots, selectedSlotNo, hotkey };

  return show ? (
    <S.Container>
      <MenuTitle
        title={t('options.sections.randomDefense.title')}
        iconSrc={browser.runtime.getURL('/dice.png')}
      />
      <S.Menu>
        <S.RandomDefenseManageMenu>
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
        </S.RandomDefenseManageMenu>
        <RandomDefenseHistoryMenu />
      </S.Menu>
    </S.Container>
  ) : null;
};

export default RandomDefenseSection;
