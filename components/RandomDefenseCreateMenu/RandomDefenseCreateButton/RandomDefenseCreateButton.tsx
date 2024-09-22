import { SlotNo } from '@/types/randomDefense';
import { DiceIcon } from '@/images/svg';
import type { MouseEvent } from 'react';
import * as S from './RandomDefenseCreateButton.styled';

interface RandomDefenseCreateButtonProps {
  selectedSlotNo: SlotNo;
  isLoaded: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const RandomDefenseCreateButton = (props: RandomDefenseCreateButtonProps) => {
  const { selectedSlotNo, isLoaded, onClick } = props;

  return (
    <S.Button
      type="button"
      aria-label={`${selectedSlotNo}번 슬롯에 추첨 생성하기`}
      onClick={onClick}
      disabled={!isLoaded}
    >
      <S.UpperSide>
        <S.DiceIconWrapper>
          <DiceIcon />
        </S.DiceIconWrapper>
        <S.TextContainer>
          <S.TitleText>추첨 생성</S.TitleText>
          <S.SlotNoText>
            {isLoaded ? `슬롯 번호 − ${selectedSlotNo}` : '로딩 중...'}
          </S.SlotNoText>
        </S.TextContainer>
      </S.UpperSide>
      <S.LowerSide />
    </S.Button>
  );
};

export default RandomDefenseCreateButton;
