import * as S from './QuickSlotMenu.styled';
import NamedFrame from '@/components/common/NamedFrame';
import SlotPagination from './SlotPagination';
import SlotInfo from './SlotInfo';
import HotkeySwitcher from './HotkeySwitcher';
import IconButton from '@/components/common/IconButton';
import useQuickSlotMenu from '@/hooks/randomDefense/useQuickSlotMenu';
import SlotEditModal from './SlotEditModal';
import Loading from '@/components/common/Loading';
import useModal from '@/hooks/useModal';
import { CopyIcon, DicesIcon, EditIcon, TrashIcon } from '@/assets/svg';
import type { QuickSlotsResponse, SlotNo, Hotkey } from '@/types/randomDefense';
import { theme } from '@/styles/theme';
import SimpleModal from '@/components/common/SimpleModal';
import RandomDefenseGachaModal from '@/components/RandomDefenseGachaModal';
import GachaProblemCountInputModal from '@/components/GachaProblemCountInputModal';

interface QuickSlotMenuProps {
  quickSlotsInfo: QuickSlotsResponse;
  isLoaded: boolean;
  onHotkeyChange: (hotkey: Hotkey) => void;
  onSlotChange: (title: string, query: string) => void;
  onSlotDelete: () => void;
  onSlotNoChange: (slotNo: SlotNo) => void;
}

const QuickSlotMenu = (props: QuickSlotMenuProps) => {
  const { isLoaded } = props;
  const { activeModalName, openModal, closeModal } = useModal<
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

  return (
    <NamedFrame width="650px" height="168px" padding="10px" title="퀵 슬롯">
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
              name="쿼리 복사"
              size="medium"
              color={theme.color.LIGHT_GRAY}
              iconSrc={<CopyIcon />}
              disabled={slot.isEmpty}
              ariaLabel="쿼리 클립보드에 복사하기"
              onClick={() => {
                if (!slot.isEmpty) {
                  navigator.clipboard.writeText(slot.query);
                  openModal('copiedQuery');
                }
              }}
            />
            <IconButton
              type="button"
              name="수정"
              size="medium"
              color={theme.color.SKY_BLUE}
              iconSrc={<EditIcon />}
              disabled={slot.isEmpty}
              ariaLabel="슬롯 수정하기"
              onClick={openEditModal}
            />
            <IconButton
              type="button"
              name="삭제"
              size="medium"
              color={theme.color.RED}
              iconSrc={<TrashIcon />}
              disabled={slot.isEmpty}
              ariaLabel="슬롯 삭제하기"
              onClick={() => {
                openModal('confirmDeleteSlot');
              }}
            />
            <IconButton
              type="button"
              name="즉석 추첨"
              size="medium"
              color={theme.color.PURPLE}
              iconSrc={<DicesIcon />}
              disabled={slot.isEmpty}
              ariaLabel="즉석 추첨 진행"
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
        title="쿼리 복사 완료"
        message="쿼리를 클립보드에 복사했어요!"
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
        title="추첨 삭제 확인"
        message={`${selectedSlotNo}번 슬롯에 저장되어 있는 추첨을 삭제할까요?`}
      />
      <GachaProblemCountInputModal
        open={activeModalName === 'gachaProblemCount'}
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

export default QuickSlotMenu;
