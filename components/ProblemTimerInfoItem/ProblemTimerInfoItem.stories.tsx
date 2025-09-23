import type { Meta, StoryObj } from '@storybook/react';
import ProblemTimerInfoItem from './ProblemTimerInfoItem';
import { fn } from '@storybook/test';

/**
 * `ProblemTimerInfoItem`
 */
const meta = {
  title: 'components/RandomDefenseHistoryMenu/ProblemTimerInfoItem',
  component: ProblemTimerInfoItem,
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 100 },
      description: '.',
    },
  },
} satisfies Meta<typeof ProblemTimerInfoItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Bronze: Story = {
  args: {
    problemId: 27959,
    title: '초코바',
    tier: 1,
    createdAt: '2025-01-01T23:35:00.123Z',
    isHidden: false,
    hours: 1,
    minutes: 30,
    seconds: 0,
    status: 'play',
    progress: 66,
    onPlay: fn(),
    onPause: fn(),
    onStop: fn(),
    onEdit: fn(),
    onDelete: fn(),
  },
};

export const Silver: Story = {
  args: {
    ...Bronze.args,
    problemId: 27964,
    title: '콰트로치즈피자',
    tier: 6,
    createdAt: '2025-01-01T23:35:00.123Z',
  },
};

export const Gold: Story = {
  args: {
    ...Bronze.args,
    problemId: 27943,
    title: '가지 사진 찾기',
    tier: 11,
    createdAt: '2025-01-01T23:35:00.123Z',
  },
};

export const Platinum: Story = {
  args: {
    ...Bronze.args,
    problemId: 27470,
    title: '멋진 부분집합',
    tier: 16,
    createdAt: '2025-01-01T23:35:00.123Z',
  },
};

export const Diamond: Story = {
  args: {
    ...Bronze.args,
    problemId: 30243,
    title: '🧩 N-Queen (Hard)',
    tier: 21,
    createdAt: '2025-01-01T23:35:00.123Z',
  },
};

export const Ruby: Story = {
  args: {
    ...Bronze.args,
    problemId: 31442,
    title: '좋은 수열',
    tier: 26,
    createdAt: '2025-01-01T23:35:00.123Z',
  },
};

export const Unrated: Story = {
  args: {
    ...Bronze.args,
    problemId: 1223,
    title: '마법의 돌',
    tier: 0,
    createdAt: '2025-01-01T23:35:00.123Z',
  },
};

export const NotRatable: Story = {
  args: {
    ...Bronze.args,
    problemId: 27903,
    title: '인생',
    tier: 31,
    createdAt: '2025-01-01T23:35:00.123Z',
  },
};

export const Hidden: Story = {
  args: {
    ...Bronze.args,
    problemId: 29727,
    title: '선이 하나 더ㅠㅠ',
    tier: 1,
    createdAt: '2025-01-01T23:35:00.123Z',
    isHidden: true,
  },
};

export const LongTitle: Story = {
  args: {
    ...Bronze.args,
    problemId: 15898,
    title: '피아의 아틀리에 ~신비한 대회의 연금술사~',
    tier: 15,
    createdAt: '2025-01-01T23:35:00.123Z',
  },
};
