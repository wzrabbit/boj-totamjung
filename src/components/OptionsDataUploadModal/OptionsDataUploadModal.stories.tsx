import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '~components/common/IconButton';
import OptionsDataUploadModal from './OptionsDataUploadModal';
import { useState } from 'react';

/**
 * `OptionsDataUploadModal`
 */
const meta = {
  title: 'components/OptionsDataUploadModal',
  component: OptionsDataUploadModal,
  argTypes: {},
} satisfies Meta<typeof OptionsDataUploadModal>;

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
        <OptionsDataUploadModal
          open={isOpen}
          onClose={() => {
            alert(
              'onClose()를 실행시켰습니다. 이는 사용자가 작업을 취소했음을 의미합니다.',
            );
            setIsOpen(() => false);
          }}
          onUpload={() => {
            alert(
              'onUpload()을 실행시켰습니다. 이는 사용자가 초기화를 수락한 경우입니다.',
            );
            setIsOpen(() => false);
          }}
        />
      </>
    );
  },
  args: {
    open: false,
    onClose: () => {},
    onUpload: () => {},
  },
};
