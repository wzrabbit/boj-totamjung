import type { Meta, StoryObj } from '@storybook/react';
import GachaProblemCountInputModal from './GachaProblemCountInputModal';
import IconButton from '@/components/common/IconButton';
import { useState } from 'react';

/**
 * `GachaProblemCountInputModal` 컴포넌트는 본격적인 즉석 추첨에 앞서 뽑을 문제 수를 사용자가 선택할 수 있도록 하는 모달 컴포넌트입니다.
 */
const meta = {
  component: GachaProblemCountInputModal,
  argTypes: {
    open: {
      description: '모달이 열려있는 지의 여부입니다.',
    },
    shouldShowHotkeyMessage: {
      description:
        '사이트 내에서 단축키를 길게 눌러서도 이 모달을 열 수 있다는 정보를 표시할 지의 여부입니다.',
    },
    onClose: {
      description: '모달이 닫혀야 할 경우 실행시킬 콜백 함수입니다.',
    },
    onSubmitProblemCount: {
      description:
        '문제 수를 사용자가 결정한 후 확인 버튼을 눌러 확정할 경우 실행시킬 콜백 함수입니다.',
    },
    theme: {
      description: '모달의 테마입니다.',
      table: {
        defaultValue: {
          summary: 'totamjung',
        },
      },
    },
    portalTarget: {
      description:
        '모달을 렌더링시킬 위치의 DOM을 의미합니다. 지정하지 않을 경우, 기본적으로 `document.body`로 지정됩니다.',
    },
  },
} satisfies Meta<typeof GachaProblemCountInputModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalWithHotkeyMessage: Story = {
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
          shouldShowHotkeyMessage={true}
          onClose={() => setIsOpen(false)}
          onSubmitProblemCount={() => setIsOpen(false)}
        />
      </>
    );
  },
  args: {
    open: false,
    shouldShowHotkeyMessage: true,
    onClose: () => {},
    onSubmitProblemCount: () => {},
  },
};

export const ModalWithNoHotkeyMessage: Story = {
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
          shouldShowHotkeyMessage={false}
          onClose={() => setIsOpen(false)}
          onSubmitProblemCount={() => setIsOpen(false)}
        />
      </>
    );
  },
  args: {
    open: false,
    shouldShowHotkeyMessage: false,
    onClose: () => {},
    onSubmitProblemCount: () => {},
  },
};

export const PlainTheme: Story = {
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
          theme="none"
          shouldShowHotkeyMessage={true}
          onClose={() => setIsOpen(false)}
          onSubmitProblemCount={() => setIsOpen(false)}
        />
      </>
    );
  },
  args: {
    open: false,
    theme: 'none',
    shouldShowHotkeyMessage: true,
    onClose: () => {},
    onSubmitProblemCount: () => {},
  },
};

export const SolvedAcLightTheme: Story = {
  ...PlainTheme,
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
          onClick={() => setIsOpen(true)}
        />
        <GachaProblemCountInputModal
          {...args}
          theme="solvedAcLight"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onSubmitProblemCount={() => setIsOpen(false)}
        />
      </>
    );
  },
};

export const SolvedAcDarkTheme: Story = {
  ...PlainTheme,
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
          onClick={() => setIsOpen(true)}
        />
        <GachaProblemCountInputModal
          {...args}
          theme="solvedAcDark"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onSubmitProblemCount={() => setIsOpen(false)}
        />
      </>
    );
  },
};

export const SolvedAcBlackTheme: Story = {
  ...PlainTheme,
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
          onClick={() => setIsOpen(true)}
        />
        <GachaProblemCountInputModal
          {...args}
          theme="solvedAcBlack"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onSubmitProblemCount={() => setIsOpen(false)}
        />
      </>
    );
  },
};

export const BojExtendedDarkTheme: Story = {
  ...PlainTheme,
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
          onClick={() => setIsOpen(true)}
        />
        <GachaProblemCountInputModal
          {...args}
          theme="bojExtendedDark"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onSubmitProblemCount={() => setIsOpen(false)}
        />
      </>
    );
  },
};

export const BojExtendedRigelTheme: Story = {
  ...PlainTheme,
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
          onClick={() => setIsOpen(true)}
        />
        <GachaProblemCountInputModal
          {...args}
          theme="bojExtendedRigel"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onSubmitProblemCount={() => setIsOpen(false)}
        />
      </>
    );
  },
};
