import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { MAX_PROBLEM_COUNT_PER_RANDOM_DEFENSE } from '@/constants/randomDefense';

const numericStringRegex = /^\d+$/;

const useGachaProblemCount = () => {
  const [inputValue, setInputValue] = useState('5');

  const updateInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;

    if (newInputValue.length >= 3) {
      return;
    }

    setInputValue(newInputValue);
  };

  const isInputValueValid =
    numericStringRegex.test(inputValue) &&
    Number(inputValue) >= 1 &&
    Number(inputValue) <= MAX_PROBLEM_COUNT_PER_RANDOM_DEFENSE;

  return { inputValue, updateInputValue, isInputValueValid };
};

export default useGachaProblemCount;
