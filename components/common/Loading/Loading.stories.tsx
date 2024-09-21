import type { Meta, StoryObj } from '@storybook/react';
import Loading from './Loading';

/**
 * `Loading`은 콘텐츠가 로딩 중일 경우 이를 시각적으로 전달하는 역할을 하는 공통 컴포넌트입니다. 이 컴포넌트는 항상 부모 요소를 기준으로 상하좌우로 중앙에 배치됩니다.
 */
const meta = {
  title: 'components/common/Loading',
  component: Loading,
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
