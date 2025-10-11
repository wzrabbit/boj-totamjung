import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ProblemTimerControls from './ProblemTimerControls';

/**
 * `ProblemTimerControls`는 모든 타이머 기반 컴포넌트의 기반이 되는 하위 컴포넌트입니다. 타이머 디스플레이 및 조작 버튼들로 이루어져 있습니다.
 */
const meta = {
  title: 'components/ProblemTimerControls',
  component: ProblemTimerControls,
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
    status: {
      description:
        '현재 타이머의 상태를 의미합니다. 타이머가 진행 중인 경우를 의미하는 `play`, 일시정지인 경우를 의미하는 `pause`, 타이머가 종료되어 시간 설정을 다시 할 수 있는 상태인 `stop`의 세 가지가 있습니다.',
    },
    color: {
      description: '컴포넌트의 전체적인 색상입니다.',
    },
    height: {
      description:
        '컴포넌트의 세로 길이입니다. 이 길이에 따라 전반적인 컴포넌트의 크기가 결정됩니다.',
    },
    hasDeleteButton: {
      description: '삭제 버튼을 표시할 것인지의 여부입니다.',
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
} satisfies Meta<typeof ProblemTimerControls>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Play: Story = {
  args: {
    hours: 0,
    minutes: 8,
    seconds: 30,
    status: 'play',
    color: 'white',
    height: 40,
    hasDeleteButton: false,
    onPlay: fn(),
    onPause: fn(),
    onStop: fn(),
    onEdit: fn(),
  },
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

export const WithDeleteButton: Story = {
  args: {
    ...Play.args,
    hasDeleteButton: true,
    onDelete: fn(),
  },
};

export const DifferentSize: Story = {
  args: {
    ...Play.args,
    height: 60,
    hasDeleteButton: true,
    onDelete: fn(),
  },
};
