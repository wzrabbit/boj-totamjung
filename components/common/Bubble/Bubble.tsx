import type { TotamjungTheme } from '@/types/totamjungTheme';
import * as S from './Bubble.styled';
import Text from '@/components/common/Text';

interface BubbleProps {
  children: string;
  totamjungTheme: TotamjungTheme;
}

const Bubble = (props: BubbleProps) => {
  const { children, totamjungTheme } = props;

  return (
    <S.Container $totamjungTheme={totamjungTheme}>
      <Text type="normal" fontSize="14px">
        {children}
      </Text>
    </S.Container>
  );
};

export default Bubble;
