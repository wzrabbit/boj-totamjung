import type { Meta, StoryObj } from '@storybook/react';
import Switch from './Switch';
import { fn } from '@storybook/test';

/**
 * `Switch`는 공용 스위치 컴포넌트입니다.
 */
const meta = {
  title: 'components/common/Switch',
  component: Switch,
  argTypes: {
    size: {
      description: '스위치의 크기입니다.',
    },
    isChecked: {
      description: '스위치의 체크 여부입니다.',
    },
    ariaLabel: {
      description: '스위치의 `aria-label`입니다.',
    },
    onChange: {
      description:
        '스위치의 체크 여부가 달라지는 경우 실행하게 될 콜백 함수입니다.',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LargeChecked: Story = {
  args: {
    size: 'large',
    isChecked: true,
    ariaLabel: '테스트',
    onChange: fn(),
  },
};

export const LargeNotChecked: Story = {
  args: {
    size: 'large',
    isChecked: false,
    ariaLabel: '테스트',
    onChange: fn(),
  },
};

export const MediumChecked: Story = {
  args: {
    size: 'medium',
    isChecked: true,
    ariaLabel: '테스트',
    onChange: fn(),
  },
};

export const MediumNotChecked: Story = {
  args: {
    size: 'medium',
    isChecked: false,
    ariaLabel: '테스트',
    onChange: fn(),
  },
};
