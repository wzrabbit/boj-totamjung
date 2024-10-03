import { useState, useEffect, useRef } from 'react';
import { getSearchResults } from '@/domains/algorithm/getSearchResults';
import { MAX_SEARCH_ALGORITHMS_COUNT } from '@/constants/randomDefense';
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

    const updateOpenStateOnMouseDown = (event: globalThis.MouseEvent) => {
      const clickedElement = event.target;

      if (!clickedElement || !(clickedElement instanceof Node)) {
        return;
      }

      setIsOpen(containerElement.contains(clickedElement));
    };

    const updateOpenStateOnFocus = () => {
      if (document.activeElement === document.body) {
        return;
      }

      setIsOpen(containerElement.contains(document.activeElement));
    };

    const focusInputElementOnClick = () => {
      inputElement.focus();
    };

    document.addEventListener('mousedown', updateOpenStateOnMouseDown);
    document.addEventListener('focusin', updateOpenStateOnFocus);
    document.addEventListener('focusout', updateOpenStateOnFocus);
    containerElement.addEventListener('click', focusInputElementOnClick);

    return () => {
      document.removeEventListener('mousedown', updateOpenStateOnMouseDown);
      document.removeEventListener('focusin', updateOpenStateOnFocus);
      document.removeEventListener('focusout', updateOpenStateOnFocus);
      containerElement.removeEventListener('click', focusInputElementOnClick);
    };
  }, [containerRef, inputRef]);

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
