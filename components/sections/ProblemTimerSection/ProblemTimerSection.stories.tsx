import type { Meta, StoryObj } from '@storybook/react';
import ProblemTimerSection from './ProblemTimerSection';

/**
 * `ProblemTimerSection`은 토탐정 설정의 **랜덤 디펜스** 카테고리 설정을 담당하는 섹션 메뉴입니다.
 */
const meta = {
  title: 'components/sections/ProblemTimerSection',
  component: ProblemTimerSection,
  argTypes: {
    show: {
      description: '본 섹션을 표시할 것인지의 여부입니다.',
    },
  },
} satisfies Meta<typeof ProblemTimerSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    show: true,
  },
};
