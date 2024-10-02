import type { Meta, StoryObj } from '@storybook/react';
import RandomDefenseHistoryList from './RandomDefenseHistoryList';
import { fn } from '@storybook/test';
import type { RandomDefenseHistoryInfo } from '@/types/randomDefense';

/**
 * `RandomDefenseHistoryList`는 추첨 기록에서 추첨된 문제 여러 개의 정보를 리스트 형태로 보여주는 컴포넌트입니다.
 */
const meta = {
  title: 'components/RandomDefenseHistoryMenu/RandomDefenseHistoryList',
  component: RandomDefenseHistoryList,
  argTypes: {
    items: {
      description: '추첨 기록들의 목록입니다.',
    },
    isHidden: {
      description:
        '추첨 기록들의 티어가 가려져야 하는지의 여부입니다. `true`일 경우 기록에 있는 모든 추첨 기록의 티어를 감춥니다.',
    },
    onDelete: {
      description:
        '추첨 기록 중 하나가 삭제되어야 할 경우 실행시킬 콜백 함수입니다.',
    },
  },
} satisfies Meta<typeof RandomDefenseHistoryList>;

export default meta;

type Story = StoryObj<typeof meta>;

const items: RandomDefenseHistoryInfo[] = [
  {
    problemId: 27959,
    title: '초코바',
    tier: 1,
    createdAt: '2025-01-01T23:35:00.123Z',
  },
  {
    problemId: 27964,
    title: '콰트로치즈피자',
    tier: 6,
    createdAt: '2025-01-01T23:35:00.123Z',
  },
  {
    problemId: 27943,
    title: '가지 사진 찾기',
    tier: 11,
    createdAt: '2025-01-01T23:35:00.123Z',
  },
  {
    problemId: 27470,
    title: '멋진 부분집합',
    tier: 16,
    createdAt: '2025-01-01T23:35:00.123Z',
  },
  {
    problemId: 30243,
    title: '🧩 N-Queen (Hard)',
    tier: 21,
    createdAt: '2025-01-01T23:35:00.123Z',
  },
  {
    problemId: 31442,
    title: '좋은 수열',
    tier: 26,
    createdAt: '2025-01-01T23:35:00.123Z',
  },
  {
    problemId: 1223,
    title: '마법의 돌',
    tier: 0,
    createdAt: '2025-01-01T23:35:00.123Z',
  },
  {
    problemId: 27903,
    title: '인생',
    tier: 31,
    createdAt: '2025-01-01T23:35:00.123Z',
  },
];

export const Default: Story = {
  args: {
    items,
    isHidden: false,
    onDelete: fn(),
  },
};
