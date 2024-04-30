import * as S from './QuickSlotMenu.styled';
import NamedFrame from '~components/common/NamedFrame';
import SlotPagination from './SlotPagination';
import SlotInfo from './SlotInfo';
import HotkeySwitcher from './HotkeySwitcher';
import IconButton from '~components/common/IconButton';
import useQuickSlotMenu from '~hooks/randomDefense/useQuickSlotMenu';
import { CopyIcon, EditIcon, TrashIcon } from '~images/svg';
import { theme } from '~styles/theme';

const QuickSlotMenu = () => {
  const { selectedSlotNo, hotkey, updateSelectedSlotNo, switchHotkey } =
    useQuickSlotMenu();

  return (
    <NamedFrame width="650px" height="176px" padding="10px" title="퀵 슬롯">
      <S.Container>
        <S.SlotNoPanel>
          <SlotPagination
            selectedSlotNo={selectedSlotNo}
            occupiedSlotNos={[2, 4, 8]}
            onChange={updateSelectedSlotNo}
          />
          <HotkeySwitcher
            selectedSlotNo={selectedSlotNo}
            hotkey={hotkey}
            onClick={switchHotkey}
          />
        </S.SlotNoPanel>
        <SlotInfo isEmpty={true} />
        <S.SlotControlPanel>
          <IconButton
            name="쿼리 복사"
            size="medium"
            width="98px"
            color={theme.color.LIGHT_GRAY}
            iconSrc={<CopyIcon />}
            disabled={false}
            ariaLabel="쿼리 클립보드에 복사하기"
            onClick={() => {}}
          />
          <IconButton
            name="수정"
            size="medium"
            width="72px"
            color={theme.color.SKY_BLUE}
            iconSrc={<EditIcon />}
            disabled={false}
            ariaLabel="쿼리 수정하기"
            onClick={() => {}}
          />
          <IconButton
            name="삭제"
            size="medium"
            width="72px"
            color={theme.color.RED}
            iconSrc={<TrashIcon />}
            disabled={false}
            ariaLabel="쿼리 삭제하기"
            onClick={() => {}}
          />
        </S.SlotControlPanel>
      </S.Container>
    </NamedFrame>
  );
};

export default QuickSlotMenu;
