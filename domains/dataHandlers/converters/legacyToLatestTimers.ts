import type { TagLockTimer } from '@/types/algorithm';
import { isTagLockTimer } from '../validators/isTimersValidator';
import { isV1Timer } from '../validators/hiderOptionsValidator';

/**
 * 이 컨버터 함수에는 유효하지 않은 구버전 타이머 값이 주어져도 괜찮습니다.
 */
export const convertV1ToLatestTimers = (
  legacyTimer: unknown,
): TagLockTimer[] => {
  if (!isV1Timer(legacyTimer)) {
    return [];
  }

  const { expire, problem } = legacyTimer;

  const legacyTimerDate = new Date(expire);

  if (isNaN(legacyTimerDate.getTime())) {
    return [];
  }

  if (problem === -1) {
    return [];
  }

  const expiresAt = new Date(expire).toISOString();

  const timer = {
    problemId: problem,
    expiresAt,
  };

  return isTagLockTimer(timer) ? [timer] : [];
};
