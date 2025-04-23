export const isExternalThemeActive = () => {
  if (location.href.startsWith('https://solved.ac/')) {
    return true;
  }

  const bojExtendedTheme = document.documentElement.getAttribute('theme');

  if (bojExtendedTheme && bojExtendedTheme !== 'light') {
    return true;
  }

  return false;
};
