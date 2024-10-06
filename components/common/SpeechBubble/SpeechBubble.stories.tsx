import type { Meta, StoryObj } from '@storybook/react';
import SpeechBubble from './SpeechBubble';

/**
 * `SpeechBubble`은 공용 말풍선 컴포넌트입니다.
 */
const meta = {
  title: 'components/common/SpeechBubble',
  component: SpeechBubble,
  argTypes: {
    content: {
      description: '말풍선에 담을 내용입니다.',
    },
    totamjungTheme: {
      description: '말풍선에 적용할 테마입니다.',
    },
    direction: {
      description: '말풍선의 방향입니다.',
    },
  },
} satisfies Meta<typeof SpeechBubble>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DirectionLeft: Story = {
  args: {
    open: true,
    content: '테스트 메시지입니다.',
    totamjungTheme: 'none',
    direction: 'left',
  },
};

export const DirectionUp: Story = {
  args: {
    open: true,
    content: '테스트 메시지입니다.',
    totamjungTheme: 'none',
    direction: 'up',
  },
};

export const DirectionRight: Story = {
  args: {
    open: true,
    content: '테스트 메시지입니다.',
    totamjungTheme: 'none',
    direction: 'right',
  },
};

export const DirectionDown: Story = {
  args: {
    open: true,
    content: '테스트 메시지입니다.',
    totamjungTheme: 'none',
    direction: 'down',
  },
};

export const TotamjungTheme: Story = {
  args: {
    open: true,
    content: '테스트 메시지입니다.',
    totamjungTheme: 'totamjung',
    direction: 'left',
  },
};

export const TooManyContent: Story = {
  args: {
    open: true,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    totamjungTheme: 'none',
    direction: 'left',
  },
};
