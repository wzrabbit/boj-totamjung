import type { Meta, StoryObj } from '@storybook/react';
import TierPresetButton from './TierPresetButton';

/**
 * `TierPresetButton`은 무작위 추첨에서 티어를 설정할 때, 티어를 특정 범위로 빠르게 지정할 수 있는 버튼입니다.
 */
const meta = {
  title:
    'components/RandomDefenseCreateMenu/DifficultyAdjustMenu/TierPresetButton',
  component: TierPresetButton,
  argTypes: {},
} satisfies Meta<typeof TierPresetButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unrated: Story = {
  args: {
    rank: 'unrated',
    onClick: (start, end) => {
      alert(`onClick(${start}, ${end})`);
    },
  },
};

export const Bronze: Story = {
  args: {
    rank: 'bronze',
    onClick: (start, end) => {
      alert(`onClick(${start}, ${end})`);
    },
  },
};

export const Silver: Story = {
  args: {
    rank: 'silver',
    onClick: (start, end) => {
      alert(`onClick(${start}, ${end})`);
    },
  },
};

export const Gold: Story = {
  args: {
    rank: 'gold',
    onClick: (start, end) => {
      alert(`onClick(${start}, ${end})`);
    },
  },
};

export const Platinum: Story = {
  args: {
    rank: 'platinum',
    onClick: (start, end) => {
      alert(`onClick(${start}, ${end})`);
    },
  },
};

export const Diamond: Story = {
  args: {
    rank: 'diamond',
    onClick: (start, end) => {
      alert(`onClick(${start}, ${end})`);
    },
  },
};

export const Ruby: Story = {
  args: {
    rank: 'ruby',
    onClick: (start, end) => {
      alert(`onClick(${start}, ${end})`);
    },
  },
};
