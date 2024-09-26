import { useState, useEffect } from 'react';

const useLockTimer = () => {
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [endTime, setEndTime] = useState(0);
  const [timerDisplayText, setTimerDisplayText] = useState('보기');

  useEffect(() => {
    if (!isTimerRunning) {
      setTimerDisplayText('보기');
      return;
    }

    const updateTimerDisplayText = () => {
      const remainTime = endTime - Date.now();

      if (remainTime <= 0) {
        setTimerDisplayText('보기');
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
        `잠김 (🔒︎${remainHours}:${remainMinutes}:${remainSeconds} 후 보기 가능)`,
      );
    };

    const lockTimer = setInterval(() => {
      updateTimerDisplayText();
    }, 100);

    return () => {
      clearInterval(lockTimer);
    };
  }, [isTimerRunning, endTime]);

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
