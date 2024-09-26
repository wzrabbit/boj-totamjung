import type { Meta, StoryObj } from '@storybook/react';
import HotkeySwitcher from './HotkeySwitcher';

/**
 * `HotkeySwitcher`는 무작위 추첨을 시작하기 위한 단축키를 스위칭하는 기능을 제공하기 위한 컴포넌트입니다. `Alt/Option`과 `F2`를 번갈아 스위칭하는 것이 가능합니다. `Alt/Option`의 경우 사용자의 운영체제에 따라 `Alt` 또는 `Option` 중 하나가 표시됩니다.
 */
const meta = {
  title: 'components/QuickSlotMenu/HotkeySwitcher',
  component: HotkeySwitcher,
  argTypes: {},
} satisfies Meta<typeof HotkeySwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedSlotNo: 3,
    hotkey: 'Alt',
    onClick: () => {
      alert('onClick()');
    },
  },
};
