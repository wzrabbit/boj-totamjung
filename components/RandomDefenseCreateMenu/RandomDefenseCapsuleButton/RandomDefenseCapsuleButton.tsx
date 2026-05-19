import { useTranslation } from '@/i18n';
import * as S from './RandomDefenseCapsuleButton.styled';

type RandomDefenseFormMode = 'easy' | 'manual';

interface RandomDefenseCapsuleButtonProps {
  mode: RandomDefenseFormMode;
  onClick: (mode: RandomDefenseFormMode) => void;
}

const RandomDefenseCapsuleButton = (props: RandomDefenseCapsuleButtonProps) => {
  const { mode, onClick } = props;
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.LeftButton
        type="button"
        $isActivated={mode === 'easy'}
        onClick={() => {
          onClick('easy');
        }}
        aria-label={t('randomDefenseCreate.capsule.easyAriaLabel')}
      >
        {t('randomDefenseCreate.capsule.easyLabel')}
      </S.LeftButton>
      <S.RightButton
        type="button"
        $isActivated={mode === 'manual'}
        onClick={() => {
          onClick('manual');
        }}
        aria-label={t('randomDefenseCreate.capsule.manualAriaLabel')}
      >
        {t('randomDefenseCreate.capsule.manualLabel')}
      </S.RightButton>
      <S.MidCircle>OR</S.MidCircle>
    </S.Container>
  );
};

export default RandomDefenseCapsuleButton;
