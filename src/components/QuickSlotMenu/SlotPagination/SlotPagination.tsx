import * as S from './SlotPagination.styled';

interface SlotPaginationProps {
  selectedSlotNo: number;
  occupiedSlotNos: number[];
  onChange: (slotNo: number) => void;
}

const SLOT_PAGE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const SlotPagination = (props: SlotPaginationProps) => {
  const { selectedSlotNo, occupiedSlotNos, onChange } = props;

  return (
    <S.Container>
      {SLOT_PAGE_NUMBERS.map((slotNo) => (
        <S.CircleSlotButtonWrapper>
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
