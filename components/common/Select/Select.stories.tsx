import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import { fn } from '@storybook/test';

/**
 * `Select`는 여러 옵션 중 하나를 선택할 수 있는 공용 컴포넌트입니다.
 */
const meta = {
  title: 'components/common/Select',
  component: Select,
  argTypes: {
    selectedValue: {
      description: '현재 선택되어 있는 값입니다.',
    },
    onChange: {
      description: '선택된 값이 변경되어야 할 때 실행시킬 콜백 함수입니다.',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '150px', height: '200px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    options: [
      { label: '아메리카노', value: 'americano' },
      { label: '카페라떼', value: 'caffeLatte' },
      { label: '바닐라 라떼', value: 'vanillaLatte' },
      { label: '카라멜 마끼아또', value: 'caramelMacchiato' },
    ],
    selectedValue: 'americano',
    width: '140px',
    ariaLabel: '커피 메뉴',
    onChange: fn(),
  },
};
