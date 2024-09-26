import type { Meta, StoryObj } from '@storybook/react';
import RandomDefenseHistoryMenu from './RandomDefenseHistoryMenu';

/**
 * `RandomDefenseHistoryMenu`는 추첨 기록에서 추첨된 문제 여러 개의 정보를 리스트 형태로 보여주는 컴포넌트입니다.
 */
const meta = {
  title: 'components/RandomDefenseHistoryMenu',
  component: RandomDefenseHistoryMenu,
  argTypes: {},
} satisfies Meta<typeof RandomDefenseHistoryMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
