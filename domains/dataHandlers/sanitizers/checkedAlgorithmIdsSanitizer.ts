import { DEFAULT_CHECKED_ALGORITHM_IDS } from '@/constants/defaultValues';

export const sanitizeCheckedAlgorithmIds = (
  checkedAlgorithmIds: unknown,
): number[] => {
  if (!Array.isArray(checkedAlgorithmIds)) {
    return DEFAULT_CHECKED_ALGORITHM_IDS;
  }

  return checkedAlgorithmIds.filter(
    (value) =>
      typeof value === 'number' &&
      !isNaN(value) &&
      value % 1 === 0 &&
      value >= 1,
  );
};
