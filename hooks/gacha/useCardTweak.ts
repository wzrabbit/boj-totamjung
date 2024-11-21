import { useState } from 'react';
import type { MouseEvent } from 'react';

const useCardTweak = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const adjustCardTweak = (event: MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newRotateX = (y / rect.height - 0.5) * 20;
    const newRotateY = (x / rect.width - 0.5) * -20;

    setRotateX(newRotateX);
    setRotateY(newRotateY);
  };

  const resetCardTweak = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return {
    rotateX,
    rotateY,
    adjustCardTweak,
    resetCardTweak,
  };
};

export default useCardTweak;
