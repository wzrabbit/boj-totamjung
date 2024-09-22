import { useState, useEffect, useRef } from 'react';
import type { HiderOptionsResponse } from '@/types/algorithm';
import { $, $$ } from '@/utils/querySelector';
import useLockTimer from './useLockTimer';
import { ALGORITHM_INFOS } from '@/constants/algorithmInfos';
import { COMMANDS } from '@/constants/commands';
import { isHiderOptionsResponse } from '@/domains/dataHandlers/validators/hiderOptionsValidator';

interface UseInjectedProblemTags {
  checkedIds: number[] | undefined;
  hiderOptions: HiderOptionsResponse | undefined;
}

/**
 * 이 커스텀 훅은 BOJ의 알고리즘 분류의 정보를 가져오고 제어할 수 있는 커스텀 훅입니다.
 */
const UseInjectedProblemTags = (params: UseInjectedProblemTags) => {
  const { checkedIds, hiderOptions } = params;
  const {
    isTimerRunning,
    timerDisplayText,
    setTimerByDuration,
    setTimerByEndTime,
    clearTimer,
  } = useLockTimer();
  const [hasUnknownAlgorithms, setHasUnknownAlgorithms] = useState(false);
  const [isSpoilerExist, setIsSpoilerExist] = useState(false);
  const [isSpoilerOpened, setIsSpoilerOpened] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const spoilerButtonRef = useRef<HTMLElement | null>(null);
  const spoilerContainerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const fetchRemainingTime = async () => {
      const remainingTime = await chrome.runtime.sendMessage({
        command: COMMANDS.GET_REMAINING_LOCK_TIME,
      });

      if (typeof remainingTime !== 'number' || remainingTime === 0) {
        return;
      }

      setTimerByDuration(remainingTime);
    };

    fetchRemainingTime();
  }, []);

  useEffect(() => {
    if (!checkedIds || !hiderOptions) {
      return;
    }

    const replaceToInjectedProblemTags = () => {
      const originalSpoilerButtonElement = $('.show-spoiler');

      if (!originalSpoilerButtonElement) {
        return;
      }

      if (originalSpoilerButtonElement.getAttribute('disabled')) {
        setIsSpoilerOpened(true);
      }

      const clonedSpoilerButtonElement =
        originalSpoilerButtonElement.cloneNode(true);

      if (!(clonedSpoilerButtonElement instanceof HTMLElement)) {
        return;
      }

      spoilerButtonRef.current = clonedSpoilerButtonElement;
      originalSpoilerButtonElement.after(clonedSpoilerButtonElement);
      originalSpoilerButtonElement.remove();

      spoilerContainerRef.current = $('.spoiler');
      setIsSpoilerExist(true);
    };

    const inspectAndHighlightUnknownAlgorithms = () => {
      const algorithmElements = $$('.spoiler-link');

      const problemAlgorithmNames = algorithmElements.map((algorithmElement) =>
        algorithmElement.innerText.replace(/\u2013/g, '-'),
      );

      let hasUnknownAlgorithms = false;
      const unknownAlgorithmIndexes: number[] = [];

      problemAlgorithmNames.forEach((name, index) => {
        const currentAlgorithmId = ALGORITHM_INFOS.find(
          (info) => info.name === name || info.englishName === name,
        )?.id;

        if (
          currentAlgorithmId === undefined ||
          !checkedIds.includes(currentAlgorithmId)
        ) {
          hasUnknownAlgorithms = true;
          unknownAlgorithmIndexes.push(index);
        }
      });

      unknownAlgorithmIndexes.forEach((index) => {
        algorithmElements[index].innerText += ' 📌';
        algorithmElements[index].style.fontWeight = '800';
      });

      setHasUnknownAlgorithms(hasUnknownAlgorithms);
      setIsHighlighted(true);
    };

    const openSpoiler = (event: globalThis.MouseEvent) => {
      event.preventDefault();

      if (isTimerRunning) {
        return;
      }

      if (!spoilerButtonRef.current || !spoilerContainerRef.current) {
        return;
      }

      spoilerButtonRef.current.style.display = 'none';
      spoilerContainerRef.current.style.display = 'block';
      setIsSpoilerOpened(true);
    };

    replaceToInjectedProblemTags();

    if (!isHighlighted) {
      inspectAndHighlightUnknownAlgorithms();
    }

    spoilerButtonRef.current?.addEventListener('click', openSpoiler);

    return () => {
      spoilerButtonRef.current?.removeEventListener('click', openSpoiler);
    };
  }, [checkedIds, hiderOptions, isTimerRunning, isHighlighted]);

  useEffect(() => {
    if (!spoilerButtonRef.current) {
      return;
    }

    spoilerButtonRef.current.innerText = timerDisplayText;
  }, [timerDisplayText]);

  const toggleTimer = async () => {
    if (isTimerRunning) {
      clearTimer();
      chrome.runtime.sendMessage({ command: COMMANDS.REMOVE_SINGLE_TIMER });
      return;
    }

    chrome.runtime.sendMessage({ command: COMMANDS.ADD_SINGLE_TIMER });
    const hiderOptions = await chrome.runtime.sendMessage({
      command: COMMANDS.FETCH_HIDER_OPTIONS,
    });

    if (!isHiderOptionsResponse(hiderOptions)) {
      return;
    }

    const { hours, minutes } = hiderOptions.problemTagLockDuration;
    const lockTime = hours * 3_600_000 + minutes * 60_000;

    setTimerByDuration(lockTime);
  };

  return {
    hasUnknownAlgorithms,
    isSpoilerExist,
    isSpoilerOpened,
    setTimerByDuration,
    setTimerByEndTime,
    toggleTimer,
  };
};

export default UseInjectedProblemTags;
