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
  theme: MainTheme;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
  onEdit: () => void;
}

const ProblemTimer = (props: ProblemTimerProps) => {
  const { progress, theme: mainTheme, ...rest } = props;

  return (
    <S.Container $timerTheme={mainTheme}>
      <CircleProgressBar
        progress={progress}
        size={28}
        strokeWidth={14}
        color={S.circleProgressBarColors[mainTheme]}
        trackColor={S.circleProgressBarTrackColors[mainTheme]}
      />
      <ProblemTimerControls
        {...rest}
        color={S.timerTextColors[mainTheme]}
        height={40}
        hasDeleteButton={false}
      />
    </S.Container>
  );
};

export default ProblemTimer;
