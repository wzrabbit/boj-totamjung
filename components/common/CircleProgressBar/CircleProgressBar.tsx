import * as S from './CircleProgressBar.styled';

interface CircleProgressBar {
  size: number;
  strokeWidth: number;
  progress: number;
  color: string;
  trackColor: string;
}

const CircleProgressBar = (props: CircleProgressBar) => {
  const { size, strokeWidth, progress, color, trackColor } = props;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const round = (2 * Math.PI * (size - strokeWidth)) / 2;
  const dashOffset = (round * (100 - progress)) / 100;

  return (
    <S.Container $width={size} $height={size}>
      <S.CircleProgressBar>
        <circle
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={trackColor}
          fill="none"
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={color}
          strokeDasharray={round}
          strokeDashoffset={dashOffset}
          fill="none"
        />
      </S.CircleProgressBar>
    </S.Container>
  );
};

export default CircleProgressBar;
