import { fetchRandomDefenseHistory } from './randomDefenseHistoryDataHandler';
import { MAX_HISTORY_LIMIT } from '~constants/randomDefense';
import type { RandomDefenseHistoryInfo } from '~types/randomDefense';

describe('Test #1 - 추첨 기록 불러오기', () => {
  test('한 문제가 들어 있는 올바른 추첨 기록이 저장되어 있다면, 이를 그대로 불러온 값을 반환해야 한다.', async () => {
    const randomDefenseHistory = [
      {
        problemId: 27959,
        title: '초코바',
        tier: 1,
        createdAt: '2025-01-01T23:35:00.123Z',
      },
    ];

    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(async (_, callback) => {
        callback({ randomDefenseHistory, isTierHidden: false });
      });

    expect(await fetchRandomDefenseHistory()).toEqual({
      randomDefenseHistory,
      isHidden: false,
    });
  });

  test('여러 문제가 들어 있는 올바른 추첨 기록이 저장되어 있다면, 이를 그대로 불러온 값을 반환해야 한다.', async () => {
    const randomDefenseHistory = [
      {
        problemId: 27959,
        title: '초코바',
        tier: 1,
        createdAt: '2025-01-01T23:35:00.123Z',
      },
      {
        problemId: 27964,
        title: '콰트로치즈피자',
        tier: 6,
        createdAt: '2025-01-01T23:34:00.123Z',
      },
      {
        problemId: 27943,
        title: '가지 사진 찾기',
        tier: 11,
        createdAt: '2025-01-01T23:33:00.123Z',
      },
    ];

    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(async (_, callback) => {
        callback({ randomDefenseHistory, isTierHidden: false });
      });

    expect(await fetchRandomDefenseHistory()).toEqual({
      randomDefenseHistory,
      isHidden: false,
    });
  });

  test('비어 있는 올바른 추첨 기록이 저장되어 있다면, 이를 그대로 불러온 값을 반환해야 한다.', async () => {
    const randomDefenseHistory: RandomDefenseHistoryInfo[] = [];
    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(async (_, callback) => {
        callback({ randomDefenseHistory, isTierHidden: false });
      });

    expect(await fetchRandomDefenseHistory()).toEqual({
      randomDefenseHistory,
      isHidden: false,
    });
  });
});

