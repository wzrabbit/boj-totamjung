import type { Meta, StoryObj } from '@storybook/react';
import Fieldset from './Fieldset';
import Input from '../Input';

/**
 * `Fieldset`는 어느 하나의 주제에 대해 사용자가 원하는 옵션을 선택할 수 있도록 해주는 컴포넌트입니다. 각 옵션에는 평범하게 `string`을 사용하거나, `ReactNode`와 같은 컴포넌트를 사용할 수 있습니다.
 */
const meta = {
  title: 'components/common/Fieldset',
  component: Fieldset,
} satisfies Meta<typeof Fieldset>;

export default meta;

type Story = StoryObj<typeof meta>;

const GRAPE_IMAGE_SRC =
  'https://images.unsplash.com/photo-1599819177626-b50f9dd21c9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const options = [
  {
    label: '사과',
    value: 'apple',
  },
  {
    label: '배',
    value: 'pear',
  },
  {
    label: '파인애플',
    value: 'pineapple',
  },
  {
    label: '수박',
    value: 'watermelon',
  },
];

const optionsWithImages = [
  ...options,
  {
    label: <img src={GRAPE_IMAGE_SRC} width="120px" alt="포도" />,
    value: 'grape',
  },
  {
    label: (
      <Input
        type="text"
        textAlign="left"
        width="200px"
        placeholder="직접 입력..."
        ariaLabel="좋아하는 과일 직접 입력"
        value=""
        hasError={false}
        onChange={() => {}}
      />
    ),
    value: 'other',
  },
];

const randomOptions = Array.from({ length: 20 }).map(() => {
  const randomValue = crypto.randomUUID();

  return { label: randomValue, value: randomValue };
});

export const Default: Story = {
  args: {
    legend: '좋아하는 과일',
    name: 'favoriteFruit',
    options,
    checkedValue: 'apple',
    onChange: (value: string) => {
      alert(`onChange('${value}')`);
    },
  },
};

export const Vertical: Story = {
  args: {
    legend: '좋아하는 과일',
    name: 'favoriteFruit',
    options,
    checkedValue: 'apple',
    isVertical: true,
    onChange: (value: string) => {
      alert(`onChange('${value}')`);
    },
  },
};

/**
 * `isVertical` 옵션이 `true`로 설정되지 않았더라도, 옵션이 요소를 벗어나는 경우에는 다음 줄에 이어서 옵션들이 정렬됩니다.
 */
export const TooManyOptions: Story = {
  args: {
    legend: '매우 많은 옵션',
    name: 'tooManyOptions',
    options: randomOptions,
    checkedValue: randomOptions[0].value,
    onChange: (value: string) => {
      alert(`onChange('${value}')`);
    },
  },
};

/**
 * 필요할 경우, `string` 타입의 레이블을 사용하는 대신, 컴포넌트를 사용하여 사용자에게 더 다양한 옵션을 제공할 수도 있습니다.
 */
export const ComponentOptions: Story = {
  args: {
    legend: '좋아하는 과일',
    name: 'favoriteFruit',
    options: optionsWithImages,
    checkedValue: 'apple',
    isVertical: true,
    onChange: (value: string) => {
      alert(`onChange('${value}')`);
    },
  },
};

/**
 * 다른 `Fieldset`의 옵션에 따라 일부 `Fieldset`을 비활성화시킬 수도 있습니다.
 */

export const Disabled: Story = {
  args: {
    legend: '좋아하는 과일',
    name: 'favoriteFruit',
    options,
    checkedValue: 'apple',
    disabled: true,
    onChange: (value: string) => {
      alert(`onChange('${value}')`);
    },
  },
};
