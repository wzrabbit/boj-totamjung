import { StrictMode } from 'react';
import { render } from 'react-dom';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import Widget from '~components/Widget';
import LeftSlideToast from '~components/LeftSlideToast/LeftSlideToast';
import useTotamjungThemeState from '~hooks/useTotamjungThemeState';
import useToastState from '~hooks/useToastState';
import GlobalStyle from '~styles/GlobalStyle';
import { theme } from '~styles/theme';

const wrapper = document.createElement('div');
const shadowRoot = wrapper.attachShadow({ mode: 'open' });
const styleContainer = document.createElement('div');
const appContainer = document.createElement('div');
const hostStyle = document.createElement('style');

hostStyle.textContent = `
  :host {
    display: block;
  }
`;

shadowRoot.appendChild(styleContainer);
shadowRoot.appendChild(appContainer);
shadowRoot.appendChild(hostStyle);

document.body.appendChild(wrapper);

const ContentScript = () => {
  const { totamjungTheme, isLoaded, updateTotamjungTheme } =
    useTotamjungThemeState();
  const { toastState, showToast, closeToast } = useToastState();

  return (
    isLoaded && (
      <div style={{ position: 'relative', zIndex: 10000 }}>
        <Widget
          theme={totamjungTheme}
          onChangeTheme={updateTotamjungTheme}
          onToast={showToast}
        />
        <LeftSlideToast
          theme={totamjungTheme}
          onClose={closeToast}
          {...toastState}
        />
      </div>
    )
  );
};

render(
  <StrictMode>
    <StyleSheetManager target={styleContainer}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ContentScript />
      </ThemeProvider>
    </StyleSheetManager>
  </StrictMode>,
  appContainer,
);
