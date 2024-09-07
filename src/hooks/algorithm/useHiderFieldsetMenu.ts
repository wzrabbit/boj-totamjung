import { useState, useEffect } from 'react';
import { isHiderOptionsResponse } from '~domains/dataHandlers/validators/hiderOptionsValidator';
import type { HiderOptionsResponse } from '~types/algorithm';
import { COMMANDS } from '~constants/commands';
import { RatedTier } from '~types/tierHider';

const fallbackHiderOptions = {
  problemTagLockDuration: {
    hours: 0,
    minutes: 0,
  },
  shouldHideTier: undefined,
  shouldWarnHighTier: undefined,
  warnTier: 1 as const,
  algorithmHiderUsage: undefined,
  problemTagLockUsage: undefined,
};

type HiderOptionsState =
  | HiderOptionsReadyResponse
  | HiderOptionsNotReadyResponse;

type HiderOptionsReadyResponse = {
  isLoaded: true;
} & HiderOptionsResponse;

type HiderOptionsNotReadyResponse = {
  isLoaded: false;
} & typeof fallbackHiderOptions;

const useHiderFieldsetMenu = () => {
  const [hiderOptionsState, setHiderOptionsState] = useState<HiderOptionsState>(
    {
      ...fallbackHiderOptions,
      isLoaded: false,
    },
  );

  useEffect(() => {
    const fetchHiderOptions = async () => {
      const response = await chrome.runtime.sendMessage({
        command: COMMANDS.FETCH_HIDER_OPTIONS,
      });

      if (!isHiderOptionsResponse(response)) {
        return;
      }

      setHiderOptionsState({
        ...response,
        isLoaded: true,
      });
    };

    fetchHiderOptions();
  }, []);

  useEffect(() => {
    const { isLoaded, ...hiderOptionsWithoutLoadingParam } = hiderOptionsState;

    if (!isLoaded) {
      return;
    }

    chrome.runtime.sendMessage({
      command: COMMANDS.SAVE_HIDER_OPTIONS,
      hiderOptions: hiderOptionsWithoutLoadingParam,
    });
  }, [hiderOptionsState]);

  const updateProblemTagLockDuration = (hours: number, minutes: number) => {
    setHiderOptionsState((prev) => {
      if (!prev.isLoaded) {
        return prev;
      }

      return {
        ...prev,
        problemTagLockDuration: {
          hours,
          minutes,
        },
      };
    });
  };

  const updateShouldHideTier = (shouldHideTierString: string) => {
    const shouldHideTier = shouldHideTierString === 'true';

    setHiderOptionsState((prev) => {
      if (!prev.isLoaded) {
        return prev;
      }

      return { ...prev, shouldHideTier };
    });
  };

  const updateShouldWarnHighTier = (shouldWarnHighTierString: string) => {
    const shouldWarnHighTier = shouldWarnHighTierString === 'true';

    setHiderOptionsState((prev) => {
      if (!prev.isLoaded) {
        return prev;
      }

      return { ...prev, shouldWarnHighTier };
    });
  };

  const updateWarnTier = (warnTier: RatedTier) => {
    setHiderOptionsState((prev) => {
      if (!prev.isLoaded) {
        return prev;
      }

      return { ...prev, warnTier };
    });
  };

  const updateAlgorithmHiderUsage = (usage: string) => {
    if (usage !== 'click' && usage !== 'always') {
      return;
    }

    setHiderOptionsState((prev) => {
      if (!prev.isLoaded) {
        return prev;
      }

      return {
        ...prev,
        algorithmHiderUsage: usage,
      };
    });
  };

  const updateProblemTagLockUsage = (usage: string) => {
    if (usage !== 'click' && usage !== 'auto') {
      return;
    }

    setHiderOptionsState((prev) => {
      if (!prev.isLoaded) {
        return prev;
      }

      return { ...prev, problemTagLockUsage: usage };
    });
  };

  return {
    ...hiderOptionsState,
    updateProblemTagLockDuration,
    updateShouldHideTier,
    updateShouldWarnHighTier,
    updateWarnTier,
    updateAlgorithmHiderUsage,
    updateProblemTagLockUsage,
  };
};

export default useHiderFieldsetMenu;
