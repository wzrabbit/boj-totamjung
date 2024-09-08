import type { Meta, StoryObj } from '@storybook/react';
import OptionsDataManageMenu from './OptionsDataManageMenu';

/**
 * `OptionsDataManageMenu`
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
