import { STORAGE_KEY } from '@/constants/commands';
import { sanitizeTimers } from './sanitizers/timersSanitizer';
import { fetchHiderOptions } from './hiderOptionsDataHandler';
import { isTagLockTimers } from './validators/isTimersValidator';
import type { TagLockTimer } from '@/types/algorithm';

export const fetchTimers = async (): Promise<TagLockTimer[]> => {
  const hiderOptions = await fetchHiderOptions();
  return sanitizeTimers(hiderOptions.timers);
};

export const saveTimers = async (timers: unknown) => {
  if (!isTagLockTimers(timers)) {
    return;
  }

  const hiderOptions = await fetchHiderOptions();

  browser.storage.local.set({
    [STORAGE_KEY.HIDER_OPTIONS]: {
      ...hiderOptions,
      timers,
    },
  });
};

export const getRemainingLockTimeByProblemId = async (problemId: number) => {
  const timers = await fetchTimers();
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

  await addSingleTimerByProblemId(problemId);

  return lockTimesInMilliseconds;
};

export const addSingleTimerByProblemId = async (problemId: number) => {
  const timers = await fetchTimers();
  const hiderOptions = await fetchHiderOptions();
  const { problemTagLockDuration } = hiderOptions;

  const lockTimesInMilliseconds =
    problemTagLockDuration.hours * 3_600_000 +
    problemTagLockDuration.minutes * 60_000;
  const expiresAt = new Date(
    Date.now() + lockTimesInMilliseconds,
  ).toISOString();

  const newTimers = [...timers, { problemId, expiresAt }];
  const sanitizedNewTimers = sanitizeTimers(newTimers);

  browser.storage.local.set({
    [STORAGE_KEY.HIDER_OPTIONS]: {
      ...hiderOptions,
      timers: sanitizedNewTimers,
    },
  });
};

export const removeSingleTimerByProblemId = async (problemId: number) => {
  const hiderOptions = await fetchHiderOptions();
  const timers = sanitizeTimers(hiderOptions.timers);
  const newTimers = timers.filter((timer) => timer.problemId !== problemId);

  browser.storage.local.set({
    [STORAGE_KEY.HIDER_OPTIONS]: {
      ...hiderOptions,
      timers: newTimers,
    },
  });
};
