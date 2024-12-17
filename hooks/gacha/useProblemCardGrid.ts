import { useState, useEffect, useRef } from 'react';
import { calculateCardGridLayout } from '@/domains/gacha/calculateCardGridLayout';

interface UseProblemCardGridParams {
  cardCount: number;
}

const useProblemCardGrid = (params: UseProblemCardGridParams) => {
  const { cardCount: initCardCount } = params;
  const [cardCount, setCardCount] = useState(initCardCount);
  const [cardGridWidth, setCardGridWidth] = useState(0);
  const [cardGridHeight, setCardGridHeight] = useState(0);
  const cardGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCardCount(cardCount);
  }, [initCardCount]);

  useEffect(() => {
    const cardGridElement = cardGridRef.current;

    if (!cardGridElement) {
      return;
    }

    const updateCardGridSize = () => {
      const { clientWidth, clientHeight } = cardGridElement;
      setCardGridWidth(clientWidth);
      setCardGridHeight(clientHeight);
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
    cardGridRef,
  };
};

export default useProblemCardGrid;
