import {
  MAX_CUSTOM_QUERY_LENGTH,
  TITLE_MAX_LENGTH,
} from '~constants/randomDefense';
import { LEGACY_SYNC_STORAGE_KEY, SYNC_STORAGE_KEY } from '~constants/commands';
import { fetchQuickSlots, saveQuickSlots } from './quickSlotsDataHandler';
import type { QuickSlotsResponse } from '~types/randomDefense';

const EMPTY_VALID_QUICK_SLOTS = {
  1: { isEmpty: true },
  2: { isEmpty: true },
  3: { isEmpty: true },
  4: { isEmpty: true },
  5: { isEmpty: true },
  6: { isEmpty: true },
  7: { isEmpty: true },
  8: { isEmpty: true },
  9: { isEmpty: true },
  0: { isEmpty: true },
} as const;

const EMPTY_VALID_QUICK_SLOTS_RESPONSE = {
  hotkey: 'Alt',
  selectedSlotNo: 1,
  slots: EMPTY_VALID_QUICK_SLOTS,
};

const validQuickSlots: QuickSlotsResponse = {
  slots: {
    1: {
      isEmpty: true,
    },
    2: {
      isEmpty: false,
      title: '골드 랜덤 디펜스',
      query: '(*0&s?false|!*0) o?true *11..15',
    },
    3: {
      isEmpty: false,
      title: 'Math',
      query: '#math',
    },
    4: {
      isEmpty: false,
      title: 'a'.repeat(TITLE_MAX_LENGTH),
      query: 'b'.repeat(MAX_CUSTOM_QUERY_LENGTH),
    },
    5: {
      isEmpty: false,
      title: 'a',
      query: 'b',
    },
    6: {
      isEmpty: true,
    },
    7: {
      isEmpty: false,
      title: '   연습   1 ',
      query: '★※? _쿼리 !@#$%^&*() aZ0[]{} ',
    },
    8: {
      isEmpty: false,
      title: 'Прогулка в прекрасную погоду',
      query:
        'Я люблю читать книги по вечерам, \'"но погода сегодня прекрасная, давайте пойдем на прогулку. Мы можем пройтись по парку и насладиться свежим воздухом, а затем вернуться домой и выпить чашечку горячего чая. Как ты на это смотришь',
    },
    9: {
      isEmpty: false,
      title: '美好的天气散步',
      query:
        '我喜欢在晚上读书，但今天天气很好，我们去散步吧。我们可以在公园里走走，享受新鲜的空气，然后回家喝一杯热茶。你觉得怎么样',
    },
    0: {
      isEmpty: false,
      title: '      .',
      query: '.         ',
    },
  },
  selectedSlotNo: 9,
  hotkey: 'Alt',
};

const validLegacyQuickSlots = {
  ...validQuickSlots.slots,
  selectedNo: validQuickSlots.selectedSlotNo,
};

describe('Test #1 - 퀵슬롯 정보 불러오기', () => {
  test('올바른 퀵슬롯이 저장되어 있다면, 이를 그대로 불러온 값을 반환해야 한다.', async () => {
    jest
      .spyOn(chrome.storage.sync, 'get')
      .mockImplementation(async (_, callback) => {
        callback({
          [SYNC_STORAGE_KEY.QUICK_SLOTS]: validQuickSlots,
        });
      });

    expect(await fetchQuickSlots()).toEqual(validQuickSlots);
  });
});
