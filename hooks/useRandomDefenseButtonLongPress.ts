import { useState, useEffect, useRef } from 'react';

const requiredLongPressTimeInMilliseconds = 1000;

interface UseMouseLongPressParams {
  onClick: () => void;
  onLongPress: () => void;
}

const useRandomDefenseButtonLongPress = (params: UseMouseLongPressParams) => {
  const { onClick, onLongPress } = params;
  const [isPressing, setIsPressing] = useState(false);
  const isPressingRef = useRef(false);
  const mousePressTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const longPressRef = useRef<HTMLButtonElement>(null);
  const activeInputRef = useRef<string | null>(null);

  const handleMouseDown = () => {
    if (activeInputRef.current && activeInputRef.current !== 'Mouse') return;
    activeInputRef.current = 'Mouse';

    clearTimeout(mousePressTimerRef.current);

    mousePressTimerRef.current = setTimeout(() => {
      onLongPress();
      isPressingRef.current = false;
      setIsPressing(false);
      activeInputRef.current = null;
    }, requiredLongPressTimeInMilliseconds);

    setIsPressing(true);
    isPressingRef.current = true;
  };

  const handleMouseUp = () => {
    if (activeInputRef.current !== 'Mouse') return;

    if (isPressingRef.current) {
      onClick();
      clearTimeout(mousePressTimerRef.current);
    }

    setIsPressing(false);
    isPressingRef.current = false;
    activeInputRef.current = null;
  };

  const handleMouseLeave = () => {
    if (activeInputRef.current !== 'Mouse') return;

    clearTimeout(mousePressTimerRef.current);
    setIsPressing(false);
    isPressingRef.current = false;
    activeInputRef.current = null;
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.repeat) return;
    if (event.code !== 'Space' && event.code !== 'Enter') return;
    if (activeInputRef.current && activeInputRef.current !== event.code) return;

    activeInputRef.current = event.code;

    clearTimeout(mousePressTimerRef.current);

    mousePressTimerRef.current = setTimeout(() => {
      onLongPress();
      isPressingRef.current = false;
      setIsPressing(false);
      activeInputRef.current = null;
    }, requiredLongPressTimeInMilliseconds);

    setIsPressing(true);
    isPressingRef.current = true;
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.code !== 'Space' && event.code !== 'Enter') return;
    if (activeInputRef.current !== event.code) return;

    if (isPressingRef.current) {
      onClick();
      clearTimeout(mousePressTimerRef.current);
    }

    setIsPressing(false);
    isPressingRef.current = false;
    activeInputRef.current = null;
  };

  useEffect(() => {
    const longPressElement = longPressRef.current;

    if (!longPressElement) {
      return;
    }

    longPressElement.addEventListener('mousedown', handleMouseDown);
    longPressElement.addEventListener('mouseup', handleMouseUp);
    longPressElement.addEventListener('mouseleave', handleMouseLeave);
    longPressElement.addEventListener('keydown', handleKeyDown);
    longPressElement.addEventListener('keyup', handleKeyUp);

    return () => {
      clearTimeout(mousePressTimerRef.current);
      longPressElement.removeEventListener('mousedown', handleMouseDown);
      longPressElement.removeEventListener('mouseup', handleMouseUp);
      longPressElement.removeEventListener('mouseleave', handleMouseLeave);
      longPressElement.removeEventListener('keydown', handleKeyDown);
      longPressElement.removeEventListener('keyup', handleKeyUp);
    };
  }, [longPressRef.current]);

  return { isPressing, longPressRef };
};

export default useRandomDefenseButtonLongPress;
