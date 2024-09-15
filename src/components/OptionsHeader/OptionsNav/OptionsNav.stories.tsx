import type { Meta, StoryObj } from '@storybook/react';
import OptionsNav from './OptionsNav';

/**
 * `OptionsNav`는 설정 페이지에서 원하는 메뉴 카테고리를 고를 수 있게 해 주는 네비게이션 컴포넌트입니다.
 */
const meta = {
  title: 'components/OptionsHeader/OptionsNav',
  component: OptionsNav,
} satisfies Meta<typeof OptionsNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedCategory: 'algorithmHider',
  },
};
