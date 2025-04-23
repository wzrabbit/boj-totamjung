import { useState, useEffect } from 'react';
import type { ExternalTheme } from '@/types/mainTheme';

const isSolvedAcSite = location.href.startsWith('https://solved.ac/');

const getExternalTheme = (): ExternalTheme | null => {
  if (isSolvedAcSite) {
    return getSolvedAcTheme();
  }

  return getBojExtendedTheme();
};

const getSolvedAcTheme = () => {
  const solvedAcNavElement = document.getElementsByTagName('nav')[0];

  if (!solvedAcNavElement) {
    return null;
  }

  const navBackgroundColor =
    window.getComputedStyle(solvedAcNavElement).backgroundColor;

  if (navBackgroundColor === 'rgb(21, 32, 43)') {
    return 'solvedAcDark';
  }

  if (navBackgroundColor === 'rgb(0, 0, 0)') {
    return 'solvedAcBlack';
  }

  return 'solvedAcLight';
};

const getBojExtendedTheme = () => {
  const bojExtendedTheme = document.documentElement.getAttribute('theme');

  if (bojExtendedTheme === 'dark') {
    return 'bojExtendedDark';
  }

  if (bojExtendedTheme === 'rigel') {
    return 'bojExtendedRigel';
  }

  return null;
};

/**
 * solved.ac, BOJ Extended 등 외부 요인의 테마를 불러올 수 있습니다. 테마가 적용되어 있지 않은 경우에는 `null`을 반환합니다.
 */
const useExternalThemeInfo = () => {
  const [externalTheme, setExternalTheme] = useState<ExternalTheme | null>(
    getExternalTheme(),
  );

  useEffect(() => {
    if (isSolvedAcSite) {
      return;
    }

    const bojExtendedThemeObserver = new MutationObserver(() => {
      setExternalTheme(getBojExtendedTheme());
    });

    bojExtendedThemeObserver.observe(document.documentElement, {
      attributes: true,
    });

    return () => {
      bojExtendedThemeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isSolvedAcSite) {
      return;
    }

    const solvedAcThemeObserver = new MutationObserver(() => {
      setExternalTheme(getSolvedAcTheme());
    });

    const solvedAcNavObserver = new MutationObserver(() => {
      const solvedAcNavElement = document.getElementsByTagName('nav')[0];

      if (!solvedAcNavElement) {
        return;
      }

      solvedAcNavObserver.disconnect();
      solvedAcThemeObserver.observe(solvedAcNavElement, { attributes: true });
    });

    solvedAcNavObserver.observe(document.body, {
      attributes: true,
      childList: true,
    });

    return () => {
      solvedAcThemeObserver.disconnect();
      solvedAcNavObserver.disconnect();
    };
  }, []);

  return {
    externalTheme,
  };
};

export default useExternalThemeInfo;
