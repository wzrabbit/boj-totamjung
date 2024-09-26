import type { Meta, StoryObj } from '@storybook/react';
import SearchOperatorSelect from './SearchOperatorSelect';

/**
 * `SearchOperatorSelect`는 추첨 생성 폼에서, 검색에 포함할 알고리즘들의 검색 방법을 정할 수 있는 컴포넌트입니다. 보다 구체적으로는, 여러 개의 알고리즘을 쿼리에 포함시킬 때, 사용할 연산자(`|`, `&`, `-`)를 정할 수 있습니다.
 */
const meta = {
  title: 'components/RandomDefenseCreateMenu/SearchOperatorSelect',
  component: SearchOperatorSelect,
  argTypes: {},
} satisfies Meta<typeof SearchOperatorSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    searchOperator: 'AND',
    onClick: (searchOperator) => {
      alert(`onClick('${searchOperator}')`);
    },
  },
};
