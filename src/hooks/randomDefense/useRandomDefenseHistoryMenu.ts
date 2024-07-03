import { useState, useEffect } from 'react';
import type { ChangeEventHandler } from 'react';
import type { RandomDefenseHistoryInfo } from '~types/randomDefense';
import { isRandomDefenseHistoryResponse } from '~domains/dataHandlers/validators/randomDefenseHistoryValidator';
import { COMMANDS } from '~constants/commands';

const useRandomDefenseHistoryMenu = () => {
  const [items, setItems] = useState<RandomDefenseHistoryInfo[]>([]);
  const [isHidden, setIsHidden] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const isEmpty = items.length === 0;

  useEffect(() => {
    const fetchRandomDefenseHistoryInfo = async () => {
      const response = await chrome.runtime.sendMessage({
        command: COMMANDS.FETCH_RANDOM_DEFENSE_HISTORY,
      });

      if (!isRandomDefenseHistoryResponse(response)) {
        return;
      }

      setIsHidden(() => response.isHidden);
      setItems(() => response.randomDefenseHistory);
      setIsLoaded(() => true);
    };

    fetchRandomDefenseHistoryInfo();
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    chrome.runtime.sendMessage({
      command: COMMANDS.SAVE_RANDOM_DEFENSE_HISTORY,
      randomDefenseHistory: items,
      isHidden,
    });
  }, [items, isHidden]);

  const deleteHistoryById = (id: string) => {
    const newItems = items.filter((item) => {
      const currentItemId = `${item.problemId}-${item.createdAt}`;

      return currentItemId !== id;
    });

    setItems(() => newItems);
  };

  const clearHistory = () => {
    if (!isEmpty && confirm('모든 추첨 기록을 제거할까요?')) {
      setItems(() => []);
    }
  };

  const updateIsHidden: ChangeEventHandler<HTMLInputElement> = (event) => {
    setIsHidden(() => event.target.checked);
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