describe('Test #2 - 잘못된 추첨 기록에 대응하기', () => {
  test('추첨 기록의 일부가 잘못된 값일 경우, 올바른 값만을 골라 반환해야 한다.', async () => {
    const randomDefenseHistory = [
      {
        problemId: 27959,
        title: '초코바',
        tier: 1,
        createdAt: '2025-12-01T10:00:00.000Z',
      },
      [1, 2, 3, 4, 5],
      {
        problemId: 27959,
        title: '초코바',
        createdAt: '2025-12-01T10:00:00.030Z',
      },
      {
        title: '초코바',
        tier: 1,
        createdAt: '2025-12-01T10:00:00.100Z',
      },
      {
        problemId: 27959,
        title: '초코바',
        createdAt: '2025-01-01T10:00:00.000Z',
      },
      {
        problemId: 27959,
        title: '초코바',
        tier: 1,
      },
      {},
      {
        problemId: 123456,
        title: '콰트로치즈피자',
        tier: 6,
        createdAt: '2025-01-01T23:35:00.123Z',
      },
      {
        problemId: -1000,
        title: '가지 사진 찾기',
        tier: 11,
        createdAt: '2025-01-01T23:35:00.123Z',
      },
      {
        problemId: 27470,
        title: '멋진 부분집합',
        tier: 32,
        createdAt: '2025-01-01T23:35:00.123Z',
      },
      {
        problemId: 30243,
        title: '🧩 N-Queen (Hard)',
        tier: 21,
        createdAt: '2025-06-01T23:35:00.123Z',
      },
      {
        problemId: 31442,
        title: '좋은 수열',
        tier: 26,
        createdAt: '2025-01-32T23:35:00.123Z',
      },
      {
        problemId: 1223,
        title: '너무 긴 문제'.repeat(500),
        tier: 0,
        createdAt: '2025-01-01T23:35:00.123Z',
      },
      {
        problemId: 27903,
        title: '인생',
        tier: 31,
        createdAt: NaN,
      },
    ];

    const expectedResult = [
      {
        problemId: 27959,
        title: '초코바',
        tier: 1,
        createdAt: '2025-12-01T10:00:00.000Z',
      },
      {
        problemId: 30243,
        title: '🧩 N-Queen (Hard)',
        tier: 21,
        createdAt: '2025-06-01T23:35:00.123Z',
      },
    ];

    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(async (_, callback) => {
        callback({ randomDefenseHistory, isTierHidden: false });
      });

    expect(await fetchRandomDefenseHistory()).toEqual({
      randomDefenseHistory: expectedResult,
      isHidden: false,
    });
  });

  test('추첨 기록의 값들이 모두 잘못되었을 경우, 빈 배열을 반환해야 한다.', async () => {
    const randomDefenseHistory = [
      {
        problemId: 27959,
        title: '초코바',
        tier: 1,
        createdAt: '2025-12-01T10:00:00.000',
      },
      {
        problemId: 123456,
        title: '콰트로치즈피자',
        tier: 6,
        createdAt: '2025-01-01T23:35:00.123Z',
      },
      {
        problemId: -1000,
        title: '가지 사진 찾기',
        tier: 11,
        createdAt: '2025-01-01T23:35:00.123Z',
      },
      {
        problemId: 27470,
        title: '멋진 부분집합',
        tier: 32,
        createdAt: '2025-01-01T23:35:00.123Z',
      },
      {
        problemId: 30243,
        title: '🧩 N-Queen (Hard)',
        tier: 25.5,
        createdAt: '2025-06-01T23:35:00.123Z',
      },
      {
        problemId: 31442,
        title: '좋은 수열',
        tier: 26,
        createdAt: '2025-01-32T23:35:00.123Z',
      },
      {
        problemId: 1223,
        title: '너무 긴 문제'.repeat(500),
        tier: 0,
        createdAt: '2025-01-01T23:35:00.123Z',
      },
      {
        problemId: 27903,
        title: '인생',
        tier: 31,
        createdAt: NaN,
      },
    ];

    const expectedResult: RandomDefenseHistoryInfo[] = [];

    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(async (_, callback) => {
        callback({ randomDefenseHistory, isTierHidden: false });
      });

    expect(await fetchRandomDefenseHistory()).toEqual({
      randomDefenseHistory: expectedResult,
      isHidden: false,
    });
  });

  const testcases: unknown[] = [
    [],
    {
      randomDefenseHistory: [
        {
          problemId: 27959,
          title: '초코바',
          tier: 1,
          createdAt: '2025-12-01T10:00:00.000Z',
        },
      ],
    },
    'foo Bar',
    123,
    null,
    undefined,
  ];

  test.each(testcases)(
    '추첨 기록의 값이 %s와 같이 잘못된 형식일 경우 추첨 기록으로 빈 배열을 반환해야 한다.',
    async (invalidInput) => {
      jest
        .spyOn(chrome.storage.local, 'get')
        .mockImplementation(async (_, callback) => {
          callback({ randomDefenseHistory: invalidInput, isTierHidden: false });
        });

      expect(await fetchRandomDefenseHistory()).toEqual({
        randomDefenseHistory: [],
        isHidden: false,
      });
    },
  );
});

describe('Test #3 - 추첨 기록 정렬', () => {
  test('추첨 기록은 최신순으로 정렬되어 반환되어야 한다.', async () => {
    const randomDefenseHistory = [
      {
        problemId: 27964,
        title: '콰트로치즈피자',
        tier: 6,
        createdAt: '2025-01-01T23:35:00.259Z',
      },
      {
        problemId: 27470,
        title: '멋진 부분집합',
        tier: 2,
        createdAt: '2024-05-17T23:35:00.123Z',
      },
      {
        problemId: 27959,
        title: '초코바',
        tier: 1,
        createdAt: '2025-01-01T23:35:00.713Z',
      },
      {
        problemId: 27943,
        title: '가지 사진 찾기',
        tier: 11,
        createdAt: '2024-12-31T10:00:00.000Z',
      },

      {
        problemId: 31442,
        title: '좋은 수열',
        tier: 26,
        createdAt: '2023-1-15T02:35:00.123Z',
      },
      {
        problemId: 30243,
        title: '🧩 N-Queen (Hard)',
        tier: 13,
        createdAt: '2024-02-27T00:00:00.000Z',
      },
    ];

    const expectedResult = [
      {
        problemId: 27959,
        title: '초코바',
        tier: 1,
        createdAt: '2025-01-01T23:35:00.713Z',
      },
      {
        problemId: 27964,
        title: '콰트로치즈피자',
        tier: 6,
        createdAt: '2025-01-01T23:35:00.259Z',
      },
      {
        problemId: 27943,
        title: '가지 사진 찾기',
        tier: 11,
        createdAt: '2024-12-31T10:00:00.000Z',
      },
      {
        problemId: 27470,
        title: '멋진 부분집합',
        tier: 2,
        createdAt: '2024-05-17T23:35:00.123Z',
      },
      {
        problemId: 30243,
        title: '🧩 N-Queen (Hard)',
        tier: 13,
        createdAt: '2024-02-27T00:00:00.000Z',
      },
    ];

    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(async (_, callback) => {
        callback({ randomDefenseHistory, isTierHidden: false });
      });

    expect(await fetchRandomDefenseHistory()).toEqual({
      randomDefenseHistory: expectedResult,
      isHidden: false,
    });
  });
});

