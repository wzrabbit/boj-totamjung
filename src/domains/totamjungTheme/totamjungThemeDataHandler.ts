import { LEGACY_SYNC_STORAGE_KEY, SYNC_STORAGE_KEY } from '~constants/commands';
import { isTotamjungThemeResponse } from '~types/typeGuards';

export const fetchTotamjungTheme = async () => {
  return new Promise((resolve) => {
    chrome.storage.sync.get(
      [
        SYNC_STORAGE_KEY.TOTAMJUNG_THEME,
        LEGACY_SYNC_STORAGE_KEY.TOTAMJUNG_THEME,
      ],
      (data: Record<string, unknown>) => {
        const rawTotamjungTheme = data[SYNC_STORAGE_KEY.TOTAMJUNG_THEME];
        const rawLegacyTotamjungTheme =
          data[LEGACY_SYNC_STORAGE_KEY.TOTAMJUNG_THEME];

        if (rawLegacyTotamjungTheme && !rawTotamjungTheme) {
          resolve({
            totamjungTheme:
              rawLegacyTotamjungTheme === 'on' ? 'totamjung' : 'none',
          });

          return;
        }

        resolve({
          totamjungTheme:
            rawTotamjungTheme === 'totamjung' ? 'totamjung' : 'none',
        });
      },
    );
  });
};

export const saveTotamjungTheme = (totamjungTheme: unknown) => {
  if (!isTotamjungThemeResponse({ totamjungTheme })) {
    return;
  }

  chrome.storage.sync.set({
    [SYNC_STORAGE_KEY.TOTAMJUNG_THEME]: totamjungTheme,
  });
};
