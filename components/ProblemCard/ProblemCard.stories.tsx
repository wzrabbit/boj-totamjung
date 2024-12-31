import type { Meta, StoryObj } from '@storybook/react';
import ProblemCard from './ProblemCard';

/**
 * `ProblemCard`는 즉석 추첨 결과에서 나온 결과에서 하나의 문제를 시각적으로 보여주는 카드 모양의 컴포넌트입니다.
 */
const meta = {
  title: 'components/ProblemCard',
  component: ProblemCard,
  argTypes: {
    problemInfo: {
      description: '정보를 표시할 문제의 정보입니다.',
    },
    isHidden: {
      description: '난이도를 숨길 지의 여부입니다.',
    },
    width: {
      description: '카드의 가로 길이입니다. 단위는 px입니다.',
    },
  },
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
    width: 240,
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
    width: 240,
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
    width: 240,
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
    width: 240,
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
    width: 240,
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
    width: 240,
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
    width: 240,
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
    width: 240,
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
    width: 240,
  },
};

/**
 * 문제 제목의 길이가 너무 길 경우 최대 2줄까지만 보여집니다.
 */
export const LongTitle: Story = {
  args: {
    problemInfo: {
      problemId: 15641,
      title:
        'SUPER SUPER BINARY SEARCH DELUXE 2.5: THE LEGEND OF THE GOLDEN MAZASSUMNIDA, EPISODE 2: THE MAZWAETL UNIVERSE, PART 2: THE PARALLEL UNIVERSE AND THE LOST MAZASSUMNIDA: GAME OF THE YEAR EDITION ',
      tier: 31,
    },
    isHidden: false,
    width: 240,
  },
};
