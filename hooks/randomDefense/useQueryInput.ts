import { useState, useRef } from 'react';
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

const autocomplete = (text: string, suggestion: string) => {
  const { startIndex } = getLastTokenInfo(text);

  return `${text.slice(0, startIndex)}${suggestion} `;
};

interface useQueryInputParams {
  onChange: (query: string) => void;
}

const useQueryInput = (params: useQueryInputParams) => {
  const { onChange } = params;
  const [query, setQuery] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const updateQuery: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const newQuery = event.target.value.replace(/\n/g, '');
    setQuery(newQuery);
    onChange(newQuery);
  };

  const applySuggestion = (suggestion: string) => {
    const newQuery = autocomplete(query, suggestion);
    setQuery(newQuery);
    onChange(newQuery);
    textareaRef.current?.focus();
  };

  const applyFirstSuggestionIfEnterKeyPressed: KeyboardEventHandler<
    HTMLTextAreaElement
  > = (event) => {
    if (event.code === 'Enter') {
      setQuery((query) => autocomplete(query, 'foo').replace('\n', ''));
    }
  };

  return {
    query,
    suggestions: [
      'tag:math',
      'tag:implementation',
      'tag:dp',
      'solved_by:',
      's#',
    ],
    textareaRef,
    updateQuery,
    applySuggestion,
    applyFirstSuggestionIfEnterKeyPressed,
  };
};

export default useQueryInput;
