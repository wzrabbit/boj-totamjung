import { COMMANDS } from '@/constants/commands';
import { isFontNoResponse } from '@/domains/dataHandlers/validators/fontNoValidator';
import { isHiderOptionsResponse } from '@/domains/dataHandlers/validators/hiderOptionsValidator';
import { isTotamjungThemeResponse } from '@/domains/dataHandlers/validators/totamjungThemeValidator';

export default defineContentScript({
  matches: ['https://www.acmicpc.net/*'],
  runAt: 'document_start',
  main() {
    executeInjectionScript();
  },
});

const executeInjectionScript = () => {
  const TOTAMJUNG_THEME_BACKGROUND_COLOR = '#1a0e0a';

  const injectFontsAndThemes = () => {
    const htmlElement = document.documentElement;

    browser.runtime
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

    browser.runtime
      .sendMessage({ command: COMMANDS.FETCH_HIDER_OPTIONS })
      .then((response) => {
        if (!isHiderOptionsResponse(response)) {
          return;
        }

        const { shouldHideTier } = response;

        if (shouldHideTier) {
          htmlElement.setAttribute('hideTier', 'true');
        } else {
          htmlElement.setAttribute('hideTier', 'false');
        }
      });

    browser.runtime
      .sendMessage({ command: COMMANDS.FETCH_FONT_NO })
      .then((response) => {
        if (!isFontNoResponse(response)) {
          return;
        }

        const { fontNo } = response;

        htmlElement.setAttribute('fontNo', String(fontNo));
      });

    const headInjectionObserver = new MutationObserver(() => {
      const headElement = document.head;

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
      const dunggeunmoNeoLinkElement = Object.assign(
        document.createElement('link'),
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/neodgm/neodgm-webfont@latest/neodgm/style.css',
        },
      );
      const spoqaHanSansNeoStyleElement = document.createElement('style');
      spoqaHanSansNeoStyleElement.innerHTML = `
      @font-face {
        font-family: 'Spoqa Han Sans Neo';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff')
          format('woff');
        font-weight: 400;
        font-style: normal;
      }

      @font-face {
        font-family: 'Spoqa Han Sans Neo';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Medium.woff')
          format('woff');
        font-weight: 500;
        font-style: normal;
      }

      @font-face {
        font-family: 'Spoqa Han Sans Neo';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Bold.woff')
          format('woff');
        font-weight: 700;
        font-style: normal;
      }
    `;

      [
        pretendardLinkElement,
        googleApisLinkElement,
        googleStaticLinkElement,
        fontsLinkElement,
        dunggeunmoNeoLinkElement,
        spoqaHanSansNeoStyleElement,
      ].forEach((element) => {
        headElement.appendChild(element);
      });

      headInjectionObserver.disconnect();
    });

    headInjectionObserver.observe(htmlElement, { childList: true });
  };

  injectFontsAndThemes();
};
