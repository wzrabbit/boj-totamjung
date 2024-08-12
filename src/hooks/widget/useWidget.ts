import { useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { COMMANDS } from '~constants/commands';
import { isValidCheckedAlgorithmIdsResponse } from '~domains/dataHandlers/validators/checkedAlgorithmIdsValidator';
import { isHiderOptionsResponse } from '~domains/dataHandlers/validators/hiderOptionsValidator';
import useInjectedProblemTags from './useInjectedProblemTags';
import useRandomDefense from './useRandomDefense';
import { changeNormalToWarnTier } from '~domains/tierHider/normalToWarnTierChanger';
import type { ToastInfo } from '~types/toast';
import type { TotamjungTheme } from '~types/totamjungTheme';
import type { HiderOptionsResponse } from '~types/algorithm';

interface UseWidgetParams {
  theme: TotamjungTheme;
  onChangeTheme: (theme: TotamjungTheme) => void;
  onToast: (toastInfo: ToastInfo, duration: number) => void;
}

const useWidget = (params: UseWidgetParams) => {
  const { theme, onChangeTheme, onToast } = params;
  const [isScrollingToTop, setIsScrollingToTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [checkedIds, setCheckedIds] = useState<number[] | undefined>(undefined);
  const [hiderOptions, setHiderOptions] = useState<
    HiderOptionsResponse | undefined
  >(undefined);
  const [inspectIconState, setInspectIconState] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { hasUnknownAlgorithms, isSpoilerExist, isSpoilerOpened, toggleTimer } =
    useInjectedProblemTags({ checkedIds, hiderOptions });
  const { isRandomDefenseAvailable, performRandomDefenseByClick } =
    useRandomDefense({
      onToast,
    });

  const isRandomDefenseButtonDisabled = !isRandomDefenseAvailable;
  const isInspectButtonDisabled =
    !isSpoilerExist || isSpoilerOpened || inspectIconState;
  const isLockButtonDisabled = !isSpoilerExist || isSpoilerOpened;
  const shouldShowInspectIcon = isSpoilerExist && inspectIconState;

  useEffect(() => {
    const loadWidgetData = async () => {
      const [checkedAlgorithmIdsResponse, hiderOptionsResponse] =
        await Promise.all([
          chrome.runtime.sendMessage({
            command: COMMANDS.FETCH_CHECKED_ALGORITHM_IDS,
          }),
          chrome.runtime.sendMessage({
            command: COMMANDS.FETCH_HIDER_OPTIONS,
          }),
        ]);

      if (
        !isValidCheckedAlgorithmIdsResponse(checkedAlgorithmIdsResponse) ||
        !isHiderOptionsResponse(hiderOptionsResponse)
      ) {
        return;
      }

      const { checkedIds } = checkedAlgorithmIdsResponse;
      const {
        algorithmHiderUsage,
        shouldHideTier,
        shouldWarnHighTier,
        warnTier,
      } = hiderOptionsResponse;

      if (shouldHideTier) {
        changeNormalToWarnTier(warnTier, shouldWarnHighTier);
      }

      if (algorithmHiderUsage === 'always') {
        setInspectIconState(true);
      }

      setCheckedIds(checkedIds);
      setHiderOptions(hiderOptionsResponse);
      setIsLoaded(true);
    };

    loadWidgetData();
  }, []);

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

  const openOptionsPage = () => {
    chrome.runtime.sendMessage({ command: COMMANDS.OPEN_OPTIONS_PAGE });
  };

  const toggleTotamjungTheme = () => {
    if (isLoaded) {
      onChangeTheme(theme === 'totamjung' ? 'none' : 'totamjung');
    }
  };

  const showInspectResultUsingPopup = () => {
    if (isInspectButtonDisabled) {
      return;
    }

    setInspectIconState(true);

    if (hasUnknownAlgorithms) {
      onToast(
        {
          title:
            '이 문제를 풀기 위해서는 모르는 알고리즘을 사용해야 할 수 있습니다.',
          mainIconSrc: chrome.runtime.getURL('inspect-result-question.png'),
        },
        3500,
      );
    } else {
      onToast(
        {
          title: '이 문제는 알고 있는 알고리즘만으로 풀 수 있습니다.',
          mainIconSrc: chrome.runtime.getURL('inspect-result-check.png'),
        },
        3500,
      );
    }
  };

  return {
    isExpanded,
    isScrollingToTop,
    hasUnknownAlgorithms,
    isRandomDefenseButtonDisabled,
    isInspectButtonDisabled,
    isLockButtonDisabled,
    shouldShowInspectIcon,
    isLoaded,
    scrollToTop,
    endScrollingAnimation,
    toggleWidgetOpen,
    openOptionsPage,
    toggleTotamjungTheme,
    performRandomDefenseByClick,
    showInspectResultUsingPopup,
    toggleTimer,
  };
};

export default useWidget;
