import type { Meta, StoryObj } from '@storybook/react';
import RandomDefenseSection from './RandomDefenseSection';

/**
 * `RandomDefenseSection`은 토탐정 설정의 **문제 추첨** 카테고리 설정을 담당하는 섹션 메뉴입니다.
 */
const meta = {
  title: 'components/sections/RandomDefenseSection',
  component: RandomDefenseSection,
} satisfies Meta<typeof RandomDefenseSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    show: true,
  },
};
