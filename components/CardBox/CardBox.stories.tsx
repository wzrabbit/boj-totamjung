import type { Meta, StoryObj } from '@storybook/react';
import CardBox from './CardBox';
import { fn } from '@storybook/test';

/**
 * `CardBox`는 즉석 추첨 기능을 이루는 카드 상자 모양의 컴포넌트이며, 추첨 시작 버튼의 역할을 수행합니다. 클릭하면 카드 상자가 열리며 카드들이 뽑히고, 이후 사라지는 애니메이션이 실행됩니다. 애니메이션이 끝나면 `onOpenAnimationEnd`을 호출하여 부모 컴포넌트가 즉석 추첨의 다음 단계를 진행할 수 있도록 합니다.
 */
const meta = {
  title: 'components/common/CardBox',
  component: CardBox,
  argTypes: {
    color: {
      description: '카드 상자의 색상입니다.',
    },
    isTierHidden: {
      description: '내부 카드들의 티어를 숨길 지의 여부입니다.',
    },
    cardRanks: {
      description:
        '연출에 사용할 내부 카드들의 랭크입니다. **1장 이상 3장 이하**를 사용할 수 있으며, 위에서부터 아래대로 차례대로 배치됩니다.',
    },
    onOpenAnimationEnd: {
      description:
        '카드 상자가 열리는 애니메이션이 끝났을 때 실행시킬 콜백 함수입니다.',
    },
  },
} satisfies Meta<typeof CardBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Red: Story = {
  args: {
    color: 'red',
    isTierHidden: false,
    cardRanks: ['bronze', 'silver', 'gold'],
    onOpenAnimationEnd: fn(),
  },
};

export const Black: Story = {
  args: {
    color: 'black',
    isTierHidden: false,
    cardRanks: ['platinum', 'diamond', 'ruby'],
    onOpenAnimationEnd: fn(),
  },
};

export const Green: Story = {
  args: {
    color: 'green',
    isTierHidden: false,
    cardRanks: ['bronze', 'bronze', 'bronze'],
    onOpenAnimationEnd: fn(),
  },
};

export const Blue: Story = {
  args: {
    color: 'blue',
    isTierHidden: false,
    cardRanks: ['diamond', 'gold', 'diamond'],
    onOpenAnimationEnd: fn(),
  },
};

export const Gold: Story = {
  args: {
    color: 'gold',
    isTierHidden: false,
    cardRanks: ['gold', 'gold', 'gold'],
    onOpenAnimationEnd: fn(),
  },
};

export const HiddenCard: Story = {
  args: {
    color: 'red',
    isTierHidden: true,
    cardRanks: ['bronze', 'silver', 'gold'],
    onOpenAnimationEnd: fn(),
  },
};

export const SingleCard: Story = {
  args: {
    color: 'red',
    isTierHidden: false,
    cardRanks: ['unrated'],
    onOpenAnimationEnd: fn(),
  },
};

export const DoubleCard: Story = {
  args: {
    color: 'red',
    isTierHidden: false,
    cardRanks: ['unrated', 'unrated'],
    onOpenAnimationEnd: fn(),
  },
};
