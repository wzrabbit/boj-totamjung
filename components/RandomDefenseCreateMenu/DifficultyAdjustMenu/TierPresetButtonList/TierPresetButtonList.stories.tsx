import type { Meta, StoryObj } from '@storybook/react';
import TierPresetButtonList from './TierPresetButtonList';
import { fn } from '@storybook/test';

/**
 * `TierPresetButtonList`은 무작위 추첨에서 티어를 설정할 때, 티어를 특정 범위로 빠르게 지정할 수 있는 버튼들을 모아둔 메뉴입니다.
 */
const meta = {
  title:
    'components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierPresetButtonList',
  component: TierPresetButtonList,
  argTypes: {
    onClick: {
      description:
        '이 리스트의 버튼이 클릭되었을 경우 실행시킬 콜백 함수입니다. 이 때 변경해야 하는 티어 범위와 함께 실행됩니다.',
    },
  },
} satisfies Meta<typeof TierPresetButtonList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: fn(),
  },
};
