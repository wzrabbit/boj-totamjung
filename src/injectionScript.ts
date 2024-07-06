import { COMMANDS } from '~constants/commands';
import { isTotamjungThemeResponse } from '~domains/dataHandlers/validators/totamjungThemeValidator';

const TOTAMJUNG_THEME_BACKGROUND_COLOR = '#1a0e0a';

const injectFontsAndThemes = () => {
  const htmlElement = document.documentElement;

  chrome.runtime
    .sendMessage({ command: COMMANDS.FETCH_TOTAMJUNG_THEME })
    .then((response) => {
      if (!isTotamjungThemeResponse(response)) {
        return;
      }

      const { totamjungTheme } = response;

      if (totamjungTheme === 'totamjung') {
        htmlElement.style.backgroundColor = TOTAMJUNG_THEME_BACKGROUND_COLOR;
        htmlElement.setAttribute('totamjungTheme', 'totamjung');
      } else {
        htmlElement.setAttribute('totamjungTheme', 'none');
      }
    });

  const headInjectionObserver = new MutationObserver(() => {
    const headElement = document.querySelector('headElement');

    if (!headElement || !(headElement instanceof HTMLHeadElement)) {
      return;
    }

    const pretendardLinkElement = Object.assign(
      document.createElement('link'),
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css',
      },
    );
    const googleApisLinkElement = Object.assign(
      document.createElement('link'),
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    );
    const googleStaticLinkElement = Object.assign(
      document.createElement('link'),
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
    );
    const fontsLinkElement = Object.assign(document.createElement('link'), {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cute+Font&family=Do+Hyeon&family=Gaegu&family=Gothic+A1&family=Gowun+Batang&family=Gowun+Dodum&family=Hi+Melody&family=IBM+Plex+Sans+KR&family=Jua&family=Nanum+Gothic&family=Nanum+Gothic+Coding&family=Nanum+Myeongjo&family=Noto+Sans+KR&family=Noto+Serif+KR&family=Poor+Story&family=Single+Day&family=Song+Myung&family=Stylish&family=Sunflower:wght@300&family=Yeon+Sung&family=IBM+Plex+Mono&family=Hahmlet&family=Diphylleia&family=Oxanium:wght@200..800&display=swap',
    });
    const dungGeonMoLinkElement = Object.assign(
      document.createElement('link'),
      {
        rel: 'stylesheet',
        href: 'https://webfontworld.github.io/DungGeunMo/DungGeunMo.css',
      },
    );
    const spoqaHanSansNeoLinkElement = Object.assign(
      document.createElement('link'),
      {
        rel: 'stylesheet',
        href: '//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css',
        type: 'text/css',
      },
    );

    [
      pretendardLinkElement,
      googleApisLinkElement,
      googleStaticLinkElement,
      fontsLinkElement,
      dungGeonMoLinkElement,
      spoqaHanSansNeoLinkElement,
    ].forEach((element) => {
      headElement.appendChild(element);
    });

    headInjectionObserver.disconnect();
  });

  headInjectionObserver.observe(htmlElement, { childList: true });
};

injectFontsAndThemes();
