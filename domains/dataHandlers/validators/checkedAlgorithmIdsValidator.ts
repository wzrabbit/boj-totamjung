import type { CheckedAlgorithmIds } from '@/types/algorithm';

export const isValidCheckedAlgorithmIds = (
  data: unknown,
): data is CheckedAlgorithmIds => {
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
