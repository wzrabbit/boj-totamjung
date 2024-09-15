import type { Meta, StoryObj } from '@storybook/react';
import SlotPagination from './SlotPagination';

/**
 * `SlotPagination`는 선택된 슬롯의 번호를 변경할 때 사용하는 컴포넌트입니다. 각 슬롯이 생성되어 있는지도 시각적으로 표시하는 역할을 겸합니다.
 */
const meta = {
  title: 'components/QuickSlotMenu/SlotPagination',
  component: SlotPagination,
  argTypes: {},
} satisfies Meta<typeof SlotPagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedSlotNo: 1,
    occupiedSlotNos: [2, 8, 4],
    onChange: (slotNo: number) => {
      alert(`onChange(${slotNo})`);
    },
  },
};
