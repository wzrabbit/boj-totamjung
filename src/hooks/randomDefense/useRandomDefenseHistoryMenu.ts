import { useState, useEffect } from 'react';
import type { ChangeEventHandler } from 'react';
import type { RandomDefenseHistoryInfo } from '~types/randomDefense';
import { isRandomDefenseHistoryResponse } from '~types/typeGuards';

const useRandomDefenseHistoryMenu = () => {
  const [items, setItems] = useState<RandomDefenseHistoryInfo[]>([]);
  const [isHidden, setIsHidden] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const isEmpty = items.length === 0;

  useEffect(() => {
    const fetchRandomDefenseHistoryInfo = async () => {
      const response = await chrome.runtime.sendMessage({
        message: 'getRandomDefenseHistory',
      });

      console.log(response);

      if (!isRandomDefenseHistoryResponse(response)) {
        return;
      }

      console.log('ok valid data');

      setIsHidden(() => response.isHidden);
      setItems(() =>
        response.randomDefenseHistory.map((history) => ({
          ...history,
          createdAt: new Date(history.createdAt),
        })),
      );
      setIsLoaded(() => true);
    };

    fetchRandomDefenseHistoryInfo();
  }, []);

  useEffect(() => {
    chrome.runtime.sendMessage({
      message: 'setRandomDefenseHistory',
      data: { randomDefenseHistory: items, isHidden },
    });
  }, [items]);

  const deleteHistoryById = (id: string) => {
    const newItems = items.filter((item) => {
      const currentItemId = `${item.problemId}-${item.createdAt.getTime()}`;

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
