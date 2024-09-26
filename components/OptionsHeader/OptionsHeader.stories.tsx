import type { Meta, StoryObj } from '@storybook/react';
import OptionsHeader from './OptionsHeader';

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
  },
};
