import { STORAGE_KEY } from '@/constants/commands';
import { updateAllLegacyData } from './legacyDataUpdater';
import {
  DEFAULT_CHECKED_ALGORITHM_IDS,
  DEFAULT_FONT_NO,
  DEFAULT_HIDER_OPTIONS,
  DEFAULT_IS_TIER_HIDDEN,
  DEFAULT_QUICK_SLOTS_RESPONSE,
  DEFAULT_RANDOM_DEFENSE_HISTORY,
  DEFAULT_TOTAMJUNG_THEME,
} from '@/constants/defaultValues';

describe('Test #1 - 구버전 데이터를 최신 버전 데이터로 변환하기', () => {
  test('구버전 데이터가 올바를 경우 온전하게 최신 버전 데이터로 변환하여 저장을 진행해야 한다.', async () => {
    const legacySyncData = {
      algorithm: [1, 2, 4, 7, 14, 156, 171, 194, 200, 1234],
      query: {
        1: {
          isEmpty: false,
          query: 'tier:1..30 solvable:true',
          title: 'All Random',
        },
        2: {
          isEmpty: false,
          query:
            'tier:1..30 solvable:true (tag:number_theory|tag:dp|tag:bruteforcing|tag:arithmetic|tag:data_structures)',
          title: '대충 만든 추첨',
        },
        3: { isEmpty: true, query: '', title: '' },
        4: {
          isEmpty: false,
          query: 'tier:0..0 solvable:true ',
          title: '추첨 4',
        },
        5: {
          isEmpty: false,
          query: 'tier:s1..g4 ratable:true solvable:true 수열',
          title: '직접 만든 쿼리',
        },
        6: { isEmpty: true, query: '', title: '' },
        7: { isEmpty: true, query: '', title: '' },
        8: { isEmpty: true, query: '', title: '' },
        9: { isEmpty: true, query: '', title: '' },
        0: { isEmpty: true, query: '', title: '' },
        selectedNo: 5,
      },
      settings: {
        font: 'font-19',
        lock: 'click',
        predict: 'always',
        theme: 'yes',
      },
      timer: { expire: -1, hour: '1', minute: '30', problem: -1 },
    };

    const legacyLocalData = {
      isTierHidden: true,
      queryLog: [
        {
          date: '2024-06-12 18:25:01',
          no: 24141,
          tier: 12,
          title: 'インフルエンザ (Flu)',
        },
        { date: '2024-06-12 20:26:43', no: 15494, tier: 4, title: 'Davor' },
        {
          date: '2024-06-12 19:23:40',
          no: 24819,
          tier: 10,
          title: 'Escape Wall Maria',
        },
        {
          date: '2024-06-12 21:48:56',
          no: 5751,
          tier: 3,
          title: 'Head or Tail',
        },
        {
          date: '2023-06-29 19:02:25',
          no: 14434,
          tier: 15,
          title: '놀이기구1',
        },
        {
          date: '2024-06-12 21:49:04',
          no: 23912,
          tier: 18,
          title: 'Locked Doors',
        },
        {
          date: '2024-06-12 22:44:54',
          no: 30513,
          tier: 21,
          title: '하이퍼 삼각형 자르기',
        },
        {
          date: '2024-06-12 22:51:23',
          no: 28050,
          tier: 18,
          title: 'Kind Baker',
        },
        { date: '2024-06-28 20:33:36', no: 29063, tier: 0, title: 'Телепорты' },
        { date: '2024-06-30 22:34:10', no: 1036, tier: 15, title: '36진수' },
      ],
    };

    const expected = {
      checkedAlgorithmIds: [1, 2, 4, 7, 14, 156, 171, 194, 200, 1234],
      dataVersion: 'v1.2',
      hiderOptions: {
        algorithmHiderUsage: 'always',
        problemTagLockDuration: { hours: 1, minutes: 30 },
        problemTagLockUsage: 'click',
        shouldHideTier: false,
        shouldWarnHighTier: false,
        warnTier: 1,
      },
      isTierHidden: false,
      quickSlots: {
        hotkey: 'Alt',
        selectedSlotNo: 5,
        slots: {
          1: {
            isEmpty: false,
            query: 'tier:1..30 solvable:true',
            title: 'All Random',
          },
          2: {
            isEmpty: false,
            query:
              'tier:1..30 solvable:true (tag:number_theory|tag:dp|tag:bruteforcing|tag:arithmetic|tag:data_structures)',
            title: '대충 만든 추첨',
          },
          3: { isEmpty: true },
          4: {
            isEmpty: false,
            query: 'tier:0..0 solvable:true ',
            title: '추첨 4',
          },
          '5': {
            isEmpty: false,
            query: 'tier:s1..g4 ratable:true solvable:true 수열',
            title: '직접 만든 쿼리',
          },
          6: { isEmpty: true },
          7: { isEmpty: true },
          8: { isEmpty: true },
          9: { isEmpty: true },
          0: { isEmpty: true },
        },
      },
      randomDefenseHistory: [
        {
          createdAt: '2024-06-12T09:25:01.000Z',
          problemId: 24141,
          tier: 12,
          title: 'インフルエンザ (Flu)',
        },
        {
          createdAt: '2024-06-12T11:26:43.000Z',
          problemId: 15494,
          tier: 4,
          title: 'Davor',
        },
        {
          createdAt: '2024-06-12T10:23:40.000Z',
          problemId: 24819,
          tier: 10,
          title: 'Escape Wall Maria',
        },
        {
          createdAt: '2024-06-12T12:48:56.000Z',
          problemId: 5751,
          tier: 3,
          title: 'Head or Tail',
        },
        {
          createdAt: '2023-06-29T10:02:25.000Z',
          problemId: 14434,
          tier: 15,
          title: '놀이기구1',
        },
        {
          createdAt: '2024-06-12T12:49:04.000Z',
          problemId: 23912,
          tier: 18,
          title: 'Locked Doors',
        },
        {
          createdAt: '2024-06-12T13:44:54.000Z',
          problemId: 30513,
          tier: 21,
          title: '하이퍼 삼각형 자르기',
        },
        {
          createdAt: '2024-06-12T13:51:23.000Z',
          problemId: 28050,
          tier: 18,
          title: 'Kind Baker',
        },
        {
          createdAt: '2024-06-28T11:33:36.000Z',
          problemId: 29063,
          tier: 0,
          title: 'Телепорты',
        },
        {
          createdAt: '2024-06-30T13:34:10.000Z',
          problemId: 1036,
          tier: 15,
          title: '36진수',
        },
      ],
      totamjungTheme: 'none',
      fontNo: 19,
    };

    jest.clearAllMocks();
    jest
      .spyOn(chrome.storage.sync, 'get')
      .mockImplementation(() => legacySyncData);
    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(() => legacyLocalData);
    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});

    await updateAllLegacyData();

    expect(chrome.storage.local.set).toHaveBeenCalledWith(expected);
  });
});

