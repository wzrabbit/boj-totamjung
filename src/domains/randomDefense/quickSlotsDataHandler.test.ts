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

describe('Test #2 - 유효하지 않은 퀵슬롯 정보를 불러올 경우 대응하기', () => {
  test('유효하지 않은 퀵슬롯이지만, 복구가 가능한 형태인 경우 데이터를 보존하고 유효하지 않은 퀵슬롯만을 초기화하여 반환해야 한다.', async () => {
    const partiallyInvalidQuickSlots = {
      slots: {
        ...validQuickSlots.slots,
        2: {
          isEmpty: false,
        },
        3: {},
        4: '뭘 봐',
        5: {
          isEmpty: false,
          title: 'a'.repeat(TITLE_MAX_LENGTH + 1),
          query: 'b'.repeat(MAX_CUSTOM_QUERY_LENGTH + 1),
        },
        7: {
          title: '',
          query: 'tier:g5..g1',
        },
        8: {
          title: 'Empty Query',
          query: '   ',
        },
      },
      selectedSlotNo: 3,
      hotkey: 'Alt',
    };

    const expectedResult = {
      slots: {
        1: {
          isEmpty: true,
        },
        2: {
          isEmpty: true,
        },
        3: {
          isEmpty: true,
        },
        4: {
          isEmpty: true,
        },
        5: {
          isEmpty: true,
        },
        6: {
          isEmpty: true,
        },
        7: {
          isEmpty: true,
        },
        8: {
          isEmpty: true,
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
      selectedSlotNo: 3,
      hotkey: 'Alt',
    };

    jest
      .spyOn(chrome.storage.sync, 'get')
      .mockImplementation(async (_, callback) => {
        callback({
          [SYNC_STORAGE_KEY.QUICK_SLOTS]: partiallyInvalidQuickSlots,
        });
      });

    expect(await fetchQuickSlots()).toEqual(expectedResult);
  });

  test('단축키, 선택된 슬롯이 누락되었더라도 복구가 가능한 형태인 경우 데이터를 보존하여 반환해야 한다.', async () => {
    const partiallyInvalidQuickSlots = {
      slots: {
        1: {
          isEmpty: false,
          title: 'Silver RD',
          query: '*6..10 solvable:true',
        },
        2: {
          isEmpty: false,
          title: '',
          query:
            '제목만 잘못된 경우로, 쿼리는 유지되고 제목만 복구되어야 합니다.',
        },
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {},
        9: {},
        0: {},
      },
      hotkey: '뭘봐',
    };

    const expectedResult = {
      slots: {
        1: {
          isEmpty: false,
          title: 'Silver RD',
          query: '*6..10 solvable:true',
        },
        2: {
          isEmpty: false,
          title: '추첨 2',
          query:
            '제목만 잘못된 경우로, 쿼리는 유지되고 제목만 복구되어야 합니다.',
        },
        3: {
          isEmpty: true,
        },
        4: {
          isEmpty: true,
        },
        5: {
          isEmpty: true,
        },
        6: {
          isEmpty: true,
        },
        7: {
          isEmpty: true,
        },
        8: {
          isEmpty: true,
        },
        9: {
          isEmpty: true,
        },
        0: {
          isEmpty: true,
        },
      },
      selectedSlotNo: 1,
      hotkey: 'Alt',
    };

    jest
      .spyOn(chrome.storage.sync, 'get')
      .mockImplementation(async (_, callback) => {
        callback({
          [SYNC_STORAGE_KEY.QUICK_SLOTS]: partiallyInvalidQuickSlots,
        });
      });

    expect(await fetchQuickSlots()).toEqual(expectedResult);
  });

  test('슬롯이 있는 자리를 찾을 수 없는 경우, 복구가 불가능한 것으로 판정하고, 초기 데이터를 반환해야 한다.', async () => {
    const invalidQuickSlots = {
      slots: {
        1: {},
        2: {},
        3: {},
        4: {},
        5: {
          isEmpty: false,
          title: '이 데이터는 보존되지 말아야 합니다',
          query: '8번 슬롯이 누락되어 있습니다',
        },
        6: {},
        7: {},
        9: {},
        0: {},
      },
      hotkey: 'F2',
      selectedSlotNo: 7,
    };

    jest
      .spyOn(chrome.storage.sync, 'get')
      .mockImplementation(async (_, callback) => {
        callback({
          [SYNC_STORAGE_KEY.QUICK_SLOTS]: invalidQuickSlots,
        });
      });

    expect(await fetchQuickSlots()).toEqual(EMPTY_VALID_QUICK_SLOTS_RESPONSE);
  });

  test('slots 프로퍼티를 찾을 수 없는 경우, 복구가 불가능한 것으로 판정하고, 초기 데이터를 반환해야 한다.', async () => {
    const invalidQuickSlots = {
      hotkey: 'F2',
      selectedSlotNo: 7,
    };

    jest
      .spyOn(chrome.storage.sync, 'get')
      .mockImplementation(async (_, callback) => {
        callback({
          [SYNC_STORAGE_KEY.QUICK_SLOTS]: invalidQuickSlots,
        });
      });

    expect(await fetchQuickSlots()).toEqual(EMPTY_VALID_QUICK_SLOTS_RESPONSE);
  });

  test('데이터가 오브젝트 형태가 아닌 경우, 복구가 불가능한 것으로 판정하고, 초기 데이터를 반환해야 한다.', async () => {
    const invalidQuickSlots = 'quick slots';

    jest
      .spyOn(chrome.storage.sync, 'get')
      .mockImplementation(async (_, callback) => {
        callback({
          [SYNC_STORAGE_KEY.QUICK_SLOTS]: invalidQuickSlots,
        });
      });

    expect(await fetchQuickSlots()).toEqual(EMPTY_VALID_QUICK_SLOTS_RESPONSE);
  });
});
