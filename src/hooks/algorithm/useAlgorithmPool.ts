import { getSearchResults } from '~domains/algorithm/getSearchResults';
import { ALGORITHMS_COUNT } from '~constants/algorithmInfos';
import { useState, useEffect } from 'react';
import { COMMANDS } from '~constants/commands';
import type { ChangeEventHandler } from 'react';

const useAlgorithmPool = () => {
  const [keyword, setKeyword] = useState('');
  const [checkedIds, setCheckedIds] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchAlgorithmPool = async () => {
      const response = await chrome.runtime.sendMessage({
        command: COMMANDS.FETCH_CHECKED_ALGORITHM_IDS,
      });

      setCheckedIds(() => response.checkedIds);
      setIsLoaded(() => true);
    };

    fetchAlgorithmPool();
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    chrome.runtime.sendMessage({
      command: COMMANDS.SAVE_CHECKED_ALGORITHM_IDS,
      checkedIds,
    });
  }, [checkedIds]);

  const handleChangeKeyword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setKeyword(() => event.target.value);
  };

  const toggleAlgorithm = (id: number) => {
    if (checkedIds.includes(id)) {
      const newCheckedIds = checkedIds.filter((checkedId) => checkedId !== id);
      setCheckedIds(() => newCheckedIds);
      return;
    }

    const newCheckedIds = [...checkedIds, id];
    setCheckedIds(() => newCheckedIds);
  };

  const checkAllAlgorithms = () => {
    setCheckedIds(() =>
      Array.from({ length: ALGORITHMS_COUNT }).map((_, index) => index + 1),
    );
  };

  const uncheckAllAlgorithms = () => {
    setCheckedIds(() => []);
  };

  const items = getSearchResults(keyword);

  return {
    keyword,
    items,
    checkedIds,
    isLoaded,
    handleChangeKeyword,
    toggleAlgorithm,
    checkAllAlgorithms,
    uncheckAllAlgorithms,
  };
};

export default useAlgorithmPool;
