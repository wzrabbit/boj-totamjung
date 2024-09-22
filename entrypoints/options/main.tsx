import { render } from 'react-dom';
import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyle';
import Options from '@/components/core/Options';

render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Options />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
);
