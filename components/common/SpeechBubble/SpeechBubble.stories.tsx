import type { Meta, StoryObj } from '@storybook/react';
import SpeechBubble from './SpeechBubble';
import { fn } from '@storybook/test';
import Text from '@/components/common/Text';

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
    theme: {
      description: '말풍선에 적용할 테마입니다.',
    },
    direction: {
      description: '말풍선의 방향입니다.',
    },
    maxWidth: {
      description:
        '말풍선이 가지게 될 최대 가로 길이입니다. 명시하지 않을 경우 말풍선의 길이에는 제한이 없으며 부모 요소의 속성에 영향을 받습니다.',
    },
    hasCloseButton: {
      description: '말풍선에 닫기 버튼을 표시할 지의 여부입니다.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    onClose: {
      description:
        '말풍선이 닫혀야 할 경우 실행시킬 콜백 함수입니다. **`hasCloseButton`의 값이 `true`인 경우에만 이 prop을 명시하시면 됩니다.**',
    },
  },
} satisfies Meta<typeof SpeechBubble>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DirectionLeft: Story = {
  args: {
    open: true,
    content: '테스트 메시지입니다.',
    theme: 'none',
    direction: 'left',
  },
};

export const DirectionUp: Story = {
  args: {
    open: true,
    content: '테스트 메시지입니다.',
    theme: 'none',
    direction: 'up',
  },
};

export const DirectionRight: Story = {
  args: {
    open: true,
    content: '테스트 메시지입니다.',
    theme: 'none',
    direction: 'right',
  },
};

export const DirectionDown: Story = {
  args: {
    open: true,
    content: '테스트 메시지입니다.',
    theme: 'none',
    direction: 'down',
  },
};

export const TooManyContent: Story = {
  args: {
    open: true,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    theme: 'none',
    direction: 'left',
  },
};

export const TooManyContentWithLimitedWidth: Story = {
  args: {
    open: true,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    theme: 'none',
    direction: 'left',
    maxWidth: '300px',
  },
};

export const HasCloseButton: Story = {
  args: {
    open: true,
    content: '테스트 메시지입니다.',
    theme: 'none',
    direction: 'left',
    hasCloseButton: true,
    onClose: fn(),
  },
};

export const CloseButtonWithManyContent: Story = {
  args: {
    open: true,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    theme: 'none',
    direction: 'left',
    hasCloseButton: true,
    onClose: fn(),
  },
};

export const UsingReactComponentAsChild: Story = {
  args: {
    open: true,
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '4px' }}>
        <Text type="normal" fontSize={14}>
          토탐정을 설치해 주셔서 감사합니다!
        </Text>
        <Text type="normal" fontSize={14}>
          <strong>위젯을 우클릭</strong>하여 토탐정의 여러 기능들을 활용해
          보세요.
        </Text>
      </div>
    ),
    theme: 'none',
    direction: 'left',
    hasCloseButton: true,
    onClose: fn(),
  },
};

export const Totamjung: Story = {
  args: {
    open: true,
    content: '테스트 메시지입니다.',
    theme: 'totamjung',
    direction: 'left',
  },
};

export const SolvedAcLight: Story = {
  args: {
    open: true,
    content: '테스트 메시지입니다.',
    theme: 'solvedAcLight',
    direction: 'left',
  },
};

export const SolvedAcDark: Story = {
  args: {
    open: true,
    content: '테스트 메시지입니다.',
    theme: 'solvedAcDark',
    direction: 'left',
  },
};

export const SolvedAcBlack: Story = {
  args: {
    open: true,
    content: '테스트 메시지입니다.',
    theme: 'solvedAcBlack',
    direction: 'left',
  },
};

export const BojExtendedRigel: Story = {
  args: {
    open: true,
    content: '테스트 메시지입니다.',
    theme: 'bojExtendedRigel',
    direction: 'left',
  },
};

export const BojExtendedDark: Story = {
  args: {
    open: true,
    content: '테스트 메시지입니다.',
    theme: 'bojExtendedDark',
    direction: 'left',
  },
};
