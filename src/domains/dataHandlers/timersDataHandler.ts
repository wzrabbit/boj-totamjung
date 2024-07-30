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
