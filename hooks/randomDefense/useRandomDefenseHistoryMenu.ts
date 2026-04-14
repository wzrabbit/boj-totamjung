import type { ChangeEventHandler } from 'react';
import type { RandomDefenseHistoryOptions } from '@/types/randomDefense';
import { STORAGE_KEY } from '@/constants/commands';
import {
  fetchRandomDefenseHistoryOptions,
  saveRandomDefenseHistoryOptions,
} from '@/domains/dataHandlers/randomDefenseHistoryDataHandler';
import { isRandomDefenseHistoryOptions } from '@/domains/dataHandlers/validators/randomDefenseHistoryValidator';
import useStorageState from '@/hooks/useStorageState';

const DEFAULT_RANDOM_DEFENSE_HISTORY_OPTIONS: RandomDefenseHistoryOptions = {
  history: [],
  isTierHidden: true,
};

const useRandomDefenseHistoryMenu = () => {
  const {
    data: randomDefenseHistoryOptions,
    setData: setRandomDefenseHistoryOptions,
    isLoaded,
  } = useStorageState<RandomDefenseHistoryOptions>({
    type: 'function',
    storageKey: STORAGE_KEY.RANDOM_DEFENSE_HISTORY_OPTIONS,
    defaultValue: DEFAULT_RANDOM_DEFENSE_HISTORY_OPTIONS,
    fetchFunction: fetchRandomDefenseHistoryOptions,
    saveFunction: saveRandomDefenseHistoryOptions,
    validatorFunction: isRandomDefenseHistoryOptions,
  });

  const { history: items, isTierHidden } = randomDefenseHistoryOptions;
  const isEmpty = items.length === 0;

  const deleteHistoryById = (id: string) => {
    const newItems = items.filter((item) => {
      const currentItemId = `${item.problemId}-${item.createdAt}`;

      return currentItemId !== id;
    });

    setRandomDefenseHistoryOptions({ ...randomDefenseHistoryOptions, history: newItems });
  };

  const clearHistory = () => {
    setRandomDefenseHistoryOptions({ ...randomDefenseHistoryOptions, history: [] });
  };

  const updateIsTierHidden: ChangeEventHandler<HTMLInputElement> = (event) => {
    setRandomDefenseHistoryOptions({
      ...randomDefenseHistoryOptions,
      isTierHidden: event.target.checked,
    });
  };

  return {
    items,
    isTierHidden,
    isLoaded,
    isEmpty,
    deleteHistoryById,
    clearHistory,
    updateIsTierHidden,
  };
};

export default useRandomDefenseHistoryMenu;
