import { useState, useEffect } from 'react';
import type { HiderOptionsResponse } from '~types/algorithm';
import { RatedTier } from '~types/tierHider';
import {
  fetchHiderOptions,
  saveHiderOptions,
} from '~domains/dataHandlers/hiderOptionsDataHandler';

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
    (async () => {
      const response = await fetchHiderOptions();

      setHiderOptionsState({
        ...response,
        isLoaded: true,
      });
    })();
  }, []);

  useEffect(() => {
    const { isLoaded, ...hiderOptionsWithoutLoadingParam } = hiderOptionsState;

    if (!isLoaded) {
      return;
    }

    saveHiderOptions(hiderOptionsWithoutLoadingParam);
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