describe('Test #3 - 추첨 기록 한도 대응', () => {
  test(`추첨 기록의 개수가 한도(${MAX_HISTORY_LIMIT}문제) 미만일 경우 모든 추첨 기록을 온전히 반환해야 한다.`, async () => {
    const randomDefenseHistory = Array.from({
      length: Math.max(0, MAX_HISTORY_LIMIT - 1),
    }).map((_, index) => ({
      problemId: 1000,
      title: 'A+B',
      tier: 1,
      createdAt: new Date(-index).toISOString(),
    }));

    const expectedResult = randomDefenseHistory.slice();

    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(async (_, callback) => {
        callback({ randomDefenseHistory, isTierHidden: false });
      });

    expect(await fetchRandomDefenseHistory()).toEqual({
      randomDefenseHistory: expectedResult,
      isHidden: false,
    });
  });

  test(`추첨 기록의 개수가 한도(${MAX_HISTORY_LIMIT}문제) 와 동일할 경우 모든 추첨 기록을 온전히 반환해야 한다.`, async () => {
    const randomDefenseHistory = Array.from({
      length: Math.max(0, MAX_HISTORY_LIMIT),
    }).map((_, index) => ({
      problemId: 1000,
      title: 'A+B',
      tier: 1,
      createdAt: new Date(-index).toISOString(),
    }));

    const expectedResult = randomDefenseHistory.slice();

    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(async (_, callback) => {
        callback({ randomDefenseHistory, isTierHidden: false });
      });

    expect(await fetchRandomDefenseHistory()).toEqual({
      randomDefenseHistory: expectedResult,
      isHidden: false,
    });
  });

  test(`추첨 기록의 개수가 한도(${MAX_HISTORY_LIMIT}문제)보다 하나 더 많을 경우 가장 오래된 추첨 기록 하나를 제거하고 반환해야 한다.`, async () => {
    const randomDefenseHistory = Array.from({
      length: Math.max(0, MAX_HISTORY_LIMIT + 1),
    }).map((_, index) => ({
      problemId: 1000,
      title: 'A+B',
      tier: 1,
      createdAt: new Date(-index).toISOString(),
    }));

    const expectedResult = randomDefenseHistory.slice(0, -1);

    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(async (_, callback) => {
        callback({ randomDefenseHistory, isTierHidden: false });
      });

    expect(await fetchRandomDefenseHistory()).toEqual({
      randomDefenseHistory: expectedResult,
      isHidden: false,
    });
  });

  test(`추첨 기록의 개수가 한도(${MAX_HISTORY_LIMIT}문제)보다 여러 개 많을 경우 ${MAX_HISTORY_LIMIT}개가 되도록 오래된 기록부터 제거하고 반환해야 한다. 정렬되어 있지 않은 상태라도 동작이 동일해야 한다.`, async () => {
    const randomDefenseHistory = Array.from({
      length: Math.max(0, MAX_HISTORY_LIMIT + 123),
    }).map((_, index) => ({
      problemId: 1000,
      title: 'A+B',
      tier: 1,
      createdAt: new Date(index).toISOString(),
    }));

    const expectedResult = randomDefenseHistory.slice(0, -123).reverse();

    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(async (_, callback) => {
        callback({ randomDefenseHistory, isTierHidden: false });
      });

    expect(await fetchRandomDefenseHistory()).toEqual({
      randomDefenseHistory: expectedResult,
      isHidden: false,
    });
  });
});

describe('Test #4 - 추첨 기록 티어 활성화 여부 불러오기', () => {
  test('추첨 기록의 티어 활성화 여부가 활성화되어 있다면, true를 반환해야 한다.', async () => {
    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(async (_, callback) => {
        callback({ randomDefenseHistory: [], isTierHidden: true });
      });

    expect(await fetchRandomDefenseHistory()).toEqual({
      randomDefenseHistory: [],
      isHidden: true,
    });
  });

  test('추첨 기록의 티어 활성화 여부가 활성화되어 있지 않다면, false를 반환해야 한다.', async () => {
    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(async (_, callback) => {
        callback({ randomDefenseHistory: [], isTierHidden: false });
      });

    expect(await fetchRandomDefenseHistory()).toEqual({
      randomDefenseHistory: [],
      isHidden: false,
    });
  });

  test('추첨 기록의 티어 활성화 여부에 해당하는 값이 손실되었다면, false로 초기화하여 반환해야 한다.', async () => {
    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(async (_, callback) => {
        callback({ randomDefenseHistory: [] });
      });

    expect(await fetchRandomDefenseHistory()).toEqual({
      randomDefenseHistory: [],
      isHidden: false,
    });
  });
});

