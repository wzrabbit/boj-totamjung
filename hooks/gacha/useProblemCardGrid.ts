import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { calculateCardGridLayout } from '@/domains/gacha/calculateCardGridLayout';

interface UseProblemCardGridParams {
  cardCount: number;
}

const useProblemCardGrid = (params: UseProblemCardGridParams) => {
  const { cardCount: initCardCount } = params;
  const [cardCount, setCardCount] = useState(initCardCount);
  const [cardGridWidth, setCardGridWidth] = useState(0);
  const [cardGridHeight, setCardGridHeight] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const cardGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCardCount(cardCount);
  }, [initCardCount]);

  useLayoutEffect(() => {
    const cardGridElement = cardGridRef.current;

    if (!cardGridElement) {
      return;
    }

    const updateCardGridSize = () => {
      const { clientWidth, clientHeight } = cardGridElement;
      setCardGridWidth(clientWidth);
      setCardGridHeight(clientHeight);
      setIsLoaded(true);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateCardGridSize();
    });

    resizeObserver.observe(cardGridRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return {
    ...calculateCardGridLayout(cardGridWidth, cardGridHeight, cardCount),
    isLoaded,
    cardGridRef,
  };
};

export default useProblemCardGrid;
