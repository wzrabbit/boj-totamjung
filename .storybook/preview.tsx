import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/GlobalStyle';
import { theme } from '../src/styles/theme';
import React from 'react';

const COLORS = {
  BROWN: '#1a0e0a',
  WHITE: '#ffffff',
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
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
