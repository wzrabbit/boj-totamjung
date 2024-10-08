import type { TotamjungTheme } from '@/types/totamjungTheme';
import * as S from './SpeechBubble.styled';
import Text from '@/components/common/Text';
import { CloseIcon } from '@/assets/svg';
import type { ReactNode } from 'react';

type SpeechBubbleProps = PlainSpeechBubbleProps | CloseButtonSpeechBubbleProps;

interface CloseButtonSpeechBubbleProps {
  open: boolean;
  content: string | ReactNode;
  totamjungTheme: TotamjungTheme;
  direction: 'up' | 'left' | 'right' | 'down';
  maxWidth?: string;
  hasCloseButton: true;
  onClose: () => void;
}

interface PlainSpeechBubbleProps {
  open: boolean;
  content: string;
  totamjungTheme: TotamjungTheme;
  direction: 'up' | 'left' | 'right' | 'down';
  maxWidth?: string;
  hasCloseButton?: false;
}

const SpeechBubble = (props: SpeechBubbleProps) => {
  const { open, content, totamjungTheme, direction, maxWidth, hasCloseButton } =
    props;

  return (
    <S.Container
      $open={open}
      $totamjungTheme={totamjungTheme}
      $direction={direction}
      $maxWidth={maxWidth}
    >
      {typeof content === 'string' ? (
        <Text type="normal" fontSize="14px">
          {content}
        </Text>
      ) : (
        <S.ContentWrapper>{content}</S.ContentWrapper>
      )}
      {hasCloseButton && (
        <S.CloseButtonWrapper>
          <S.CloseButton
            $totamjungTheme={totamjungTheme}
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
