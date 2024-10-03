import type { Meta, StoryObj } from '@storybook/react';
import Fieldset from './Fieldset';
import Input from '../Input';
import { fn } from '@storybook/test';

/**
 * `Fieldset`는 어느 하나의 주제에 대해 사용자가 원하는 옵션을 선택할 수 있도록 해주는 컴포넌트입니다. 각 옵션에는 평범하게 `string`을 사용하거나, `ReactNode`와 같은 컴포넌트를 사용할 수 있습니다.
 */
const meta = {
  title: 'components/common/Fieldset',
  component: Fieldset,
  argTypes: {
    legend: {
      description: '필드셋의 제목입니다.',
    },
    name: {
      description:
        '**폼 제출 시** 사용될 `name`값입니다. 실제로 **필드셋에 보이는 제목이 아님**에 유의하세요.',
    },
    options: {
      description:
        '필드셋의 여러 옵션으로 구성된 목록입니다. 각 옵션의 이름을 여기에 명시하면 됩니다.',
    },
    checkedValue: {
      description: '현재 선택되어 있는 옵션입니다.',
    },
    onChange: {
      description:
        '필드셋에 체크되어 있는 항목이 변경되어야 할 경우 실행시킬 콜백 함수입니다.',
    },
    disabled: {
      description: '필드셋이 비활성화되어 있는지의 여부입니다.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    isVertical: {
      description:
        '필드셋의 옵션들을 한 줄에 하나씩, 세로로 정렬해서 표시할 것인지의 여부입니다.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
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
    onChange: fn(),
  },
};

export const Vertical: Story = {
  args: {
    legend: '좋아하는 과일',
    name: 'favoriteFruit',
    options,
    checkedValue: 'apple',
    isVertical: true,
    onChange: fn(),
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
    onChange: fn(),
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
    onChange: fn(),
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
    onChange: fn(),
  },
};
