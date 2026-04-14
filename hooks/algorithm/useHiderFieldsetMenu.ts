import type { HiderOptions } from '@/types/algorithm';
import { RatedTier } from '@/types/tierHider';
import { STORAGE_KEY } from '@/constants/commands';
import { DEFAULT_HIDER_OPTIONS } from '@/constants/defaultValues';
import {
  fetchHiderOptions,
  saveHiderOptions,
} from '@/domains/dataHandlers/hiderOptionsDataHandler';
import { isHiderOptions } from '@/domains/dataHandlers/validators/hiderOptionsValidator';
import useStorageState from '@/hooks/useStorageState';

const useHiderFieldsetMenu = () => {
  const {
    data: hiderOptions,
    setData: setHiderOptions,
    isLoaded,
  } = useStorageState<HiderOptions>({
    type: 'function',
    storageKey: STORAGE_KEY.HIDER_OPTIONS,
    defaultValue: DEFAULT_HIDER_OPTIONS,
    fetchFunction: fetchHiderOptions,
    saveFunction: saveHiderOptions,
    validatorFunction: isHiderOptions,
  });

  const updateProblemTagLockDuration = (hours: number, minutes: number) => {
    if (!isLoaded) {
      return;
    }

    setHiderOptions({
      ...hiderOptions,
      problemTagLockDuration: { hours, minutes },
    });
  };

  const updateShouldHideTier = (shouldHideTierString: string) => {
    if (!isLoaded) {
      return;
    }

    setHiderOptions({
      ...hiderOptions,
      shouldHideTier: shouldHideTierString === 'true',
    });
  };

  const updateShouldWarnHighTier = (shouldWarnHighTierString: string) => {
    if (!isLoaded) {
      return;
    }

    setHiderOptions({
      ...hiderOptions,
      shouldWarnHighTier: shouldWarnHighTierString === 'true',
    });
  };

  const updateShouldRevealTierOnHover = (
    shouldRevealTierOnHoverString: string,
  ) => {
    if (!isLoaded) {
      return;
    }

    setHiderOptions({
      ...hiderOptions,
      shouldRevealTierOnHover: shouldRevealTierOnHoverString === 'true',
    });
  };

  const updateWarnTier = (warnTier: RatedTier) => {
    if (!isLoaded) {
      return;
    }

    setHiderOptions({ ...hiderOptions, warnTier });
  };

  const updateShouldHideSource = (shouldHideSourceString: string) => {
    if (!isLoaded) {
      return;
    }

    setHiderOptions({
      ...hiderOptions,
      shouldHideSource: shouldHideSourceString === 'true',
    });
  };

  const updateAlgorithmHiderUsage = (usage: string) => {
    if (usage !== 'click' && usage !== 'always') {
      return;
    }

    if (!isLoaded) {
      return;
    }

    setHiderOptions({ ...hiderOptions, algorithmHiderUsage: usage });
  };

  const updateProblemTagLockUsage = (usage: string) => {
    if (usage !== 'click' && usage !== 'auto') {
      return;
    }

    if (!isLoaded) {
      return;
    }

    setHiderOptions({ ...hiderOptions, problemTagLockUsage: usage });
  };

  return {
    ...hiderOptions,
    isLoaded,
    updateProblemTagLockDuration,
    updateShouldHideTier,
    updateShouldWarnHighTier,
    updateShouldRevealTierOnHover,
    updateShouldHideSource,
    updateWarnTier,
    updateAlgorithmHiderUsage,
    updateProblemTagLockUsage,
  };
};

export default useHiderFieldsetMenu;
