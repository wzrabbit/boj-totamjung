import * as S from './ProgressBar.styled';

interface ProgressBarProps {
  width: number;
  height: number;
  progress: number;
  color: string;
  trackColor: string;
}

const ProgressBar = (props: ProgressBarProps) => {
  const { width, height, progress, color, trackColor } = props;

  return (
    <S.Container $width={width} $height={height}>
      <S.ProgressBar $backgroundColor={trackColor} $progress={100} />
      <S.ProgressBar $backgroundColor={color} $progress={progress} />
    </S.Container>
  );
};

export default ProgressBar;
