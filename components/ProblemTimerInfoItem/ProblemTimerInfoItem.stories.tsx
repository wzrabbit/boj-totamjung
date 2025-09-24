import type { Meta, StoryObj } from '@storybook/react';
import ProblemTimerInfoItem from './ProblemTimerInfoItem';
import { fn } from '@storybook/test';

/**
 * `ProblemTimerInfoItem`은 현재 사용중인 하나의 타이머의 정보를 보여주는 컴포넌트입니다. 일반 타이머 컴포넌트와 마찬가지로 타이머 상태를 수정할 수 있으며 삭제 역시 가능합니다.
 */
const meta = {
  title: 'components/RandomDefenseHistoryMenu/ProblemTimerInfoItem',
  component: ProblemTimerInfoItem,
  argTypes: {
    problemId: {
      description: '이 타이머의 문제 번호입니다.',
    },
    title: {
      description: '이 타이머의 문제의 제목입니다.',
    },
    tier: {
      description: '이 타이머의 문제에 책정되어 있는 난이도(티어)입니다.',
    },
    createdAt: {
      description: '해당 문제에 대응되는 타이머가 생성된 시각입니다.',
    },
    isHidden: {
      description: '이 타이머의 문제 티어가 가려져 있는지의 여부입니다.',
    },
    hours: {
      description: '타이머의 시간입니다.',
    },
    minutes: {
      description: '타이머의 분입니다.',
    },
    seconds: {
      description: '타이머의 초입니다.',
    },
    status: {
      description:
        '현재 타이머의 상태를 의미합니다. 타이머가 진행 중인 경우를 의미하는 `play`, 일시정지인 경우를 의미하는 `pause`, 타이머가 종료되어 시간 설정을 다시 할 수 있는 상태인 `stop`의 세 가지가 있습니다.',
    },
    progress: {
      control: { type: 'range', min: 0, max: 100 },
      description:
        '프로그레스 바가 얼마나 채워져 있는가를 의미합니다. **이 값은 0 이상 100 이하의 수여야 합니다.**',
    },
    onPlay: {
      description: '타이머의 재생 버튼이 눌렸을 때 실행할 콜백 함수입니다.',
    },
    onPause: {
      description: '타이머의 일시정지 버튼이 눌렸을 때 실행할 콜백 함수입니다.',
    },
    onStop: {
      description: '타이머의 정지 버튼이 눌렸을 때 실행할 콜백 함수입니다.',
    },
    onEdit: {
      description: '타이머의 수정 버튼이 눌렸을 때 실행할 콜백 함수입니다.',
    },
    onDelete: {
      description: '타이머의 삭제 버튼이 눌렸을 때 실행할 콜백 함수입니다.',
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
