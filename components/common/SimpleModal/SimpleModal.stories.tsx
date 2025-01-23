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
  argTypes: {
    actionType: {
      description:
        '모달의 **종류**입니다. 어느 옵션을 선택하느냐에 따라 모달의 하단에 표시되는 버튼의 종류가 달라집니다.',
    },
    width: {
      description: '모달의 가로 길이입니다.',
    },
    height: {
      description: '모달의 세로 길이입니다.',
    },
    title: {
      description: '모달에 표시될 제목입니다.',
    },
    message: {
      description: '모달에 표시할 내용입니다.',
    },
    open: {
      description: '모달이 열려있는 지의 여부입니다.',
    },
    theme: {
      description: '모달의 테마입니다.',
      table: {
        defaultValue: {
          summary: 'totamjung',
        },
      },
    },
    onClose: {
      description:
        '모달이 닫혀야 할 경우 실행시킬 콜백 함수입니다. **`actionType`가 `confirm`인 경우 확인 버튼을 눌렀을 때 이 함수가 호출됩니다.**',
    },
    onConfirm: {
      description:
        '모달에서 **확인** 버튼을 누를 경우 실행시킬 콜백 함수입니다. **`actionType`가 `cancelConfirm`인 경우에만 적용됩니다.**',
    },
    onYesSelect: {
      description:
        '모달에서 **예** 버튼을 누를 경우 실행시킬 콜백 함수입니다. **`actionType`가 `yesNo`인 경우에만 적용됩니다.**',
    },
    onNoSelect: {
      description:
        '모달에서 **아니요** 버튼을 누를 경우 실행시킬 콜백 함수입니다. **`actionType`가 `yesNo`인 경우에만 적용됩니다.**',
    },
    closeOnBackdropClick: {
      description:
        '모달의 빈 공간을 누를 경우 모달이 닫히게 할지의 여부입니다.',
      table: {
        defaultValue: {
          summary: 'true',
        },
      },
    },
    portalTarget: {
      description:
        '모달을 렌더링시킬 위치의 DOM을 의미합니다. 지정하지 않을 경우, 기본적으로 `document.body`로 지정됩니다.',
    },
  },
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

/**
 * 대부분의 상황에서는 토탐정 테마 모달을 사용하지만, 백준 내에서 어울리는 UI를 보여주어야 할 경우 다른 테마를 사용할 수도 있습니다.
 */
export const PlainConfirm: Story = {
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
    theme: 'none',
    open: false,
    onClose: () => {},
  },
};

export const PlainCancelConfirm: Story = {
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
    theme: 'none',
    open: false,
    onClose: () => {},
    onConfirm: () => {},
  },
};

export const PlainYesNo: Story = {
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
    theme: 'none',
    open: false,
    onYesSelect: () => {},
    onNoSelect: () => {},
  },
};
