import * as S from './ProblemTimer.styled';
import CircleProgressBar from '@/components/common/CircleProgressBar';
import { PlayIcon, PauseIcon, StopIcon, ClockEditIcon } from '@/assets/svg';
import { theme } from '@/styles/theme';
import { getTransparentHexColor } from '@/utils/getTransparentHexColor';
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
  onTimeEdit: () => void;
}

const ProblemTimer = (props: ProblemTimerProps) => {
  const {
    hours,
    minutes,
    seconds,
    progress,
    status,
    theme: mainTheme,
    onPlay,
    onPause,
    onStop,
    onTimeEdit,
  } = props;

  const timeString = [hours, minutes, seconds]
    .map((value) => String(value).padStart(2, '0'))
    .join(':');

  return (
    <S.Container $timerTheme={mainTheme}>
      <CircleProgressBar
        progress={progress}
        size={28}
        strokeWidth={14}
        color={S.circleProgressBarColors[mainTheme]}
        trackColor={S.circleProgressBarTrackColors[mainTheme]}
      />
      <S.TimeDisplay $timerTheme={mainTheme}>{timeString}</S.TimeDisplay>
      <S.ButtonContainer>
        {status === 'play' && (
          <S.ControlButton
            $timerTheme={mainTheme}
            aria-label="문제 타이머 일시정지하기"
            onClick={onPause}
          >
            <PauseIcon />
          </S.ControlButton>
        )}
        {status === 'pause' && (
          <S.ControlButton
            $timerTheme={mainTheme}
            aria-label="문제 타이머 시작하기"
            onClick={onPlay}
          >
            <PlayIcon />
          </S.ControlButton>
        )}
        {status !== 'stop' && (
          <S.ControlButton
            $timerTheme={mainTheme}
            aria-label="문제 타이머 정지하기"
            onClick={onStop}
          >
            <StopIcon />
          </S.ControlButton>
        )}
        {status === 'stop' && (
          <S.ControlButton
            $timerTheme={mainTheme}
            aria-label="문제 타이머 시간 설정하기"
            onClick={onTimeEdit}
          >
            <ClockEditIcon />
          </S.ControlButton>
        )}
      </S.ButtonContainer>
    </S.Container>
  );
};

export default ProblemTimer;
