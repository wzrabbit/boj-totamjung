import type { Meta, StoryObj } from '@storybook/react';
import RandomDefenseCreateButton from './RandomDefenseCreateButton';

/**
 * `RandomDefenseCreateButton`는 추첨 생성 메뉴에서 추첨 생성 확정 시 사용될 버튼입니다. 추첨이 생성될 슬롯의 번호를 알려주는 역할도 겸합니다.
 */
const meta = {
  title: 'RandomDefenseCreateMenu/RandomDefenseCreateButton',
  component: RandomDefenseCreateButton,
  argTypes: {},
} satisfies Meta<typeof RandomDefenseCreateButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedSlotNo: 1,
    onClick: () => {
      alert('onClick()');
    },
  },
};
