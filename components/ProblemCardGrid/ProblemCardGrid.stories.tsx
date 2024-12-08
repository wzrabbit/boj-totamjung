import type { Meta, StoryObj } from '@storybook/react';
import ProblemCardGrid from './ProblemCardGrid';

/**
 * `ProblemCardGrid`는 즉석 추첨 결과에서 나온 결과에서 하나의 문제를 시각적으로 보여주는 카드 모양의 컴포넌트입니다.
 */
const meta = {
  title: 'components/ProblemCardGrid',
  component: ProblemCardGrid,
} satisfies Meta<typeof ProblemCardGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unrated: Story = {
  args: {
    problemInfo: {
      problemId: 1223,
      title: '마법의 돌',
      tier: 0,
    },
    isHidden: false,
  },
};
