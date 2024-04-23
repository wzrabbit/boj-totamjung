import * as S from './SlotPagination.styled';

interface SlotPaginationProps {
  selectedSlotNumber: number;
  occupiedSlotNumbers: number[];
  onChange: (slotNumber: number) => void;
}

const SLOT_PAGE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const SlotPagination = (props: SlotPaginationProps) => {
  const { selectedSlotNumber, occupiedSlotNumbers, onChange } = props;

  return (
    <S.Container>
      {SLOT_PAGE_NUMBERS.map((slotNumber) => (
        <S.CircleSlotButtonWrapper>
          <S.CircleSlotButton
            $isSelected={slotNumber === selectedSlotNumber}
            $isOccupied={occupiedSlotNumbers.includes(slotNumber)}
            onClick={() => {
              onChange(slotNumber);
            }}
            aria-label={`${slotNumber}번 슬롯 선택하기. ${
              slotNumber === selectedSlotNumber
                ? '이미 선택되어 있는 슬롯입니다'
                : ''
            }`}
          >
            {slotNumber}
          </S.CircleSlotButton>
        </S.CircleSlotButtonWrapper>
      ))}
    </S.Container>
  );
};

export default SlotPagination;
