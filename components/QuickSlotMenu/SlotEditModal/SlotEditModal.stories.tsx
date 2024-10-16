import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '@/components/common/IconButton';
import SlotEditModal from './SlotEditModal';
import { useState } from 'react';

/**
 * `SlotEditModal`는 슬롯에 있는 연습 이름과 쿼리 내용을 변경할 수 있는 기능을 제공하는 모달입니다.
 */
const meta = {
  title: 'components/QuickSlotMenu/SlotEditModal',
  component: SlotEditModal,
  argTypes: {
    title: {
      description: '모달에 표시할 슬롯의 제목입니다.',
    },
    query: {
      description: '모달에 표시할 슬롯의 쿼리입니다.',
    },
    open: {
      description: '모달이 열려있는지의 여부입니다.',
    },
    onClose: {
      description: '모달을 닫아야 할 경우 실행시킬 콜백 함수입니다.',
    },
    onSlotChange: {
      description:
        '사용자가 슬롯 정보의 수정을 완료하여 슬롯의 정보가 변경되어야 할 경우 실행시킬 콜백 함수입니다.',
    },
  },
} satisfies Meta<typeof SlotEditModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <IconButton
          type="button"
          name="모달 열기"
          size="large"
          color="#d1b072"
          disabled={false}
          ariaLabel="모달 열기"
          onClick={() => {
            setIsOpen(() => true);
          }}
        />
        <SlotEditModal
          title="기존 추첨 이름"
          query="tier:g5..g1 solvable:true"
          open={isOpen}
          onClose={() => {
            alert(
              'onClose()를 실행시켰습니다. 이는 사용자가 작업을 취소했음을 의미합니다.',
            );
            setIsOpen(() => false);
          }}
          onSlotChange={(name, query) => {
            alert(
              `onSlotChange("${name}", "${query}")를 실행시켰습니다. 이는 사용자가 작업을 완료하고, 사용자가 새롭게 지정한 정보로 데이터를 저장해야 함을 의미합니다.`,
            );
            setIsOpen(() => false);
          }}
        />
      </>
    );
  },
  args: {
    title: '',
    query: '',
    open: false,
    onClose: () => {},
    onSlotChange: () => {},
  },
};
