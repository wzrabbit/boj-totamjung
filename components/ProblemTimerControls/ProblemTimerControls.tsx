import * as S from './ProblemTimerControls.styled';
import {
  PlayIcon,
  PauseIcon,
  StopIcon,
  ClockEditIcon,
  TrashIcon,
} from '@/assets/svg';
import { toPx } from '@/utils/toPx';

interface BaseTimerControls {
  hours: number;
  minutes: number;
  seconds: number;
  status: 'play' | 'pause' | 'stop';
  color: string;
  /**
   * 비활성 시간 세그먼트("00:" 같은 leading-zero 부분)의 색상.
   * 가시성을 위해 활성 세그먼트와 다르게 지정할 수 있다.
   * 미지정 시 `color`를 그대로 사용한다.
   */
  transparentColor?: string;
  height: number | string;
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

const getTransparentAndNormalTimeParts = (
  hours: number,
  minutes: number,
  seconds: number,
) => {
  const timeString = [hours, minutes, seconds]
    .map((value) => String(value).padStart(2, '0'))
    .join(':');

  const transparentPart = timeString.match(/^[0:]*/)?.[0] ?? '';
  const normalPart = timeString.substring(transparentPart.length);

  return {
    transparent: transparentPart,
    normal: normalPart,
  };
};

const ProblemTimerControls = (props: ProblemTimerControlsProps) => {
  const {
    hours,
    minutes,
    seconds,
    status,
    color,
    transparentColor,
    height,
    hasDeleteButton,
    onPlay,
    onPause,
    onStop,
    onEdit,
  } = props;
  const { transparent, normal } = getTransparentAndNormalTimeParts(
    hours,
    minutes,
    seconds,
  );

  return (
    <S.Container $color={color} $height={toPx(height)}>
      <S.TimeDisplay>
        <S.TransparentDisplay $transparentColor={transparentColor}>
          {transparent}
        </S.TransparentDisplay>
        {normal}
      </S.TimeDisplay>
      <S.ButtonContainer $maxButtonCount={hasDeleteButton ? 3 : 2}>
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
