import type { Meta, StoryObj } from '@storybook/react';
import TierSlider from './TierSlider';
import type { TierWithoutNotRatable } from '@/types/randomDefense';
import { fn } from '@storybook/test';

/**
 * `TierSlider`는 무작위 추첨에서 티어의 범위를 조절할 수 있는 슬라이더 형태의 컴포넌트입니다.
 */
const meta = {
  title: 'components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierSlider',
  component: TierSlider,
  argTypes: {
    startTier: {
      description: '난이도 범위에서의 **시작 티어**입니다.',
    },
    endTier: {
      description: '난이도 범위에서의 **끝 티어**입니다.',
    },
    onChange: {
      description: '난이도 범위가 변경되어야 할 경우 실행시킬 콜백 함수입니다.',
    },
  },
} satisfies Meta<typeof TierSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    startTier: 1,
    endTier: 30,
    onChange: fn(),
  },
};
