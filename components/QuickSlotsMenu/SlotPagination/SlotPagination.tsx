import type { QuickSlotNo } from '@/types/randomDefense';
import { useTranslation } from '@/i18n';
import * as S from './SlotPagination.styled';

interface SlotPaginationProps {
  selectedSlotNo: QuickSlotNo;
  occupiedSlotNos: QuickSlotNo[];
  onChange: (slotNo: QuickSlotNo) => void;
}

const SLOT_NOS: QuickSlotNo[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const SlotPagination = (props: SlotPaginationProps) => {
  const { selectedSlotNo, occupiedSlotNos, onChange } = props;
  const { t } = useTranslation();

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
            aria-label={`${t('quickSlots.pagination.selectAriaLabel', [String(slotNo)])} ${
              slotNo === selectedSlotNo
                ? t('quickSlots.pagination.alreadySelectedSuffix')
                : ''
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
