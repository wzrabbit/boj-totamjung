import { STORAGE_KEY } from '@/constants/commands';
import { DEFAULT_TIMERS } from '@/constants/defaultValues';
import {
  fetchTimers,
  saveTimers,
  getRemainingLockTimeByProblemId,
  removeSingleTimerByProblemId,
} from './timersDataHandler';
import type { HiderOptionsResponse, Timer } from '@/types/algorithm';

describe('Test #1 - 타이머 리스트 데이터 불러오기', () => {
  test('정상적인 타이머 리스트를 불러올 경우, 타이머 리스트를 그대로 불러온 결과를 반환해야 한다.', async () => {
    const timers: Timer[] = [
      {
        problemId: 1000,
        expiresAt: '2024-01-01T03:00:00.000Z',
      },
      {
        problemId: 3000,
        expiresAt: '2024-01-01T04:30:00.000Z',
      },
      {
        problemId: 10000,
        expiresAt: '2024-08-07T01:00:00.000Z',
      },
    ];

    jest.spyOn(chrome.storage.local, 'get').mockImplementation(() => ({
      timers,
    }));
    jest.useFakeTimers().setSystemTime(new Date('2024-01-01T00:00:00.000Z'));

    expect(await fetchTimers()).toEqual({
      [STORAGE_KEY.TIMERS]: timers,
    });
  });

  test('기한이 지난 타이머가 있는 경우에는 그 타이머를 제외하고 반환해야 한다.', async () => {
    const timers: Timer[] = [
      {
        problemId: 1000,
        expiresAt: '2023-12-31T03:00:00.000Z',
      },
      {
        problemId: 3000,
        expiresAt: '2024-01-01T04:30:00.000Z',
      },
      {
        problemId: 10000,
        expiresAt: '2022-08-07T01:00:00.000Z',
      },
    ];

    const expected: Timer[] = [
      {
        problemId: 3000,
        expiresAt: '2024-01-01T04:30:00.000Z',
      },
    ];

    jest.spyOn(chrome.storage.local, 'get').mockImplementation(() => ({
      timers,
    }));
    jest.useFakeTimers().setSystemTime(new Date('2024-01-01T00:00:00.000Z'));

    expect(await fetchTimers()).toEqual({
      [STORAGE_KEY.TIMERS]: expected,
    });
  });

  test(`타이머의 개수가 최대 횟수인 300개를 넘은 경우, 300개까지만 반환해야 한다.`, async () => {
    const timers: Timer[] = Array.from({ length: 350 }).map(() => ({
      problemId: 1000,
      expiresAt: '2025-01-01T03:00:00.000Z',
    }));

    const expected: Timer[] = Array.from({ length: 300 }).map(() => ({
      problemId: 1000,
      expiresAt: '2025-01-01T03:00:00.000Z',
    }));

    jest.spyOn(chrome.storage.local, 'get').mockImplementation(() => ({
      timers,
    }));
    jest.useFakeTimers().setSystemTime(new Date('2024-01-01T00:00:00.000Z'));

    expect(await fetchTimers()).toEqual({
      [STORAGE_KEY.TIMERS]: expected,
    });
  });
});

describe('Test #2 - 잘못된 타이머 리스트 데이터에 대응하기', () => {
  test('타이머의 일부가 잘못된 경우에는, 잘못된 데이터는 제외하고, 나머지 데이터는 보존한 채로 반환해야 한다.', async () => {
    const timers = [
      {
        problemId: 1000,
        expiresAt: 'FakeTime',
      },
      {
        problemId: 2000,
        expiresAt: '2022222234-01-01T04:30:00.000Z',
      },
      {
        problemId: 7777,
        expiresAt: '2025-08-07T01:00:00.000Z',
      },
      {
        problemId: '3000',
        expiresAt: '2025-08-07T01:00:00.000Z',
      },
      {
        problemId: 18000,
        expiresAt: '2025-01-16T01:20:00.000Z',
      },
      {
        problemId: 6531,
        expiresAt: '2025-12-31',
      },
      {
        problemId: undefined,
        expiresAt: undefined,
      },
      'fooBar',
      {},
      undefined,
      null,
    ];

    const expected: Timer[] = [
      {
        problemId: 7777,
        expiresAt: '2025-08-07T01:00:00.000Z',
      },
      {
        problemId: 18000,
        expiresAt: '2025-01-16T01:20:00.000Z',
      },
    ];

    jest.spyOn(chrome.storage.local, 'get').mockImplementation(() => ({
      timers,
    }));
    jest.useFakeTimers().setSystemTime(new Date('2024-01-01T00:00:00.000Z'));

    expect(await fetchTimers()).toEqual({
      [STORAGE_KEY.TIMERS]: expected,
    });
  });

  test('타이머의 데이터 형식 자체가 잘못되어 복구가 불가능한 경우에는, 기본값을 반환한다.', async () => {
    const timers = 'not even a timer';

    jest.spyOn(chrome.storage.local, 'get').mockImplementation(() => ({
      timers,
    }));
    jest.useFakeTimers().setSystemTime(new Date('2024-01-01T00:00:00.000Z'));

    expect(await fetchTimers()).toEqual({
      [STORAGE_KEY.TIMERS]: DEFAULT_TIMERS,
    });
  });
});

