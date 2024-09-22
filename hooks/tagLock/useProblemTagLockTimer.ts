import { useState, useEffect, ChangeEvent } from 'react';
import { isHoursValid, isMinutesValid } from '@/domains/tagLock/timeValidator';

interface UseProblemTagLockTimerParams {
  initHours: number;
  initMinutes: number;
  onChange: (hours: number, minutes: number) => void;
}

const useProblemTagLockTimer = (params: UseProblemTagLockTimerParams) => {
  const { initHours, initMinutes, onChange } = params;
  const [hours, setHours] = useState(String(initHours));
  const [minutes, setMinutes] = useState(String(initMinutes));

  useEffect(() => {
    setHours(String(initHours));
    setMinutes(String(initMinutes));
  }, [initHours, initMinutes]);

  const updateHours = (event: ChangeEvent<HTMLInputElement>) => {
    const newHours = event.target.value;

    if (newHours.length >= 3) {
      return;
    }

    setHours(newHours);
  };

  const updateMinutes = (event: ChangeEvent<HTMLInputElement>) => {
    const newMinutes = event.target.value;

    if (newMinutes.length >= 3) {
      return;
    }

    setMinutes(newMinutes);
  };

  const submitHours = () => {
    if (!isHoursValid(hours) || Number(hours) === initHours) {
      setHours(String(initHours));
      return;
    }

    setHours(String(Number(hours)));
    onChange(Number(hours), Number(minutes));
  };

  const submitMinutes = () => {
    if (!isMinutesValid(minutes) || Number(minutes) === initMinutes) {
      setMinutes(String(initMinutes));
      return;
    }

    setMinutes(String(Number(minutes)));
    onChange(Number(hours), Number(minutes));
  };

  return {
    hours,
    minutes,
    updateHours,
    updateMinutes,
    submitHours,
    submitMinutes,
  };
};

export default useProblemTagLockTimer;
