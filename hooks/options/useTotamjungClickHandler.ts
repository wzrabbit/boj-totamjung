import { useState } from 'react';

interface UseTotamjungClickHandlerParams {
  onShowComplainModal: () => void;
}

const complainClickCount = 20;

const useTotamjungClickHandler = (params: UseTotamjungClickHandlerParams) => {
  const { onShowComplainModal } = params;
  const [clickCount, setClickCount] = useState(0);

  const increaseClickCount = () => {
    setClickCount((prev) => {
      const nextClickCount = prev + 1;

      if (clickCount === complainClickCount) {
        onShowComplainModal();
      }

      return nextClickCount;
    });
  };

  const totamjungScaleX = Math.min(
    1.5,
    1 + Math.max(clickCount - complainClickCount, 0) * 0.0025,
  );
  const totamjungScaleY = Math.max(
    0.5,
    1 - Math.max(clickCount - complainClickCount, 0) * 0.0025,
  );

  return {
    increaseClickCount,
    totamjungScaleX,
    totamjungScaleY,
  };
};

export default useTotamjungClickHandler;
