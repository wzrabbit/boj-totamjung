import type { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';
import { PackageIcon } from '@/assets/svg';

/**
 * `IconButton`은 범용적으로 사용할 수 있는 버튼 컴포넌트입니다. 일반 이미지 형태의 아이콘과 svg 형태의 아이콘 중 원하는 것을 골라 사용할 수 있으며, 사용하지 않고 텍스트만 표시되는 버튼으로도 사용할 수 있습니다.
 */
const meta = {
  title: 'components/common/IconButton',
  component: IconButton,
  argTypes: {},
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const YOUTUBE_IMAGE_ICON_SRC =
  'https://images.unsplash.com/photo-1634942536846-e9863ef9e78f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const MediumWithSvgIcon: Story = {
  args: {
    type: 'button',
    name: '버튼',
    size: 'medium',
    color: '#49aaff',
    iconSrc: <PackageIcon />,
    disabled: false,
    ariaLabel: '테스트용 버튼',
    onClick: () => {
      alert('onClick()');
    },
  },
};

export const MediumWithSvgIconDisabled: Story = {
  args: {
    type: 'button',
    name: '버튼',
    size: 'medium',
    color: '#49aaff',
    iconSrc: <PackageIcon />,
    disabled: true,
    ariaLabel: '테스트용 버튼',
    onClick: () => {
      alert('onClick()');
    },
  },
};

export const LargeWithSvgIcon: Story = {
  args: {
    type: 'button',
    name: '버튼',
    size: 'large',
    color: '#49aaff',
    iconSrc: <PackageIcon />,
    disabled: false,
    ariaLabel: '테스트용 버튼',
    onClick: () => {
      alert('onClick()');
    },
  },
};

export const MediumWithImageIcon: Story = {
  args: {
    type: 'button',
    name: '버튼',
    size: 'medium',
    color: '#ff4949',
    iconSrc: YOUTUBE_IMAGE_ICON_SRC,
    disabled: false,
    ariaLabel: '테스트용 버튼',
    onClick: () => {
      alert('onClick()');
    },
  },
};

export const LargeWithImageIcon: Story = {
  args: {
    type: 'button',
    name: '버튼',
    size: 'large',
    color: '#ff4949',
    iconSrc: YOUTUBE_IMAGE_ICON_SRC,
    disabled: false,
    ariaLabel: '테스트용 버튼',
    onClick: () => {
      alert('onClick()');
    },
  },
};

export const MediumWithNoIcon: Story = {
  args: {
    type: 'button',
    name: '버튼',
    size: 'medium',
    color: '#d9d9d9',
    disabled: false,
    ariaLabel: '테스트용 버튼',
    onClick: () => {
      alert('onClick()');
    },
  },
};

export const LargeWithNoIcon: Story = {
  args: {
    type: 'button',
    name: '버튼',
    size: 'large',
    color: '#d9d9d9',
    disabled: false,
    ariaLabel: '테스트용 버튼',
    onClick: () => {
      alert('onClick()');
    },
  },
};
