import type { Meta, StoryObj } from '@storybook/react';
import MiniAlgorithmButton from './MiniAlgorithmButton';

/**
 * `MiniAlgorithmButton`는 검색에 사용할 알고리즘을 정하는 `AlgorithmSearchInput` 컴포넌트의 하위 컴포넌트입니다. 클릭 시 용도에 따라 새로운 알고리즘을 추가하거나, 이미 지정된 알고리즘을 목록에서 제거하는 기능을 수행합니다.
 */
const meta = {
  title:
    'components/RandomDefenseCreateMenu/AlgorithmSearchInput/MiniAlgorithmButton',
  component: MiniAlgorithmButton,
} satisfies Meta<typeof MiniAlgorithmButton>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 클릭 시 해당 알고리즘 분류가 삭제되도록 작동하는 UI를 만들 때 사용합니다. 예를 들면, 선택된 알고리즘을 목록에서 제거하는 것이 있습니다.
 */
export const DeleteMode: Story = {
  args: {
    id: 2,
    name: '그리디 알고리즘',
    mode: 'delete',
    onClick: (algorithm) => {
      alert(`onClick(${JSON.stringify(algorithm)})`);
    },
  },
};

/**
 * 클릭 시 해당 알고리즘 분류가 추가되도록 작동하는 UI를 만들 때 사용합니다. 예를 들면, 아직 선택되지 않은, 검색 결과로 나오는 알고리즘을 목록에 추가하는 것이 있습니다.
 */
export const AddMode: Story = {
  args: {
    id: 1,
    name: '그리디 알고리즘',
    mode: 'add',
    onClick: (algorithm) => {
      alert(`onClick(${JSON.stringify(algorithm)})`);
    },
  },
};
