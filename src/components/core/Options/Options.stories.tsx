import type { Meta, StoryObj } from '@storybook/react';
import Options from './Options';

/**
 * `Options`는 토탐정의 설정 페이지 전체를 구성하는 컴포넌트입니다.
 */
const meta = {
  title: 'components/Options',
  component: Options,
} satisfies Meta<typeof Options>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
