import * as S from './RandomDefenseCapsuleButton.styled';

type RandomDefenseFormMode = 'easy' | 'manual';

interface RandomDefenseCapsuleButtonProps {
  mode: RandomDefenseFormMode;
  onClick: (mode: RandomDefenseFormMode) => void;
}

const RandomDefenseCapsuleButton = (props: RandomDefenseCapsuleButtonProps) => {
  const { mode, onClick } = props;
  return (
    <S.Container>
      <S.LeftButton
        type="button"
        $isActivated={mode === 'easy'}
        onClick={() => {
          onClick('easy');
        }}
        aria-label="간편 입력 모드로 변경하기"
      >
        간편 입력
      </S.LeftButton>
      <S.RightButton
        type="button"
        $isActivated={mode === 'manual'}
        onClick={() => {
          onClick('manual');
        }}
        aria-label="직접 입력 모드로 변경하기"
      >
        직접 입력
      </S.RightButton>
      <S.MidCircle>OR</S.MidCircle>
    </S.Container>
  );
};

export default RandomDefenseCapsuleButton;
