import type { Meta, StoryObj } from '@storybook/react';
import TierRange from './TierRange';

/**
 * `TierRange`는 현재 선택된 난이도의 범위를 시각적으로 보여주는 컴포넌트입니다. `DifficultyAdjustMenu`를 이루는 컴포넌트이기도 합니다.
 */
const meta = {
  title: 'components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierRange',
  component: TierRange,
  argTypes: {},
} satisfies Meta<typeof TierRange>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    startTier: 1,
    endTier: 30,
  },
};
