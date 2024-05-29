import { render } from 'react-dom';
import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '~styles/theme';
import Widget from '~components/Widget';

const $totamjungRoot = document.createElement('div');
$totamjungRoot.id = 'totamjungRoot';
const $body = document.querySelector('body');
$body?.append($totamjungRoot);

render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Widget />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('totamjungRoot'),
);
