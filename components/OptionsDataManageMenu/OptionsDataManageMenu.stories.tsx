import type { Meta, StoryObj } from '@storybook/react';
import OptionsDataManageMenu from './OptionsDataManageMenu';

/**
 * `OptionsDataManageMenu`는 설정 데이터를 내보내거나, 업로드하거나, 혹은 완전히 초기화시킬 수 있는 등 설정 데이터를 사용자가 관리할 수 있도록 기능을 제공하는 메뉴입니다.
 */
const meta = {
  title: 'components/OptionsDataManageMenu',
  component: OptionsDataManageMenu,
  argTypes: {},
} satisfies Meta<typeof OptionsDataManageMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: () => {},
  },
};