describe('Test #2 - 잘못된 구버전 데이터에 대응하기', () => {
  test('구버전 데이터가 일부 손상되어 있다면, 복구 가능한 범위 내에서 복구한 후 저장을 진행해야 한다.', async () => {
    const legacySyncData = {
      algorithm: [
        1,
        2,
        4,
        7,
        14,
        null,
        1.5,
        171,
        194,
        200,
        1234,
        undefined,
        'Oh no',
      ],
      query: {
        1: 'bla bla',
        2: {
          isEmpty: false,
          query:
            'tier:1..30 solvable:true (tag:number_theory|tag:dp|tag:bruteforcing|tag:arithmetic|tag:data_structures)',
          title: '대충 만든 추첨',
        },
        3: null,
        4: {
          isEmpty: false,
          query: 'tier:0..0 solvable:true ',
          title: '추첨 4',
        },
        5: {
          isEmpty: false,
          query: 'tier:s1..g4 ratable:true solvable:true 수열',
          title: '직접 만든 쿼리',
        },
        6: { isEmpty: true, query: 'a'.repeat(456), title: 'Test' },
        7: {},
        8: { isEmpty: false },
        9: { isEmpty: false, query: '', title: '' },
        0: { isEmpty: false, query: '' },
        selectedNo: 3,
      },
      settings: {
        font: 'font-3',
        lock: 'always',
        predict: 'always',
        theme: 'no',
      },
      timer: { expire: -1, hour: '1', minute: undefined, problem: -1 },
    };

    const legacyLocalData = {
      isTierHidden: true,
      queryLog: [
        {
          date: 'Invalid Date',
          no: 24141,
          tier: 12,
          title: 'インフルエンザ (Flu)',
        },
        { date: '2024-06-12 20:26:43', no: 15494, tier: 4, title: 'Davor' },
        {
          date: '2024-06-12 19:23:40',
          no: 24819,
          tier: 10,
          title: 'Escape Wall Maria',
        },
        {
          no: 5751,
          tier: 3,
          title: 'Head or Tail',
        },
        {},
        {
          date: '2024-06-12 21:49:04',
          no: 23912,
          tier: 18,
          title: 'Locked Doors',
        },
        'unexpected value',
        null,
        {
          date: '2024-06-12 22:51:23',
          no: -93923942,
          tier: 18,
          title: 'Kind Baker',
        },
        {
          date: '2024-06-28 20:33:36',
          no: 29063,
          tier: 25.5,
          title: 'Телепорты',
        },
        { date: '2024-06-30 22:34:10', no: 1036, tier: 31, title: '36진수' },
        {
          date: '2024-06-30 22:34:11',
          no: 1000.1111111111111,
          tier: 31,
          title: 'asdf',
        },
      ],
    };

    const expected = {
      checkedAlgorithmIds: [1, 2, 4, 7, 14, 171, 194, 200, 1234],
      dataVersion: 'v1.2',
      hiderOptions: {
        algorithmHiderUsage: 'always',
        problemTagLockDuration: { hours: 0, minutes: 20 },
        problemTagLockUsage: 'auto',
        shouldHideTier: false,
        shouldWarnHighTier: false,
        warnTier: 1,
      },
      isTierHidden: false,
      quickSlots: {
        hotkey: 'Alt',
        selectedSlotNo: 3,
        slots: {
          1: {
            isEmpty: true,
          },
          2: {
            isEmpty: false,
            query:
              'tier:1..30 solvable:true (tag:number_theory|tag:dp|tag:bruteforcing|tag:arithmetic|tag:data_structures)',
            title: '대충 만든 추첨',
          },
          3: { isEmpty: true },
          4: {
            isEmpty: false,
            query: 'tier:0..0 solvable:true ',
            title: '추첨 4',
          },
          '5': {
            isEmpty: false,
            query: 'tier:s1..g4 ratable:true solvable:true 수열',
            title: '직접 만든 쿼리',
          },
          6: { isEmpty: true },
          7: { isEmpty: true },
          8: { isEmpty: true },
          9: { isEmpty: true },
          0: { isEmpty: true },
        },
      },
      randomDefenseHistory: [
        {
          createdAt: '2024-06-12T11:26:43.000Z',
          problemId: 15494,
          tier: 4,
          title: 'Davor',
        },
        {
          createdAt: '2024-06-12T10:23:40.000Z',
          problemId: 24819,
          tier: 10,
          title: 'Escape Wall Maria',
        },
        {
          createdAt: '2024-06-12T12:49:04.000Z',
          problemId: 23912,
          tier: 18,
          title: 'Locked Doors',
        },
      ],
      totamjungTheme: 'none',
      fontNo: 3,
    };

    jest.clearAllMocks();
    jest
      .spyOn(chrome.storage.sync, 'get')
      .mockImplementation(() => legacySyncData);
    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(() => legacyLocalData);
    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});

    await updateAllLegacyData();

    expect(chrome.storage.local.set).toHaveBeenCalledWith(expected);
  });

  test('구버전 데이터가 복구가 불가능할 정도로 손상되어 있다면, 복구 불가능한 데이터 그룹은 초기화 후 저장을 진행해야 한다.', async () => {
    const legacySyncData = {
      query: {
        2: {
          isEmpty: false,
          query:
            'tier:1..30 solvable:true (tag:number_theory|tag:dp|tag:bruteforcing|tag:arithmetic|tag:data_structures)',
          title: '대충 만든 추첨',
        },
        3: null,
        4: {
          isEmpty: false,
          query: 'tier:0..0 solvable:true ',
          title: '추첨 4',
        },
        8: { isEmpty: false },
        9: { isEmpty: false, query: '', title: '' },
        0: { isEmpty: false, query: '' },
        selectedNo: 0,
      },
      settings: {
        font: 'zzzzzzzzzzzzzzzzzz',
        lock: 'always',
        predict: 'always',
        theme: 'yes',
      },
      timer: { expire: -1, hour: '1', minute: '30', problem: -1 },
    };

    const legacyLocalData = {
      isTierHidden: true,
      queryLog: undefined,
    };

    const expected = {
      checkedAlgorithmIds: DEFAULT_CHECKED_ALGORITHM_IDS,
      dataVersion: 'v1.2',
      hiderOptions: {
        algorithmHiderUsage: 'click',
        problemTagLockDuration: { hours: 1, minutes: 30 },
        problemTagLockUsage: 'click',
        shouldHideTier: false,
        shouldWarnHighTier: false,
        warnTier: 1,
      },
      isTierHidden: DEFAULT_IS_TIER_HIDDEN,
      quickSlots: DEFAULT_QUICK_SLOTS_RESPONSE,
      randomDefenseHistory: DEFAULT_RANDOM_DEFENSE_HISTORY,
      totamjungTheme: DEFAULT_TOTAMJUNG_THEME,
      fontNo: DEFAULT_FONT_NO,
    };

    jest.clearAllMocks();
    jest
      .spyOn(chrome.storage.sync, 'get')
      .mockImplementation(() => legacySyncData);
    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(() => legacyLocalData);
    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});

    await updateAllLegacyData();

    expect(chrome.storage.local.set).toHaveBeenCalledWith(expected);
  });

  test('구버전 데이터가 빈 오브젝트여도 런타임 에러 없이 기본 데이터로 저장을 진행해야 한다.', async () => {
    jest.clearAllMocks();
    jest.spyOn(chrome.storage.sync, 'get').mockImplementation(() => ({}));
    jest.spyOn(chrome.storage.local, 'get').mockImplementation(() => ({}));
    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});

    await updateAllLegacyData();

    expect(chrome.storage.local.get).not.toThrow();
    expect(chrome.storage.local.set).toHaveBeenCalledWith({
      [STORAGE_KEY.CHECKED_ALGORITHM_IDS]: DEFAULT_CHECKED_ALGORITHM_IDS,
      [STORAGE_KEY.QUICK_SLOTS]: DEFAULT_QUICK_SLOTS_RESPONSE,
      [STORAGE_KEY.TOTAMJUNG_THEME]: DEFAULT_TOTAMJUNG_THEME,
      [STORAGE_KEY.HIDER_OPTIONS]: DEFAULT_HIDER_OPTIONS,
      [STORAGE_KEY.RANDOM_DEFENSE_HISTORY]: DEFAULT_RANDOM_DEFENSE_HISTORY,
      [STORAGE_KEY.IS_TIER_HIDDEN]: DEFAULT_IS_TIER_HIDDEN,
      [STORAGE_KEY.FONT_NO]: DEFAULT_FONT_NO,
      [STORAGE_KEY.DATA_VERSION]: 'v1.2',
    });
  });
});

