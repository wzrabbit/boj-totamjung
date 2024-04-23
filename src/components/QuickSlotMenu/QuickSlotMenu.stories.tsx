import type { Meta, StoryObj } from '@storybook/react';
import QuickSlotMenu from './QuickSlotMenu';

/**
 * `QuickSlotMenu`는 추첨 생성 폼을 통해 생성된 연습 쿼리들을 관리할 수 있는 메뉴 형태의 컴포넌트입니다.
 */
const meta = {
  title: 'QuickSlotMenu',
  component: QuickSlotMenu,
  argTypes: {},
} satisfies Meta<typeof QuickSlotMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
