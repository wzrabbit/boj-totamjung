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
