import { useState } from 'react';
import { OptionsNavCategory } from '~types/options';

const useOptionsPage = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<OptionsNavCategory>('algorithmHider');

  return { selectedCategory, setSelectedCategory };
};

export default useOptionsPage;
