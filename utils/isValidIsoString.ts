import { IsoString } from '@/types/utils';
import { isIsoString } from '@/types/typeGuards';

export const isValidIsoString = (data: unknown): data is IsoString => {
  if (!isIsoString(data)) {
    return false;
  }

  const [year, month, day, hours, minutes, seconds, milliseconds] = data
    .split(/[-:.TZ]/)
    .map(Number);

  return (
    year >= 1 &&
    year <= 9999 &&
    month >= 1 &&
    month <= 12 &&
    day >= 1 &&
    day <= 31 &&
    hours >= 0 &&
    hours <= 23 &&
    minutes >= 0 &&
    minutes <= 59 &&
    seconds >= 0 &&
    seconds <= 59 &&
    milliseconds >= 0 &&
    milliseconds <= 999
  );
};
