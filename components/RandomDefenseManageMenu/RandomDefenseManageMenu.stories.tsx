import type { Meta, StoryObj } from '@storybook/react';
import RandomDefenseManageMenu from './RandomDefenseManageMenu';

/**
 * `RandomDefenseManageMenu`는 추첨 생성 메뉴와 슬롯 관리 메뉴를 결합한 통합 메뉴로, 두 컴포넌트가 공통의 슬롯 메뉴를 공유할 수 있도록 고안된, 징검다리와 같은 컴포넌트입니다.
 */
const meta = {
  title: 'components/RandomDefenseManageMenu',
  component: RandomDefenseManageMenu,
  argTypes: {},
} satisfies Meta<typeof RandomDefenseManageMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
