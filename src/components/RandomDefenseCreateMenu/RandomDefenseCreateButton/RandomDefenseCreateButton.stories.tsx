import type { Meta, StoryObj } from '@storybook/react';
import RandomDefenseCreateButton from './RandomDefenseCreateButton';

/**
 * `RandomDefenseCreateButton`는 추첨 생성 메뉴에서 추첨 생성 확정 시 사용될 버튼입니다. 추첨이 생성될 슬롯의 번호를 알려주는 역할도 겸합니다.
 */
const meta = {
  title: 'components/RandomDefenseCreateMenu/RandomDefenseCreateButton',
  component: RandomDefenseCreateButton,
  argTypes: {},
} satisfies Meta<typeof RandomDefenseCreateButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedSlotNo: 1,
    isLoaded: true,
    onClick: () => {
      alert('onClick()');
    },
  },
};

/**
 * 아직 슬롯의 번호를 부모 컴포넌트에서 불러오지 못해, 로딩 중일 경우에 보여주는 UI입니다. 버튼은 비활성화 되어 있습니다.
 */
export const Loading: Story = {
  args: {
    selectedSlotNo: 1,
    isLoaded: false,
    onClick: () => {
      alert('onClick()');
    },
  },
};
