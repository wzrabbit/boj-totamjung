import useSlidingFocusIndicator from '@/hooks/useSlidingFocusIndicator';
import { createPortal } from 'react-dom';
import * as S from './SlidingFocusIndicator.styled';

const SlidingFocusIndicator = () => {
  const { indicatorInfo } = useSlidingFocusIndicator();

  return createPortal(
    <S.Container>
      <S.FocusIndicatorBox style={{ ...indicatorInfo }} />
    </S.Container>,
    document.body,
  );
};

export default SlidingFocusIndicator;
