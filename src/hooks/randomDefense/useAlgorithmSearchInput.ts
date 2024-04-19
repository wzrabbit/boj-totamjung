import { useState, useEffect } from 'react';
import { getSearchResults } from '~domains/algorithm/getSearchResults';
import { MAX_SEARCH_ALGORITHM_COUNT } from '~constants/randomDefense';
import type { Algorithm } from '~types/algorithm';
import type {
  ChangeEventHandler,
  KeyboardEventHandler,
  RefObject,
} from 'react';

interface UseAlgorithmSearchInputParams {
  containerRef: RefObject<HTMLDivElement>;
  inputRef: RefObject<HTMLInputElement>;
  selectedAlgorithms: Algorithm[];
  onChange: (algorithms: Algorithm[]) => void;
}

const useAlgorithmSearchInput = (params: UseAlgorithmSearchInputParams) => {
  const { containerRef, inputRef, selectedAlgorithms, onChange } = params;
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const updateInputValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(() => event.target.value);
  };

  const selectedAlgorithmIds = selectedAlgorithms.map(({ id }) => id);
  const searchedAlgorithms =
    selectedAlgorithms.length < MAX_SEARCH_ALGORITHM_COUNT
      ? getSearchResults(inputValue).filter(
          ({ id }) => !selectedAlgorithmIds.includes(id),
        )
      : [];

  const processActionIfKeyPress: KeyboardEventHandler = (event) => {
    if (event.key === 'Enter') {
      if (searchedAlgorithms.length === 0) {
        return;
      }

      onChange([...selectedAlgorithms, searchedAlgorithms[0]]);
      setInputValue(() => '');
    }

    if (event.key === 'Backspace') {
      if (inputValue !== '') {
        return;
      }

      onChange(selectedAlgorithms.slice(0, -1));
    }
  };

  const addAlgorithm = (algorithm: Algorithm) => {
    onChange([...selectedAlgorithms, algorithm]);
    setInputValue(() => '');
  };

  const deleteAlgorithm = (algorithm: Algorithm) => {
    onChange(selectedAlgorithms.filter(({ id }) => id !== algorithm.id));
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
    searchedAlgorithms,
    updateInputValue,
    processActionIfKeyPress,
    addAlgorithm,
    deleteAlgorithm,
  };
};

export default useAlgorithmSearchInput;
