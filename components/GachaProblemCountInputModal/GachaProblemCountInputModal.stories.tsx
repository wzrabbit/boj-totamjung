import type { Meta, StoryObj } from '@storybook/react';
import GachaProblemCountInputModal from './GachaProblemCountInputModal';
import IconButton from '@/components/common/IconButton';
import { useState } from 'react';

const meta = {
  component: GachaProblemCountInputModal,
} satisfies Meta<typeof GachaProblemCountInputModal>;

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
          onClick={() => setIsOpen(true)}
        />
        <GachaProblemCountInputModal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onSubmitProblemCount={() => setIsOpen(false)}
        />
      </>
    );
  },
  args: {
    open: false,
    onClose: () => {},
    onSubmitProblemCount: () => {},
  },
};
