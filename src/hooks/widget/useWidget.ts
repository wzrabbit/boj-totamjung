import { useState } from 'react';
import type { MouseEvent } from 'react';

const useWidget = () => {
  const [isScrollingToTop, setIsScrollingToTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToTop = () => {
    if (isScrollingToTop) {
      return;
    }

    setIsScrollingToTop(true);

    setTimeout(() => {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    }, 1000 / 3);
  };

  const endScrollingAnimation = () => {
    setIsScrollingToTop(false);
  };

  const toggleWidgetOpen = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setIsExpanded((prev) => !prev);
  };

  return {
    isExpanded,
    isScrollingToTop,
    scrollToTop,
    endScrollingAnimation,
    toggleWidgetOpen,
  };
};

export default useWidget;
