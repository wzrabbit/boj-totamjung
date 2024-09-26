import type { Meta, StoryObj } from '@storybook/react';
import Widget from './Widget';

/**
 * `Widget`는 BOJ 웹사이트에서 토탐정의 기능을 쉽게 이용하기 위해, 우측 하단에 표시되는 위젯입니다. 평소에는 TOP 버튼으로써 이용되며, 우클릭 시 위젯의 메뉴를 펼치거나 접을 수 있습니다.
 */
const meta = {
  title: 'components/Widget',
  component: Widget,
  argTypes: {},
} satisfies Meta<typeof Widget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '240px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    theme: 'none',
    onChangeTheme: () => {
      alert('onChangeTheme()');
    },
  },
};
