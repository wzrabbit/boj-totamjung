import { STORAGE_KEY } from '@/constants/commands';
import { fetchHiderOptions, saveHiderOptions } from './hiderOptionsDataHandler';
import { DEFAULT_HIDER_OPTIONS } from '@/constants/defaultValues';

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
      jest.spyOn(chrome.storage.local, 'get').mockImplementation(() => ({
        [STORAGE_KEY.HIDER_OPTIONS]: hiderOptions,
      }));

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
      jest.spyOn(chrome.storage.local, 'get').mockImplementation(() => ({
        [STORAGE_KEY.HIDER_OPTIONS]: hiderOptions,
      }));

      expect(await fetchHiderOptions()).toEqual(DEFAULT_HIDER_OPTIONS);
    });
  });
});

describe('Test #3 - 가리개 관련 설정 저장하기', () => {
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

    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});
    saveHiderOptions(hiderOptions);

    expect(chrome.storage.local.set).toHaveBeenCalledWith({
      [STORAGE_KEY.HIDER_OPTIONS]: hiderOptions,
    });
  });
});

describe('Test #4 - 유효하지 않은 가리개 관련 설정 데이터를 저장해야 할 때 대응하기', () => {
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
    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});

    saveHiderOptions(hiderOptions);

    expect(chrome.storage.local.set).not.toHaveBeenCalled();
  });
});
