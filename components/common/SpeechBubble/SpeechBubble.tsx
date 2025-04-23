import type { MainTheme } from '@/types/mainTheme';
import * as S from './SpeechBubble.styled';
import { CloseIcon } from '@/assets/svg';
import type { ReactNode } from 'react';

type SpeechBubbleProps = PlainSpeechBubbleProps | CloseButtonSpeechBubbleProps;

interface CloseButtonSpeechBubbleProps {
  open: boolean;
  content: string | ReactNode;
  theme: MainTheme;
  direction: 'up' | 'left' | 'right' | 'down';
  maxWidth?: string;
  hasCloseButton: true;
  onClose: () => void;
}

interface PlainSpeechBubbleProps {
  open: boolean;
  content: string;
  theme: MainTheme;
  direction: 'up' | 'left' | 'right' | 'down';
  maxWidth?: string;
  hasCloseButton?: false;
}

const SpeechBubble = (props: SpeechBubbleProps) => {
  const { open, content, theme, direction, maxWidth, hasCloseButton } = props;

  return (
    <S.Container
      $open={open}
      $totamjungTheme={theme}
      $direction={direction}
      $maxWidth={maxWidth}
    >
      {typeof content === 'string' ? (
        <S.Content $totamjungTheme={theme}>{content}</S.Content>
      ) : (
        <S.ContentWrapper>{content}</S.ContentWrapper>
      )}
      {hasCloseButton && (
        <S.CloseButtonWrapper>
          <S.CloseButton
            $totamjungTheme={theme}
            type="button"
            aria-label="닫기"
            onClick={props.onClose}
          >
            <CloseIcon />
          </S.CloseButton>
        </S.CloseButtonWrapper>
      )}
    </S.Container>
  );
};

export default SpeechBubble;
