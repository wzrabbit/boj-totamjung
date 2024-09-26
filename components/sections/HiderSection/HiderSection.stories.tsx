import type { Meta, StoryObj } from '@storybook/react';
import HiderSection from './HiderSection';

/**
 * `HiderSection`은 토탐정 설정의 **알고리즘 가리개** 카테고리 설정을 담당하는 섹션 메뉴입니다.
 */
const meta = {
  title: 'components/sections/HiderSection',
  component: HiderSection,
} satisfies Meta<typeof HiderSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    show: true,
  },
};
