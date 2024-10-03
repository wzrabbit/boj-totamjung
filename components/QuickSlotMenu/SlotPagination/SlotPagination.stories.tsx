import type { Meta, StoryObj } from '@storybook/react';
import SlotPagination from './SlotPagination';
import { fn } from '@storybook/test';

/**
 * `SlotPagination`는 선택된 슬롯의 번호를 변경할 때 사용하는 컴포넌트입니다. 각 슬롯이 생성되어 있는지도 시각적으로 표시하는 역할을 겸합니다.
 */
const meta = {
  title: 'components/QuickSlotMenu/SlotPagination',
  component: SlotPagination,
  argTypes: {
    selectedSlotNo: {
      description: '선택되어 있는 슬롯의 번호입니다.',
    },
    occupiedSlotNos: {
      description:
        '추첨 정보가 있어 비어 있지 않은 슬롯의 번호들의 목록입니다.',
    },
    onChange: {
      description: '슬롯의 정보가 변경되어야 할 때 실행시킬 콜백 함수입니다.',
    },
  },
} satisfies Meta<typeof SlotPagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedSlotNo: 1,
    occupiedSlotNos: [2, 8, 4],
    onChange: fn(),
  },
};
