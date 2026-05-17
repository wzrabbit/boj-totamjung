import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ProblemTimer from './ProblemTimer';
import ProblemTimerThemeStateMatrix from './ProblemTimerMatrix';

const baseArgs = {
  hours: 0,
  minutes: 8,
  seconds: 30,
  progress: 65,
  status: 'play' as const,
  theme: 'none' as const,
  onPlay: fn(),
  onPause: fn(),
  onStop: fn(),
  onEdit: fn(),
};

const meta = {
  title: 'components/ProblemTimer',
  component: ProblemTimer,
  argTypes: {
    hours: {
      description: '타이머의 시간입니다.',
    },
    minutes: {
      description: '타이머의 분입니다.',
    },
    seconds: {
      description: '타이머의 초입니다.',
    },
    progress: {
      control: { type: 'range', min: 0, max: 100 },
      description:
        '프로그레스 바가 얼마나 채워져 있는가를 의미합니다. **이 값은 0 이상 100 이하의 수여야 합니다.**',
    },
    status: {
      description:
        '현재 타이머의 상태를 의미합니다. 타이머가 진행 중인 경우를 의미하는 `play`, 일시정지인 경우를 의미하는 `pause`, 타이머가 종료되어 시간 설정을 다시 할 수 있는 상태인 `stop`의 세 가지가 있습니다.',
    },
    urgency: {
      control: { type: 'select' },
      options: ['normal', 'warn', 'danger'],
      description:
        '남은 시간에 따른 긴급도입니다. `normal`은 기본, `warn`은 경고(warnThreshold 이하), `danger`는 위험(dangerThreshold 이하)을 의미합니다. `warn`/`danger`일 때 텍스트와 진행 링 색상이 테마별 액센트로 교체됩니다.',
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
  },
} satisfies Meta<typeof ProblemTimer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Play: Story = {
  args: baseArgs,
};

export const Pause: Story = {
  args: {
    ...Play.args,
    status: 'pause',
  },
};

export const Stop: Story = {
  args: {
    ...Play.args,
    status: 'stop',
  },
};

export const Warn: Story = {
  args: {
    ...Play.args,
    hours: 0,
    minutes: 0,
    seconds: 18,
    progress: 24,
    urgency: 'warn',
  },
};

export const Danger: Story = {
  args: {
    ...Play.args,
    hours: 0,
    minutes: 0,
    seconds: 4,
    progress: 5,
    urgency: 'danger',
  },
};

export const ThemeStateMatrix: Story = {
  args: baseArgs,
  parameters: {
    controls: { disable: true },
  },
  render: () => <ProblemTimerThemeStateMatrix />,
};
