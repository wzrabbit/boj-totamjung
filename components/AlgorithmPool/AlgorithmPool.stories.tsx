import type { Meta, StoryObj } from '@storybook/react';
import AlgorithmPool from './AlgorithmPool';

/**
 * `AlgorithmPool`는 사용자가 **알고 있는 알고리즘의 목록을 관리**할 수 있는 기능을 제공하기 위한 컴포넌트입니다.
 */
const meta = {
  title: 'components/AlgorithmPool',
  component: AlgorithmPool,
  argTypes: {},
} satisfies Meta<typeof AlgorithmPool>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
