import type { Meta, StoryObj } from '@storybook/react';
import RandomDefenseHistoryList from './RandomDefenseHistoryList';
import type { RandomDefenseHistoryInfo } from '@/types/randomDefense';

/**
 * `RandomDefenseHistoryList`는 추첨 기록에서 추첨된 문제 여러 개의 정보를 리스트 형태로 보여주는 컴포넌트입니다.
 */
const meta = {
  title: 'components/RandomDefenseHistoryMenu/RandomDefenseHistoryList',
  component: RandomDefenseHistoryList,
  argTypes: {},
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
    onDelete: (id) => {
      alert(`onDelete("${id}")`);
    },
  },
};
