import type { Meta, StoryObj } from '@storybook/react';
import TierSlider from './TierSlider';
import type { TierWithoutNotRatable } from '@/types/randomDefense';

/**
 * `TierSlider`는 무작위 추첨에서 티어의 범위를 조절할 수 있는 슬라이더 형태의 컴포넌트입니다.
 */
const meta = {
  title: 'components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierSlider',
  component: TierSlider,
  argTypes: {},
} satisfies Meta<typeof TierSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    startTier: 1,
    endTier: 30,
    onChange: (start: TierWithoutNotRatable, end: TierWithoutNotRatable) => {
      alert(`onChange(${start}, ${end})`);
    },
  },
};
