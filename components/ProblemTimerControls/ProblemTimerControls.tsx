import * as S from './ProblemTimerControls.styled';
import {
  PlayIcon,
  PauseIcon,
  StopIcon,
  ClockEditIcon,
  TrashIcon,
} from '@/assets/svg';

interface BaseTimerControls {
  hours: number;
  minutes: number;
  seconds: number;
  status: 'play' | 'pause' | 'stop';
  color: string;
  height: number;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
  onEdit: () => void;
}

type NonDeletableTimerControls = BaseTimerControls & {
  hasDeleteButton: false;
};

type DeletableTimerControls = BaseTimerControls & {
  hasDeleteButton: true;
  onDelete: () => void;
};

type ProblemTimerControlsProps =
  | NonDeletableTimerControls
  | DeletableTimerControls;

const ProblemTimerControls = (props: ProblemTimerControlsProps) => {
  const {
    hours,
    minutes,
    seconds,
    status,
    color,
    height,
    hasDeleteButton,
    onPlay,
    onPause,
    onStop,
    onEdit,
  } = props;

  const timeString = [hours, minutes, seconds]
    .map((value) => String(value).padStart(2, '0'))
    .join(':');

  return (
    <S.Container $color={color} $height={height}>
      <S.TimeDisplay>{timeString}</S.TimeDisplay>
      <S.ButtonContainer>
        {status === 'play' && (
          <S.ControlButton
            aria-label="문제 타이머 일시정지하기"
            onClick={onPause}
          >
            <PauseIcon />
          </S.ControlButton>
        )}
        {status === 'pause' && (
          <S.ControlButton aria-label="문제 타이머 시작하기" onClick={onPlay}>
            <PlayIcon />
          </S.ControlButton>
        )}
        {status !== 'stop' && (
          <S.ControlButton aria-label="문제 타이머 정지하기" onClick={onStop}>
            <StopIcon />
          </S.ControlButton>
        )}
        {status === 'stop' && (
          <S.ControlButton
            aria-label="문제 타이머 시간 설정하기"
            onClick={onEdit}
          >
            <ClockEditIcon />
          </S.ControlButton>
        )}
        {hasDeleteButton && (
          <S.ControlButton
            aria-label="타이머 삭제하기"
            onClick={props.onDelete}
          >
            <TrashIcon />
          </S.ControlButton>
        )}
      </S.ButtonContainer>
    </S.Container>
  );
};

export default ProblemTimerControls;
