import { getSearchResults } from '@domains/algorithm/getSearchResults';
import { ALGORITHMS_COUNT } from '@constants/algorithmInfos';
import { useState, useEffect } from 'react';
import type { ChangeEventHandler } from 'react';

const useAlgorithmPool = () => {
  const [keyword, setKeyword] = useState('');
  const [checkedIds, setCheckedIds] = useState<number[]>([]);

  useEffect(() => {
    chrome.storage.sync.get('algorithm', (response) => {
      if (!response.algorithm) {
        return;
      }

      setCheckedIds(() => response.algorithm);
    });
  }, []);

  useEffect(() => {
    chrome.storage.sync.set({ algorithm: checkedIds });
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
    if (confirm('모든 알고리즘 분류를 체크 설정할까요?')) {
      setCheckedIds(() =>
        Array.from({ length: ALGORITHMS_COUNT }).map((_, index) => index + 1),
      );
    }
  };

  const uncheckAllAlgorithms = () => {
    if (confirm('모든 알고리즘 분류를 체크 해제할까요?')) {
      setCheckedIds(() => []);
    }
  };

  const items = getSearchResults(keyword);

  return {
    keyword,
    items,
    checkedIds,
    handleChangeKeyword,
    toggleAlgorithm,
    checkAllAlgorithms,
    uncheckAllAlgorithms,
  };
};

export default useAlgorithmPool;
