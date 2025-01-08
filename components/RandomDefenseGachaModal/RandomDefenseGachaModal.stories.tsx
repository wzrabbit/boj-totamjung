import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '@/components/common/IconButton';
import RandomDefenseGachaModal from './RandomDefenseGachaModal';
import { useState } from 'react';
import type { FilledSlot } from '@/types/randomDefense';

/**
 * `RandomDefenseGachaModal`는 즉석 추첨 기능을 전체적으로 제공하는 모달 컴포넌트입니다.
 */
const meta = {
  title: 'components/RandomDefenseGachaModal',
  component: RandomDefenseGachaModal,
  argTypes: {
    open: {
      description: '모달이 열려있는 지의 여부입니다.',
    },
    onClose: {
      description: '모달을 닫을 때 호출되는 콜백 함수입니다.',
    },
    slot: {
      description:
        '즉석 추첨 진행 시 문제 검색 조건으로 활용할 슬롯입니다. 이 슬롯은 비어있어서는 안 됩니다.',
    },
    problemCount: {
      description: '즉석 추첨 시 추첨할 문제의 수입니다.',
    },
  },
} satisfies Meta<typeof RandomDefenseGachaModal>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleFilledSlot: FilledSlot = {
  isEmpty: false,
  title: 'All Random',
  query: '*0..30',
};

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
        <RandomDefenseGachaModal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          slot={sampleFilledSlot}
          problemCount={7}
        />
      </>
    );
  },
  args: {
    open: false,
    onClose: () => {},
    slot: sampleFilledSlot,
    problemCount: 7,
  },
};
