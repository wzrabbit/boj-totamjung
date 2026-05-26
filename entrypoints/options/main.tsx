import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyle';
import Options from '@/components/core/Options';
import { createRoot } from 'react-dom/client';
import { LocaleProvider } from '@/i18n';

const rootElement = document.getElementById('root');
const root = rootElement && createRoot(rootElement);

root?.render(
  <StrictMode>
    <LocaleProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Options />
      </ThemeProvider>
    </LocaleProvider>
  </StrictMode>,
);
