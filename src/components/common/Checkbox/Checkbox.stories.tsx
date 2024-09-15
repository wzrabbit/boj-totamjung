import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

/**
 * `Checkbox`는 공용 체크박스 컴포넌트입니다. 크기가 작기 때문에 단독으로 쓰이기보다는 다른 요소들과 같이 쓰입니다.
 */
const meta = {
  title: 'components/common/Checkbox',
  component: Checkbox,
  argTypes: {
    isChecked: {
      description: '체크박스의 체크 여부를 의미합니다.',
    },
    onChange: {
      description:
        '체크박스의 체크 여부가 달라지는 경우 실행하게 될 함수를 의미합니다.',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    isChecked: true,
    ariaLabel: '다이나믹 프로그래밍',
    onChange: () => {
      alert('onChange()');
    },
  },
};

export const NotChecked: Story = {
  args: {
    isChecked: false,
    ariaLabel: '다이나믹 프로그래밍',
    onChange: () => {
      alert('onChange()');
    },
  },
};
