import { DEFAULT_TIMERS } from '~constants/defaultValues';
import { isTimer } from '../validators/isTimersValidator';
import type { Timer } from '~types/algorithm';

const MAX_TIMER_LENGTH = 300;

export const sanitizeTimers = (timers: unknown): Timer[] => {
  if (!Array.isArray(timers)) {
    return DEFAULT_TIMERS;
  }

  const now = Date.now();

  return timers
    .filter((timer) => isTimer(timer) && now < Date.parse(timer.expiresAt))
    .slice(-MAX_TIMER_LENGTH);
};
