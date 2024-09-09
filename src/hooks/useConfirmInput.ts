import { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';

interface UseConfirmInputParams {
  confirmText: string;
}

const useConfirmInput = (params: UseConfirmInputParams) => {
  const { confirmText: initConfirmText } = params;
  const [inputValue, setInputValue] = useState('');
  const [confirmText, setConfirmText] = useState(initConfirmText);

  useEffect(() => {
    setConfirmText(confirmText);
  }, [initConfirmText]);

  const updateInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const isSameWithConfirmText = inputValue === confirmText;

  return {
    inputValue,
    isSameWithConfirmText,
    updateInputValue,
  };
};

export default useConfirmInput;
