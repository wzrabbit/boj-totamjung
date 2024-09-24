import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const COLORS = {
  BROWN100: '#1a0e0a',
  BROWN200: '#2b1c17',
  BROWN300: '#412a23',
  GOLD: '#d1b072',
  LEMON: '#fff2c8',
  WHITE: '#eeeeee',
};

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: '토탐정',
    brandUrl: 'https://github.com/wzrabbit/boj-totamjung',
    brandImage:
      'https://github.com/wzrabbit/boj-totamjung/assets/87642422/47efbb57-7f2c-455c-a527-eeed74b8ce4d',

    colorSecondary: COLORS.BROWN300,

    appBg: COLORS.BROWN100,
    appContentBg: COLORS.BROWN100,
    appBorderColor: COLORS.BROWN300,

    barTextColor: COLORS.GOLD,
    barSelectedColor: COLORS.GOLD,
    barHoverColor: COLORS.LEMON,
    barBg: COLORS.BROWN200,

    textColor: COLORS.WHITE,
    textMutedColor: COLORS.GOLD,

    booleanBg: COLORS.BROWN200,
    booleanSelectedBg: COLORS.BROWN300,

    inputBg: COLORS.BROWN100,
    inputBorder: COLORS.BROWN300,
    inputTextColor: COLORS.LEMON,
  }),
});
