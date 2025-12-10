import useSlidingFocusIndicator from '@/hooks/useSlidingFocusIndicator';
import { createPortal } from 'react-dom';
import * as S from './SlidingFocusIndicator.styled';

interface SlidingFocusIndicatorProps {
  portalTarget?: HTMLElement;
}

const SlidingFocusIndicator = (props: SlidingFocusIndicatorProps) => {
  const { portalTarget } = props;
  const { indicatorInfo } = useSlidingFocusIndicator();

  return createPortal(
    <S.Container>
      <S.FocusIndicatorBox style={{ ...indicatorInfo }} />
    </S.Container>,
    portalTarget ?? document.body,
  );
};

export default SlidingFocusIndicator;
