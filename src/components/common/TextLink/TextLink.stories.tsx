import type { Meta, StoryObj } from '@storybook/react';
import Text from '~components/common/Text';
import TextLink from './TextLink';

/**
 * `TextLink`는 텍스트 형태의 링크를 작성할 때 쓰이는 공용 링크 컴포넌트입니다.
 */
const meta = {
  title: 'common/TextLink',
  component: TextLink,
} satisfies Meta<typeof TextLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'BOJ 실험실 페이지',
    href: 'https://www.acmicpc.net/labs',
  },
};

/**
 * `<Text>`와 `<TextLink>`를 조합하여 사용한 예시입니다.
 */
export const TextLinkWithText: Story = {
  decorators: [
    () => (
      <Text type="normal">
        Mathjax 수식을 간단하게 테스트해볼 수 있는 사이트로는{' '}
        <TextLink href="https://www.mathjax.org/#demo">
          Mathjax 데모 테스트 페이지
        </TextLink>
        , 또는{' '}
        <TextLink href="https://www.acmicpc.net/labs">
          BOJ 실험실 페이지
        </TextLink>
        가 있으니, 참고하시기 바랍니다.
      </Text>
    ),
  ],
  args: {
    href: '',
    children: '',
  },
};
