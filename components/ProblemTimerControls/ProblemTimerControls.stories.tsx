import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ProblemTimerControls from './ProblemTimerControls';

const meta = {
  component: ProblemTimerControls,
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
