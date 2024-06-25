import { LEGACY_SYNC_STORAGE_KEY, SYNC_STORAGE_KEY } from '~constants/commands';
import { fetchHiderOptions, saveHiderOptions } from './hiderOptionsDataHandler';
import type {
  LegacyHiderOptions,
  LegacyTimer,
  HiderOptionsResponse,
} from '~types/algorithm';

const DEFAULT_HIDER_OPTIONS = {
  problemTagLockDuration: {
    hours: 0,
    minutes: 20,
  },
  shouldHideTier: false,
  shouldWarnHighTier: false,
  warnTier: 1,
  algorithmHiderUsage: 'click',
  problemTagLockUsage: 'click',
} as const;

describe('Test #1 - 가리개 관련 설정 불러오기', () => {
  describe('올바른 가리개 설정이 저장되어 있다면, 이를 그대로 불러온 값을 반환해야 한다.', () => {
    const testcases = [
      DEFAULT_HIDER_OPTIONS,
      {
        problemTagLockDuration: {
          hours: 12,
          minutes: 0,
        },
        shouldHideTier: true,
        shouldWarnHighTier: true,
        warnTier: 30,
        algorithmHiderUsage: 'always',
        problemTagLockUsage: 'auto',
      },
      {
        problemTagLockDuration: {
          hours: 99,
          minutes: 59,
        },
        shouldHideTier: false,
        shouldWarnHighTier: true,
        warnTier: 12,
        algorithmHiderUsage: 'click',
        problemTagLockUsage: 'auto',
      },
    ];

    test.each(testcases)('#%#', async (hiderOptions) => {
      jest
        .spyOn(chrome.storage.sync, 'get')
        .mockImplementation(async (_, callback) => {
          callback({ [SYNC_STORAGE_KEY.HIDER_OPTIONS]: hiderOptions });
        });

      expect(await fetchHiderOptions()).toEqual(hiderOptions);
    });
  });
});

describe('Test #2 - 유효하지 않은 가리개 관련 설정 데이터를 불러왔을 때 대응하기', () => {
  describe('조금이라도 데이터가 잘못된 경우, 초기 데이터를 반환해야 한다.', () => {
    const testcases = [
      undefined,
      'Invalid Data',
      {
        ...DEFAULT_HIDER_OPTIONS,
        problemTagLockDuration: {
          hours: 0,
          minutes: 234,
        },
      },
      {
        ...DEFAULT_HIDER_OPTIONS,
        warnTier: 31,
      },
      {
        ...DEFAULT_HIDER_OPTIONS,
        problemTagLockDuration: {
          hours: 0,
          minutes: '40',
        },
      },
      {
        ...DEFAULT_HIDER_OPTIONS,
        algorithmHiderUsage: 'fooBar',
        problemTagLockUsage: '',
      },
      {
        problemTagLockDuration: {
          hours: 0.5,
          minutes: 1,
        },
        shouldHideTier: true,
        shouldWarnHighTier: true,
        warnTier: 9,
        algorithmHiderUsage: 'click',
        problemTagLockUsage: 'click',
      },
      {},
    ];

    test.each(testcases)('#%#', async (hiderOptions) => {
      jest
        .spyOn(chrome.storage.sync, 'get')
        .mockImplementation(async (_, callback) => {
          callback({ [SYNC_STORAGE_KEY.HIDER_OPTIONS]: hiderOptions });
        });

      expect(await fetchHiderOptions()).toEqual(DEFAULT_HIDER_OPTIONS);
    });
  });
});

