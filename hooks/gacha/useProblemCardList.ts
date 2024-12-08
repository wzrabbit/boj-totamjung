import { useState, useEffect, useRef } from 'react';
import { calculateCardGridLayout } from '@/domains/gacha/calculateCardGridLayout';

interface UseProblemCardListParams {
  cardCount: number;
}

const useProblemCardList = (params: UseProblemCardListParams) => {
  const { cardCount: initCardCount } = params;
  const [cardCount, setCardCount] = useState(initCardCount);
  const [cardGridWidth, setCardGridWidth] = useState(0);
  const [cardGridHeight, setCardGridHeight] = useState(0);
  const cardGridRef = useRef<HTMLDivElement>(null);

  const updateCardGridSize = () => {
    if (!cardGridRef.current) {
      return;
    }

    const { width, height } = cardGridRef.current.getBoundingClientRect();
    setCardGridWidth(width);
    setCardGridHeight(height);
  };

  useEffect(() => {
    setCardCount(cardCount);
  }, [initCardCount]);

  useEffect(() => {
    if (!cardGridRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      updateCardGridSize();
    });

    resizeObserver.observe(cardGridRef.current);
  }, []);

  console.log(
    calculateCardGridLayout(cardGridWidth, cardGridHeight, cardCount),
  );

  return {
    ...calculateCardGridLayout(cardGridWidth, cardGridHeight, cardCount),
    cardGridRef,
  };
};

export default useProblemCardList;
