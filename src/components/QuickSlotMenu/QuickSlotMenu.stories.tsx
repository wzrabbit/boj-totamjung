import type { Meta, StoryObj } from '@storybook/react';
import QuickSlotMenu from './QuickSlotMenu';
import type { QuickSlotsResponse } from '~types/randomDefense';

/**
 * `QuickSlotMenu`는 추첨 생성 폼을 통해 생성된 연습 쿼리들을 관리할 수 있는 메뉴 형태의 컴포넌트입니다.
 */
const meta = {
  title: 'components/QuickSlotMenu',
  component: QuickSlotMenu,
  argTypes: {},
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
    onHotkeyChange: (hotkey) => {
      alert(`onHotkeyChange('${hotkey}')`);
    },
    onSlotChange: (title: string, query: string) => {
      alert(`onSlotChange('${title}', '${query}')`);
    },
    onSlotDelete: () => {
      alert(`onSlotDelete()`);
    },
    onSlotNoChange: (slotNo) => {
      alert(`onSlotNoChange(${slotNo})`);
    },
  },
};
