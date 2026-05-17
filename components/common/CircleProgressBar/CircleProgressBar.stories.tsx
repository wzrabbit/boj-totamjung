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
    colorTransitionMs: {
      description:
        '`color`·`trackColor` 변경 시 적용할 stroke 전환 시간(ms)입니다. 0이면 즉시 전환되며, 기본값은 0입니다. Controls 패널에서 이 값을 0보다 크게 둔 뒤 `color`를 바꾸면 부드러운 전환을 확인할 수 있습니다.',
      control: { type: 'range', min: 0, max: 1000, step: 50 },
    },
  },
} satisfies Meta<typeof CircleProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 45,
    strokeWidth: 5.625,
    progress: 65,
    color: '#ffe091',
    trackColor: '#362b28',
  },
};

/**
 * `strokeWidth` 값을 `size`의 절반으로 조절하면 꽉 찬 프로그레스 바를 만들 수 있습니다.
 */
export const Filled: Story = {
  args: {
    size: 45,
    strokeWidth: 22.5,
    progress: 65,
    color: '#ffe091',
    trackColor: '#362b28',
  },
};
