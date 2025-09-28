import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { fn } from '@storybook/test';
import type { MainTheme } from '@/types/mainTheme';

/**
 * `Input`는 공통 인풋 컴포넌트입니다.
 */
const meta = {
  title: 'components/common/Input',
  component: Input,
  argTypes: {
    type: {
      description: '인풋 컴포넌트의 `type`입니다.',
    },
    width: {
      description: '인풋 컴포넌트의 가로 길이입니다.',
    },
    height: {
      description: '인풋 컴포넌트의 세로 길이입니다.',
    },
    value: {
      description: '인풋 컴포넌트에 적혀있는 값입니다.',
    },
    textAlign: {
      description: '인풋 컴포넌트에 적힌 텍스트의 정렬 방법입니다.',
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    hasError: {
      description:
        '에러 발생 여부입니다. 에러가 발생한 경우에는 인풋 컴포넌트의 윤곽선이 붉은색이 됩니다.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    onChange: {
      description: '인풋 컴포넌트의 값이 변경될 경우 실행시킬 콜백 함수입니다.',
    },
    horizontalPadding: {
      description: '인풋 컴포넌트의 좌우에 생길 `padding`의 수치입니다.',
      table: {
        defaultValue: { summary: '6px' },
      },
    },
    fontSize: {
      description: '글자의 크기를 의미합니다.',
      table: {
        defaultValue: { summary: '13px' },
      },
    },
    fontWeight: {
      description:
        '글자의 굵기를 의미합니다. **디자인의 일관성을 위해 지정해야 할 특별한 이유가 있을 때에만 지정하세요.**',
      table: {
        defaultValue: { summary: '400' },
      },
    },
    theme: {
      description:
        '적용할 테마입니다. 테마에 따라 인풋 컴포넌트의 색상이 변경됩니다.',
      table: {
        defaultValue: { summary: 'totamjung' },
      },
    },
    color: {
      description:
        '인풋의 글자 색상입니다. **지정하지 않아도 적용된 테마에 따라 적절한 색이 결정됩니다. 지정해야 할 특별한 이유가 있을 때에만 지정하세요.**',
    },
    borderWidth: {
      description: '인풋의 윤곽선의 굵기입니다.',
      defaultValue: { summary: '1.5' },
    },
    borderRadius: {
      description: '인풋의 모서리를 얼마나 둥글게 할 지를 의미합니다.',
      defaultValue: { summary: '4px' },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    width: 240,
    height: 30,
    value: '',
    textAlign: 'left',
    placeholder: '마음가는 대로 입력해 보세요',
    hasError: false,
    onChange: fn(),
  },
};

export const Error: Story = {
  args: {
    type: 'text',
    width: 240,
    height: 30,
    value: '',
    textAlign: 'left',
    placeholder: '사람은 누구나 실수를 하죠',
    hasError: true,
    onChange: fn(),
  },
};

/**
 * 디자인 일관성에 유의하여 이 속성들을 적용하시기 바랍니다. 특별한 이유가 없다면 본래의 스타일을 따르는 것이 바람직할 것입니다.
 */
export const DifferentVariant: Story = {
  args: {
    type: 'text',
    width: 300,
    height: 45,
    fontSize: 18,
    fontWeight: 800,
    horizontalPadding: 12,
    color: 'skyblue',
    value: '다른 속성도 문제 없어요',
    textAlign: 'left',
    placeholder: '다른 속성도 문제 없어요',
    onChange: fn(),
  },
};

const createThemeStory = (theme: MainTheme): Story => ({
  args: {
    ...Default.args,
    theme,
  },
});

export const Plain = createThemeStory('none');
export const SolvedAcLight = createThemeStory('solvedAcLight');
export const SolvedAcDark = createThemeStory('solvedAcDark');
export const SolvedAcBlack = createThemeStory('solvedAcBlack');
export const BojExtendedDark = createThemeStory('bojExtendedDark');
export const BojExtendedRigel = createThemeStory('bojExtendedRigel');
