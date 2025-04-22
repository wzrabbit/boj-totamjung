import { getSearchResults } from '@/domains/algorithm/getSearchResults';
import { ALGORITHMS_COUNT } from '@/constants/algorithmInfos';
import { useState, useEffect } from 'react';
import type { ChangeEventHandler } from 'react';
import {
  fetchCheckedAlgorithmIds,
  saveCheckedAlgorithmIds,
} from '@/domains/dataHandlers/checkedAlgorithmsHandler';

const useAlgorithmPool = () => {
  const [keyword, setKeyword] = useState('');
  const [checkedAlgorithmIds, setCheckedAlgorithmIds] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const checkedAlgorithmIds = await fetchCheckedAlgorithmIds();

      setCheckedAlgorithmIds(checkedAlgorithmIds);
      setIsLoaded(true);
    })();
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    saveCheckedAlgorithmIds(checkedAlgorithmIds);
  }, [checkedAlgorithmIds]);

  const handleChangeKeyword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setKeyword(event.target.value);
  };

  const toggleAlgorithm = (id: number) => {
    if (checkedAlgorithmIds.includes(id)) {
      const newCheckedIds = checkedAlgorithmIds.filter(
        (checkedId) => checkedId !== id,
      );
      setCheckedAlgorithmIds(newCheckedIds);
      return;
    }

    const newCheckedIds = [...checkedAlgorithmIds, id];
    setCheckedAlgorithmIds(newCheckedIds);
  };

  const checkAllAlgorithms = () => {
    setCheckedAlgorithmIds(
      Array.from({ length: ALGORITHMS_COUNT }).map((_, index) => index + 1),
    );
  };

  const uncheckAllAlgorithms = () => {
    setCheckedAlgorithmIds([]);
  };

  const items = getSearchResults(keyword);

  return {
    keyword,
    items,
    checkedAlgorithmIds,
    isLoaded,
    handleChangeKeyword,
    toggleAlgorithm,
    checkAllAlgorithms,
    uncheckAllAlgorithms,
  };
};

export default useAlgorithmPool;
