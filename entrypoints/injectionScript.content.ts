import { COMMANDS } from '@/constants/commands';
import { isFontNo } from '@/domains/dataHandlers/validators/fontNoValidator';
import { isHiderOptions } from '@/domains/dataHandlers/validators/hiderOptionsValidator';
import { isTotamjungTheme } from '@/domains/dataHandlers/validators/totamjungThemeValidator';
import { isExternalThemeActive } from '@/domains/isExternalThemeActive';
import '@/assets/css/palette.css';
import '@/assets/css/totamjungTheme.css';
import '@/assets/css/tierHider.css';
import '@/assets/css/problemTheme.css';

export default defineContentScript({
  matches: ['https://www.acmicpc.net/*', 'https://solved.ac/*'],
  runAt: 'document_start',
  main() {
    executeInjectionScript();
  },
});

const executeInjectionScript = () => {
  const TOTAMJUNG_THEME_BACKGROUND_COLOR = '#1a0e0a';

  const injectFontsAndThemes = () => {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('hideTier', 'loading');

    browser.runtime
      .sendMessage({ command: COMMANDS.FETCH_TOTAMJUNG_THEME })
      .then((totamjungTheme) => {
        if (!isTotamjungTheme(totamjungTheme)) {
          return;
        }

        if (totamjungTheme === 'totamjung' && !isExternalThemeActive()) {
          htmlElement.style.backgroundColor = TOTAMJUNG_THEME_BACKGROUND_COLOR;
          htmlElement.setAttribute('totamjungTheme', 'totamjung');
        } else {
          htmlElement.setAttribute('totamjungTheme', 'none');
        }
      });

    browser.runtime
      .sendMessage({ command: COMMANDS.FETCH_HIDER_OPTIONS })
      .then((response) => {
        if (!isHiderOptions(response)) {
          return;
        }

        const { shouldHideTier, shouldRevealTierOnHover } = response;

        if (!shouldHideTier) {
          htmlElement.setAttribute('hideTier', 'false');
          return;
        }

        if (shouldRevealTierOnHover) {
          htmlElement.setAttribute('hideTier', 'revealOnHover');
          return;
        }

        htmlElement.setAttribute('hideTier', 'true');
      });

    browser.runtime
      .sendMessage({ command: COMMANDS.FETCH_FONT_NO })
      .then((fontNo) => {
        if (!isFontNo(fontNo)) {
          return;
        }

        htmlElement.setAttribute('fontNo', String(fontNo));
      });

    const headInjectionObserver = new MutationObserver(() => {
      const headElement = document.head;

      if (!headElement) {
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
      const cookieRunStyleElement = document.createElement('style');
      cookieRunStyleElement.innerHTML = `
        @font-face {
          font-family: 'CookieRun';
          src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/CookieRun-Regular.woff')
            format('woff');
          font-weight: 400;
          font-style: normal;
        }
      `;
      const cafe24ClassicTypeElement = document.createElement('style');
      cookieRunStyleElement.innerHTML = `
        @font-face {
          font-family: 'Cafe24ClassicType';
          src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-2@1.0/Cafe24ClassicType-Regular.woff2')
            format('woff2');
          font-weight: normal;
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
        cookieRunStyleElement,
        cafe24ClassicTypeElement,
      ].forEach((element) => {
        headElement.appendChild(element);
      });
    });

    headInjectionObserver.observe(htmlElement, { childList: true });
  };

  injectFontsAndThemes();
};
