import type { Meta, StoryObj } from '@storybook/react';
import InspectResultIcon from './InspectResultIcon';

/**
 * `InspectResultIcon`는 사용자가 알고 있는 알고리즘만으로 해당 문제를 풀 수 있는지의 여부를 문제 제목 옆에 나타내주는 아이콘입니다.
 */
const meta = {
  title: 'components/InspectResultIcon',
  component: InspectResultIcon,
} satisfies Meta<typeof InspectResultIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultCheckIcon: Story = {
  args: {
    theme: 'none',
    icon: 'check',
  },
};

export const DefaultQuestionIcon: Story = {
  args: {
    theme: 'none',
    icon: 'question',
  },
};

export const TotamjungCheckIcon: Story = {
  args: {
    theme: 'totamjung',
    icon: 'check',
  },
};

export const TotamjungQuestionIcon: Story = {
  args: {
    theme: 'totamjung',
    icon: 'question',
  },
};
