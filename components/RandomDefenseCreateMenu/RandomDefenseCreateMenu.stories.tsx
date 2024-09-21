import type { Meta, StoryObj } from '@storybook/react';
import RandomDefenseCreateMenu from './RandomDefenseCreateMenu';

/**
 * `RandomDefenseCreateMenu`는 추첨 생성을 위한 메뉴입니다.
 */
const meta = {
  title: 'components/RandomDefenseCreateMenu',
  component: RandomDefenseCreateMenu,
  argTypes: {},
} satisfies Meta<typeof RandomDefenseCreateMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedSlotNo: 1,
    isLoaded: true,
    onSubmit: (randomDefenseFormData) => {
      alert(
        `이 알림창이 떴다는 것은 검증 결과 [성공]을 의미합니다. 이제 부모로부터 전달받은 아래의 함수를 실행해, 본격적인 추첨 생성 작업을 시작하겠죠.\n\nonSubmit(${JSON.stringify(
          randomDefenseFormData,
        )})`,
      );
    },
  },
};
