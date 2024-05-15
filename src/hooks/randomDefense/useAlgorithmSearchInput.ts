import { useState, useEffect, useRef } from 'react';
import { getSearchResults } from '~domains/algorithm/getSearchResults';
import { MAX_SEARCH_ALGORITHMS_COUNT } from '~constants/randomDefense';
import type { ChangeEventHandler, KeyboardEventHandler } from 'react';

interface UseAlgorithmSearchInputParams {
  selectedAlgorithmIds: number[];
  onChange: (algorithmIds: number[]) => void;
}

const useAlgorithmSearchInput = (params: UseAlgorithmSearchInputParams) => {
  const { selectedAlgorithmIds, onChange } = params;
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const updateInputValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const searchedAlgorithmIds =
    selectedAlgorithmIds.length < MAX_SEARCH_ALGORITHMS_COUNT
      ? getSearchResults(inputValue)
          .filter(({ id }) => !selectedAlgorithmIds.includes(id))
          .map(({ id }) => id)
      : [];

  const processActionIfKeyPress: KeyboardEventHandler = (event) => {
    if (event.key === 'Enter') {
      if (searchedAlgorithmIds.length === 0) {
        return;
      }

      onChange([...selectedAlgorithmIds, searchedAlgorithmIds[0]]);
      setInputValue('');
    }

    if (event.key === 'Backspace') {
      if (inputValue !== '') {
        return;
      }

      onChange(selectedAlgorithmIds.slice(0, -1));
    }
  };

  const addAlgorithmId = (algorithmId: number) => {
    onChange([...selectedAlgorithmIds, algorithmId]);
    setInputValue('');
  };

  const deleteAlgorithmId = (algorithmId: number) => {
    onChange(selectedAlgorithmIds.filter((id) => id !== algorithmId));
  };

  useEffect(() => {
    const containerElement = containerRef.current;
    const inputElement = inputRef.current;

    if (!containerElement || !inputElement) {
      return;
    }

    const focusInputAndOpenMenu = () => {
      inputElement.focus();
      setIsOpen(() => true);
    };

    const manageMenuVisibilityOnFocus = () => {
      setIsOpen(() => {
        return containerElement.contains(document.activeElement);
      });
    };

    containerElement.addEventListener('click', focusInputAndOpenMenu);
    containerElement.addEventListener('focusin', manageMenuVisibilityOnFocus);
    containerElement.addEventListener('focusout', manageMenuVisibilityOnFocus);

    return () => {
      containerElement.removeEventListener('click', focusInputAndOpenMenu);
      containerElement.removeEventListener(
        'focusin',
        manageMenuVisibilityOnFocus,
      );
      containerElement.removeEventListener(
        'focusout',
        manageMenuVisibilityOnFocus,
      );
    };
  }, [containerRef, inputRef, isOpen, setIsOpen]);

  return {
    isOpen,
    inputValue,
    searchedAlgorithmIds,
    updateInputValue,
    processActionIfKeyPress,
    addAlgorithmId,
    deleteAlgorithmId,
    containerRef,
    inputRef,
  };
};

export default useAlgorithmSearchInput;
