import type { IsoString } from '~types/utils';

export const formatDate = (date: IsoString) => {
  const [year, month, day, hours, minutes, seconds] = date.split(/[-.:TZ]/);

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
