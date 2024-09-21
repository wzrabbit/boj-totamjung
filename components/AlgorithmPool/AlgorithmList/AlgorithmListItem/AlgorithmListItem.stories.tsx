import type { Meta, StoryObj } from '@storybook/react';
import AlgorithmListItem from './AlgorithmListItem';

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
    onChange: (id: number) => {
      alert(`onChange(${id})`);
    },
  },
};

export const NotCheckedLightBrownColor: Story = {
  args: {
    id: 1,
    name: '그리디 알고리즘',
    isChecked: false,
    backgroundColor: 'light-brown',
    onChange: (id: number) => {
      alert(`onChange(${id})`);
    },
  },
};

export const CheckedBrownColor: Story = {
  args: {
    id: 1,
    name: '그리디 알고리즘',
    isChecked: true,
    backgroundColor: 'brown',
    onChange: (id: number) => {
      alert(`onChange(${id})`);
    },
  },
};

export const NotCheckedBrownColor: Story = {
  args: {
    id: 1,
    name: '그리디 알고리즘',
    isChecked: false,
    backgroundColor: 'brown',
    onChange: (id: number) => {
      alert(`onChange(${id})`);
    },
  },
};
