import type { TotamjungTheme } from '@/types/totamjungTheme';
import * as S from './Bubble.styled';
import Text from '@/components/common/Text';

interface BubbleProps {
  children: string;
  totamjungTheme: TotamjungTheme;
  arrowDirection: 'up' | 'left' | 'right' | 'down';
}

const Bubble = (props: BubbleProps) => {
  const { children, totamjungTheme, arrowDirection } = props;

  return (
    <S.Container
      $totamjungTheme={totamjungTheme}
      $arrowDirection={arrowDirection}
    >
      <Text type="normal" fontSize="14px">
        {children}
      </Text>
    </S.Container>
  );
};

export default Bubble;
