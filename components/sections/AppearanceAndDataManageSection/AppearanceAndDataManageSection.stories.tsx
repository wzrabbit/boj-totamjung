import type { Meta, StoryObj } from '@storybook/react';
import AppearanceAndDataManageSection from './AppearanceAndDataManageSection';

/**
 * `AppearanceAndDataManageSection`는 토탐정 설정의 **외관 및 데이터 관리** 카테고리 설정을 담당하는 섹션 메뉴입니다.
 */
const meta = {
  title: 'components/sections/AppearanceAndDataManageSection',
  component: AppearanceAndDataManageSection,
} satisfies Meta<typeof AppearanceAndDataManageSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    show: true,
  },
};
