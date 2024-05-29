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

describe('Test #3 - 구버전 퀵슬롯 정보를 불러오는 경우를 대응하기', () => {
  test('데이터가 비어 있으나 구버전 데이터가 존재하고, 해당 데이터가 올바르다면 구버전 데이터를 불러와야 한다.', async () => {
    jest
      .spyOn(chrome.storage.sync, 'get')
      .mockImplementation(async (_, callback) => {
        callback({
          [LEGACY_SYNC_STORAGE_KEY.QUICK_SLOTS]: validLegacyQuickSlots,
        });
      });

    expect(await fetchQuickSlots()).toEqual(validQuickSlots);
  });

  test('일반 데이터, 구버전 데이터 모두 존재하는 경우에는 일반 데이터를 채택해야 한다.', async () => {
    const partiallyInvalidQuickSlots = {
      slots: {
        ...validQuickSlots.slots,
        2: [null],
      },
      hotkey: 'F2',
      selectedSlotNo: -1,
    };

    const expected = {
      slots: {
        ...validQuickSlots.slots,
        2: { isEmpty: true },
      },
      hotkey: 'F2',
      selectedSlotNo: 1,
    };

    jest
      .spyOn(chrome.storage.sync, 'get')
      .mockImplementation(async (_, callback) => {
        callback({
          [SYNC_STORAGE_KEY.QUICK_SLOTS]: partiallyInvalidQuickSlots,
          [LEGACY_SYNC_STORAGE_KEY.QUICK_SLOTS]: validLegacyQuickSlots,
        });
      });

    expect(await fetchQuickSlots()).toEqual(expected);
  });

  test('구버전 데이터를 불러와야 하고, 유효하지 않은 구버전 데이터이나 복구가 가능한 형태일 경우 데이터를 보존하여 반환해야 한다.', async () => {
    const partiallyInvalidLegacyQuickSlots = {
      ...validLegacyQuickSlots,
      4: {
        isEmpty: false,
        title:
          '이 데이터는 초기화되어야 하며, 나머지 데이터는 보존되어야 합니다.',
        query: [
          '왜냐하면, 슬롯에 해당하는 키 (0~9)는 정상적으로 있는 데이터이므로, 복구가 가능하기 때문이죠.',
        ],
      },
      selectedNo: '1',
    };

    const expected = {
      slots: {
        ...validQuickSlots.slots,
        4: { isEmpty: true },
      },
      hotkey: 'Alt',
      selectedSlotNo: 1,
    };

    jest
      .spyOn(chrome.storage.sync, 'get')
      .mockImplementation(async (_, callback) => {
        callback({
          [LEGACY_SYNC_STORAGE_KEY.QUICK_SLOTS]:
            partiallyInvalidLegacyQuickSlots,
        });
      });

    expect(await fetchQuickSlots()).toEqual(expected);
  });

  test('구버전 데이터를 불러와야 하고, 유효하지 않은 구버전 데이터이며 복구가 불가능한 형태일 경우 데이터를 초기화하여 반환해야 한다.', async () => {
    const invalidLegacyQuickSlots = {
      1: {},
      2: {},

      4: {},
      5: {
        isEmpty: false,
        title: '이 데이터는 보존되지 말아야 합니다',
        query: '3번 슬롯이 누락되어 있습니다',
      },
      6: {},
      7: {},
      8: {},
      9: {},
      0: {},
      selectedNo: 9,
    };

    jest
      .spyOn(chrome.storage.sync, 'get')
      .mockImplementation(async (_, callback) => {
        callback({
          [LEGACY_SYNC_STORAGE_KEY.QUICK_SLOTS]: invalidLegacyQuickSlots,
        });
      });

    expect(await fetchQuickSlots()).toEqual(EMPTY_VALID_QUICK_SLOTS_RESPONSE);
  });
});

describe('Test #4 - 퀵슬롯 정보 저장하기', () => {
  test('유효한 형태의 퀵슬롯을 저장해야 할 경우, 모든 데이터가 온전하게 저장되어야 한다.', async () => {
    jest.spyOn(chrome.storage.sync, 'set').mockImplementation(() => {});
    const { selectedSlotNo, slots, hotkey } = validQuickSlots;

    saveQuickSlots(selectedSlotNo, slots, hotkey);

    expect(chrome.storage.sync.set).toHaveBeenCalledWith({
      quickSlots: validQuickSlots,
    });
  });
});
