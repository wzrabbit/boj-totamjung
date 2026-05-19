import * as S from './QuickSlotsMenu.styled';
import NamedFrame from '@/components/common/NamedFrame';
import SlotPagination from './SlotPagination';
import SlotInfo from './SlotInfo';
import HotkeySwitcher from './HotkeySwitcher';
import IconButton from '@/components/common/IconButton';
import useQuickSlotMenu from '@/hooks/randomDefense/useQuickSlotMenu';
import SlotEditModal from './SlotEditModal';
import Loading from '@/components/common/Loading';
import useModalState from '@/hooks/useModalState';
import { CopyIcon, DicesIcon, EditIcon, TrashIcon } from '@/assets/svg';
import type {
  QuickSlotOptions,
  QuickSlotNo,
  Hotkey,
} from '@/types/randomDefense';
import { theme } from '@/styles/theme';
import SimpleModal from '@/components/common/SimpleModal';
import RandomDefenseGachaModal from '@/components/RandomDefenseGachaModal';
import GachaProblemCountInputModal from '@/components/GachaProblemCountInputModal';
import { useTranslation } from '@/i18n';

interface QuickSlotMenuProps {
  quickSlotsInfo: QuickSlotOptions;
  isLoaded: boolean;
  onHotkeyChange: (hotkey: Hotkey) => void;
  onSlotChange: (title: string, query: string) => void;
  onSlotDelete: () => void;
  onSlotNoChange: (slotNo: QuickSlotNo) => void;
}

const QuickSlotsMenu = (props: QuickSlotMenuProps) => {
  const { isLoaded } = props;
  const { activeModalName, openModal, closeModal } = useModalState<
    'copiedQuery' | 'confirmDeleteSlot' | 'gachaProblemCount' | 'gacha'
  >();
  const {
    slot,
    selectedSlotNo,
    hotkey,
    occupiedSlotNos,
    shouldEditModalShow,
    gachaProblemCount,
    setSelectedSlotNo,
    switchHotkey,
    openEditModal,
    closeEditModal,
    updateSlot,
    deleteSlot,
    setGachaProblemCount,
  } = useQuickSlotMenu(props);
  const { t } = useTranslation();

  return (
    <NamedFrame
      width="650px"
      height="168px"
      padding="10px"
      title={t('quickSlots.frameTitle')}
    >
      {isLoaded ? (
        <S.Container>
          <S.SlotNoPanel>
            <SlotPagination
              selectedSlotNo={selectedSlotNo}
              occupiedSlotNos={occupiedSlotNos}
              onChange={setSelectedSlotNo}
            />
            <HotkeySwitcher
              selectedSlotNo={selectedSlotNo}
              hotkey={hotkey}
              onClick={switchHotkey}
            />
          </S.SlotNoPanel>
          <SlotInfo {...slot} />
          <S.SlotControlPanel>
            <IconButton
              type="button"
              name={t('quickSlots.copyQueryButton')}
              size="medium"
              color={theme.colors.GRAY_300}
              iconSrc={<CopyIcon />}
              disabled={slot.isEmpty}
              onClick={() => {
                if (!slot.isEmpty) {
                  navigator.clipboard.writeText(slot.query);
                  openModal('copiedQuery');
                }
              }}
            />
            <IconButton
              type="button"
              name={t('quickSlots.editButton')}
              size="medium"
              color={theme.colors.SKY_BLUE}
              iconSrc={<EditIcon />}
              disabled={slot.isEmpty}
              onClick={openEditModal}
            />
            <IconButton
              type="button"
              name={t('quickSlots.deleteButton')}
              size="medium"
              color={theme.colors.RED}
              iconSrc={<TrashIcon />}
              disabled={slot.isEmpty}
              onClick={() => {
                openModal('confirmDeleteSlot');
              }}
            />
            <IconButton
              type="button"
              name={t('quickSlots.gachaPullButton')}
              size="medium"
              color={theme.colors.PURPLE}
              iconSrc={<DicesIcon />}
              disabled={slot.isEmpty}
              onClick={() => {
                openModal('gachaProblemCount');
              }}
            />
          </S.SlotControlPanel>
        </S.Container>
      ) : (
        <Loading />
      )}
      <SlotEditModal
        title={slot.isEmpty ? '' : slot.title}
        query={slot.isEmpty ? '' : slot.query}
        open={shouldEditModalShow}
        onClose={closeEditModal}
        onSlotChange={updateSlot}
      />
      <SimpleModal
        actionType="confirm"
        width="350px"
        height="auto"
        open={activeModalName === 'copiedQuery'}
        onClose={closeModal}
        title={t('quickSlots.copyDoneTitle')}
        message={t('quickSlots.copyDoneMessage')}
      />
      <SimpleModal
        actionType="yesNo"
        width="350px"
        height="auto"
        open={activeModalName === 'confirmDeleteSlot'}
        onYesSelect={() => {
          deleteSlot();
          closeModal();
        }}
        onNoSelect={closeModal}
        title={t('quickSlots.deleteConfirmTitle')}
        message={t('quickSlots.deleteConfirmMessage', [String(selectedSlotNo)])}
      />
      <GachaProblemCountInputModal
        open={activeModalName === 'gachaProblemCount'}
        shouldShowHotkeyMessage={true}
        onClose={closeModal}
        onSubmitProblemCount={(newProblemCount) => {
          setGachaProblemCount(newProblemCount);
          openModal('gacha');
        }}
      />
      {!slot.isEmpty && (
        <RandomDefenseGachaModal
          open={activeModalName === 'gacha'}
          slot={slot}
          problemCount={gachaProblemCount}
          onClose={closeModal}
        />
      )}
    </NamedFrame>
  );
};

export default QuickSlotsMenu;