describe('Test #3 - 타이머 리스트 저장하기', () => {
  test('올바른 데이터의 타이머 리스트를 저장할 경우, 모든 데이터가 온전하게 저장되어야 한다.', async () => {
    const timers: Timer[] = [
      {
        problemId: 1000,
        expiresAt: '2024-01-01T03:00:00.000Z',
      },
      {
        problemId: 3000,
        expiresAt: '2024-01-01T04:30:00.000Z',
      },
      {
        problemId: 10000,
        expiresAt: '2024-08-07T01:00:00.000Z',
      },
    ];

    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});
    jest.useFakeTimers().setSystemTime(new Date('2024-01-01T00:00:00.000Z'));

    saveTimers(timers);

    expect(chrome.storage.local.set).toHaveBeenCalledWith({
      [STORAGE_KEY.TIMERS]: timers,
    });
  });
});

describe('Test #4 - 잘못된 타이머 리스트 저장에 대응하기', () => {
  test('저장할 데이터가 일부분이라도 잘못된 경우, 저장을 진행하지 않아야 한다.', async () => {
    const timers = [
      {
        problemId: 1000,
        expiresAt: 'FakeTime',
      },
      {
        problemId: 2000,
        expiresAt: '2022222234-01-01T04:30:00.000Z',
      },
      {
        problemId: 7777,
        expiresAt: '2025-08-07T01:00:00.000Z',
      },
      {
        problemId: '3000',
        expiresAt: '2025-08-07T01:00:00.000Z',
      },
      {
        problemId: 18000,
        expiresAt: '2025-01-16T01:20:00.000Z',
      },
      {
        problemId: 6531,
        expiresAt: '2025-12-31',
      },
      {
        problemId: undefined,
        expiresAt: undefined,
      },
      'fooBar',
      {},
      undefined,
      null,
    ];

    jest.clearAllMocks();
    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});
    jest.useFakeTimers().setSystemTime(new Date('2024-01-01T00:00:00.000Z'));

    saveTimers(timers);

    expect(chrome.storage.local.set).not.toHaveBeenCalled();
  });

  test('저장할 데이터가 잘못된 형식인 경우, 런타임 에러 없이 저장을 진행하지 말아야 한다.', async () => {
    const timers = {};

    jest.clearAllMocks();
    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});
    jest.useFakeTimers().setSystemTime(new Date('2024-01-01T00:00:00.000Z'));

    saveTimers(timers);

    expect(chrome.storage.local.set).not.toHaveBeenCalled();
  });
});