describe('Test #3 - 구버전 데이터가 아닌 경우(변환을 하면 안 되는 경우)에 대응하기', () => {
  test('데이터에 버전 정보가 들어있고, 그 버전이 "v1.2"인 경우 구버전 데이터로 보지 않아야 하고, 변환을 진행하지 않아야 한다.', async () => {
    jest.clearAllMocks();
    jest.spyOn(chrome.storage.sync, 'get').mockImplementation(() => ({}));
    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(() => ({ dataVersion: 'v1.2' }));
    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});

    await updateAllLegacyData();

    expect(chrome.storage.local.set).not.toHaveBeenCalled();
  });

  test('데이터에 버전 정보가 들어있더라도, 그 버전이 정해둔 최신 버전과 일치하지 않는 경우 구버전 데이터로 보고 변환을 진행해야 한다.', async () => {
    jest.clearAllMocks();
    jest.spyOn(chrome.storage.sync, 'get').mockImplementation(() => ({}));
    jest
      .spyOn(chrome.storage.local, 'get')
      .mockImplementation(() => ({ dataVersion: 'some old version' }));
    jest.spyOn(chrome.storage.local, 'set').mockImplementation(() => {});

    await updateAllLegacyData();

    expect(chrome.storage.local.set).toHaveBeenCalled();
  });
});