describe('Test #5 - 구버전 추첨 기록 불러오기', () => {
  test('추첨 기록이 존재하지 않으나, 구버전의 추첨 기록이 존재할 경우에는 구버전의 추첨 기록을 가공하여 반환해야 한다.', async () => {
    const legacyDefenseHistory = [
      {
        date: '2023-09-29 02:58:21',
        no: 22861,
        tier: 15,
      },
      {
        date: '2023-09-27 21:35:30',
        no: 24811,
        tier: 123,
        title: 'Touchdown!',
      },
      {
        date: '2023-09-29 01:48:47',
        no: 8098,
        tier: 11,
        title: 'Lecture Halls Reservation',
      },
      { date: '2023-09-27 21:35:26', no: 16128, tier: 21, title: '스눕시티' },
      {
        date: '2023-09-29 02:13:29',
        no: null,
        tier: 12,
        title: 'XOR Necklace',
      },
      {
        date: '2023-09-29 02:58:04',
        no: 14765,
        tier: 12,
        title: 'Studying For Exams',
      },
    ];

    const expectedResult = [
      {
        problemId: 14765,
        title: 'Studying For Exams',
        tier: 12,
        createdAt: new Date('2023-09-29 02:58:04').toISOString(),
      },
      {
        problemId: 8098,
        title: 'Lecture Halls Reservation',
        tier: 11,
        createdAt: new Date('2023-09-29 01:48:47').toISOString(),
      },
      {
        problemId: 16128,
        title: '스눕시티',
        tier: 21,
        createdAt: new Date('2023-09-27 21:35:26').toISOString(),
      },
    ];

    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(async (_, callback) => {
        callback({ queryLog: legacyDefenseHistory, isTierHidden: true });
      });

    expect(await fetchRandomDefenseHistory()).toEqual({
      randomDefenseHistory: expectedResult,
      isHidden: true,
    });
  });

  test('추첨 기록과 구버전의 추첨 기록이 모두 존재할 경우에는 최신 추첨 기록을 채택하여 반환해야 한다.', async () => {
    const latestRandomDefenseHistory = [
      {
        problemId: 27959,
        title: '초코바',
        tier: 1,
        createdAt: '2025-01-01T23:35:00.123Z',
      },
      {
        problemId: 27964,
        title: '콰트로치즈피자',
        tier: 6,
        createdAt: '2025-01-01T23:34:00.123Z',
      },
      {
        problemId: 27943,
        title: '가지 사진 찾기',
        tier: 11,
        createdAt: '2025-01-01T23:33:00.123Z',
      },
    ];

    const legacyDefenseHistory = [
      {
        date: '2023-09-29 02:58:21',
        no: 22861,
        tier: 15,
      },
      {
        date: '2023-09-27 21:35:30',
        no: 24811,
        tier: 123,
        title: 'Touchdown!',
      },
      {
        date: '2023-09-29 01:48:47',
        no: 8098,
        tier: 11,
        title: 'Lecture Halls Reservation',
      },
      { date: '2023-09-27 21:35:26', no: 16128, tier: 21, title: '스눕시티' },
      {
        date: '2023-09-29 02:13:29',
        no: null,
        tier: 12,
        title: 'XOR Necklace',
      },
      {
        date: '2023-09-29 02:58:04',
        no: 14765,
        tier: 12,
        title: 'Studying For Exams',
      },
    ];

    const expectedResult = [
      {
        problemId: 27959,
        title: '초코바',
        tier: 1,
        createdAt: '2025-01-01T23:35:00.123Z',
      },
      {
        problemId: 27964,
        title: '콰트로치즈피자',
        tier: 6,
        createdAt: '2025-01-01T23:34:00.123Z',
      },
      {
        problemId: 27943,
        title: '가지 사진 찾기',
        tier: 11,
        createdAt: '2025-01-01T23:33:00.123Z',
      },
    ];

    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(async (_, callback) => {
        callback({
          randomDefenseHistory: latestRandomDefenseHistory,
          queryLog: legacyDefenseHistory,
          isTierHidden: true,
        });
      });

    expect(await fetchRandomDefenseHistory()).toEqual({
      randomDefenseHistory: expectedResult,
      isHidden: true,
    });
  });
});
