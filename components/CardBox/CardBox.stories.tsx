import type { Meta, StoryObj } from '@storybook/react';
import CardBox from './CardBox';
import { fn } from '@storybook/test';

/**
 * `CardBox`
 */
const meta = {
  title: 'components/common/CardBox',
  component: CardBox,
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
