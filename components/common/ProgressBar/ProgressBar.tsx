import * as S from './ProgressBar.styled';
import { toPx } from '@/utils/toPx';

interface ProgressBarProps {
  width: number | string;
  height: number | string;
  progress: number;
  color: string;
  trackColor: string;
}

const ProgressBar = (props: ProgressBarProps) => {
  const { width, height, progress, color, trackColor } = props;

  return (
    <S.Container $width={toPx(width)} $height={toPx(height)}>
      <S.ProgressBar $backgroundColor={trackColor} $progress={100} />
      <S.ProgressBar $backgroundColor={color} $progress={progress} />
    </S.Container>
  );
};

export default ProgressBar;
