import type { Meta, StoryObj } from '@storybook/react';
import RandomDefenseHistoryItem from './RandomDefenseHistoryItem';
import { fn } from '@storybook/test';

/**
 * `RandomDefenseHistoryItem`는 추첨 기록에서 추첨된 문제 하나의 정보를 보여주는 컴포넌트입니다.
 */
const meta = {
  title: 'components/RandomDefenseHistoryMenu/RandomDefenseHistoryItem',
  component: RandomDefenseHistoryItem,
  argTypes: {
    problemId: {
      description: '이 추첨 기록의 문제 번호입니다.',
    },
    title: {
      description: '이 추첨 기록의 문제의 제목입니다.',
    },
    tier: {
      description: '이 추첨 기록의 문제에 책정되어 있는 난이도(티어)입니다.',
    },
    createdAt: {
      description: '해당 문제에 대응되는 추첨 결과가 실행된 시각입니다.',
    },
    isHidden: {
      description: '이 추첨 기록의 문제 티어가 가려져 있는지의 여부입니다.',
    },
    onDelete: {
      description: '이 추첨 기록을 지워야 할 경우 실행시킬 콜백 함수입니다.',
    },
  },
} satisfies Meta<typeof RandomDefenseHistoryItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Bronze: Story = {
  args: {
    problemId: 27959,
    title: '초코바',
    tier: 1,
    createdAt: '2025-01-01T23:35:00.123Z',
    isHidden: false,
    onDelete: fn(),
  },
};

export const Silver: Story = {
  args: {
    problemId: 27964,
    title: '콰트로치즈피자',
    tier: 6,
    createdAt: '2025-01-01T23:35:00.123Z',
    isHidden: false,
    onDelete: fn(),
  },
};

export const Gold: Story = {
  args: {
    problemId: 27943,
    title: '가지 사진 찾기',
    tier: 11,
    createdAt: '2025-01-01T23:35:00.123Z',
    isHidden: false,
    onDelete: fn(),
  },
};

export const Platinum: Story = {
  args: {
    problemId: 27470,
    title: '멋진 부분집합',
    tier: 16,
    createdAt: '2025-01-01T23:35:00.123Z',
    isHidden: false,
    onDelete: fn(),
  },
};

export const Diamond: Story = {
  args: {
    problemId: 30243,
    title: '🧩 N-Queen (Hard)',
    tier: 21,
    createdAt: '2025-01-01T23:35:00.123Z',
    isHidden: false,
    onDelete: fn(),
  },
};

export const Ruby: Story = {
  args: {
    problemId: 31442,
    title: '좋은 수열',
    tier: 26,
    createdAt: '2025-01-01T23:35:00.123Z',
    isHidden: false,
    onDelete: fn(),
  },
};

export const Unrated: Story = {
  args: {
    problemId: 1223,
    title: '마법의 돌',
    tier: 0,
    createdAt: '2025-01-01T23:35:00.123Z',
    isHidden: false,
    onDelete: fn(),
  },
};

export const NotRatable: Story = {
  args: {
    problemId: 27903,
    title: '인생',
    tier: 31,
    createdAt: '2025-01-01T23:35:00.123Z',
    isHidden: false,
    onDelete: fn(),
  },
};

export const Hidden: Story = {
  args: {
    problemId: 29727,
    title: '선이 하나 더ㅠㅠ',
    tier: 1,
    createdAt: '2025-01-01T23:35:00.123Z',
    isHidden: true,
    onDelete: fn(),
  },
};

export const LongTitle: Story = {
  args: {
    problemId: 15898,
    title: '피아의 아틀리에 ~신비한 대회의 연금술사~',
    tier: 15,
    createdAt: '2025-01-01T23:35:00.123Z',
    isHidden: false,
    onDelete: fn(),
  },
};
