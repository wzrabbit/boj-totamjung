import type { Meta, StoryObj } from '@storybook/react';
import Textarea from './Textarea';
import { fn } from '@storybook/test';

/**
 * `Textarea`는 사용자가 여러 줄의 내용을 작성할 수 있는 텍스트 입력 영역 컴포넌트입니다.
 */
const meta = {
  title: 'components/common/Textarea',
  component: Textarea,
  argTypes: {
    width: {
      description: '컴포넌트의 가로 길이입니다.',
    },
    height: {
      description: '컴포넌트의 세로 길이입니다.',
    },
    value: {
      description: '현재 입력되어 있는 값입니다.',
    },
    placeholder: {
      description:
        '컴포넌트의 `placeholder`입니다. 입력을 시작하기 전 보여지는 힌트 문구를 의미합니다.',
    },
    hasError: {
      description:
        '에러 발생 여부입니다. 에러가 발생한 경우에는 컴포넌트의 윤곽선이 붉은색이 됩니다.',
    },
    ariaLabel: {
      description: '컴포넌트의 `aria-label`입니다.',
    },
    onChange: {
      description: '컴포넌트의 값이 변경될 경우 실행시킬 콜백 함수입니다.',
    },
    name: {
      description: '컴포넌트의 `name`입니다.',
    },
    minLength: {
      description: '컴포넌트에 적을 수 있는 최소 문자 수입니다.',
    },
    maxLength: {
      description: '컴포넌트에 적을 수 있는 최대 문자 수입니다.',
    },
  },
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
    onChange: fn(),
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
    onChange: fn(),
  },
};
