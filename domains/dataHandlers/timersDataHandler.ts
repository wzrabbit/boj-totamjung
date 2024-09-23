import { STORAGE_KEY } from '@/constants/commands';
import { sanitizeTimers } from './sanitizers/timersSanitizer';
import { fetchHiderOptions } from './hiderOptionsDataHandler';
import { isTimers } from './validators/isTimersValidator';
import type { TimersResponse } from '@/types/algorithm';

export const fetchTimers = async (): Promise<TimersResponse> => {
  const data = await browser.storage.local.get(STORAGE_KEY.TIMERS);
  const timers = data[STORAGE_KEY.TIMERS];

  const sanitizedTimers = sanitizeTimers(timers);

  return {
    [STORAGE_KEY.TIMERS]: sanitizedTimers,
  };
};

export const saveTimers = async (timers: unknown) => {
  if (!isTimers(timers)) {
    return;
  }

  browser.storage.local.set({
    [STORAGE_KEY.TIMERS]: timers,
  });
};

export const getRemainingLockTimeByProblemId = async (problemId: number) => {
  const { timers } = await fetchTimers();
  const expiryIsoTime = timers.find(
    (timer) => timer.problemId === problemId,
  )?.expiresAt;
  const expiryNumericTime = expiryIsoTime
    ? Date.parse(expiryIsoTime)
    : undefined;
  const now = Date.now();

  if (expiryNumericTime && expiryNumericTime > now) {
    return Math.max(0, expiryNumericTime - now);
  }

  const { problemTagLockDuration, problemTagLockUsage } =
    await fetchHiderOptions();

  if (problemTagLockUsage === 'click') {
    return 0;
  }

  const lockTimesInMilliseconds =
    problemTagLockDuration.hours * 3_600_000 +
    problemTagLockDuration.minutes * 60_000;

  addSingleTimerByProblemId(problemId);

  return lockTimesInMilliseconds;
};

export const addSingleTimerByProblemId = async (problemId: number) => {
  const { timers } = await fetchTimers();
  const { problemTagLockDuration } = await fetchHiderOptions();

  const lockTimesInMilliseconds =
    problemTagLockDuration.hours * 3_600_000 +
    problemTagLockDuration.minutes * 60_000;
  const expiresAt = new Date(
    Date.now() + lockTimesInMilliseconds,
  ).toISOString();

  const newTimers = [...timers, { problemId, expiresAt }];
  const sanitizedNewTimers = sanitizeTimers(newTimers);

  browser.storage.local.set({
    [STORAGE_KEY.TIMERS]: sanitizedNewTimers,
  });
};

export const removeSingleTimerByProblemId = async (problemId: number) => {
  const { timers } = await fetchTimers();
  const newTimers = timers.filter((timer) => timer.problemId !== problemId);

  browser.storage.local.set({
    [STORAGE_KEY.TIMERS]: newTimers,
  });
};
