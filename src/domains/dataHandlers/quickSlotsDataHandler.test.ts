import {
  MAX_CUSTOM_QUERY_LENGTH,
  TITLE_MAX_LENGTH,
} from '~constants/randomDefense';
import { STORAGE_KEY } from '~constants/commands';
import {
  fetchQuickSlots,
  saveQuickSlots,
} from '../dataHandlers/quickSlotsDataHandler';
import { DEFAULT_QUICK_SLOTS_RESPONSE } from '~constants/defaultValues';
import type { QuickSlotsResponse } from '~types/randomDefense';

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

describe('Test #1 - 퀵슬롯 정보 불러오기', () => {
  test('올바른 퀵슬롯이 저장되어 있다면, 이를 그대로 불러온 값을 반환해야 한다.', async () => {
    jest.spyOn(chrome.storage.local, 'get').mockImplementation(() => ({
      [STORAGE_KEY.QUICK_SLOTS]: validQuickSlots,
    }));

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

    jest.spyOn(chrome.storage.local, 'get').mockImplementation(() => ({
      [STORAGE_KEY.QUICK_SLOTS]: partiallyInvalidQuickSlots,
    }));

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

    jest.spyOn(chrome.storage.local, 'get').mockImplementation(() => ({
      [STORAGE_KEY.QUICK_SLOTS]: partiallyInvalidQuickSlots,
    }));

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

    jest.spyOn(chrome.storage.local, 'get').mockImplementation(() => ({
      [STORAGE_KEY.QUICK_SLOTS]: invalidQuickSlots,
    }));

    expect(await fetchQuickSlots()).toEqual(DEFAULT_QUICK_SLOTS_RESPONSE);
  });

  test('slots 프로퍼티를 찾을 수 없는 경우, 복구가 불가능한 것으로 판정하고, 초기 데이터를 반환해야 한다.', async () => {
    const invalidQuickSlots = {
      hotkey: 'F2',
      selectedSlotNo: 7,
    };

    jest.spyOn(chrome.storage.local, 'get').mockImplementation(() => ({
      [STORAGE_KEY.QUICK_SLOTS]: invalidQuickSlots,
    }));

    expect(await fetchQuickSlots()).toEqual(DEFAULT_QUICK_SLOTS_RESPONSE);
  });

  test('데이터가 오브젝트 형태가 아닌 경우, 복구가 불가능한 것으로 판정하고, 초기 데이터를 반환해야 한다.', async () => {
    const invalidQuickSlots = 'quick slots';

    jest.spyOn(chrome.storage.local, 'get').mockImplementation(() => ({
      [STORAGE_KEY.QUICK_SLOTS]: invalidQuickSlots,
    }));

    expect(await fetchQuickSlots()).toEqual(DEFAULT_QUICK_SLOTS_RESPONSE);
  });
});

describe('Test #3 - 퀵슬롯 정보 저장하기', () => {
  test('유효한 형태의 퀵슬롯을 저장해야 할 경우, 모든 데이터가 온전하게 저장되어야 한다.', async () => {
    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});
    const { selectedSlotNo, slots, hotkey } = validQuickSlots;

    saveQuickSlots(selectedSlotNo, slots, hotkey);

    expect(chrome.storage.local.set).toHaveBeenCalledWith({
      quickSlots: validQuickSlots,
    });
  });
});

describe('Test #5 - 유효하지 않은 퀵슬롯 정보 저장에 대응하기', () => {
  test('일부 데이터가 유효하지 않은 퀵슬롯을 저장해야 할 경우, 올바른 데이터에 한해서만 저장해야 한다.', async () => {
    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});
    const partiallyInvalidQuickSlots = {
      selectedSlotNo: 3,
      hotkey: 'Enter',
      slots: {
        ...validQuickSlots.slots,
        4: {},
        5: {
          isEmpty: false,
          title: 'a'.repeat(999),
          query: 'Too Long Title, But Valid Query',
        },
        7: 'Invalid',
        8: {
          isEmpty: false,
          query: '',
          title: 'Invalid Query',
        },
      },
    };

    const expected = {
      selectedSlotNo: 3,
      hotkey: 'Alt',
      slots: {
        ...validQuickSlots.slots,
        4: { isEmpty: true },
        5: {
          isEmpty: false,
          title: '추첨 5',
          query: 'Too Long Title, But Valid Query',
        },
        7: { isEmpty: true },
        8: { isEmpty: true },
      },
    };
    const { selectedSlotNo, slots, hotkey } = partiallyInvalidQuickSlots;

    saveQuickSlots(selectedSlotNo, slots, hotkey);

    expect(chrome.storage.local.set).toHaveBeenCalledWith({
      quickSlots: expected,
    });
  });

  test('복구가 불가능할 정도로 유효하지 않은 퀵슬롯을 저장해야 할 경우, 저장을 진행해서는 안 된다.', async () => {
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
      hotkey: 'Alt',
      selectedSlotNo: 0,
    };
    const { selectedSlotNo, slots, hotkey } = invalidQuickSlots;

    jest.clearAllMocks();
    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});

    saveQuickSlots(selectedSlotNo, slots, hotkey);

    expect(chrome.storage.local.set).not.toHaveBeenCalled();
  });
});
