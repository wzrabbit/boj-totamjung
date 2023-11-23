import type { StorybookConfig } from '@storybook/react-webpack5';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@components': resolve(__dirname, '../src/components'),
        '@constants': resolve(__dirname, '../src/constants'),
        '@domains': resolve(__dirname, '../src/domains'),
        '@hooks': resolve(__dirname, '../src/hooks'),
        '@images': resolve(__dirname, '../src/images'),
        '@types': resolve(__dirname, '../src/types'),
        '@utils': resolve(__dirname, '../src/utils'),
      };
    }

    return config;
  },
};
export default config;