import { isObject } from '@/types/typeGuards';
import type { CheckedAlgorithmIdsResponse } from '@/types/algorithm';

export const isValidCheckedAlgorithmIds = (data: unknown): data is number[] => {
  if (!Array.isArray(data)) {
    return false;
  }

  return data.every(
    (value) =>
      typeof value === 'number' &&
      !isNaN(value) &&
      value % 1 === 0 &&
      value >= 1,
  );
};

export const isValidCheckedAlgorithmIdsResponse = (
  data: unknown,
): data is CheckedAlgorithmIdsResponse => {
  if (!isObject(data) || !('checkedIds' in data)) {
    return false;
  }

  return isValidCheckedAlgorithmIds(data.checkedIds);
};
