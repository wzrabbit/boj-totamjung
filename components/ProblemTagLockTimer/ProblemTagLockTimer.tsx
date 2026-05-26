import * as S from './ProblemTagLockTimer.styled';
import { lockWithClockIcon } from '@/assets/png';
import Text from '@/components/common/Text';
import Input from '@/components/common/Input';
import useProblemTagLockTimer from '@/hooks/tagLock/useProblemTagLockTimer';
import { MAX_HOURS, MAX_MINUTES } from '@/constants/tagLock';
import { theme } from '@/styles/theme';
import { useTranslation } from '@/i18n';

interface ProblemTagLockTimerProps {
  hours: number;
  minutes: number;
  disabled?: boolean;
  onChange: (hours: number, minutes: number) => void;
}

const ProblemTagLockTimer = (props: ProblemTagLockTimerProps) => {
  const { hours: initHours, minutes: initMinutes, disabled, onChange } = props;
  const {
    hours,
    minutes,
    updateHours,
    updateMinutes,
    submitHours,
    submitMinutes,
  } = useProblemTagLockTimer({ initHours, initMinutes, onChange });
  const { t } = useTranslation();
  return (
    <S.Container>
      <img src={lockWithClockIcon} width="54px" height="46px" alt="" />
      <Input
        name="hours"
        type="number"
        width={60}
        height={46}
        min={0}
        max={MAX_HOURS}
        value={hours}
        borderWidth={2}
        borderRadius={8}
        fontSize={26}
        fontWeight={800}
        color={theme.colors.GOLD}
        textAlign="center"
        disabled={disabled}
        onChange={updateHours}
        onBlur={submitHours}
        aria-label={t('widget.tagLockTimer.hoursAriaLabel')}
      />
      <Text type="normal" as="span" fontSize={16} width={30}>
        {t('widget.tagLockTimer.hoursUnit')}
      </Text>
      <Input
        name="minutes"
        type="number"
        width={60}
        height={46}
        min={0}
        max={MAX_MINUTES}
        value={minutes}
        borderWidth={2}
        borderRadius={8}
        fontSize={26}
        fontWeight={800}
        color={theme.colors.GOLD}
        textAlign="center"
        disabled={disabled}
        onChange={updateMinutes}
        onBlur={submitMinutes}
        aria-label={t('widget.tagLockTimer.minutesAriaLabel')}
      />
      <Text type="normal" as="span" fontSize={16} width={30}>
        {t('widget.tagLockTimer.minutesUnit')}
      </Text>
    </S.Container>
  );
};

export default ProblemTagLockTimer;
