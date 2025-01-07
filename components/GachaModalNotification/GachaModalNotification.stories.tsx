import type { Meta, StoryObj } from '@storybook/react';
import GachaModalNotification from './GachaModalNotification';

/**
 * `GachaModalNotification`은 사용자가 즉석 추첨 모달의 추첨 결과 화면에서 하단의 메뉴 버튼을 눌렀을 때에 대한 시각적 피드백을 제공하기 위한 알림 컴포넌트입니다.
 * 알림이 나타날 때 짧은 시간 동안 밝은 색으로 점멸하여 같은 버튼을 여러 번 눌러 같은 안내 메시지를 보여줘야 하는 상황에서도 사용자가 버튼을 여러 번 눌렀음을 알 수 있도록 구현하였습니다.
 */
const meta = {
  title: 'components/GachaModalNotification',
  component: GachaModalNotification,
  argTypes: {
    children: {
      description: '알림 컴포넌트에 보여질 안내 메시지입니다.',
    },
    shouldFadeOut: {
      description:
        '등장 시 밝아졌다가 잠시 후 서서히 사라지는 애니메이션이 진행 중이어야 하는지의 여부입니다. 이 값을 `false`로 두어 메시지를 보이게 한 후, 즉시 `true`로 바꾸면 메시지가 밝아졌다가 잠시 후 사라지므로 종합적으로 메시지가 등장했다 사라지는 효과를 부여할 수 있습니다.',
    },
  },
} satisfies Meta<typeof GachaModalNotification>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '테스트 알림 메시지입니다.',
    shouldFadeOut: false,
  },
};
