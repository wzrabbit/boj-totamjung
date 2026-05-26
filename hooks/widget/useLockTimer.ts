import { useState, useEffect } from 'react';
import { useTranslation } from '@/i18n';

const useLockTimer = () => {
  const { t } = useTranslation();
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [endTime, setEndTime] = useState(0);
  const [timerDisplayText, setTimerDisplayText] = useState(
    t('hooks.lockTimer.show'),
  );

  useEffect(() => {
    if (!isTimerRunning) {
      setTimerDisplayText(t('hooks.lockTimer.show'));
      return;
    }

    const updateTimerDisplayText = () => {
      const remainTime = endTime - Date.now();

      if (remainTime <= 0) {
        setTimerDisplayText(t('hooks.lockTimer.show'));
        setIsTimerRunning(false);
        return;
      }

      const remainHours = Math.floor(remainTime / 3_600_000);
      const remainMinutes = String(
        Math.floor((remainTime % 3_600_000) / 60_000),
      ).padStart(2, '0');
      const remainSeconds = String(
        Math.floor((remainTime % 60_000) / 1_000),
      ).padStart(2, '0');

      setTimerDisplayText(
        t('hooks.lockTimer.lockedFormat', [
          String(remainHours),
          remainMinutes,
          remainSeconds,
        ]),
      );
    };

    const lockTimer = setInterval(() => {
      updateTimerDisplayText();
    }, 100);

    return () => {
      clearInterval(lockTimer);
    };
  }, [isTimerRunning, endTime, t]);

  const setTimerByDuration = (duration: number) => {
    const newEndTime = Date.now() + duration;
    setEndTime(newEndTime);
    setIsTimerRunning(true);
  };

  const setTimerByEndTime = (endTime: number) => {
    setEndTime(endTime);
    setIsTimerRunning(true);
  };

  const clearTimer = () => {
    setIsTimerRunning(false);
  };

  return {
    isTimerRunning,
    timerDisplayText,
    setTimerByDuration,
    setTimerByEndTime,
    clearTimer,
  };
};

export default useLockTimer;
