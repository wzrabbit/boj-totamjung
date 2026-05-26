import { useTranslation } from '@/i18n';
import * as S from './RandomDefenseCapsuleButton.styled';

type RandomDefenseFormMode = 'simple' | 'manual';

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
        $isActivated={mode === 'simple'}
        onClick={() => {
          onClick('simple');
        }}
        aria-label={t('randomDefenseCreate.capsule.simpleAriaLabel')}
      >
        {t('randomDefenseCreate.capsule.simpleLabel')}
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
