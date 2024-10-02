import type { Meta, StoryObj } from '@storybook/react';
import OptionsHeader from './OptionsHeader';
import { fn } from '@storybook/test';

/**
 * `OptionsHeader`는 설정 페이지의 헤더 컴포넌트입니다.
 */
const meta = {
  title: 'components/OptionsHeader',
  component: OptionsHeader,
  argTypes: {
    selectedCategory: {
      description: '현재 선택되어 있는 메뉴 카테고리입니다.',
    },
    onCategoryChange: {
      description: '카테고리를 변경할 때 호출할 콜백 함수입니다.',
    },
  },
} satisfies Meta<typeof OptionsHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedCategory: 'algorithmHider',
    onCategoryChange: fn(),
  },
};