describe('Test #5 - 문제 번호에 해당하는 잠금 타이머 처리 후 잔여 시간 반환하기', () => {
  test('문제 번호에 대응되는 타이머가 없고, 잠금 설정이 "클릭하여 잠금"일 경우, 타이머를 잠그지 않아야 하므로 0을 반환해야 한다.', async () => {
    const timers: Timer[] = [
      {
        problemId: 8000,
        expiresAt: '2024-01-02T00:00:00.000Z',
      },
    ];
    const hiderOptions: HiderOptionsResponse = {
      problemTagLockDuration: {
        hours: 0,
        minutes: 20,
      },
      shouldHideTier: false,
      shouldWarnHighTier: false,
      warnTier: 11,
      algorithmHiderUsage: 'always',
      problemTagLockUsage: 'click',
    };
    const chromeLocalStorage: {
      timers: Timer[];
      hiderOptions: HiderOptionsResponse;
    } = {
      timers,
      hiderOptions,
    };

    jest.clearAllMocks();
    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(() => chromeLocalStorage);
    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});
    jest.useFakeTimers().setSystemTime(new Date('2024-01-01T23:00:00.000Z'));

    const lockTime = await getRemainingLockTimeByProblemId(1234);
    await Promise.resolve();

    expect(chrome.storage.local.set).not.toHaveBeenCalled();
    expect(lockTime).toBe(0);
  });

  test('문제 번호에 대응되는 타이머가 없고, 잠금 설정이 "자동으로 잠금"일 경우, 타이머를 설정된 시간으로 새롭게 생성한 후, 그 타이머의 시간만큼을 밀리초로 반환해야 한다.', async () => {
    const timers: Timer[] = [
      {
        problemId: 8000,
        expiresAt: '2024-01-02T00:00:00.000Z',
      },
    ];
    const hiderOptions: HiderOptionsResponse = {
      problemTagLockDuration: {
        hours: 0,
        minutes: 20,
      },
      shouldHideTier: false,
      shouldWarnHighTier: false,
      warnTier: 11,
      algorithmHiderUsage: 'always',
      problemTagLockUsage: 'auto',
    };
    const chromeLocalStorage: {
      timers: Timer[];
      hiderOptions: HiderOptionsResponse;
    } = {
      timers,
      hiderOptions,
    };
    const expected: Timer[] = [
      {
        problemId: 8000,
        expiresAt: '2024-01-02T00:00:00.000Z',
      },
      {
        problemId: 1234,
        expiresAt: '2024-01-01T23:20:00.000Z',
      },
    ];

    jest.clearAllMocks();
    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(() => chromeLocalStorage);
    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});
    jest.useFakeTimers().setSystemTime(new Date('2024-01-01T23:00:00.000Z'));

    const lockTime = await getRemainingLockTimeByProblemId(1234);
    await Promise.resolve();

    expect(chrome.storage.local.set).toHaveBeenCalledWith({
      [STORAGE_KEY.TIMERS]: expected,
    });
    expect(lockTime).toBe(20 * 60 * 1_000);
  });

  test('문제 번호에 대응되는 타이머가 있다면, 잠금 설정과 관계 없이 잔여 타이머 시간을 반환해야 한다.', async () => {
    const timers: Timer[] = [
      {
        problemId: 2000,
        expiresAt: '2024-01-02T02:00:00.000Z',
      },
    ];
    const hiderOptions: HiderOptionsResponse = {
      problemTagLockDuration: {
        hours: 0,
        minutes: 60,
      },
      shouldHideTier: true,
      shouldWarnHighTier: true,
      warnTier: 17,
      algorithmHiderUsage: 'always',
      problemTagLockUsage: 'click',
    };
    const chromeLocalStorage: {
      timers: Timer[];
      hiderOptions: HiderOptionsResponse;
    } = {
      timers,
      hiderOptions,
    };

    jest.clearAllMocks();
    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(() => chromeLocalStorage);
    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});
    jest.useFakeTimers().setSystemTime(new Date('2024-01-01T23:00:00.000Z'));

    const lockTime = await getRemainingLockTimeByProblemId(2000);
    await Promise.resolve();

    expect(chrome.storage.local.set).not.toHaveBeenCalled();
    expect(lockTime).toBe(180 * 60 * 1_000);
  });

  test('문제 번호에 대응되는 타이머가 있으나, 시간이 만료된 경우이고, 잠금 설정이 "클릭하여 잠금" 이라면 타이머를 잠그지 않아야 하므로 0을 반환한다.', async () => {
    const timers: Timer[] = [
      {
        problemId: 8000,
        expiresAt: '2023-12-31T00:00:00.000Z',
      },
    ];
    const hiderOptions: HiderOptionsResponse = {
      problemTagLockDuration: {
        hours: 0,
        minutes: 20,
      },
      shouldHideTier: false,
      shouldWarnHighTier: false,
      warnTier: 11,
      algorithmHiderUsage: 'always',
      problemTagLockUsage: 'click',
    };
    const chromeLocalStorage: {
      timers: Timer[];
      hiderOptions: HiderOptionsResponse;
    } = {
      timers,
      hiderOptions,
    };

    jest.clearAllMocks();
    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(() => chromeLocalStorage);
    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});
    jest.useFakeTimers().setSystemTime(new Date('2024-01-01T23:00:00.000Z'));

    const lockTime = await getRemainingLockTimeByProblemId(8000);
    await Promise.resolve();

    expect(chrome.storage.local.set).not.toHaveBeenCalled();
    expect(lockTime).toBe(0);
  });

  test('문제 번호에 대응되는 타이머가 있으나, 시간이 만료된 경우이고, 잠금 설정이 "자동으로 잠금" 이라면 현재 시간 설정대로 새로운 타이머를 생성하고, 설정에 해당하는 잠금 시간을 반환하여야 한다.', async () => {
    const timers: Timer[] = [
      {
        problemId: 30000,
        expiresAt: '2023-02-28T00:00:00.000Z',
      },
    ];
    const hiderOptions: HiderOptionsResponse = {
      problemTagLockDuration: {
        hours: 4,
        minutes: 30,
      },
      shouldHideTier: false,
      shouldWarnHighTier: true,
      warnTier: 30,
      algorithmHiderUsage: 'click',
      problemTagLockUsage: 'auto',
    };
    const chromeLocalStorage: {
      timers: Timer[];
      hiderOptions: HiderOptionsResponse;
    } = {
      timers,
      hiderOptions,
    };
    const expected: Timer[] = [
      {
        problemId: 30000,
        expiresAt: '2023-04-01T04:30:00.500Z',
      },
    ];

    jest.clearAllMocks();
    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(() => chromeLocalStorage);
    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});
    jest.useFakeTimers().setSystemTime(new Date('2023-04-01T00:00:00.500Z'));

    const lockTime = await getRemainingLockTimeByProblemId(30000);
    await Promise.resolve();

    expect(chrome.storage.local.set).toHaveBeenCalledWith({
      [STORAGE_KEY.TIMERS]: expected,
    });
    expect(lockTime).toBe(270 * 60 * 1_000);
  });
});

