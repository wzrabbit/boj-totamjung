import type { Meta, StoryObj } from '@storybook/react';
import TierDropdown from './TierDropdown';

/**
 * `TierDropdown`은 사용자에게 solved.ac 티어 하나를 선택할 수 있는 기능을 제공하는 드롭다운 형태의 컴포넌트입니다.
 */
const meta = {
  title: 'components/TierDropdown',
  component: TierDropdown,
} satisfies Meta<typeof TierDropdown>;

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
  },
};
