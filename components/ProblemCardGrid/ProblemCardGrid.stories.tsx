import type { Meta, StoryObj } from '@storybook/react';
import ProblemCardGrid from './ProblemCardGrid';
import type { ProblemInfo } from '@/types/randomDefense';
import { fn } from '@storybook/test';

/**
 * `ProblemCardGrid`는 즉석 추첨 결과를 의미하는 카드들을 그리드 형태로 보여주는 컴포넌트입니다. 그리드의 크기와 카드의 수에 따라 최적의 레이아웃을 보여주도록 자동으로 변경됩니다.
 */
const meta = {
  title: 'components/QuickSlotsMenu/ProblemCardGrid',
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
    isTierHidden: false,
    onCardHover: fn(),
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
    isTierHidden: false,
    onCardHover: fn(),
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
    isTierHidden: false,
    onCardHover: fn(),
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
    isTierHidden: false,
    onCardHover: fn(),
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
    isTierHidden: false,
    onCardHover: fn(),
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
    isTierHidden: false,
    onCardHover: fn(),
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
    isTierHidden: false,
    onCardHover: fn(),
  },
};
