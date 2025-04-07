import type { Slots, QuickSlots } from '@/types/randomDefense';
import { DEFAULT_EMPTY_DATA } from '@/constants/defaultValues';
import { STORAGE_KEY } from '@/constants/commands';

/**
 * 최초 설치 시 덮어씌우게 될 데이터입니다. 데이터 초기화 시에 덮어씌우는 데이터와는 다소 다르며, 세 개의 범용성 높은 쿼리가 생성되어 있는채로 시작하게 됩니다.
 */
const INITIAL_QUICK_SLOTS: Slots = {
  1: {
    isEmpty: false,
    title: '골드 랜덤 디펜스',
    query: 'o? -w? *g lang:ko',
  },
  2: {
    isEmpty: false,
    title: '실버 랜덤 디펜스',
    query: 'o? -w? *s lang:ko',
  },
  3: { isEmpty: false, title: '올 랜덤', query: '(*0&!s?|!*0) o? -w? lang:ko' },
  4: { isEmpty: true },
  5: { isEmpty: true },
  6: { isEmpty: true },
  7: { isEmpty: true },
  8: { isEmpty: true },
  9: { isEmpty: true },
  0: { isEmpty: true },
} as const;

export const INITIAL_QUICK_SLOTS_RESPONSE: QuickSlots = {
  hotkey: 'Alt',
  selectedSlotNo: 1,
  slots: INITIAL_QUICK_SLOTS,
};

export const initializeDataOnFirstInstall = () => {
  browser.storage.local.set({
    ...DEFAULT_EMPTY_DATA,
    [STORAGE_KEY.QUICK_SLOTS]: INITIAL_QUICK_SLOTS_RESPONSE,
    [STORAGE_KEY.SHOULD_SHOW_WELCOME_MESSAGE]: true,
  });
};
