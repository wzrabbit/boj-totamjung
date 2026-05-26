import { isObject, isTier } from '@/types/typeGuards';
import type { ProblemInfo, RandomDefenseResult } from '@/types/randomDefense';

const isLocalizableMessage = (data: unknown): boolean => {
  if (!isObject(data) || !('key' in data) || typeof data.key !== 'string') {
    return false;
  }

  if (!('substitutions' in data)) {
    return true;
  }

  const { substitutions } = data;
  return (
    Array.isArray(substitutions) &&
    substitutions.every((substitution) => typeof substitution === 'string')
  );
};

export const isRandomDefenseResult = (
  data: unknown,
): data is RandomDefenseResult => {
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

  if (!('errorMessage' in data) || !isLocalizableMessage(data.errorMessage)) {
    return false;
  }

  if (!('errorDescriptions' in data)) {
    return true;
  }

  const { errorDescriptions } = data;

  return (
    isLocalizableMessage(errorDescriptions) ||
    (Array.isArray(errorDescriptions) &&
      errorDescriptions.every((errorDescription) =>
        isLocalizableMessage(errorDescription),
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
