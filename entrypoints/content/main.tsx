import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';
import ContentScript from '@/components/core/ContentScript';

const executeContentScript = () => {
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

  const root = createRoot(appContainer);

  root.render(
    <StrictMode>
      <StyleSheetManager target={styleContainer}>
        <ThemeProvider theme={theme}>
          <GlobalStyle usesShadowRoot={true} />
          <ContentScript />
        </ThemeProvider>
      </StyleSheetManager>
    </StrictMode>,
  );
};

export default executeContentScript;
