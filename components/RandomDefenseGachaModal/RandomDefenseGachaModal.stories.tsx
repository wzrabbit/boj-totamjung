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
    theme: {
      description: '모달의 테마입니다.',
      table: {
        defaultValue: {
          summary: 'totamjung',
        },
      },
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
    portalTarget: {
      description:
        '모달을 렌더링시킬 위치의 DOM을 의미합니다. 지정하지 않을 경우, 기본적으로 `document.body`로 지정됩니다.',
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

/**
 * 토탐정 설정 페이지에서 즉석 추첨 기능을 사용하는 경우에는 기존의 토탐정 테마가 적용된 모달을 사용합니다.
 */
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
          theme="totamjung"
          onClose={() => setIsOpen(false)}
          slot={sampleFilledSlot}
          problemCount={7}
        />
      </>
    );
  },
  args: {
    open: false,
    theme: 'totamjung',
    onClose: () => {},
    slot: sampleFilledSlot,
    problemCount: 7,
  },
};

/**
 * 백준 사이트 내에서 즉석 추첨 기능을 사용하는 경우이면서, 사이트 내에 토탐정 테마가 적용되어 있지 않은 경우에는 토탐정 테마가 적용되지 않은 모달을 사용합니다.
 */
export const Plain: Story = {
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
          theme="none"
          onClose={() => setIsOpen(false)}
          slot={sampleFilledSlot}
          problemCount={7}
        />
      </>
    );
  },
  args: {
    open: false,
    theme: 'none',
    onClose: () => {},
    slot: sampleFilledSlot,
    problemCount: 7,
  },
};
