import { isObject, isTier } from '@/types/typeGuards';
import type {
  ProblemInfo,
  RandomDefenseResultResponse,
} from '@/types/randomDefense';

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
    return 'problemInfos' in data && isProblemInfos(data.problemInfos);
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

const isProblemInfo = (data: unknown): data is ProblemInfo => {
  return (
    isObject(data) &&
    'problemId' in data &&
    'title' in data &&
    'tier' in data &&
    typeof data.problemId === 'number' &&
    typeof data.title === 'string' &&
    isTier(data.tier)
  );
};

const isProblemInfos = (data: unknown): data is ProblemInfo[] => {
  return Array.isArray(data) && data.every((item) => isProblemInfo(item));
};
