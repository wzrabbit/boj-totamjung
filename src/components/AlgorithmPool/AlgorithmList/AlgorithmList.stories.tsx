import type { Meta, StoryObj } from '@storybook/react';
import AlgorithmList from './AlgorithmList';
import type { Algorithm } from '~types/algorithm';

/**
 * `AlgorithmList`는 여러 알고리즘 분류에 대한 체크 여부를 설정할 수 있는 목록입니다.
 */
const meta = {
  title: 'components/AlgorithmPool/AlgorithmList',
  component: AlgorithmList,
  argTypes: {},
} satisfies Meta<typeof AlgorithmList>;

export default meta;

type Story = StoryObj<typeof meta>;

const items: Algorithm[] = [
  {
    id: 1,
    name: '수학',
  },
  {
    id: 2,
    name: '구현',
  },
  {
    id: 3,
    name: '다이나믹 프로그래밍',
  },
  {
    id: 4,
    name: '그래프 이론',
  },
  {
    id: 5,
    name: '자료 구조',
  },
  {
    id: 6,
    name: '문자열',
  },
  {
    id: 7,
    name: '그리디 알고리즘',
  },
  {
    id: 8,
    name: '브루트포스 알고리즘',
  },
  {
    id: 9,
    name: '그래프 탐색',
  },
  {
    id: 10,
    name: '정렬',
  },
];

const checkedIds = [1, 3, 6, 10];

export const Default: Story = {
  args: {
    items,
    checkedIds,
    onChange: (id) => {
      alert(`onChange(${id});`);
    },
  },
};
