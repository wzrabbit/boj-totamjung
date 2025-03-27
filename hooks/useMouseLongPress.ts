import { useState, useEffect, useRef } from 'react';

interface UseMouseLongPressParams {
  requiredLongPressTimeInMilliseconds: number;
  onClick: () => void;
  onLongPress: () => void;
}

const useMouseLongPress = (params: UseMouseLongPressParams) => {
  const { requiredLongPressTimeInMilliseconds, onClick, onLongPress } = params;
  const [isPressing, setIsPressing] = useState(false);
  const isPressingRef = useRef(false);
  const mousePressTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const longPressRef = useRef<HTMLButtonElement>(null);

  const handleMouseDown = () => {
    clearTimeout(mousePressTimerRef.current);

    mousePressTimerRef.current = setTimeout(() => {
      onLongPress();
      isPressingRef.current = false;
      setIsPressing(false);
    }, requiredLongPressTimeInMilliseconds);

    setIsPressing(true);
    isPressingRef.current = true;
  };

  const handleMouseUp = () => {
    if (isPressingRef.current) {
      onClick();
      clearTimeout(mousePressTimerRef.current);
    }

    setIsPressing(false);
    isPressingRef.current = false;
  };

  const handleMouseLeave = () => {
    clearTimeout(mousePressTimerRef.current);
    setIsPressing(false);
    isPressingRef.current = false;
  };

  useEffect(() => {
    const longPressElement = longPressRef.current;

    if (!longPressElement) {
      return;
    }

    longPressElement.addEventListener('mousedown', handleMouseDown);
    longPressElement.addEventListener('mouseup', handleMouseUp);
    longPressElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(mousePressTimerRef.current);
    };
  }, [longPressRef.current]);

  return { isPressing, longPressRef };
};

export default useMouseLongPress;
