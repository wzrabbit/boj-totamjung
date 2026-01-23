import type { ChangeEventHandler } from 'react';
import {
  fetchRandomDefenseHistory,
  saveRandomDefenseHistory,
} from '@/domains/dataHandlers/randomDefenseHistoryDataHandler';
import useStorageState from '@/hooks/useStorageState';
import { STORAGE_KEY } from '@/constants/commands';
import { isRandomDefenseHistoryResponse } from '@/domains/dataHandlers/validators/randomDefenseHistoryValidator';

const useRandomDefenseHistoryMenu = () => {
  const [historyData, setHistoryData, isLoaded] = useStorageState({
    interactionMode: 'direct',
    initialValue: { randomDefenseHistory: [], isHidden: true },
    storageKey: STORAGE_KEY.RANDOM_DEFENSE_HISTORY,
    fetchFunction: fetchRandomDefenseHistory,
    saveFunction: saveRandomDefenseHistory,
    validatorFunction: isRandomDefenseHistoryResponse,
  });
  const { randomDefenseHistory: items, isHidden } = historyData;
  const isEmpty = items.length === 0;

  const deleteHistoryById = (id: string) => {
    const newItems = items.filter((item) => {
      const currentItemId = `${item.problemId}-${item.createdAt}`;

      return currentItemId !== id;
    });

    setHistoryData({ ...historyData, randomDefenseHistory: newItems });
  };

  const clearHistory = () => {
    setHistoryData({ ...historyData, randomDefenseHistory: [] });
  };

  const updateIsHidden: ChangeEventHandler<HTMLInputElement> = (event) => {
    setHistoryData({ ...historyData, isHidden: event.target.checked });
  };

  return {
    items,
    isHidden,
    isLoaded,
    isEmpty,
    deleteHistoryById,
    clearHistory,
    updateIsHidden,
  };
};

export default useRandomDefenseHistoryMenu;
