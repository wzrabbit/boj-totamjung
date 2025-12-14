import { useState, useEffect } from 'react';
import type { CSSProperties } from 'react';

const OFFSET_SIZE = 6;

interface IndicatorPosition {
  top: CSSProperties['top'];
  left: CSSProperties['left'];
  width: CSSProperties['width'];
  height: CSSProperties['height'];
}

interface UseSlidingFocusIndicatorParams {
  activeScope: HTMLElement;
}

const useSlidingFocusIndicator = (params: UseSlidingFocusIndicatorParams) => {
  const { activeScope } = params;
  const [focusedElement, setFocusedElement] = useState<HTMLElement | null>(
    null,
  );
  const [isMouseClickDetected, setIsMouseClickDetected] = useState(true);
  const [indicatorPosition, setIndicatorPosition] = useState<IndicatorPosition>(
    {
      top: 0,
      left: 0,
      width: 0,
      height: 0,
    },
  );
  const opacity = focusedElement && !isMouseClickDetected ? 1 : 0;

  const updateIndicatorPosition = useCallback((target: HTMLElement) => {
    if (!target.getBoundingClientRect) {
      return;
    }
    const rect = target.getBoundingClientRect();

    setIndicatorPosition({
      top: `${rect.top - OFFSET_SIZE}px`,
      left: `${rect.left - OFFSET_SIZE}px`,
      width: `${rect.width + OFFSET_SIZE * 2}px`,
      height: `${rect.height + OFFSET_SIZE * 2}px`,
    });
  }, []);

  useEffect(() => {
    if (!focusedElement || isMouseClickDetected) {
      return;
    }

    let animationFrameId: number;

    const repeatUpdatingIndicatorPosition = () => {
      updateIndicatorPosition(focusedElement);
      animationFrameId = requestAnimationFrame(repeatUpdatingIndicatorPosition);
    };

    repeatUpdatingIndicatorPosition();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [focusedElement, isMouseClickDetected, updateIndicatorPosition]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (['Tab', 'ArrowLeft', 'ArrowRight'].includes(event.code)) {
        setIsMouseClickDetected(false);
      }
    };

    const handleMouseDown = () => {
      setIsMouseClickDetected(true);
    };

    const handleFocus = (event: FocusEvent) => {
      if (
        event.target instanceof HTMLElement &&
        activeScope.contains(event.target)
      ) {
        setFocusedElement(event.target);
      }
    };

    const handleBlur = (event: FocusEvent) => {
      if (
        !(event.relatedTarget instanceof HTMLElement) ||
        !activeScope.contains(event.relatedTarget)
      ) {
        setFocusedElement(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);
    activeScope.addEventListener('focusin', handleFocus);
    activeScope.addEventListener('focusout', handleBlur);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
      activeScope.removeEventListener('focusin', handleFocus);
      activeScope.removeEventListener('focusout', handleBlur);
    };
  }, [activeScope]);

  return {
    indicatorInfo: {
      ...indicatorPosition,
      opacity,
    },
  };
};

export default useSlidingFocusIndicator;
