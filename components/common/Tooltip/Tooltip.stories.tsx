import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';

/**
 * `Tooltip`은 공용 툴팁 컴포넌트입니다.
 */
const meta = {
  title: 'components/common/Tooltip',
  component: Tooltip,
  argTypes: {
    direction: {
      description: '툴팁의 말풍선이 보여지는 방향입니다.',
    },
    content: {
      description: '툴팁에 표시할 메시지입니다.',
    },
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'down',
    content: '테스트 메시지입니다.',
  },
};
