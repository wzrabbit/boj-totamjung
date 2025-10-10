import { fetchQuerySuggestion } from '@/domains/randomDefense/querySuggestionFetcher';
import type { QuerySuggestion } from '@/types/randomDefense';
import { useState, useEffect, useRef } from 'react';
import type { ChangeEventHandler, KeyboardEventHandler } from 'react';

const getLastTokenInfo = (text: string) => {
  const plainTextRegex = /^[A-z가-힣 ]+$/;
  const delimiters = ['|', '&', '(', ')', '!', '~', '-', ' '];

  if (plainTextRegex.test(text)) {
    return { token: text, startIndex: 0 };
  }

  for (let index = text.length - 1; index >= 0; index -= 1) {
    if (delimiters.includes(text[index])) {
      return { token: text.slice(index + 1), startIndex: index + 1 };
    }
  }
  return { token: text, startIndex: 0 };
};

const autocomplete = (text: string, caption: string) => {
  const { startIndex } = getLastTokenInfo(text);

  return `${text.slice(0, startIndex)}${caption} `;
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
    if (event.code === 'Enter' && suggestions.length > 0) {
      setQuery((query) =>
        autocomplete(query, suggestions[0].caption).replace('\n', ''),
      );
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
