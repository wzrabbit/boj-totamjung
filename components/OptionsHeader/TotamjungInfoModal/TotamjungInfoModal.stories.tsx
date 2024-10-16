import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '@/components/common/IconButton';
import TotamjungInfoModal from './TotamjungInfoModal';
import { useState } from 'react';

/**
 * `TotamjungInfoModal`는 토탐정의 버전 정보 및 문의 창구를 보여주는 모달입니다.
 */
const meta = {
  title: 'components/OptionsHeader/TotamjungInfoModal',
  component: TotamjungInfoModal,
  argTypes: {
    open: {
      description: '모달이 열려있는 지의 여부입니다.',
    },
    onClose: {
      description: '모달을 닫아야 할 경우 실행할 콜백 함수입니다.',
    },
  },
} satisfies Meta<typeof TotamjungInfoModal>;

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
        <TotamjungInfoModal
          open={isOpen}
          onClose={() => {
            setIsOpen(() => false);
          }}
        />
      </>
    );
  },
  args: {
    open: false,
    onClose: () => {},
  },
};
