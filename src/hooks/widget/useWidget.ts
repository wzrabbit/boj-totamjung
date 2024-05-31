import { useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { COMMANDS } from '~constants/commands';
import { isTotamjungThemeResponse } from '~types/typeGuards';
import type { TotamjungTheme } from '~types/totamjungTheme';

const useWidget = () => {
  const [isScrollingToTop, setIsScrollingToTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [widgetTheme, setWidgetTheme] = useState<TotamjungTheme>('none');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadTotamjungTheme = async () => {
      const response = await chrome.runtime.sendMessage({
        command: COMMANDS.FETCH_TOTAMJUNG_THEME,
      });

      if (!isTotamjungThemeResponse(response)) {
        setWidgetTheme('none');
        setIsLoaded(true);
        return;
      }

      const { totamjungTheme: currentTheme } = response;

      setWidgetTheme(currentTheme);
      setIsLoaded(true);
    };

    loadTotamjungTheme();
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    const $html = document.documentElement;
    $html.setAttribute('totamjungTheme', widgetTheme);

    chrome.runtime.sendMessage({
      command: COMMANDS.SAVE_TOTAMJUNG_THEME,
      totamjungTheme: widgetTheme,
    });
  }, [widgetTheme]);

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

  const toggleTotamjungTheme = () => {
    setWidgetTheme((prev) => (prev === 'totamjung' ? 'none' : 'totamjung'));
  };

  return {
    isExpanded,
    isScrollingToTop,
    widgetTheme,
    isLoaded,
    scrollToTop,
    endScrollingAnimation,
    toggleWidgetOpen,
    toggleTotamjungTheme,
  };
};

export default useWidget;
