import { useState, useEffect } from 'react';

const SLEEP_START_HOUR = 23;
const WAKE_HOUR = 7;

export const isSleepingNow = () => {
  const hour = new Date().getHours();
  return hour >= SLEEP_START_HOUR || hour < WAKE_HOUR;
};

export const getMsUntilNextBoundary = () => {
  const now = new Date();
  const nextBoundaryTimes = [WAKE_HOUR, SLEEP_START_HOUR].map((hour) => {
    const boundary = new Date(now);
    boundary.setHours(hour, 0, 0, 0);

    if (boundary.getTime() <= now.getTime()) {
      boundary.setDate(boundary.getDate() + 1);
    }

    return boundary.getTime();
  });

  return Math.min(...nextBoundaryTimes) - now.getTime();
};

const useTotamjungSleeping = () => {
  const [isSleeping, setIsSleeping] = useState(isSleepingNow);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const scheduleNextUpdate = () => {
      timeoutId = setTimeout(() => {
        setIsSleeping(isSleepingNow());
        scheduleNextUpdate();
      }, getMsUntilNextBoundary());
    };

    scheduleNextUpdate();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setIsSleeping(isSleepingNow());
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return isSleeping;
};

export default useTotamjungSleeping;
