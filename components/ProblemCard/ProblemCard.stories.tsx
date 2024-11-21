import type { Meta, StoryObj } from '@storybook/react';
import ProblemCard from './ProblemCard';

/**
 * `ProblemCard`는 즉석 추첨 결과에서 나온 결과에서 하나의 문제를 시각적으로 보여주는 카드 모양의 컴포넌트입니다.
 */
const meta = {
  title: 'components/ProblemCard',
  component: ProblemCard,
} satisfies Meta<typeof ProblemCard>;

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

export const NotRatable: Story = {
  args: {
    problemInfo: {
      problemId: 1237,
      title: '정ㅋ벅ㅋ',
      tier: 31,
    },
    isHidden: false,
  },
};

export const Hidden: Story = {
  args: {
    problemInfo: {
      problemId: 29729,
      title: '가변 배열',
      tier: 3,
    },
    isHidden: true,
  },
};

export const Bronze: Story = {
  args: {
    problemInfo: {
      problemId: 30403,
      title: '무지개 만들기',
      tier: 4,
    },
    isHidden: false,
  },
};

export const Silver: Story = {
  args: {
    problemInfo: {
      problemId: 2348,
      title: '내가 무릎을 꿇은 것은 추진력을 얻기 위함이었다',
      tier: 10,
    },
    isHidden: false,
  },
};

export const Gold: Story = {
  args: {
    problemInfo: {
      problemId: 1313,
      title: '합성소수',
      tier: 12,
    },
    isHidden: false,
  },
};

export const Platinum: Story = {
  args: {
    problemInfo: {
      problemId: 27470,
      title: '멋진 부분집합',
      tier: 16,
    },
    isHidden: false,
  },
};

export const Diamond: Story = {
  args: {
    problemInfo: {
      problemId: 31440,
      title: '히스토그램에서 가장 큰 직사각형과 쿼리 2',
      tier: 23,
    },
    isHidden: false,
  },
};

export const Ruby: Story = {
  args: {
    problemInfo: {
      problemId: 31442,
      title: '좋은 수열',
      tier: 26,
    },
    isHidden: false,
  },
};
