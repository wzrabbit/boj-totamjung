import type { Meta, StoryObj } from '@storybook/react';
import Textarea from './Textarea';

/**
 * `Textarea`는 사용자가 여러 줄의 내용을 작성할 수 있는 텍스트 입력 영역 컴포넌트입니다.
 */
const meta = {
  title: 'components/common/Textarea',
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '560px',
    height: '140px',
    value: '',
    placeholder: '마음가는 대로 입력해 보세요',
    hasError: false,
    ariaLabel: '아무 값이든 입력해 보세요',
  },
};

export const Error: Story = {
  args: {
    width: '560px',
    height: '140px',
    value: '',
    placeholder: '사람은 누구나 실수를 하죠',
    hasError: true,
    ariaLabel: '아무 값이든 입력해 보세요',
  },
};
