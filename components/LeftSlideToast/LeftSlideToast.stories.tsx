import type { Meta, StoryObj } from '@storybook/react';
import LeftSlideToast from './LeftSlideToast';
import { CopyIcon } from '@/assets/svg';

/**
 * `LeftSlideToast`는 사용자에게 특정 내용을 알리기 위한, 좌측에서 등장하는 토스트입니다.
 */
const meta = {
  title: 'components/LeftSlideToast',
  component: LeftSlideToast,
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
  },
} satisfies Meta<typeof LeftSlideToast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '160px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    mainIconSrc: browser.runtime.getURL('dice.png'),
    theme: 'none',
    progress: 65,
    title: '테스트 제목입니다.',
    descriptions:
      '그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.',
    open: true,
    onClose: () => {
      alert('onClose()');
    },
  },
};

export const SvgIcon: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '160px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    mainIconSrc: <CopyIcon />,
    theme: 'none',
    progress: 65,
    title: '테스트 제목입니다.',
    descriptions:
      '그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.',
    open: true,
    onClose: () => {
      alert('onClose()');
    },
  },
};

export const TotamjungTheme: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '160px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    mainIconSrc: browser.runtime.getURL('dice.png'),
    theme: 'totamjung',
    progress: 65,
    title: '테스트 제목입니다.',
    descriptions:
      '그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.',
    open: true,
    onClose: () => {
      alert('onClose()');
    },
  },
};

export const TotamjungThemeWithSvgIcon: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '160px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    mainIconSrc: <CopyIcon />,
    theme: 'totamjung',
    progress: 65,
    title: '테스트 제목입니다.',
    descriptions:
      '그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.',
    open: true,
    onClose: () => {
      alert('onClose()');
    },
  },
};

export const MultipleDescriptions: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '160px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    mainIconSrc: browser.runtime.getURL('dice.png'),
    theme: 'none',
    progress: 65,
    title: '필요할 경우 여러 개의 설명을 사용할 수도 있습니다.',
    descriptions: [
      '이건 첫 번째 설명이고요,',
      '이건 두 번째 설명입니다. 설명을 여러 개 사용할 경우에는 배열을 사용해 주세요.',
    ],
    open: true,
    onClose: () => {
      alert('onClose()');
    },
  },
};

export const NoDescription: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '150px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    mainIconSrc: browser.runtime.getURL('dice.png'),
    theme: 'none',
    progress: 65,
    title: '설명이 필요 없다고요? 그럼 메시지만 간결하게 전달해도 문제 없죠.',
    open: true,
    onClose: () => {
      alert('onClose()');
    },
  },
};

/**
 * 설명이 너무 길어 Toast의 크기를 벗어나는 경우에는, Toast가 위쪽으로 자동 조정됩니다.
 */
export const VeryLongDescription: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '300px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    mainIconSrc: browser.runtime.getURL('dice.png'),
    theme: 'none',
    progress: 65,
    title: '매우 긴 설명',
    descriptions:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Curabitur facilisis, libero a pretium auctor, sapien erat tincidunt nulla, vitae vestibulum elit leo at odio. Donec vehicula mauris ut nisi hendrerit, ac dictum libero consequat. Integer euismod neque eu magna facilisis, in suscipit sem sagittis.',
    open: true,
    onClose: () => {
      alert('onClose()');
    },
  },
};
