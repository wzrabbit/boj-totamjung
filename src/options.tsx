import { render } from 'react-dom';
import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '~styles/theme';
import GlobalStyle from '~styles/GlobalStyle';
import AlgorithmPool from '~components/AlgorithmPool';
import HiderFieldsetMenu from '~components/HiderMenu';
import RandomDefenseManageMenu from '~components/RandomDefenseManageMenu/RandomDefenseManageMenu';
import RandomDefenseHistoryMenu from '~components/RandomDefenseHistoryMenu';
import OptionsDataManageMenu from '~components/OptionsDataManageMenu';

const Options = () => {
  return (
    <div
      style={{
        display: 'flex',
        columnGap: '50px',
        width: '3000px',
        background: chrome.runtime.getURL('background.webp'),
        backgroundRepeat: 'repeat',
      }}
    >
      <AlgorithmPool />
      <HiderFieldsetMenu />
      <RandomDefenseManageMenu />
      <RandomDefenseHistoryMenu />
      <OptionsDataManageMenu />
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
