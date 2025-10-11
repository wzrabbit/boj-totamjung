import { fetchQuerySuggestion } from '@/domains/randomDefense/querySuggestionFetcher';
import type { QuerySuggestion } from '@/types/randomDefense';
import { useState, useEffect, useRef } from 'react';
import type {
  ChangeEventHandler,
  ForwardedRef,
  KeyboardEventHandler,
} from 'react';

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
const plainTextRegex = /^[A-z가-힣 ]+$/;
const queryDelimiters = ['|', '&', '(', ')', '!', '~', '-', ' '];

const getLastTokenStartIndex = (text: string) => {
  if (plainTextRegex.test(text)) {
    return 0;
  }

  for (let index = text.length - 1; index >= 0; index -= 1) {
    if (queryDelimiters.includes(text[index])) {
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
  value: string;
  textareaRef: ForwardedRef<HTMLTextAreaElement>;
  onChange: (value: string) => void;
}

const useQueryInput = (params: useQueryInputParams) => {
  const { value, textareaRef, onChange } = params;
  const [suggestions, setSuggestions] = useState<QuerySuggestion[]>([]);
  const [fallbackMessage, setFallbackMessage] = useState<string | null>(
    '잠시만 기다려주세요...',
  );
  const valueRef = useRef(value);
  const throttleRef = useRef(false);

  useEffect(() => {
    valueRef.current = value;

    if (throttleRef.current) {
      return;
    }

    throttleRef.current = true;

    const fetchQuerySuggestionResult = async () => {
      const querySuggestionResult = await fetchQuerySuggestion(
        valueRef.current,
      );

      if (querySuggestionResult.success) {
        setSuggestions(querySuggestionResult.suggestions);
        setFallbackMessage(null);
        return;
      }

      setSuggestions([]);
      setFallbackMessage(querySuggestionResult.errorMessage);
    };

    setTimeout(() => {
      throttleRef.current = false;
      fetchQuerySuggestionResult();
    }, 200);
  }, [value]);

  const updateQuery: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const newQuery = event.target.value.replace(/\n/g, '');
    onChange(newQuery);
  };

  const applySuggestion = (suggestion: QuerySuggestion) => {
    const newQuery = autocomplete(value, suggestion.caption);
    onChange(newQuery);

    if (textareaRef && 'current' in textareaRef) {
      textareaRef.current?.focus();
    }
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
    suggestions,
    fallbackMessage,
    textareaRef,
    updateQuery,
    applySuggestion,
    applyFirstSuggestionIfEnterKeyPressed,
  };
};

export default useQueryInput;
