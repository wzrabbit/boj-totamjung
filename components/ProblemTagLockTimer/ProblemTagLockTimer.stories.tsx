import type { Meta, StoryObj } from '@storybook/react';
import ProblemTagLockTimer from './ProblemTagLockTimer';

/**
 * `ProblemTagLockTimer`는 알고리즘 분류를 잠글 시, 잠금 시간을 설정할 수 있는 타이머 컴포넌트입니다.
 */
const meta = {
  title: 'components/ProblemTagLockTimer',
  component: ProblemTagLockTimer,
  argTypes: {},
} satisfies Meta<typeof ProblemTagLockTimer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hours: 0,
    minutes: 20,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    hours: 0,
    minutes: 20,
    disabled: true,
  },
};
