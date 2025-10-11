import * as S from './LeftSlideToast.styled';
import { useState, useEffect } from 'react';
import { circleProgressBarColors } from './LeftSlideToast.styled';
import { getTransparentHexColor } from '@/utils/getTransparentHexColor';
import { CheckIcon, CloseIcon } from '@/assets/svg';
import type { SVGProps, ReactElement } from 'react';
import type { MainTheme } from '@/types/mainTheme';
import CircleProgressBar from '@/components/common/CircleProgressBar';

interface LeftSlideToastProps {
  mainIconSrc: string | ReactElement<SVGProps<SVGSVGElement>>;
  theme: MainTheme;
  progress: number;
  title: string;
  descriptions?: string | string[];
  open: boolean;
  onClose: () => void;
}

const LeftSlideToast = (props: LeftSlideToastProps) => {
  const { mainIconSrc, theme, progress, title, descriptions, open, onClose } =
    props;
  const [isVisible, setIsVisible] = useState(false);
  const listedDescriptions = Array.isArray(descriptions)
    ? descriptions
    : [descriptions];

  useEffect(() => {
    if (open) {
      setIsVisible(true);
    }
  }, [open]);

  const handleTransitionEnd = () => {
    if (!open) {
      setIsVisible(false);
    }
  };

  return (
    <S.Container
      $open={open}
      $totamjungTheme={theme}
      $visible={isVisible}
      onTransitionEnd={handleTransitionEnd}
    >
      <S.LeftIconWrapper>
        {mainIconSrc &&
          (typeof mainIconSrc === 'string' ? (
            <S.IconImage src={mainIconSrc} $totamjungTheme={theme} alt="" />
          ) : (
            <S.IconWrapper $totamjungTheme={theme}>{mainIconSrc}</S.IconWrapper>
          ))}
      </S.LeftIconWrapper>
      <S.ContentContainer>
        <S.Title aria-live="assertive" $totamjungTheme={theme}>
          {title}
        </S.Title>
        {descriptions && (
          <S.DescriptionList>
            {listedDescriptions.map((description, index) => (
              <S.DescriptionContainer key={index} $totamjungTheme={theme}>
                <CheckIcon />
                <S.Description key={index}>{description}</S.Description>
              </S.DescriptionContainer>
            ))}
          </S.DescriptionList>
        )}
      </S.ContentContainer>
      <S.RightControlPanel>
        <S.CloseButton
          type="button"
          aria-label="토스트 닫기"
          $totamjungTheme={theme}
          onClick={onClose}
        >
          <CloseIcon />
        </S.CloseButton>
        <CircleProgressBar
          size={28}
          strokeWidth={4}
          progress={progress}
          color={circleProgressBarColors[theme]}
          trackColor={getTransparentHexColor(
            circleProgressBarColors[theme],
            0.3,
          )}
        />
      </S.RightControlPanel>
    </S.Container>
  );
};

export default LeftSlideToast;
