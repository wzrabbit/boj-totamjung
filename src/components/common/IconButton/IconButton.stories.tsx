import type { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';
import { PackageIcon } from '~images/svg';

/**
 * `IconButton`은 나중에 설명 추가 예정 또르르
 */
const meta = {
  title: 'common/IconButton',
  component: IconButton,
  argTypes: {},
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const YOUTUBE_IMAGE_ICON_SRC =
  'https://images.unsplash.com/photo-1634942536846-e9863ef9e78f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const MediumWithSvgIcon: Story = {
  args: {
    name: '버튼',
    size: 'medium',
    width: '70px',
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
    name: '버튼',
    size: 'medium',
    width: '70px',
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
    name: '버튼',
    size: 'large',
    width: '90px',
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
    name: '버튼',
    size: 'medium',
    width: '70px',
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
    name: '버튼',
    size: 'large',
    width: '90px',
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
    name: '버튼',
    size: 'medium',
    width: '40px',
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
    name: '버튼',
    size: 'large',
    width: '52px',
    color: '#d9d9d9',
    disabled: false,
    ariaLabel: '테스트용 버튼',
    onClick: () => {
      alert('onClick()');
    },
  },
};
