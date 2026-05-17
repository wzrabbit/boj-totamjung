import * as S from './CircleProgressBar.styled';

interface CircleProgressBar {
  size: number;
  strokeWidth: number;
  progress: number;
  color: string;
  trackColor: string;
  /**
   * `color`·`trackColor` 변경 시 적용할 stroke 전환 시간(ms).
   * 0이면 즉시 전환됩니다. 기본값 0.
   */
  colorTransitionMs?: number;
}

const CircleProgressBar = (props: CircleProgressBar) => {
  const {
    size,
    strokeWidth,
    progress,
    color,
    trackColor,
    colorTransitionMs = 0,
  } = props;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const round = (2 * Math.PI * (size - strokeWidth)) / 2;
  const dashOffset = (round * (100 - progress)) / 100;

  return (
    <S.Container $width={size} $height={size}>
      <S.CircleProgressBar $colorTransitionMs={colorTransitionMs}>
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
