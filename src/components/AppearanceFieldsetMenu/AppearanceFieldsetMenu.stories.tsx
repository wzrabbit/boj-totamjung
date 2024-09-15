import type { Meta, StoryObj } from '@storybook/react';
import AppearanceFieldsetMenu from './AppearanceFieldsetMenu';

/**
 * `AppearanceFieldsetMenu`는 토탐정의 "외형" 관련 기능들에 대한 설정을 조작할 수 있는 필드셋 형식의 메뉴 컴포넌트입니다.
 *
 * 해당 메뉴에서는 아래의 설정들을 조작할 수 있습니다.
 * 1. 테마 설정
 * 2. 문제 본문 폰트 설정
 */
const meta = {
  title: 'components/AppearanceFieldsetMenu',
  component: AppearanceFieldsetMenu,
} satisfies Meta<typeof AppearanceFieldsetMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
