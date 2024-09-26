import type { Meta, StoryObj } from '@storybook/react';
import RandomDefenseCapsuleButton from './RandomDefenseCapsuleButton';

/**
 * `RandomDefenseCapsuleButton`는 추첨 생성 메뉴에서 모드를 스위칭할 수 있는 캡슐 모양의 버튼입니다.
 */
const meta = {
  title: 'components/RandomDefenseCreateMenu/RandomDefenseCapsuleButton',
  component: RandomDefenseCapsuleButton,
  argTypes: {},
} satisfies Meta<typeof RandomDefenseCapsuleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EasyMode: Story = {
  args: {
    mode: 'easy',
    onClick: (mode) => {
      alert(`onClick('${mode}')`);
    },
  },
};

export const ManualMode: Story = {
  args: {
    mode: 'manual',
    onClick: (mode) => {
      alert(`onClick('${mode}')`);
    },
  },
};
