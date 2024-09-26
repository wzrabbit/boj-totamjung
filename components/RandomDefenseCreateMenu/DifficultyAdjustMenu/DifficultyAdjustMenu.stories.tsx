import type { Meta, StoryObj } from '@storybook/react';
import DifficultyAdjustMenu from './DifficultyAdjustMenu';

/**
 * `DifficultyAdjustMenu`는 무작위 추첨에서 난이도의 범위를 설정할 수 있는 메뉴형 컴포넌트입니다.
 */
const meta = {
  title: 'components/RandomDefenseCreateMenu/DifficultyAdjustMenu',
  component: DifficultyAdjustMenu,
  argTypes: {},
} satisfies Meta<typeof DifficultyAdjustMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    startTier: 1,
    endTier: 30,
    onChange: (start, end) => {
      alert(`onChange(${start}, ${end})`);
    },
  },
};
