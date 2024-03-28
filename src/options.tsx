import { render } from 'react-dom';
import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '~styles/theme';
import GlobalStyle from '~styles/GlobalStyle';
import AlgorithmPool from '~components/AlgorithmPool';
import RandomDefenseHistoryMenu from '~components/RandomDefenseHistoryMenu';

const Options = () => {
  return (
    <div style={{ display: 'flex', columnGap: '10px' }}>
      <AlgorithmPool />
      <RandomDefenseHistoryMenu />
    </div>
  );
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
