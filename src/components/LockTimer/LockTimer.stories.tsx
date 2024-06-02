import type { Meta, StoryObj } from '@storybook/react';
import LockTimer from './LockTimer';

/**
 * `LockTimer`는 알고리즘 분류를 잠글 시, 잠금 시간을 설정할 수 있는 타이머 컴포넌트입니다.
 */
const meta = {
  title: 'LockTimer',
  component: LockTimer,
  argTypes: {},
} satisfies Meta<typeof LockTimer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
