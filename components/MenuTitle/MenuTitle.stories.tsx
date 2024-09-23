import type { Meta, StoryObj } from '@storybook/react';
import { CopyIcon } from '@/assets/svg';
import MenuTitle from './MenuTitle';

/**
 * `MenuTitle`는 설정 페이지의 메뉴의 역할을 나타나는 데 사용할 수 있는 제목 컴포넌트입니다.
 */
const meta = {
  title: 'components/MenuTitle',
  component: MenuTitle,
  argTypes: {},
} satisfies Meta<typeof MenuTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * svg 이미지를 아이콘으로 사용할 경우, 해당 아이콘의 색이 주황색으로 고정됨에 유의하세요.
 */
export const SvgTitle: Story = {
  args: {
    iconSrc: <CopyIcon />,
    title: 'SVG 아이콘',
  },
};

/**
 * `string` 타입의 src를 사용하는 png, jpg 등의 이미지를 아이콘으로 사용할 경우, 이미지에 주황색 필터가 씌워짐에 유의하세요. 이 필터가 씌워지면 해당 아이콘은 단색 이미지가 되므로, 색상이 하나인 이미지를 사용하여야 합니다.
 */
export const PngTitle: Story = {
  args: {
    iconSrc: './dice.png',
    title: 'PNG 아이콘',
  },
};
