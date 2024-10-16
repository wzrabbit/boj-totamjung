import type { Meta, StoryObj } from '@storybook/react';
import NamedFrame from './NamedFrame';

/**
 * `NamedFrame`는 레이아웃을 제작하기 위한 기본 레이아웃 컴포넌트입니다. 이름을 지정할 수 있으며, 내부에 사용자에게 기능을 제공하기 위한 메뉴들을 자유롭게 사용할 수 있습니다.
 */
const meta = {
  title: 'components/common/NamedFrame',
  component: NamedFrame,
  argTypes: {
    width: {
      description: '레이아웃의 가로 길이입니다.',
    },
    height: {
      description: '레이아웃의 세로 길이입니다.',
    },
    padding: {
      description: '레이아웃의 `padding`입니다.',
    },
    title: {
      description: '레이아웃의 제목입니다. 제목의 경우 우측 상단에 표기됩니다.',
    },
    children: {
      description:
        '`children` prop입니다. 레이아웃의 내부에 담을 컴포넌트를 여기에 명시해주시면 됩니다.',
      controls: false,
    },
  },
} satisfies Meta<typeof NamedFrame>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '280px',
    height: '150px',
    padding: '10px',
    title: '테스트 메뉴',
    children: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <p style={{ color: 'white' }}>Hello, World!</p>
      </div>
    ),
  },
};
