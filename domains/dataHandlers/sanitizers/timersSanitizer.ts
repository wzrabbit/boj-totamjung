import { DEFAULT_TIMERS } from '@/constants/defaultValues';
import { isTagLockTimer } from '../validators/isTimersValidator';
import type { TagLockTimer } from '@/types/algorithm';

const MAX_TIMER_LENGTH = 300;

export const sanitizeTimers = (timers: unknown): TagLockTimer[] => {
  if (!Array.isArray(timers)) {
    return DEFAULT_TIMERS;
  }

  const now = Date.now();

  return timers
    .filter(
      (timer) => isTagLockTimer(timer) && now < Date.parse(timer.expiresAt),
    )
    .slice(-MAX_TIMER_LENGTH);
};
