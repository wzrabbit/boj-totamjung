import { render } from 'react-dom';
import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';
import Test from '@components/Test';

const Options = () => {
  return <Test message="와 리액뜨!!" />;
};

render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Options />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
);
