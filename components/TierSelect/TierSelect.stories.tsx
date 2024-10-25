import type { Meta, StoryObj } from '@storybook/react';
import TierSelect from './TierSelect';
import { fn } from '@storybook/test';

/**
 * `TierSelect`은 사용자에게 solved.ac 티어 하나를 선택할 수 있는 기능을 제공하는 드롭다운 형태의 컴포넌트입니다.
 */
const meta = {
  title: 'components/TierSelect',
  component: TierSelect,
  argTypes: {
    selectedTier: {
      description: '현재 선택되어 있는 티어입니다.',
    },
    onChange: {
      description: '티어가 변경되어야 할 때 실행시킬 콜백 함수입니다.',
    },
  },
} satisfies Meta<typeof TierSelect>;

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
    selectedTier: 1,
    onChange: fn(),
  },
};
