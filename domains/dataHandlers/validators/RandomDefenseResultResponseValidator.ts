import { isObject } from '@/types/typeGuards';
import { isSolvedAcSearchProblemInfos } from './solvedAcSearchProblemResponseValidator';
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
      'problemInfos' in data && isSolvedAcSearchProblemInfos(data.problemInfos)
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
