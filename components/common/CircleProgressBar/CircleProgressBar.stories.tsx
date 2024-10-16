import type { Meta, StoryObj } from '@storybook/react';
import CircleProgressBar from './CircleProgressBar';

/**
 * `CircleProgressBar`는 진행 상황을 시각적으로 보여주는 컴포넌트입니다.
 */
const meta = {
  title: 'components/CircleProgressBar',
  component: CircleProgressBar,
  argTypes: {
    size: {
      description: '프로그레스 바의 크기입니다.',
    },
    progress: {
      description:
        '프로그레스 바가 얼마나 채워져 있는가를 의미합니다. **이 값은 0 이상 100 이하의 수여야 합니다.**',
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
    color: {
      description: '프로그레스 바의, **채워져 있는 부분**의 색상입니다.',
    },
    trackColor: {
      description: '프로그레스 바의, **채워져 있지 않은 부분**의 색상입니다.',
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
