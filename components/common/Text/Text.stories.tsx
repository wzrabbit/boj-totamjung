import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

/**
 * `Text`는 내용을 작성할 때 쓰이는 공용 텍스트 컴포넌트입니다.
 */
const meta = {
  title: 'components/common/Text',
  component: Text,
  argTypes: {
    type: {
      description: '텍스트의 디자인 종류입니다.',
    },
    fontSize: {
      description: '텍스트의 폰트 크기입니다.',
    },
    children: {
      description:
        '`children` prop입니다. 여기에 내용을 명시할 수 있으며, 일부 또는 전부에 스타일을 적용하기 위해 HTML 태그를 사용할 수도 있습니다.',
    },
    textAlign: {
      description: '텍스트를 어느 방향으로 정렬해야 할 지를 의미합니다.',
      table: {
        defaultValue: { summary: 'left' },
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    fontSize: 16,
    children:
      '아르페지오는 음악 용어로, 연주되는 음을 서로 다른 높낮이로 연속적으로 연주하는 기법을 가리킵니다. 주로 현악기나 기타와 같은 현악 악기에서 사용되며, 반주를 장식하거나 멜로디를 부각시키는 데에 쓰입니다. 이 용어는 이탈리아어 "arpeggiare"에서 비롯되었으며, "하나씩 피다"라는 뜻입니다. 아르페지오는 화음의 구성음들을 순차적으로 연주하여 하나의 화음을 나타내는 방식으로 사용되며, 주로 빠르고 부드러운 연주로 특징지어지며, 서정적이고 우아한 분위기를 만들어냅니다.',
    textAlign: 'left',
  },
};

export const SemiPrimary: Story = {
  args: {
    type: 'semiPrimary',
    fontSize: 16,
    children:
      '아르페지오는 음악 용어로, 연주되는 음을 서로 다른 높낮이로 연속적으로 연주하는 기법을 가리킵니다. 주로 현악기나 기타와 같은 현악 악기에서 사용되며, 반주를 장식하거나 멜로디를 부각시키는 데에 쓰입니다. 이 용어는 이탈리아어 "arpeggiare"에서 비롯되었으며, "하나씩 피다"라는 뜻입니다. 아르페지오는 화음의 구성음들을 순차적으로 연주하여 하나의 화음을 나타내는 방식으로 사용되며, 주로 빠르고 부드러운 연주로 특징지어지며, 서정적이고 우아한 분위기를 만들어냅니다.',
  },
};

export const Normal: Story = {
  args: {
    type: 'normal',
    fontSize: 16,
    children:
      '아르페지오는 음악 용어로, 연주되는 음을 서로 다른 높낮이로 연속적으로 연주하는 기법을 가리킵니다. 주로 현악기나 기타와 같은 현악 악기에서 사용되며, 반주를 장식하거나 멜로디를 부각시키는 데에 쓰입니다. 이 용어는 이탈리아어 "arpeggiare"에서 비롯되었으며, "하나씩 피다"라는 뜻입니다. 아르페지오는 화음의 구성음들을 순차적으로 연주하여 하나의 화음을 나타내는 방식으로 사용되며, 주로 빠르고 부드러운 연주로 특징지어지며, 서정적이고 우아한 분위기를 만들어냅니다.',
  },
};

export const Gray: Story = {
  args: {
    type: 'gray',
    fontSize: 16,
    children:
      '아르페지오는 음악 용어로, 연주되는 음을 서로 다른 높낮이로 연속적으로 연주하는 기법을 가리킵니다. 주로 현악기나 기타와 같은 현악 악기에서 사용되며, 반주를 장식하거나 멜로디를 부각시키는 데에 쓰입니다. 이 용어는 이탈리아어 "arpeggiare"에서 비롯되었으며, "하나씩 피다"라는 뜻입니다. 아르페지오는 화음의 구성음들을 순차적으로 연주하여 하나의 화음을 나타내는 방식으로 사용되며, 주로 빠르고 부드러운 연주로 특징지어지며, 서정적이고 우아한 분위기를 만들어냅니다.',
  },
};

export const black: Story = {
  args: {
    type: 'black',
    fontSize: 16,
    children:
      '아르페지오는 음악 용어로, 연주되는 음을 서로 다른 높낮이로 연속적으로 연주하는 기법을 가리킵니다. 주로 현악기나 기타와 같은 현악 악기에서 사용되며, 반주를 장식하거나 멜로디를 부각시키는 데에 쓰입니다. 이 용어는 이탈리아어 "arpeggiare"에서 비롯되었으며, "하나씩 피다"라는 뜻입니다. 아르페지오는 화음의 구성음들을 순차적으로 연주하여 하나의 화음을 나타내는 방식으로 사용되며, 주로 빠르고 부드러운 연주로 특징지어지며, 서정적이고 우아한 분위기를 만들어냅니다.',
  },
};

export const Code: Story = {
  args: {
    type: 'code',
    fontSize: 16,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
};

export const Custom: Story = {
  args: {
    type: 'custom',
    as: 'span',
    fontSize: 20,
    color: '#a45fff',
    fontFamily: 'Cafe24 ClassicType',
    fontWeight: 700,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
};
