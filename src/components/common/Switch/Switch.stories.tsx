import type { Meta, StoryObj } from '@storybook/react';
import Switch from './Switch';

/**
 * `Switch`는 공용 스위치 컴포넌트입니다.
 */
const meta = {
  title: 'components/common/Switch',
  component: Switch,
  argTypes: {
    isChecked: {
      description: '스위치의 체크 여부를 의미합니다.',
    },
    onChange: {
      description:
        '스위치의 체크 여부가 달라지는 경우 실행하게 될 함수를 의미합니다.',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LargeChecked: Story = {
  args: {
    size: 'large',
    isChecked: true,
    ariaLabel: '테스트',
    onChange: () => {
      alert('onChange()');
    },
  },
};

export const LargeNotChecked: Story = {
  args: {
    size: 'large',
    isChecked: false,
    ariaLabel: '테스트',
    onChange: () => {
      alert('onChange()');
    },
  },
};

export const MediumChecked: Story = {
  args: {
    size: 'medium',
    isChecked: true,
    ariaLabel: '테스트',
    onChange: () => {
      alert('onChange()');
    },
  },
};

export const MediumNotChecked: Story = {
  args: {
    size: 'medium',
    isChecked: false,
    ariaLabel: '테스트',
    onChange: () => {
      alert('onChange()');
    },
  },
};
