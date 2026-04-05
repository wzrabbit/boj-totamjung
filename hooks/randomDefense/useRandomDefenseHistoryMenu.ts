import { useState, useEffect } from 'react';
import type { ChangeEventHandler } from 'react';
import type { RandomDefenseHistoryInfo } from '@/types/randomDefense';
import {
  fetchRandomDefenseHistoryOptions,
  saveRandomDefenseHistoryOptions,
} from '@/domains/dataHandlers/randomDefenseHistoryDataHandler';

const useRandomDefenseHistoryMenu = () => {
  const [items, setItems] = useState<RandomDefenseHistoryInfo[]>([]);
  const [isTierHidden, setIsTierHidden] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const isEmpty = items.length === 0;

  useEffect(() => {
    (async () => {
      const response = await fetchRandomDefenseHistoryOptions();

      setIsTierHidden(response.isTierHidden);
      setItems(response.history);
      setIsLoaded(true);
    })();
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    saveRandomDefenseHistoryOptions(items, isTierHidden);
  }, [items, isTierHidden]);

  const deleteHistoryById = (id: string) => {
    const newItems = items.filter((item) => {
      const currentItemId = `${item.problemId}-${item.createdAt}`;

      return currentItemId !== id;
    });

    setItems(newItems);
  };

  const clearHistory = () => {
    setItems([]);
  };

  const updateIsTierHidden: ChangeEventHandler<HTMLInputElement> = (event) => {
    setIsTierHidden(event.target.checked);
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
