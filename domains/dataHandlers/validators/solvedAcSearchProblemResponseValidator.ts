import { isObject } from '@/types/typeGuards';
import { isTierWithoutNotRatable } from '@/types/typeGuards';
import type {
  SolvedAcSearchProblemResponse,
  SolvedAcSearchProblemInfo,
} from '@/types/solvedAcApi';

export const isSolvedAcSearchProblemResponse = (
  data: unknown,
): data is SolvedAcSearchProblemResponse => {
  return (
    isObject(data) &&
    'count' in data &&
    'items' in data &&
    typeof data.count === 'number' &&
    isSolvedAcSearchProblemInfos(data.items)
  );
};

export const isSolvedAcSearchProblemInfos = (
  data: unknown,
): data is SolvedAcSearchProblemInfo[] => {
  return (
    Array.isArray(data) &&
    data.every((item) => isSolvedAcSearchProblemInfo(item))
  );
};

export const isSolvedAcSearchProblemInfo = (
  data: unknown,
): data is SolvedAcSearchProblemInfo => {
  return (
    isObject(data) &&
    'problemId' in data &&
    'titleKo' in data &&
    'level' in data &&
    typeof data.problemId === 'number' &&
    typeof data.titleKo === 'string' &&
    isTierWithoutNotRatable(data.level)
  );
};
