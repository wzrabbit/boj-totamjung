import type { Meta, StoryObj } from '@storybook/react';
import ProblemTagLockTimer from './ProblemTagLockTimer';
import { fn } from '@storybook/test';

/**
 * `ProblemTagLockTimer`는 알고리즘 분류를 잠글 시, 잠금 시간을 설정할 수 있는 타이머 컴포넌트입니다.
 */
const meta = {
  title: 'components/ProblemTagLockTimer',
  component: ProblemTagLockTimer,
  argTypes: {
    hours: {
      description: '타이머에 설정된 **시간**을 의미합니다.',
    },
    minutes: {
      description: '타이머에 설정된 **분**을 의미합니다.',
    },
    disabled: {
      description:
        '본 컴포넌트가 비활성화되어 있는지의 여부입니다. 비활성화되어 있는 경우 본 컴포넌트를 조작할 수 없습니다.',
    },
    onChange: {
      description:
        '타이머에 설정된 시간이 변경될 경우 실행시킬 콜백 함수입니다.',
    },
  },
} satisfies Meta<typeof ProblemTagLockTimer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hours: 0,
    minutes: 20,
    disabled: false,
    onChange: fn(),
  },
};

/**
 * 스토리지로부터 데이터를 아직 받아오지 못한 상황, 즉 로딩 중인 상황일 경우에는 컴포넌트가 비활성화됩니다.
 */
export const Disabled: Story = {
  args: {
    hours: 0,
    minutes: 20,
    disabled: true,
    onChange: fn(),
  },
};
