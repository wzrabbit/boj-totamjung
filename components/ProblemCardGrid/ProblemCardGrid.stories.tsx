import type { Meta, StoryObj } from '@storybook/react';
import ProblemCardGrid from './ProblemCardGrid';
import type { ProblemInfo } from '@/types/gacha';

/**
 * `ProblemCardGrid`
 */
const meta = {
  title: 'components/QuickSlotMenu/ProblemCardGrid',
  component: ProblemCardGrid,
} satisfies Meta<typeof ProblemCardGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

const getSampleProblemInfos = (problemCount: number): ProblemInfo[] => {
  return Array.from({ length: problemCount }).map((_, index) => ({
    problemId: 40000 + index,
    title: `${40000 + index}번 문제`,
    tier: 0,
  }));
};

export const CardCount6: Story = {
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

export const CardCount1: Story = {
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
    problemInfos: getSampleProblemInfos(1),
  },
};

export const CardCount2: Story = {
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
    problemInfos: getSampleProblemInfos(2),
  },
};

export const CardCount5: Story = {
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
    problemInfos: getSampleProblemInfos(5),
  },
};

export const CardCount10: Story = {
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
    problemInfos: getSampleProblemInfos(10),
  },
};

export const CardCount25: Story = {
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
    problemInfos: getSampleProblemInfos(25),
  },
};

export const CardCount50: Story = {
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
    problemInfos: getSampleProblemInfos(50),
  },
};
