import type { Meta, StoryObj } from '@storybook/react';
import TierPresetButtonList from './TierPresetButtonList';

/**
 * `TierPresetButtonList`은 무작위 추첨에서 티어를 설정할 때, 티어를 특정 범위로 빠르게 지정할 수 있는 버튼들을 모아둔 메뉴입니다.
 */
const meta = {
  title:
    'components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierPresetButtonList',
  component: TierPresetButtonList,
  argTypes: {},
} satisfies Meta<typeof TierPresetButtonList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: (start, end) => {
      alert(`onClick(${start}, ${end});`);
    },
  },
};
