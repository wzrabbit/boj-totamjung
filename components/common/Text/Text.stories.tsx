import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

/**
 * `Text`는 내용을 작성할 때 쓰이는 공용 텍스트 컴포넌트입니다.
 */
const meta = {
  title: 'components/common/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary16px: Story = {
  args: {
    type: 'primary',
    fontSize: '16px',
    children:
      '아르페지오는 음악 용어로, 연주되는 음을 서로 다른 높낮이로 연속적으로 연주하는 기법을 가리킵니다. 주로 현악기나 기타와 같은 현악 악기에서 사용되며, 반주를 장식하거나 멜로디를 부각시키는 데에 쓰입니다. 이 용어는 이탈리아어 "arpeggiare"에서 비롯되었으며, "하나씩 피다"라는 뜻입니다. 아르페지오는 화음의 구성음들을 순차적으로 연주하여 하나의 화음을 나타내는 방식으로 사용되며, 주로 빠르고 부드러운 연주로 특징지어지며, 서정적이고 우아한 분위기를 만들어냅니다.',
  },
};

export const Primary14px: Story = {
  args: {
    type: 'primary',
    fontSize: '14px',
    children:
      '아르페지오는 음악 용어로, 연주되는 음을 서로 다른 높낮이로 연속적으로 연주하는 기법을 가리킵니다. 주로 현악기나 기타와 같은 현악 악기에서 사용되며, 반주를 장식하거나 멜로디를 부각시키는 데에 쓰입니다. 이 용어는 이탈리아어 "arpeggiare"에서 비롯되었으며, "하나씩 피다"라는 뜻입니다. 아르페지오는 화음의 구성음들을 순차적으로 연주하여 하나의 화음을 나타내는 방식으로 사용되며, 주로 빠르고 부드러운 연주로 특징지어지며, 서정적이고 우아한 분위기를 만들어냅니다.',
  },
};

export const Primary13px: Story = {
  args: {
    type: 'primary',
    fontSize: '13px',
    children:
      '아르페지오는 음악 용어로, 연주되는 음을 서로 다른 높낮이로 연속적으로 연주하는 기법을 가리킵니다. 주로 현악기나 기타와 같은 현악 악기에서 사용되며, 반주를 장식하거나 멜로디를 부각시키는 데에 쓰입니다. 이 용어는 이탈리아어 "arpeggiare"에서 비롯되었으며, "하나씩 피다"라는 뜻입니다. 아르페지오는 화음의 구성음들을 순차적으로 연주하여 하나의 화음을 나타내는 방식으로 사용되며, 주로 빠르고 부드러운 연주로 특징지어지며, 서정적이고 우아한 분위기를 만들어냅니다.',
  },
};

export const Normal16px: Story = {
  args: {
    type: 'normal',
    fontSize: '16px',
    children:
      '아르페지오는 음악 용어로, 연주되는 음을 서로 다른 높낮이로 연속적으로 연주하는 기법을 가리킵니다. 주로 현악기나 기타와 같은 현악 악기에서 사용되며, 반주를 장식하거나 멜로디를 부각시키는 데에 쓰입니다. 이 용어는 이탈리아어 "arpeggiare"에서 비롯되었으며, "하나씩 피다"라는 뜻입니다. 아르페지오는 화음의 구성음들을 순차적으로 연주하여 하나의 화음을 나타내는 방식으로 사용되며, 주로 빠르고 부드러운 연주로 특징지어지며, 서정적이고 우아한 분위기를 만들어냅니다.',
  },
};

export const Normal14px: Story = {
  args: {
    type: 'normal',
    fontSize: '14px',
    children:
      '아르페지오는 음악 용어로, 연주되는 음을 서로 다른 높낮이로 연속적으로 연주하는 기법을 가리킵니다. 주로 현악기나 기타와 같은 현악 악기에서 사용되며, 반주를 장식하거나 멜로디를 부각시키는 데에 쓰입니다. 이 용어는 이탈리아어 "arpeggiare"에서 비롯되었으며, "하나씩 피다"라는 뜻입니다. 아르페지오는 화음의 구성음들을 순차적으로 연주하여 하나의 화음을 나타내는 방식으로 사용되며, 주로 빠르고 부드러운 연주로 특징지어지며, 서정적이고 우아한 분위기를 만들어냅니다.',
  },
};

export const Normal13px: Story = {
  args: {
    type: 'normal',
    fontSize: '13px',
    children:
      '아르페지오는 음악 용어로, 연주되는 음을 서로 다른 높낮이로 연속적으로 연주하는 기법을 가리킵니다. 주로 현악기나 기타와 같은 현악 악기에서 사용되며, 반주를 장식하거나 멜로디를 부각시키는 데에 쓰입니다. 이 용어는 이탈리아어 "arpeggiare"에서 비롯되었으며, "하나씩 피다"라는 뜻입니다. 아르페지오는 화음의 구성음들을 순차적으로 연주하여 하나의 화음을 나타내는 방식으로 사용되며, 주로 빠르고 부드러운 연주로 특징지어지며, 서정적이고 우아한 분위기를 만들어냅니다.',
  },
};

export const Code16px: Story = {
  args: {
    type: 'code',
    fontSize: '16px',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
};

export const Code14px: Story = {
  args: {
    type: 'code',
    fontSize: '14px',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
};

export const Code13px: Story = {
  args: {
    type: 'code',
    fontSize: '13px',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
};
