import type { Meta, StoryObj } from '@storybook/react';
import Widget from './Widget';
import { fn } from '@storybook/test';

/**
 * `Widget`는 BOJ 웹사이트에서 토탐정의 기능을 쉽게 이용하기 위해, 우측 하단에 표시되는 위젯입니다. 평소에는 TOP 버튼으로써 이용되며, 우클릭 시 위젯의 메뉴를 펼치거나 접을 수 있습니다.
 */
const meta = {
  title: 'components/Widget',
  component: Widget,
  argTypes: {
    theme: {
      description: '위젯에 적용될 테마입니다.',
    },
    onChangeTheme: {
      description: '테마를 변경해야 할 경우 실행시킬 콜백 함수입니다.',
    },
    onToast: {
      description: '토스트를 띄워야 할 경우 실행시킬 콜백 함수입니다.',
    },
  },
} satisfies Meta<typeof Widget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '240px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    rootElement: document.body,
    theme: 'none',
    onChangeTheme: fn(),
    onToast: fn(),
  },
};

export const Totamjung: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '240px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    rootElement: document.body,
    theme: 'totamjung',
    onChangeTheme: fn(),
    onToast: fn(),
  },
};

export const BojExtendedDark: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '240px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    rootElement: document.body,
    theme: 'bojExtendedDark',
    onChangeTheme: fn(),
    onToast: fn(),
  },
};

export const BojExtendedRigel: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '240px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    rootElement: document.body,
    theme: 'bojExtendedRigel',
    onChangeTheme: fn(),
    onToast: fn(),
  },
};

export const SolvedAcLight: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '240px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    rootElement: document.body,
    theme: 'solvedAcLight',
    onChangeTheme: fn(),
    onToast: fn(),
  },
};

export const SolvedAcDark: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '240px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    rootElement: document.body,
    theme: 'solvedAcDark',
    onChangeTheme: fn(),
    onToast: fn(),
  },
};

export const SolvedAcBlack: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '240px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    rootElement: document.body,
    theme: 'solvedAcBlack',
    onChangeTheme: fn(),
    onToast: fn(),
  },
};
