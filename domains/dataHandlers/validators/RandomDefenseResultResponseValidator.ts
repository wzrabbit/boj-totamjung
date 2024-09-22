import { isObject } from '@/types/typeGuards';
import { isSolvedAcSearchProblemInfo } from './solvedAcSearchProblemResponseValidator';
import type { RandomDefenseResultResponse } from '@/types/randomDefense';

export const isRandomDefenseResultResponse = (
  data: unknown,
): data is RandomDefenseResultResponse => {
  if (
    !(isObject(data) && 'success' in data && typeof data.success === 'boolean')
  ) {
    return false;
  }

  const { success } = data;

  if (success) {
    return (
      'problemInfo' in data && isSolvedAcSearchProblemInfo(data.problemInfo)
    );
  }

  if ('statusCode' in data && typeof data.statusCode !== 'number') {
    return false;
  }

  if (!('errorMessage' in data) || typeof data.errorMessage !== 'string') {
    return false;
  }

  if (!('errorDescriptions' in data)) {
    return true;
  }
  const { errorDescriptions } = data;

  return (
    typeof errorDescriptions === 'string' ||
    (Array.isArray(errorDescriptions) &&
      errorDescriptions.every(
        (errorDescription) => typeof errorDescription === 'string',
      ))
  );
};
