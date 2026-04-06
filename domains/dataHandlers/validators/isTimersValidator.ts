import { isObject, isIsoString } from '@/types/typeGuards';
import type { TagLockTimer } from '@/types/algorithm';

export const isTagLockTimers = (data: unknown): data is TagLockTimer[] => {
  if (!Array.isArray(data)) {
    return false;
  }

  return Array.isArray(data) && data.every((item) => isTagLockTimer(item));
};

export const isTagLockTimer = (data: unknown): data is TagLockTimer => {
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
