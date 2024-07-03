import { COMMANDS } from '~constants/commands';
import { isTotamjungThemeResponse } from '~domains/dataHandlers/validators/totamjungThemeValidator';

const TOTAMJUNG_THEME_BACKGROUND_COLOR = '#1a0e0a';

const injectFontsAndThemes = () => {
  const $html = document.documentElement;

  chrome.runtime
    .sendMessage({ command: COMMANDS.FETCH_TOTAMJUNG_THEME })
    .then((response) => {
      if (!isTotamjungThemeResponse(response)) {
        return;
      }

      const { totamjungTheme } = response;

      if (totamjungTheme === 'totamjung') {
        $html.style.backgroundColor = TOTAMJUNG_THEME_BACKGROUND_COLOR;
        $html.setAttribute('totamjungTheme', 'totamjung');
      } else {
        $html.setAttribute('totamjungTheme', 'none');
      }
    });

  const headInjectionObserver = new MutationObserver(() => {
    const $head = document.querySelector('head');

    if (!$head || !($head instanceof HTMLHeadElement)) {
      return;
    }

    const $pretendardLink = Object.assign(document.createElement('link'), {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css',
    });
    const $googleApisLink = Object.assign(document.createElement('link'), {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    });
    const $googleStaticLink = Object.assign(document.createElement('link'), {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    });
    const $fontsLink = Object.assign(document.createElement('link'), {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cute+Font&family=Do+Hyeon&family=Gaegu&family=Gothic+A1&family=Gowun+Batang&family=Gowun+Dodum&family=Hi+Melody&family=IBM+Plex+Sans+KR&family=Jua&family=Nanum+Gothic&family=Nanum+Gothic+Coding&family=Nanum+Myeongjo&family=Noto+Sans+KR&family=Noto+Serif+KR&family=Poor+Story&family=Single+Day&family=Song+Myung&family=Stylish&family=Sunflower:wght@300&family=Yeon+Sung&display=swap',
    });

    [$pretendardLink, $googleApisLink, $googleStaticLink, $fontsLink].forEach(
      (element) => {
        $head.appendChild(element);
      },
    );

    headInjectionObserver.disconnect();
  });

  headInjectionObserver.observe($html, { childList: true });
};

injectFontsAndThemes();
