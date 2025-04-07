import { isObject, isIsoString } from '@/types/typeGuards';
import type { Timer } from '@/types/algorithm';

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