describe('Test #3 - 구버전 가리개 관련 설정을 불러왔을 때 대응하기', () => {
  test('구버전 타이머 데이터만 존재할 경우, 초기 데이터를 반환하되 타이머 데이터는 복구하여 반환해야 한다.', async () => {
    const timer: LegacyTimer = {
      expire: 1719291653435,
      hour: '8',
      minute: '30',
      problem: 1000,
    };

    const expected = {
      ...DEFAULT_HIDER_OPTIONS,
      problemTagLockDuration: {
        hours: 8,
        minutes: 30,
      },
    };

    jest
      .spyOn(chrome.storage.sync, 'get')
      .mockImplementation(async (_, callback) => {
        callback({ [LEGACY_SYNC_STORAGE_KEY.TIMER]: timer });
      });

    expect(await fetchHiderOptions()).toEqual(expected);
  });

  test('일반 설정 데이터만 존재할 경우, 초기 데이터를 반환하되 설정 데이터는 복구하여 반환해야 한다.', async () => {
    const hiderOptions: LegacyHiderOptions = {
      font: 'font-16',
      lock: 'always',
      predict: 'always',
      theme: 'yes',
    };

    const expected = {
      ...DEFAULT_HIDER_OPTIONS,
      algorithmHiderUsage: 'always',
      problemTagLockUsage: 'auto',
    };

    jest
      .spyOn(chrome.storage.sync, 'get')
      .mockImplementation(async (_, callback) => {
        callback({ [LEGACY_SYNC_STORAGE_KEY.SETTINGS]: hiderOptions });
      });

    expect(await fetchHiderOptions()).toEqual(expected);
  });

  test('두 설정 데이터 모두 존재할 경우, 초기 데이터에 복구 가능한 데이터들을 포함하여 반환해야 한다', async () => {
    const timer: LegacyTimer = {
      expire: 1719291651100,
      hour: '3',
      minute: '05',
      problem: 30000,
    };

    const hiderOptions: LegacyHiderOptions = {
      font: 'none',
      lock: 'click',
      predict: 'always',
      theme: 'no',
    };

    const expected = {
      ...DEFAULT_HIDER_OPTIONS,
      problemTagLockDuration: {
        hours: 3,
        minutes: 5,
      },
      algorithmHiderUsage: 'always',
      problemTagLockUsage: 'click',
    };

    jest
      .spyOn(chrome.storage.sync, 'get')
      .mockImplementation(async (_, callback) => {
        callback({
          [LEGACY_SYNC_STORAGE_KEY.TIMER]: timer,
          [LEGACY_SYNC_STORAGE_KEY.SETTINGS]: hiderOptions,
        });
      });

    expect(await fetchHiderOptions()).toEqual(expected);
  });

  test('구버전 타이머 데이터만 존재하나 유효하지 않은 데이터라면 복구를 진행하지 않고 초기 데이터를 반환하여야 한다.', async () => {
    const timer = {
      hour: '15',
      minute: '30',
      problem: 1000,
    };

    const hiderOptions = {
      font: 'none',
      lock: 'A molla!!',
      predict: true,
      theme: 1,
    };

    jest
      .spyOn(chrome.storage.sync, 'get')
      .mockImplementation(async (_, callback) => {
        callback({
          [LEGACY_SYNC_STORAGE_KEY.TIMER]: timer,
          [LEGACY_SYNC_STORAGE_KEY.SETTINGS]: hiderOptions,
        });
      });

    expect(await fetchHiderOptions()).toEqual(DEFAULT_HIDER_OPTIONS);
  });

  test('구버전 데이터가 존재하더라도 최신 버전의 데이터가 존재하면 구버전 데이터를 무시하고 최신 버전의 데이터를 불러와 반환하여야 한다.', async () => {
    const timer: LegacyTimer = {
      expire: 1439292659998,
      hour: '3',
      minute: '0',
      problem: 25000,
    };

    const legacyHiderOptions: LegacyHiderOptions = {
      font: 'font-1',
      lock: 'click',
      predict: 'click',
      theme: 'no',
    };

    const hiderOptions: HiderOptionsResponse = {
      problemTagLockDuration: {
        hours: 1,
        minutes: 15,
      },
      shouldHideTier: true,
      shouldWarnHighTier: false,
      warnTier: 17,
      algorithmHiderUsage: 'always',
      problemTagLockUsage: 'auto',
    };

    jest
      .spyOn(chrome.storage.sync, 'get')
      .mockImplementation(async (_, callback) => {
        callback({
          [LEGACY_SYNC_STORAGE_KEY.TIMER]: timer,
          [LEGACY_SYNC_STORAGE_KEY.SETTINGS]: legacyHiderOptions,
          [SYNC_STORAGE_KEY.HIDER_OPTIONS]: hiderOptions,
        });
      });

    expect(await fetchHiderOptions()).toEqual(hiderOptions);
  });
});

describe('Test #4 - 가리개 관련 설정 저장하기', () => {
  test('올바른 가리개 설정이 저장되어 있다면, 이를 그대로 불러온 값을 반환해야 한다.', () => {
    const hiderOptions = {
      problemTagLockDuration: {
        hours: 40,
        minutes: 50,
      },
      shouldHideTier: true,
      shouldWarnHighTier: false,
      warnTier: 29,
      algorithmHiderUsage: 'always',
      problemTagLockUsage: 'auto',
    };

    jest.spyOn(chrome.storage.sync, 'set').mockImplementation(() => {});
    saveHiderOptions(hiderOptions);

    expect(chrome.storage.sync.set).toHaveBeenCalledWith({
      [SYNC_STORAGE_KEY.HIDER_OPTIONS]: hiderOptions,
    });
  });
});

describe('Test #5 - 유효하지 않은 가리개 관련 설정 데이터를 저장해야 할 때 대응하기', () => {
  test('저장해야 하는 설정 데이터가 유효한 데이터가 아니라면, 저장을 진행하지 않아야 한다.', () => {
    const hiderOptions = {
      problemTagLockDuration: {
        hours: -1,
        minutes: 50,
      },
      shouldWarnHighTier: false,
      warnTier: 29,
    };

    jest.clearAllMocks();
    jest.spyOn(chrome.storage.sync, 'set').mockImplementation(() => {});

    saveHiderOptions(hiderOptions);

    expect(chrome.storage.sync.set).not.toHaveBeenCalled();
  });
});
