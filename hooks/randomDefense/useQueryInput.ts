import { fetchQuerySuggestion } from '@/domains/randomDefense/querySuggestionFetcher';
import type { QuerySuggestion } from '@/types/randomDefense';
import { useState, useEffect, useRef } from 'react';
import type { ChangeEventHandler, KeyboardEventHandler } from 'react';

/**
 * solved.ac에서의 미완성 쿼리 목록입니다. 이 쿼리들은 단독으로 작동하지 않으며, 반드시 뒤에 내용이 와야 하므로
 * 사용자가 이 쿼리들을 자동완성으로 고르는 경우 공백을 뒤에 두지 않아야 합니다.
 */
const partialCaptions = [
  '*',
  'tier:',
  'id:',
  's#',
  'solved:',
  '#',
  'tag',
  '/',
  'from:',
  't#',
  'average_try:',
  'µ#',
  '%',
  'lang:',
  '@',
  'solved_by:',
  'o@',
  'solved_by_org',
  't@',
  'tried_by:',
  'v@',
  'voted_by:',
  'c@',
  'contributed_by:',
  'c/',
  'in_class:',
  'e/',
  'in_class_essentials:',
  's?',
  'standard:',
  'p?',
  'sprout:',
  'sp?',
  'o?',
  'solvable:',
  'v?',
  'votable:',
  'c?',
  'contributable:',
  'w?',
  'warning:',
  'v#',
  'voted:',
  'c#',
  'contributed:',
  '**',
  'vote_average:',
  'a*',
  'µ*',
];

const getLastTokenStartIndex = (text: string) => {
  const plainTextRegex = /^[A-z가-힣 ]+$/;
  const delimiters = ['|', '&', '(', ')', '!', '~', '-', ' '];

  if (plainTextRegex.test(text)) {
    return 0;
  }

  for (let index = text.length - 1; index >= 0; index -= 1) {
    if (delimiters.includes(text[index])) {
      return index + 1;
    }
  }
  return 0;
};

const autocomplete = (text: string, caption: string) => {
  const startIndex = getLastTokenStartIndex(text);

  return `${text.slice(0, startIndex)}${caption}${partialCaptions.includes(caption) ? '' : ' '}`;
};

interface useQueryInputParams {
  onChange: (query: string) => void;
}

const useQueryInput = (params: useQueryInputParams) => {
  const { onChange } = params;
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<QuerySuggestion[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const queryRef = useRef(query);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const throttleRef = useRef(false);

  useEffect(() => {
    queryRef.current = query;

    if (throttleRef.current) {
      return;
    }

    throttleRef.current = true;

    const fetchQuerySuggestionResult = async () => {
      const querySuggestionResult = await fetchQuerySuggestion(
        queryRef.current,
      );

      if (querySuggestionResult.success) {
        setSuggestions(querySuggestionResult.suggestions);
        setErrorMessage(null);
        return;
      }

      setSuggestions([]);
      setErrorMessage(querySuggestionResult.errorMessage);
    };

    setTimeout(() => {
      throttleRef.current = false;
      fetchQuerySuggestionResult();
    }, 300);
  }, [query]);

  const updateQuery: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const newQuery = event.target.value.replace(/\n/g, '');
    setQuery(newQuery);
    onChange(newQuery);
  };

  const applySuggestion = (suggestion: QuerySuggestion) => {
    const newQuery = autocomplete(query, suggestion.caption);
    setQuery(newQuery);
    onChange(newQuery);
    textareaRef.current?.focus();
  };

  const applyFirstSuggestionIfEnterKeyPressed: KeyboardEventHandler<
    HTMLTextAreaElement
  > = (event) => {
    if (
      event.code === 'Enter' &&
      suggestions.length > 0 &&
      !event.nativeEvent.isComposing
    ) {
      applySuggestion(suggestions[0]);
    }
  };

  return {
    query,
    suggestions,
    errorMessage,
    textareaRef,
    updateQuery,
    applySuggestion,
    applyFirstSuggestionIfEnterKeyPressed,
  };
};

export default useQueryInput;
