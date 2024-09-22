import { useState } from 'react';
import IconButton from '@/components/common/IconButton';
import SimpleModal from './SimpleModal';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * `SimpleModal`는 자주 쓰이는 간단한 형태의 모달을 더 쉽게 구현할 수 있도록 고안된 공용 컴포넌트입니다.
 */
const meta = {
  title: 'components/common/SimpleModal',
  component: SimpleModal,
} satisfies Meta<typeof SimpleModal>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * ```tsx
 * <SimpleModal>
 *   actionType="confirm"
 *   width="300px"
 *   height="100px"
 *   title="확인 버튼 모달"
 *   message="확인 버튼만 있는 모달입니다."
 *   open={false}
 *   onClose={() => {}}
 * </SimpleModal>
 * ```
 */
export const Confirm: Story = {
  render: (_, { args }) => {
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

        <SimpleModal
          {...args}
          open={isOpen}
          actionType="confirm"
          onClose={() => setIsOpen(false)}
        />
      </>
    );
  },
  args: {
    actionType: 'confirm',
    width: '300px',
    height: '100px',
    title: '확인 버튼 모달',
    message: '확인 버튼만 있는 모달입니다.',
    open: false,
    onClose: () => {},
  },
};

/**
 * ```tsx
 * <SimpleModal>
 *   actionType="cancelConfirm"
 *   width="300px"
 *   height="100px"
 *   title="취소/확인 버튼 모달"
 *   message="취소, 확인 버튼이 있는 모달입니다."
 *   open={false}
 *   onClose={() => {}}
 *   onConfirm={() => {}}
 * </SimpleModal>
 * ```
 */
export const CancelConfirm: Story = {
  render: (_, { args }) => {
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

        <SimpleModal
          {...args}
          open={isOpen}
          actionType="cancelConfirm"
          onClose={() => setIsOpen(false)}
          onConfirm={() => setIsOpen(false)}
        />
      </>
    );
  },
  args: {
    actionType: 'cancelConfirm',
    width: '300px',
    height: '100px',
    title: '취소/확인 버튼 모달',
    message: '취소, 확인 버튼이 있는 모달입니다.',
    open: false,
    onClose: () => {},
    onConfirm: () => {},
  },
};

/**
 * ```tsx
 * <SimpleModal>
 *   actionType="yesNo"
 *   width="300px"
 *   height="100px"
 *   title="예/아니요 버튼 모달"
 *   message="예, 아니요 버튼이 있는 모달입니다."
 *   open={false}
 *   onYesSelect={() => {}}
 *   onNoSelect={() => {}}
 * </SimpleModal>
 * ```
 */
export const YesNo: Story = {
  render: (_, { args }) => {
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

        <SimpleModal
          {...args}
          open={isOpen}
          actionType="yesNo"
          onYesSelect={() => setIsOpen(false)}
          onNoSelect={() => setIsOpen(false)}
        />
      </>
    );
  },
  args: {
    actionType: 'yesNo',
    width: '300px',
    height: '100px',
    title: '예/아니요 버튼 모달',
    message: '예, 아니요 버튼이 있는 모달입니다.',
    open: false,
    onYesSelect: () => {},
    onNoSelect: () => {},
  },
};
