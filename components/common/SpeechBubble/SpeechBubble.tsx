import type { TotamjungTheme } from '@/types/totamjungTheme';
import * as S from './SpeechBubble.styled';
import Text from '@/components/common/Text';

interface SpeechBubbleProps {
  open: boolean;
  content: string;
  totamjungTheme: TotamjungTheme;
  direction: 'up' | 'left' | 'right' | 'down';
}

const SpeechBubble = (props: SpeechBubbleProps) => {
  const { open, content, totamjungTheme, direction } = props;

  return (
    <S.Container
      $open={open}
      $totamjungTheme={totamjungTheme}
      $direction={direction}
    >
      <Text type="normal" fontSize="14px">
        {content}
      </Text>
    </S.Container>
  );
};

export default SpeechBubble;
