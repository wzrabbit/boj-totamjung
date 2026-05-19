import { QuickSlotNo } from '@/types/randomDefense';
import type { MouseEvent } from 'react';
import { useTranslation } from '@/i18n';
import * as S from './RandomDefenseCreateButton.styled';

interface RandomDefenseCreateButtonProps {
  selectedSlotNo: QuickSlotNo;
  isLoaded: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const RandomDefenseCreateButton = (props: RandomDefenseCreateButtonProps) => {
  const { selectedSlotNo, isLoaded, onClick } = props;
  const { t } = useTranslation();

  return (
    <S.Button
      type="button"
      aria-label={t('randomDefenseCreate.createButton.ariaLabel', [
        String(selectedSlotNo),
      ])}
      onClick={onClick}
      disabled={!isLoaded}
    >
      <S.UpperSide>
        <S.DiceIcon src={browser.runtime.getURL('/dice.png')} alt="" />
        <S.TextContainer>
          <S.TitleText>
            {t('randomDefenseCreate.createButton.title')}
          </S.TitleText>
          <S.SlotNoText>
            {isLoaded
              ? t('randomDefenseCreate.createButton.slotNumber', [
                  String(selectedSlotNo),
                ])
              : t('randomDefenseCreate.createButton.loading')}
          </S.SlotNoText>
        </S.TextContainer>
      </S.UpperSide>
      <S.LowerSide />
    </S.Button>
  );
};

export default RandomDefenseCreateButton;
