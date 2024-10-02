import type { Meta, StoryObj } from '@storybook/react';
import OptionsNav from './OptionsNav';
import { fn } from '@storybook/test';

/**
 * `OptionsNav`는 설정 페이지에서 원하는 메뉴 카테고리를 고를 수 있게 해 주는 네비게이션 컴포넌트입니다.
 */
const meta = {
  title: 'components/OptionsHeader/OptionsNav',
  component: OptionsNav,
  argTypes: {
    selectedCategory: {
      description: '현재 선택되어 있는 메뉴 카테고리입니다.',
    },
    onChange: {
      description: '카테고리를 변경될 경우 호출할 콜백 함수입니다.',
    },
  },
} satisfies Meta<typeof OptionsNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedCategory: 'algorithmHider',
    onChange: fn(),
  },
};
