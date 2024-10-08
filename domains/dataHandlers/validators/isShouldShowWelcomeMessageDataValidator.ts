export const isShouldShowWelcomeMessage = (data: unknown): data is boolean => {
  return typeof data === 'boolean';
};
