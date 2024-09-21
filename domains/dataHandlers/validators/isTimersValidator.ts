import { isObject, isIsoString } from '~types/typeGuards';
import type { Timer, TimersResponse } from '~types/algorithm';

export const isTimersResponse = (data: unknown): data is TimersResponse => {
  return isObject(data) && 'timers' in data && isTimers(data.timers);
};

export const isTimers = (data: unknown): data is Timer[] => {
  if (!Array.isArray(data)) {
    return false;
  }

  return Array.isArray(data) && data.every((item) => isTimer(item));
};

export const isTimer = (data: unknown): data is Timer => {
  return (
    isObject(data) &&
    'problemId' in data &&
    'expiresAt' in data &&
    typeof data.problemId === 'number' &&
    isIsoString(data.expiresAt) &&
    !isNaN(data.problemId) &&
    data.problemId % 1 === 0 &&
    data.problemId >= 1000
  );
};
