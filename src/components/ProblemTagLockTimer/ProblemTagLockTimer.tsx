import * as S from './ProblemTagLockTimer.styled';
import { lockWithClockIcon } from '~images/png';
import Text from '~components/common/Text';
import useProblemTagLockTimer from '~hooks/tagLock/useProblemTagLockTimer';
import { MAX_HOURS, MAX_MINUTES } from '~constants/tagLock';

interface ProblemTagLockTimerProps {
  hours: number;
  minutes: number;
  onChange: (hours: number, minutes: number) => void;
}

const ProblemTagLockTimer = (props: ProblemTagLockTimerProps) => {
  const { hours: initHours, minutes: initMinutes, onChange } = props;
  const {
    hours,
    minutes,
    updateHours,
    updateMinutes,
    submitHours,
    submitMinutes,
  } = useProblemTagLockTimer({ initHours, initMinutes, onChange });
  return (
    <S.Container>
      <img src={lockWithClockIcon} width="54px" height="46px" alt="" />
      <S.Input
        name="hours"
        type="number"
        min={0}
        max={MAX_HOURS}
        value={hours}
        onChange={updateHours}
        onBlur={submitHours}
        aria-label="시간"
      />
      <Text type="normal" fontSize="16px">
        시간
      </Text>
      <S.Input
        name="minutes"
        type="number"
        min={0}
        max={MAX_MINUTES}
        value={minutes}
        onChange={updateMinutes}
        onBlur={submitMinutes}
        aria-label="분"
      />
      <Text type="normal" fontSize="16px">
        분
      </Text>
    </S.Container>
  );
};

export default ProblemTagLockTimer;