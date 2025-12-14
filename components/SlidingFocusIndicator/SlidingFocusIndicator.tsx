import useSlidingFocusIndicator from '@/hooks/useSlidingFocusIndicator';
import { createPortal } from 'react-dom';
import * as S from './SlidingFocusIndicator.styled';

interface SlidingFocusIndicatorProps {
  activeScope: HTMLElement;
  portalTarget?: HTMLElement;
}

const SlidingFocusIndicator = (props: SlidingFocusIndicatorProps) => {
  const { activeScope, portalTarget } = props;
  const { indicatorInfo } = useSlidingFocusIndicator({ activeScope });

  return createPortal(
    <S.Container>
      <S.FocusIndicatorBox style={{ ...indicatorInfo }} />
    </S.Container>,
    portalTarget ?? document.body,
  );
};

export default SlidingFocusIndicator;
