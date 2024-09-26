import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

/**
 * `Input`는 공통 인풋 컴포넌트입니다.
 */
const meta = {
  title: 'components/common/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    width: '240px',
    value: '',
    textAlign: 'left',
    placeholder: '마음가는 대로 입력해 보세요',
    hasError: false,
    ariaLabel: '아무 값이든 입력해 보세요',
  },
};

export const Error: Story = {
  args: {
    type: 'text',
    width: '240px',
    value: '',
    textAlign: 'left',
    placeholder: '사람은 누구나 실수를 하죠',
    hasError: true,
    ariaLabel: '아무 값이든 입력해 보세요',
  },
};
