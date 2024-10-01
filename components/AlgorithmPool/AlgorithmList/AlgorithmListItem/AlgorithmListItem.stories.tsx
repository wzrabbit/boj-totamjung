import type { Meta, StoryObj } from '@storybook/react';
import AlgorithmListItem from './AlgorithmListItem';
import { fn } from '@storybook/test';

/**
 * `AlgorithmListItem`는 하나의 알고리즘 분류에 대한 체크 여부를 설정할 수 있는 컴포넌트입니다.
 */
const meta = {
  title: 'components/AlgorithmPool/AlgorithmListItem',
  component: AlgorithmListItem,
  argTypes: {},
} satisfies Meta<typeof AlgorithmListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CheckedLightBrownColor: Story = {
  args: {
    id: 1,
    name: '그리디 알고리즘',
    isChecked: true,
    backgroundColor: 'light-brown',
    onChange: fn(),
  },
};

export const NotCheckedLightBrownColor: Story = {
  args: {
    id: 1,
    name: '그리디 알고리즘',
    isChecked: false,
    backgroundColor: 'light-brown',
    onChange: fn(),
  },
};

export const CheckedBrownColor: Story = {
  args: {
    id: 1,
    name: '그리디 알고리즘',
    isChecked: true,
    backgroundColor: 'brown',
    onChange: fn(),
  },
};

export const NotCheckedBrownColor: Story = {
  args: {
    id: 1,
    name: '그리디 알고리즘',
    isChecked: false,
    backgroundColor: 'brown',
    onChange: fn(),
  },
};
