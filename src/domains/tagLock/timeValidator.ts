import { MAX_HOURS, MAX_MINUTES } from '~constants/tagLock';

const NUMERIC_STRING_REGEX = /^\d+$/;

export const isHoursValid = (hours: string) => {
  return (
    NUMERIC_STRING_REGEX.test(hours) &&
    Number(hours) >= 0 &&
    Number(hours) <= MAX_HOURS
  );
};

export const isMinutesValid = (minutes: string) => {
  return (
    NUMERIC_STRING_REGEX.test(minutes) &&
    Number(minutes) >= 0 &&
    Number(minutes) <= MAX_MINUTES
  );
};