describe('Test #6 - 하나의 타이머를 제거하기', () => {
  test('이미 존재하는 타이머를 제거할 경우, 해당 타이머가 제거된 채로 스토리지에 저장되어야 한다.', async () => {
    const timers: Timer[] = [
      {
        problemId: 1000,
        expiresAt: '2023-02-28T00:00:00.000Z',
      },
      {
        problemId: 2000,
        expiresAt: '2023-02-28T00:00:00.000Z',
      },
      {
        problemId: 3000,
        expiresAt: '2023-02-28T00:00:00.000Z',
      },
    ];
    const expected: Timer[] = [
      {
        problemId: 1000,
        expiresAt: '2023-02-28T00:00:00.000Z',
      },
      {
        problemId: 3000,
        expiresAt: '2023-02-28T00:00:00.000Z',
      },
    ];

    jest.clearAllMocks();
    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(() => ({ [STORAGE_KEY.TIMERS]: timers }));
    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});
    jest.useFakeTimers().setSystemTime(new Date('2023-01-01T00:00:00.000Z'));

    await removeSingleTimerByProblemId(2000);

    expect(chrome.storage.local.set).toHaveBeenCalledWith({
      [STORAGE_KEY.TIMERS]: expected,
    });
  });

  test('존재하지 않는 타이머를 제거하려 할 경우, 별도의 수정 없이 스토리지에 저장되어야 한다.', async () => {
    const timers: Timer[] = [
      {
        problemId: 1000,
        expiresAt: '2023-02-28T00:00:00.000Z',
      },
      {
        problemId: 5000,
        expiresAt: '2023-02-28T00:00:00.000Z',
      },
      {
        problemId: 3000,
        expiresAt: '2023-02-28T00:00:00.000Z',
      },
    ];
    const expected: Timer[] = [
      {
        problemId: 1000,
        expiresAt: '2023-02-28T00:00:00.000Z',
      },
      {
        problemId: 5000,
        expiresAt: '2023-02-28T00:00:00.000Z',
      },
      {
        problemId: 3000,
        expiresAt: '2023-02-28T00:00:00.000Z',
      },
    ];

    jest.clearAllMocks();
    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(() => ({ [STORAGE_KEY.TIMERS]: timers }));
    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});
    jest.useFakeTimers().setSystemTime(new Date('2023-01-01T00:00:00.000Z'));

    await removeSingleTimerByProblemId(2000);

    expect(chrome.storage.local.set).toHaveBeenCalledWith({
      [STORAGE_KEY.TIMERS]: expected,
    });
  });
});
