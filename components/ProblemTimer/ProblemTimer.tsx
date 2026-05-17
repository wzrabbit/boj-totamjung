import * as S from './ProblemTimer.styled';
import ProblemTimerControls from '@/components/ProblemTimerControls';
import CircleProgressBar from '@/components/common/CircleProgressBar';
import type { MainTheme } from '@/types/mainTheme';

interface ProblemTimerProps {
  hours: number;
  minutes: number;
  seconds: number;
  progress: number;
  status: 'play' | 'pause' | 'stop';
  urgency?: 'normal' | 'warn' | 'danger';
  theme: MainTheme;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
  onEdit: () => void;
}

const ProblemTimer = (props: ProblemTimerProps) => {
  const { progress, theme: mainTheme, urgency = 'normal', ...rest } = props;

  const accentColor =
    urgency === 'warn'
      ? S.timerWarnAccentColors[mainTheme]
      : urgency === 'danger'
        ? S.timerDangerAccentColors[mainTheme]
        : null;

  const themeTextColor = S.timerTextColors[mainTheme];
  const textColor = accentColor ?? themeTextColor;
  const ringColor = accentColor ?? S.circleProgressBarColors[mainTheme];

  return (
    <S.Container $timerTheme={mainTheme}>
      <CircleProgressBar
        progress={progress}
        size={28}
        strokeWidth={14}
        color={ringColor}
        trackColor={S.circleProgressBarTrackColors[mainTheme]}
      />
      <ProblemTimerControls
        {...rest}
        color={textColor}
        transparentColor={themeTextColor}
        height={40}
        hasDeleteButton={false}
      />
    </S.Container>
  );
};

export default ProblemTimer;
