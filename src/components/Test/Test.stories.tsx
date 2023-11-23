import type { Meta, StoryObj } from '@storybook/react';
import Test from './Test';

const meta = {
  title: 'test/Test',
  component: Test,
} satisfies Meta<typeof Test>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: '와 리액뜨!!!!',
  },
};
