import type { Meta, StoryObj } from '@storybook/react';
import OptionsHeader from './OptionsHeader';
import { fn } from '@storybook/test';

/**
 * `OptionsHeader`는 설정 페이지의 헤더 컴포넌트입니다.
 */
const meta = {
  title: 'components/OptionsHeader',
  component: OptionsHeader,
} satisfies Meta<typeof OptionsHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedCategory: 'algorithmHider',
    onCategoryChange: fn(),
  },
};
