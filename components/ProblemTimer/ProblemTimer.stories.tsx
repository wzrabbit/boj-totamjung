import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ProblemTimer from './ProblemTimer';
import type { MainTheme } from '@/types/mainTheme';

const meta = {
  component: ProblemTimer,
  argTypes: {
    hours: {
      description: '.',
    },
    minutes: {
      description: '.',
    },
    seconds: {
      description: '.',
    },
    progress: {
      // progress의 컨트롤을 range 슬라이더로 변경하고 범위를 0-100으로 지정합니다.
      control: { type: 'range', min: 0, max: 100 },
      description: '.',
    },
    status: {},
    onPlay: {
      description: '.',
    },
    onPause: {
      description: '.',
    },
    onStop: {
      description: '.',
    },
    onEdit: {
      description: '.',
    },
  },
} satisfies Meta<typeof ProblemTimer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Play: Story = {
  args: {
    hours: 0,
    minutes: 8,
    seconds: 30,
    progress: 65,
    status: 'play',
    theme: 'none',
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

const createThemeStory = (theme: MainTheme): Story => ({
  args: {
    ...Play.args,
    theme,
  },
});

export const Totamjung = createThemeStory('totamjung');
export const SolvedAcLight = createThemeStory('solvedAcLight');
export const SolvedAcDark = createThemeStory('solvedAcDark');
export const SolvedAcBlack = createThemeStory('solvedAcBlack');
export const BojExtendedDark = createThemeStory('bojExtendedDark');
export const BojExtendedRigel = createThemeStory('bojExtendedRigel');
