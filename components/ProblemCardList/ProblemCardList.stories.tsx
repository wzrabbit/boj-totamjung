import type { Meta, StoryObj } from '@storybook/react';
import ProblemCardList from './ProblemCardList';
import { useState } from 'react';

/**
 * `ProblemCardList`는 나도 모르겠어요
 */
const meta = {
  title: 'components/QuickSlotMenu/ProblemCardList',
  component: ProblemCardList,
} satisfies Meta<typeof ProblemCardList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
