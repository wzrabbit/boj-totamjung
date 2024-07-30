import { STORAGE_KEY } from '~constants/commands';
import { sanitizeTimers } from './sanitizers/timersSanitizer';
import { fetchHiderOptions } from './hiderOptionsDataHandler';
import { isTimers } from './validators/isTimersValidator';
import { isValidIsoString } from '~utils/isValidIsoString';
import type { Timer } from '~types/algorithm';

export const fetchTimers = async () => {
  const data = await chrome.storage.local.get(STORAGE_KEY.TIMERS);
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

  chrome.storage.local.set({
    [STORAGE_KEY.TIMERS]: timers,
  });
};

export const saveAndGetRemainingLockTimeByProblemId = async (
  problemId: number,
) => {
  const { timers } = await fetchTimers();
  const expiryIsoTime = timers.find((timer) => timer.problemId === problemId)
    ?.expiresAt;
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
  const expiresAt = new Date(now + lockTimesInMilliseconds).toISOString();

  if (isValidIsoString(expiresAt)) {
    addSingleTimer({
      problemId,
      expiresAt,
    });
  }

  return lockTimesInMilliseconds;
};

const addSingleTimer = async (timer: Timer) => {
  const { timers } = await fetchTimers();
  const newTimers = [...timers, timer];

  const sanitizedNewTimers = sanitizeTimers(newTimers);

  chrome.storage.local.set({
    [STORAGE_KEY.TIMERS]: sanitizedNewTimers,
  });
};
