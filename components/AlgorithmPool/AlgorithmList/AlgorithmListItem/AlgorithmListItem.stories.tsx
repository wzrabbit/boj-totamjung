import type { Meta, StoryObj } from '@storybook/react';
import AlgorithmListItem from './AlgorithmListItem';
import { fn } from '@storybook/test';

/**
 * `AlgorithmListItem`는 하나의 알고리즘 분류에 대한 체크 여부를 설정할 수 있는 컴포넌트입니다.
 */
const meta = {
  title: 'components/AlgorithmPool/AlgorithmListItem',
  component: AlgorithmListItem,
  argTypes: {
    id: {
      description: '알고리즘 분류의 ID입니다.',
    },
    name: {
      description: '알고리즘 분류의 이름입니다.',
    },
    isChecked: {
      description: '알고리즘 분류가 체크되어 있는지의 여부입니다.',
    },
    backgroundColor: {
      description: '메뉴의 색상입니다.',
    },
    onChange: {
      description: '체크 여부가 변경되었을 경우 실행시킬 콜백 함수입니다.',
    },
  },
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
