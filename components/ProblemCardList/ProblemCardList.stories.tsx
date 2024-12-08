import type { Meta, StoryObj } from '@storybook/react';
import ProblemCardList from './ProblemCardList';
import type { Tier } from '@/types/randomDefense';

/**
 * `ProblemCardList`는 나도 모르겠어요
 */
const meta = {
  title: 'components/QuickSlotMenu/ProblemCardList',
  component: ProblemCardList,
} satisfies Meta<typeof ProblemCardList>;

export default meta;

type Story = StoryObj<typeof meta>;

interface ProblemInfo {
  problemId: number;
  title: string;
  tier: Tier;
}

const getSampleProblemInfos = (problemCount: number): ProblemInfo[] => {
  return Array.from({ length: problemCount }).map((_, index) => ({
    problemId: 40000 + index,
    title: `${40000 + index}번 문제`,
    tier: 0,
  }));
};

export const Default: Story = {
  decorators: [
    (Story) => {
      return (
        <div style={{ height: '80vh' }}>
          <Story />
        </div>
      );
    },
  ],
  args: {
    problemInfos: getSampleProblemInfos(6),
  },
};
