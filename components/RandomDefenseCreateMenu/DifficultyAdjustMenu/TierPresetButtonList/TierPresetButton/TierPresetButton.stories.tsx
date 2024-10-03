import type { Meta, StoryObj } from '@storybook/react';
import TierPresetButton from './TierPresetButton';
import { fn } from '@storybook/test';

/**
 * `TierPresetButton`은 무작위 추첨에서 티어를 설정할 때, 티어를 특정 범위로 빠르게 지정할 수 있는 버튼입니다.
 */
const meta = {
  title:
    'components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierPresetButton',
  component: TierPresetButton,
  argTypes: {
    rank: {
      description: '버튼에서 사용할 **랭크**를 의미합니다.',
    },
    onClick: {
      description: '버튼이 클릭될 경우 실행시킬 콜백 함수를 의미합니다.',
    },
  },
} satisfies Meta<typeof TierPresetButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unrated: Story = {
  args: {
    rank: 'unrated',
    onClick: fn(),
  },
};

export const Bronze: Story = {
  args: {
    rank: 'bronze',
    onClick: fn(),
  },
};

export const Silver: Story = {
  args: {
    rank: 'silver',
    onClick: fn(),
  },
};

export const Gold: Story = {
  args: {
    rank: 'gold',
    onClick: fn(),
  },
};

export const Platinum: Story = {
  args: {
    rank: 'platinum',
    onClick: fn(),
  },
};

export const Diamond: Story = {
  args: {
    rank: 'diamond',
    onClick: fn(),
  },
};

export const Ruby: Story = {
  args: {
    rank: 'ruby',
    onClick: fn(),
  },
};
