import { STORAGE_KEY } from '@/constants/commands';
import { sanitizeShouldShowWelcomeMessage } from './sanitizers/shouldShowWelcomeMessageSanitizer';

export const fetchShouldShowWelcomeMessage = async (): Promise<boolean> => {
  const data = await browser.storage.local.get(
    STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE,
  );
  const shouldShowWelcomeMessage = sanitizeShouldShowWelcomeMessage(
    data[STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE],
  );

  return shouldShowWelcomeMessage;
};

export const saveShouldShowWelcomeMessage = (
  shouldShowWelcomeMessage: unknown,
) => {
  if (typeof shouldShowWelcomeMessage !== 'boolean') {
    return;
  }

  browser.storage.local.set({
    [STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE]: shouldShowWelcomeMessage,
  });
};
