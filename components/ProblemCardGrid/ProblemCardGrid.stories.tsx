import type { Meta, StoryObj } from '@storybook/react';
import ProblemCardGrid from './ProblemCardGrid';
import type { ProblemInfo } from '@/types/randomDefense';

/**
 * `ProblemCardGrid`는 즉석 추첨 결과를 의미하는 카드들을 그리드 형태로 보여주는 컴포넌트입니다. 그리드의 크기와 카드의 수에 따라 최적의 레이아웃을 보여주도록 자동으로 변경됩니다.
 */
const meta = {
  title: 'components/QuickSlotMenu/ProblemCardGrid',
  component: ProblemCardGrid,
  argTypes: {
    problemInfos: {
      description: '카드 형태로 보여줄 문제들의 정보 목록입니다.',
    },
  },
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
