import type { CSSProperties } from 'react';

const OFFSET_SIZE = 6;

interface IndicatorInfo {
  top: CSSProperties['top'];
  left: CSSProperties['left'];
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  opacity: number;
}

const useSlidingFocusIndicator = () => {
  const [focusedElement, setFocusedElement] = useState<HTMLElement | null>(
    null,
  );
  const [indicatorInfo, setIndicatorInfo] = useState<IndicatorInfo>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });
  const isKeyboardRef = useRef(false);

  const updateIndicatorPosition = useCallback((target: HTMLElement) => {
    if (!target.getBoundingClientRect) {
      return;
    }
    const rect = target.getBoundingClientRect();

    setIndicatorInfo({
      top: `${rect.top + window.scrollY - OFFSET_SIZE}px`,
      left: `${rect.left + window.scrollX - OFFSET_SIZE}px`,
      width: `${rect.width + OFFSET_SIZE * 2}px`,
      height: `${rect.height + OFFSET_SIZE * 2}px`,
      opacity: 1,
    });
  }, []);

  useEffect(() => {
    if (!focusedElement) {
      return;
    }

    let animationFrameId: number;

    const repeatUpdatingIndicatorPosition = () => {
      updateIndicatorPosition(focusedElement);
      animationFrameId = requestAnimationFrame(repeatUpdatingIndicatorPosition);
    };

    repeatUpdatingIndicatorPosition();

    return () => cancelAnimationFrame(animationFrameId);
  }, [focusedElement, updateIndicatorPosition]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab' || event.key.startsWith('Arrow')) {
        isKeyboardRef.current = true;
      }
    };

    const handleMouseDown = () => {
      isKeyboardRef.current = false;
      setFocusedElement(null);
      setIndicatorInfo((prev) => ({ ...prev, opacity: 0 }));
    };

    const handleFocus = (event: FocusEvent) => {
      if (!isKeyboardRef.current) {
        return;
      }

      if (event.target instanceof HTMLElement) {
        setFocusedElement(event.target);
      }
    };

    const handleBlur = () => {
      setFocusedElement(null);
      setIndicatorInfo((prev) => ({ ...prev, opacity: 0 }));
    };

    const handleResizeOrScroll = () => {
      if (focusedElement) {
        updateIndicatorPosition(focusedElement);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('focusin', handleFocus);
    window.addEventListener('focusout', handleBlur);
    window.addEventListener('resize', handleResizeOrScroll);
    window.addEventListener('scroll', handleResizeOrScroll);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('focusin', handleFocus);
      window.removeEventListener('focusout', handleBlur);
      window.removeEventListener('resize', handleResizeOrScroll);
      window.removeEventListener('scroll', handleResizeOrScroll);
    };
  }, []);

  return { indicatorInfo };
};

export default useSlidingFocusIndicator;
