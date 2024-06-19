import { LEGACY_SYNC_STORAGE_KEY, SYNC_STORAGE_KEY } from '~constants/commands';
import { HiderOptionsResponse } from '~types/algorithm';
import {
  isHiderOptionsResponse,
  isLegacyTimer,
  isLegacyHiderSettings,
} from '~types/typeGuards';

const DEFAULT_HIDER_OPTIONS = {
  problemTagLockDuration: {
    hours: 0,
    minutes: 20,
  },
  shouldHideTier: false,
  shouldWarnHighTier: false,
  warnTier: 1,
  algorithmHiderUsage: 'click',
  problemTagLockUsage: 'click',
} as const;

interface HiderSettingsUsage {
  algorithmHiderUsage: 'click' | 'always';
  problemTagLockUsage: 'click' | 'auto';
}

const generateLatestHiderOptionsByLegacyData = (
  legacyTimer: unknown,
  legacyHiderSettings: unknown,
): HiderOptionsResponse => {
  const duration = isLegacyTimer(legacyTimer)
    ? { hours: Number(legacyTimer.hour), minutes: Number(legacyTimer.minute) }
    : { hours: 0, minutes: 20 };
  const hiderSettings: HiderSettingsUsage = isLegacyHiderSettings(
    legacyHiderSettings,
  )
    ? {
        algorithmHiderUsage: legacyHiderSettings.predict,
        problemTagLockUsage:
          legacyHiderSettings.lock === 'always' ? 'auto' : 'click',
      }
    : {
        algorithmHiderUsage: 'click',
        problemTagLockUsage: 'click',
      };

  return {
    ...DEFAULT_HIDER_OPTIONS,
    problemTagLockDuration: duration,
    ...hiderSettings,
  };
};

export const fetchHiderOptions = async () => {
  return new Promise((resolve) => {
    chrome.storage.sync.get(
      [
        SYNC_STORAGE_KEY.HIDER_OPTIONS,
        LEGACY_SYNC_STORAGE_KEY.TIMER,
        LEGACY_SYNC_STORAGE_KEY.SETTINGS,
      ],
      (data: Record<string, unknown>) => {
        const hiderOptions = data[SYNC_STORAGE_KEY.HIDER_OPTIONS];
        const legacyTimer = data[LEGACY_SYNC_STORAGE_KEY.TIMER];
        const legacyHiderSettings = data[LEGACY_SYNC_STORAGE_KEY.SETTINGS];

        const isLegacy = !hiderOptions && (legacyTimer || legacyHiderSettings);

        if (isLegacy) {
          console.log(
            'legacy',
            generateLatestHiderOptionsByLegacyData(
              legacyTimer,
              legacyHiderSettings,
            ),
          );
          resolve(
            generateLatestHiderOptionsByLegacyData(
              legacyTimer,
              legacyHiderSettings,
            ),
          );
          return;
        }

        console.log(
          'normal',
          isHiderOptionsResponse(hiderOptions)
            ? hiderOptions
            : DEFAULT_HIDER_OPTIONS,
        );
        resolve(
          isHiderOptionsResponse(hiderOptions)
            ? hiderOptions
            : DEFAULT_HIDER_OPTIONS,
        );
      },
    );
  });
};

export const saveHiderOptions = (hiderOptions: unknown) => {
  if (!isHiderOptionsResponse(hiderOptions)) {
    return;
  }

  chrome.storage.sync.set({
    [SYNC_STORAGE_KEY.HIDER_OPTIONS]: hiderOptions,
  });
};
