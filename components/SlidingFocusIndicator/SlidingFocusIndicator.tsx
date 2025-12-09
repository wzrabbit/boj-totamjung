import useSlidingFocusIndicator from '@/hooks/useSlidingFocusIndicator';
import { createPortal } from 'react-dom';
import * as S from './SlidingFocusIndicator.styled';

const SlidingFocusIndicator = () => {
  const { indicatorInfo } = useSlidingFocusIndicator();

  return createPortal(
    <S.FocusIndicatorBox style={{ ...indicatorInfo }} />,
    document.body,
  );
};

export default SlidingFocusIndicator;
