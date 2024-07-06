import { isObject } from '~types/typeGuards';
import { FontNoResponse } from '~types/font';

export const isFontNoResponse = (data: unknown): data is FontNoResponse => {
  return (
    isObject(data) &&
    'fontNo' in data &&
    typeof data.fontNo === 'number' &&
    !isNaN(data.fontNo) &&
    data.fontNo % 1 === 0
  );
};
