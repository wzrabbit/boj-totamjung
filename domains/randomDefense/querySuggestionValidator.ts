import type { QuerySuggestion } from '@/types/randomDefense';
import type { SolvedAcQuerySuggestionTagInfo } from '@/types/solvedAcApi';
import { isObject } from '@/types/typeGuards';

export const isSolvedAcQuerySuggestionResponse = (data: unknown) => {
  return (
    isObject(data) &&
    'autocomplete' in data &&
    'tags' in data &&
    isQuerySuggestions(data.autocomplete) &&
    isSolvedAcQuerySuggestionTags(data.tags)
  );
};

export const isQuerySuggestions = (
  data: unknown,
): data is QuerySuggestion[] => {
  return Array.isArray(data) && data.every((item) => isQuerySuggestion(item));
};

const isQuerySuggestion = (data: unknown): data is QuerySuggestion => {
  return (
    isObject(data) &&
    'caption' in data &&
    'description' in data &&
    typeof data.caption === 'string' &&
    typeof data.description === 'string'
  );
};

const isSolvedAcQuerySuggestionTags = (
  data: unknown,
): data is SolvedAcQuerySuggestionTagInfo[] => {
  return (
    Array.isArray(data) &&
    data.every((item) => isSolvedAcQuerySuggestionTag(item))
  );
};

const isSolvedAcQuerySuggestionTag = (
  data: unknown,
): data is SolvedAcQuerySuggestionTagInfo => {
  return (
    isObject(data) &&
    'caption' in data &&
    'name' in data &&
    typeof data.caption === 'string' &&
    typeof data.name === 'string'
  );
};
