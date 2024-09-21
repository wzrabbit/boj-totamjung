import type { SlotNo } from '~types/randomDefense';
import * as S from './SlotPagination.styled';

interface SlotPaginationProps {
  selectedSlotNo: SlotNo;
  occupiedSlotNos: SlotNo[];
  onChange: (slotNo: SlotNo) => void;
}

const SLOT_NOS: SlotNo[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const SlotPagination = (props: SlotPaginationProps) => {
  const { selectedSlotNo, occupiedSlotNos, onChange } = props;

  return (
    <S.Container>
      {SLOT_NOS.map((slotNo) => (
        <S.CircleSlotButtonWrapper key={slotNo}>
          <S.CircleSlotButton
            $isSelected={slotNo === selectedSlotNo}
            $isOccupied={occupiedSlotNos.includes(slotNo)}
            onClick={() => {
              onChange(slotNo);
            }}
            aria-label={`${slotNo}번 슬롯 선택하기. ${
              slotNo === selectedSlotNo ? '이미 선택되어 있는 슬롯입니다' : ''
            }`}
          >
            {slotNo}
          </S.CircleSlotButton>
        </S.CircleSlotButtonWrapper>
      ))}
    </S.Container>
  );
};

export default SlotPagination;
