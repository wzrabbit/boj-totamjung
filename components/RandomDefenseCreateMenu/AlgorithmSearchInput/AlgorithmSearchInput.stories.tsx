import type { Meta, StoryObj } from '@storybook/react';
import AlgorithmSearchInput from './AlgorithmSearchInput';
import { fn } from '@storybook/test';

/**
 * `AlgorithmSearchInput`는 검색에 활용할 알고리즘들을 관리할 수 있는 인풋 컴포넌트입니다. 정확한 알고리즘을 등록할 수 있도록 검색에 기반하여 알고리즘 분류들을 추가할 수 있으며, 이미 추가한 알고리즘들도 단순 클릭을 통해 쉽게 지울 수 있습니다.
 */
const meta = {
  title: 'components/RandomDefenseCreateMenu/AlgorithmSearchInput',
  component: AlgorithmSearchInput,
  argTypes: {
    selectedAlgorithmIds: {
      description: '인풋 컴포넌트에 선택된 알고리즘의 ID 목록입니다.',
    },
    onChange: {
      description:
        '선택되어 있는 알고리즘의 ID가 변경되어야 할 경우 실행시킬 콜백 함수입니다.',
    },
  },
} satisfies Meta<typeof AlgorithmSearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            position: 'relative',
            height: '200px',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
  args: {
    selectedAlgorithmIds: [8, 35, 82],
    onChange: fn(),
  },
};

/**
 * 검색에 사용할 수 있는 알고리즘의 최대 개수에 도달할 경우에는 검색 결과가 표시되지 않습니다.
 */
export const ReachedLimit: Story = {
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            position: 'relative',
            height: '200px',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
  args: {
    selectedAlgorithmIds: [8, 35, 82, 127, 40],
    onChange: fn(),
  },
};
