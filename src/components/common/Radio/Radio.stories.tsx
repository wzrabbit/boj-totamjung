import type { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';

/**
 * `Radio`는 공용 라디오 컴포넌트입니다. 크기가 작기 때문에 단독으로 쓰이기보다는 다른 요소들과 같이 쓰입니다.
 */
const meta = {
  title: 'components/common/Radio',
  component: Radio,
  argTypes: {
    checked: {
      description: '라디오의 체크 여부를 의미합니다.',
    },
    onChange: {
      description:
        '라디오의 체크 여부가 달라지는 경우 실행하게 될 함수를 의미합니다.',
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * `Checkbox`와 달리, `Radio`의 경우 해당 컴포넌트가 이미 선택되어 있을 경우 클릭하더라도 `onChange` 이벤트가 트리거되지 않습니다. 따라서 이 경우 클릭해도 함수가 호출되지 않습니다.
 */
export const Checked: Story = {
  args: {
    name: 'optionName',
    value: 'optionValue',
    checked: true,
    onChange: (value) => {
      alert(`onChange('${value}')`);
    },
  },
};

export const NotChecked: Story = {
  args: {
    name: 'optionName',
    value: 'optionValue',
    checked: false,
    onChange: (value) => {
      alert(`onChange('${value}')`);
    },
  },
};

export const Disabled: Story = {
  args: {
    name: 'optionName',
    value: 'optionValue',
    checked: false,
    disabled: true,
    onChange: (value) => {
      alert(`onChange('${value}')`);
    },
  },
};
