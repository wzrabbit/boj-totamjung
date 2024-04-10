import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

/**
 * `Text`는 내용을 작성할 때 쓰이는 공용 텍스트 컴포넌트입니다.
 */
const meta = {
  title: 'common/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children:
      '아르페지오는 음악 용어로, 연주되는 음을 서로 다른 높낮이로 연속적으로 연주하는 기법을 가리킵니다. 주로 현악기나 기타와 같은 현악 악기에서 사용되며, 반주를 장식하거나 멜로디를 부각시키는 데에 쓰입니다. 이 용어는 이탈리아어 "arpeggiare"에서 비롯되었으며, "하나씩 피다"라는 뜻입니다. 아르페지오는 화음의 구성음들을 순차적으로 연주하여 하나의 화음을 나타내는 방식으로 사용되며, 주로 빠르고 부드러운 연주로 특징지어지며, 서정적이고 우아한 분위기를 만들어냅니다.',
  },
};

export const Normal: Story = {
  args: {
    type: 'normal',
    children:
      '아르페지오는 음악 용어로, 연주되는 음을 서로 다른 높낮이로 연속적으로 연주하는 기법을 가리킵니다. 주로 현악기나 기타와 같은 현악 악기에서 사용되며, 반주를 장식하거나 멜로디를 부각시키는 데에 쓰입니다. 이 용어는 이탈리아어 "arpeggiare"에서 비롯되었으며, "하나씩 피다"라는 뜻입니다. 아르페지오는 화음의 구성음들을 순차적으로 연주하여 하나의 화음을 나타내는 방식으로 사용되며, 주로 빠르고 부드러운 연주로 특징지어지며, 서정적이고 우아한 분위기를 만들어냅니다.',
  },
};
