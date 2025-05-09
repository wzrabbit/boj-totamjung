import type { Meta, StoryObj } from '@storybook/react';
import SlotInfo from './SlotInfo';

/**
 * `SlotInfo`는 단일 슬롯에 해당하는 연습의 이름과 쿼리 내용을 표시할 때 사용하는 컴포넌트입니다.
 */
const meta = {
  title: 'components/QuickSlotsMenu/SlotInfo',
  component: SlotInfo,
  argTypes: {
    isEmpty: {
      description: '해당하는 슬롯이 비어 있는지의 여부입니다.',
    },
    title: {
      description: '슬롯에 저장된 추첨의 제목(=이름)입니다.',
    },
    query: {
      description: '슬롯에 저장된 추첨의 쿼리 정보입니다.',
    },
  },
} satisfies Meta<typeof SlotInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isEmpty: false,
    title: '골드 랜덤 디펜스',
    query: 's#100.. *g solvable:true',
  },
};

export const TooLongQuery: Story = {
  args: {
    isEmpty: false,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi nemo, expedita vitae vero corrupti deserunt? Expedita dolor, quo labore vero, at molestias sed quis reiciendis similique illum in corporis.',
    query:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi nemo, expedita vitae vero corrupti deserunt? Expedita dolor, quo labore vero, at molestias sed quis reiciendis similique illum in corporis.',
  },
};

export const EmptyQuery: Story = {
  args: {
    isEmpty: true,
  },
};
