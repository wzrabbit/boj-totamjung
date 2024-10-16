import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import type { Preview } from '@storybook/react';
import React from 'react';

const COLORS = {
  BROWN: '#1a0e0a',
  WHITE: '#ffffff',
};
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'plain brown',
      values: [
        {
          name: 'plain brown',
          value: COLORS.BROWN,
        },
        {
          name: 'white',
          value: COLORS.WHITE,
        },
      ],
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </>
  ),
];

export default preview;
