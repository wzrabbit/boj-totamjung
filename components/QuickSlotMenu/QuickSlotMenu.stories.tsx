import type { Meta, StoryObj } from '@storybook/react';
import QuickSlotMenu from './QuickSlotMenu';
import type { QuickSlotsResponse } from '@/types/randomDefense';
import { fn } from '@storybook/test';

/**
 * `QuickSlotMenu`는 추첨 생성 폼을 통해 생성된 연습 쿼리들을 관리할 수 있는 메뉴 형태의 컴포넌트입니다.
 */
const meta = {
  title: 'components/QuickSlotMenu',
  component: QuickSlotMenu,
  argTypes: {
    quickSlotsInfo: {
      description:
        '퀵 슬롯 정보들의 목록을 의미합니다. 이 정보에는 10개의 슬롯에 대한 쿼리 정보, 설정되어 있는 단축키, 선택된 슬롯 번호가 포함됩니다.',
    },
    isLoaded: {
      description: '이 컴포넌트가 로드되었는지를 의미합니다.',
    },
    onHotkeyChange: {
      description: '단축키가 변경되어야 할 때 실행시킬 콜백 함수입니다.',
    },
    onSlotChange: {
      description:
        '퀵 슬롯의 정보가 변경되어야 할 때 실행시킬 콜백 함수입니다.',
    },
  },
} satisfies Meta<typeof QuickSlotMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

const quickSlotsResponse: QuickSlotsResponse = {
  selectedSlotNo: 2,
  hotkey: 'Alt',
  slots: {
    1: { isEmpty: true },
    2: {
      isEmpty: false,
      title: '골드 랜덤 디펜스',
      query: '*11..15 s#3000.. solvable:true',
    },
    3: { isEmpty: true },
    4: {
      isEmpty: false,
      title: '외국어 문제 풀어보기',
      query: '*5..20 !lang:ko solvable:true',
    },
    5: { isEmpty: true },
    6: { isEmpty: true },
    7: { isEmpty: true },
    8: {
      isEmpty: false,
      title: '이추첨의이름은정확히삼십글자이며이렇게하는이유는테스트를위함',
      query:
        '*1..30 (-#rope-#bayes-#knuth-#dancing_links-#differential_cryptanalysis-#discrete_sqrt-#lgv-#green-#stoer_wagner-#multipoint_evaluation-#lte-#geometric_boolean_operations-#a_star-#discrete_kth_root)',
    },
    9: { isEmpty: true },
    0: { isEmpty: true },
  },
};

export const Default: Story = {
  args: {
    quickSlotsInfo: quickSlotsResponse,
    isLoaded: true,
    onHotkeyChange: fn(),
    onSlotChange: fn(),
    onSlotDelete: fn(),
    onSlotNoChange: fn(),
  },
};
