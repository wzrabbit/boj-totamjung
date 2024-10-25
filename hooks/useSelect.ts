import { useState, useEffect, useRef } from 'react';

interface UseSelectParams<T> {
  initSelectedValue: T;
  onChange: (value: T) => void;
}

const useSelect = <T>(params: UseSelectParams<T>) => {
  const { initSelectedValue, onChange } = params;
  const [selectedValue, setSelectedValue] = useState<T>(initSelectedValue);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedValue(initSelectedValue);
  }, [initSelectedValue]);

  useEffect(() => {
    const containerElement = containerRef.current;

    if (!containerElement) {
      return;
    }

    const closeSelectIfNotFocused = (event: globalThis.MouseEvent) => {
      if (
        event.target instanceof Node &&
        event.target !== containerElement &&
        !containerElement.contains(event.target)
      ) {
        setIsSelectOpen(false);
      }
    };

    document.addEventListener('click', closeSelectIfNotFocused);

    return () => {
      document.removeEventListener('click', closeSelectIfNotFocused);
    };
  }, [containerRef]);

  const openSelect = () => {
    setIsSelectOpen(true);
  };

  const updateSelectedValue = (value: T) => {
    setSelectedValue(value);
    setIsSelectOpen(false);
    onChange(value);
  };

  return {
    selectedValue,
    isSelectOpen,
    updateSelectedValue,
    openSelect,
    containerRef,
  };
};

export default useSelect;
