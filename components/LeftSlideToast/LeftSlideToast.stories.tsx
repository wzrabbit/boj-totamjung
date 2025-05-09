import type { Meta, StoryObj } from '@storybook/react';
import LeftSlideToast from './LeftSlideToast';
import { CopyIcon } from '@/assets/svg';
import { fn } from '@storybook/test';

/**
 * `LeftSlideToast`는 사용자에게 특정 내용을 알리기 위한, 좌측에서 등장하는 토스트입니다.
 */
const meta = {
  title: 'components/LeftSlideToast',
  component: LeftSlideToast,
  argTypes: {
    mainIconSrc: {
      description: '토스트의 좌측에 표시할 큰 아이콘의 파일 경로입니다.',
    },
    theme: {
      description: '본 컴포넌트에 적용할 테마를 의미합니다.',
      control: 'radio',
      options: ['none', 'totamjung'],
    },
    progress: {
      description:
        '토스트의 프로그레스 바가 얼마나 차 있는지를 의미합니다. 이 값은 **0 이상 100 이하의 수**여야 합니다.',
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
    title: {
      description: '토스트의 제목입니다.',
    },
    descriptions: {
      description: '토스트의 제목을 뒷받침할 설명입니다.',
    },
    open: {
      description:
        '토스트가 열려 있는지(=사용자에게 보이는 상태인지)를 의미합니다.',
    },
    onClose: {
      description: '토스트를 닫아야 할 때 실행시킬 콜백 함수입니다.',
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
    mainIconSrc: browser.runtime.getURL('/dice.png'),
    theme: 'none',
    progress: 65,
    title: '테스트 제목입니다.',
    descriptions:
      '그리고 여기에는 지금 무슨 일이 일어났는지에 대한 설명이 있을 거에요.',
    open: true,
    onClose: fn(),
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
    onClose: fn(),
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
    mainIconSrc: browser.runtime.getURL('/dice.png'),
    theme: 'none',
    progress: 65,
    title: '필요할 경우 여러 개의 설명을 사용할 수도 있습니다.',
    descriptions: [
      '이건 첫 번째 설명이고요,',
      '이건 두 번째 설명입니다. 설명을 여러 개 사용할 경우에는 배열을 사용해 주세요.',
    ],
    open: true,
    onClose: fn(),
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
    mainIconSrc: browser.runtime.getURL('/dice.png'),
    theme: 'none',
    progress: 65,
    title: '설명이 필요 없다고요? 그럼 메시지만 간결하게 전달해도 문제 없죠.',
    open: true,
    onClose: fn(),
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
    mainIconSrc: browser.runtime.getURL('/dice.png'),
    theme: 'none',
    progress: 65,
    title: '매우 긴 설명',
    descriptions:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Curabitur facilisis, libero a pretium auctor, sapien erat tincidunt nulla, vitae vestibulum elit leo at odio. Donec vehicula mauris ut nisi hendrerit, ac dictum libero consequat. Integer euismod neque eu magna facilisis, in suscipit sem sagittis.',
    open: true,
    onClose: fn(),
  },
};

export const TotamjungTheme: Story = {
  ...Default,
  args: {
    ...Default.args,
    theme: 'totamjung',
  },
};

export const SolvedAcLightTheme: Story = {
  ...Default,
  args: {
    ...Default.args,
    theme: 'solvedAcLight',
  },
};

export const SolvedAcDarkTheme: Story = {
  ...Default,
  args: {
    ...Default.args,
    theme: 'solvedAcDark',
  },
};

export const SolvedAcBlackTheme: Story = {
  ...Default,
  args: {
    ...Default.args,
    theme: 'solvedAcBlack',
  },
};

export const BojExtendedDarkTheme: Story = {
  ...Default,
  args: {
    ...Default.args,
    theme: 'bojExtendedDark',
  },
};

export const BojExtendedRigelTheme: Story = {
  ...Default,
  args: {
    ...Default.args,
    theme: 'bojExtendedRigel',
  },
};
