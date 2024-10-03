import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '@/components/common/IconButton';
import OptionsDataResetModal from './OptionsDataResetModal';
import { useState } from 'react';

/**
 * `OptionsDataResetModal`는 토탐정 설정 데이터의 전체 초기화를 진행하기 전, 사용자에게 확인차로 초기화를 진행할 것인지를 묻는 모달입니다.
 */
const meta = {
  title: 'components/OptionsDataManageMenu/OptionsDataResetModal',
  component: OptionsDataResetModal,
  argTypes: {
    open: {
      description: '이 모달이 열려 있는지의 여부입니다.',
    },
    onClose: {
      description:
        '이 모달이 닫혀야 할 때 실행시킬 콜백 함수입니다. 사용자가 초기화 작업을 취소했음을 의미합니다.',
    },
    onReset: {
      description:
        '토탐정 설정 데이터를 초기화해야 할 때 실행시킬 콜백 함수입니다. 사용자가 최종적으로 초기화 작업을 승인했음을 의미합니다.',
    },
  },
} satisfies Meta<typeof OptionsDataResetModal>;

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
        <OptionsDataResetModal
          open={isOpen}
          onClose={() => {
            alert(
              'onClose()를 실행시켰습니다. 이는 사용자가 작업을 취소했음을 의미합니다.',
            );
            setIsOpen(() => false);
          }}
          onReset={() => {
            alert(
              'onReset()을 실행시켰습니다. 이는 사용자가 초기화를 수락한 경우입니다.',
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
    onReset: () => {},
  },
};
