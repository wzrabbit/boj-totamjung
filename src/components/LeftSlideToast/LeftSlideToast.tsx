import * as S from './LeftSlideToast.styled';
import { CheckIcon, CloseIcon } from '~images/svg';
import type { SVGProps } from 'react';
import { TotamjungTheme } from '~types/totamjungTheme';
import CircleProgressBar from '~components/common/CircleProgressBar';

interface LeftSlideToastProps {
  mainIconSrc: string | SVGProps<SVGSVGElement>;
  theme: TotamjungTheme;
  progress: number;
  title: string;
  descriptions?: string | string[];
  open: boolean;
  onClose: () => void;
}

const COLORS = {
  WHITE: 'white',
  SKY_BLUE: '#1c8cd1',
  BROWN: '#331911',
  LIGHT_BROWN: '#a17362',
};

const LeftSlideToast = (props: LeftSlideToastProps) => {
  const { mainIconSrc, theme, progress, title, descriptions, open, onClose } =
    props;
  const listedDescriptions = Array.isArray(descriptions)
    ? descriptions
    : [descriptions];

  return (
    <S.Container $open={open} $totamjungTheme={theme}>
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
                <S.Description key={index} $totamjungTheme={theme}>
                  {description}
                </S.Description>
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
          size={32}
          progress={progress}
          color={theme === 'totamjung' ? COLORS.LIGHT_BROWN : COLORS.WHITE}
          trackColor={theme === 'totamjung' ? COLORS.BROWN : COLORS.SKY_BLUE}
        />
      </S.RightControlPanel>
    </S.Container>
  );
};

export default LeftSlideToast;
