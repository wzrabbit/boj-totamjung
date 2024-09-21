import type { Meta, StoryObj } from '@storybook/react';
import CircleProgressBar from './CircleProgressBar';

/**
 * `CircleProgressBar`는 진행 상황을 시각적으로 보여주는 컴포넌트입니다.
 */
const meta = {
  title: 'components/CircleProgressBar',
  component: CircleProgressBar,
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
  },
} satisfies Meta<typeof CircleProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 45,
    progress: 65,
    color: '#ffe091',
    trackColor: '#362b28',
  },
};
