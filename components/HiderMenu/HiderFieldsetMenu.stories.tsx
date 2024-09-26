import type { Meta, StoryObj } from '@storybook/react';
import HiderFieldsetMenu from './HiderFieldsetMenu';

/**
 * `HiderFieldsetMenu`는 토탐정의 "가리개" 관련 기능들에 대한 설정을 조작할 수 있는 필드셋 형식의 메뉴 컴포넌트입니다.
 *
 * 해당 메뉴에서는 아래의 설정들을 조작할 수 있습니다.
 * 1. 잠금 시간 설정
 * 2. 티어 가리개 활성화 여부 및 어려운 문제 경고 난이도 설정
 * 3. 알고리즘 가리개에서의 단서 제공 방법
 * 4. 잠금 타이머 실행 설정
 */
const meta = {
  title: 'components/HiderFieldsetMenu',
  component: HiderFieldsetMenu,
} satisfies Meta<typeof HiderFieldsetMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
