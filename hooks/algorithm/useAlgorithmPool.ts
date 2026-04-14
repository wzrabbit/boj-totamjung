import { getSearchResults } from '@/domains/algorithm/getSearchResults';
import { ALGORITHMS_COUNT } from '@/constants/algorithmInfos';
import { useState } from 'react';
import type { ChangeEventHandler } from 'react';
import type { HiderOptions } from '@/types/algorithm';
import { STORAGE_KEY } from '@/constants/commands';
import { DEFAULT_HIDER_OPTIONS } from '@/constants/defaultValues';
import {
  fetchHiderOptions,
  saveHiderOptions,
} from '@/domains/dataHandlers/hiderOptionsDataHandler';
import { isHiderOptions } from '@/domains/dataHandlers/validators/hiderOptionsValidator';
import useStorageState from '@/hooks/useStorageState';

const useAlgorithmPool = () => {
  const [keyword, setKeyword] = useState('');

  const {
    data: hiderOptions,
    setData: setHiderOptions,
    isLoaded,
  } = useStorageState<HiderOptions>({
    type: 'function',
    storageKey: STORAGE_KEY.HIDER_OPTIONS,
    defaultValue: DEFAULT_HIDER_OPTIONS,
    fetchFunction: fetchHiderOptions,
    saveFunction: saveHiderOptions,
    validatorFunction: isHiderOptions,
  });

  const { checkedAlgorithmIds } = hiderOptions;

  const setCheckedAlgorithmIds = (newIds: number[]) => {
    setHiderOptions({ ...hiderOptions, checkedAlgorithmIds: newIds });
  };

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
