import {
  convertV1ToV2OptionsData,
  convertV2ToLatestOptionsData,
} from './converters/legacyToLatestOptionsDataConverter';
import {
  DEFAULT_CHECKED_ALGORITHM_IDS,
  DEFAULT_FONT_NO,
  DEFAULT_GACHA_OPTIONS,
  DEFAULT_IS_TIER_HIDDEN,
  DEFAULT_QUICK_SLOTS,
  DEFAULT_RANDOM_DEFENSE_HISTORY,
  DEFAULT_TIMERS,
} from '@/constants/defaultValues';
import { V2 } from '@/types/legacyData';
import { OptionsData } from '@/types/options';

describe('Test #1 - 데이터 변환 테스트', () => {
  test('1버전 데이터가 올바를 경우 온전하게 2버전 데이터로 변환하여 값을 반환해야 한다.', async () => {
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
      timer: { expire: 1728488132677, hour: '1', minute: '30', problem: 1234 },
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

    const expected: V2.OptionsData = {
      checkedAlgorithmIds: [1, 2, 4, 7, 14, 156, 171, 194, 200, 1234],
      dataVersion: 2,
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
          createdAt: '2024-06-30T13:34:10.000Z',
          problemId: 1036,
          tier: 15,
          title: '36진수',
        },
        {
          createdAt: '2024-06-28T11:33:36.000Z',
          problemId: 29063,
          tier: 0,
          title: 'Телепорты',
        },
        {
          createdAt: '2024-06-12T13:51:23.000Z',
          problemId: 28050,
          tier: 18,
          title: 'Kind Baker',
        },
        {
          createdAt: '2024-06-12T13:44:54.000Z',
          problemId: 30513,
          tier: 21,
          title: '하이퍼 삼각형 자르기',
        },
        {
          createdAt: '2024-06-12T12:49:04.000Z',
          problemId: 23912,
          tier: 18,
          title: 'Locked Doors',
        },
        {
          createdAt: '2024-06-12T12:48:56.000Z',
          problemId: 5751,
          tier: 3,
          title: 'Head or Tail',
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
          createdAt: '2024-06-12T09:25:01.000Z',
          problemId: 24141,
          tier: 12,
          title: 'インフルエンザ (Flu)',
        },
        {
          createdAt: '2023-06-29T10:02:25.000Z',
          problemId: 14434,
          tier: 15,
          title: '놀이기구1',
        },
      ],
      timers: [
        {
          problemId: 1234,
          expiresAt: '2024-10-09T15:35:32.677Z',
        },
      ],
      totamjungTheme: 'totamjung',
      fontNo: 19,
      shouldShowWelcomeMessage: false,
    };

    expect(convertV1ToV2OptionsData(legacySyncData, legacyLocalData)).toEqual(
      expected,
    );
  });

  test('2버전 데이터가 올바른 경우 온전하게 최신 버전의 데이터로 변환하여 값을 반환해야 한다.', async () => {
    const legacyData: V2.OptionsData = {
      checkedAlgorithmIds: [1, 2, 4, 7, 14, 156, 171, 194, 200, 1234],
      dataVersion: 2,
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
          createdAt: '2024-06-30T13:34:10.000Z',
          problemId: 1036,
          tier: 15,
          title: '36진수',
        },
        {
          createdAt: '2024-06-28T11:33:36.000Z',
          problemId: 29063,
          tier: 0,
          title: 'Телепорты',
        },
        {
          createdAt: '2024-06-12T13:51:23.000Z',
          problemId: 28050,
          tier: 18,
          title: 'Kind Baker',
        },
        {
          createdAt: '2024-06-12T13:44:54.000Z',
          problemId: 30513,
          tier: 21,
          title: '하이퍼 삼각형 자르기',
        },
        {
          createdAt: '2024-06-12T12:49:04.000Z',
          problemId: 23912,
          tier: 18,
          title: 'Locked Doors',
        },
        {
          createdAt: '2024-06-12T12:48:56.000Z',
          problemId: 5751,
          tier: 3,
          title: 'Head or Tail',
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
          createdAt: '2024-06-12T09:25:01.000Z',
          problemId: 24141,
          tier: 12,
          title: 'インフルエンザ (Flu)',
        },
        {
          createdAt: '2023-06-29T10:02:25.000Z',
          problemId: 14434,
          tier: 15,
          title: '놀이기구1',
        },
      ],
      timers: [
        {
          problemId: 1234,
          expiresAt: '3024-10-09T15:35:32.677Z',
        },
        {
          problemId: 5678,
          expiresAt: '3025-10-09T15:35:32.677Z',
        },
      ],
      totamjungTheme: 'totamjung',
      fontNo: 19,
      shouldShowWelcomeMessage: false,
    };

    const expected: OptionsData = {
      checkedAlgorithmIds: [1, 2, 4, 7, 14, 156, 171, 194, 200, 1234],
      dataVersion: 3,
      hiderOptions: {
        algorithmHiderUsage: 'always',
        problemTagLockDuration: { hours: 1, minutes: 30 },
        problemTagLockUsage: 'click',
        shouldHideTier: false,
        shouldWarnHighTier: false,
        shouldRevealTierOnHover: false,
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
          createdAt: '2024-06-30T13:34:10.000Z',
          problemId: 1036,
          tier: 15,
          title: '36진수',
        },
        {
          createdAt: '2024-06-28T11:33:36.000Z',
          problemId: 29063,
          tier: 0,
          title: 'Телепорты',
        },
        {
          createdAt: '2024-06-12T13:51:23.000Z',
          problemId: 28050,
          tier: 18,
          title: 'Kind Baker',
        },
        {
          createdAt: '2024-06-12T13:44:54.000Z',
          problemId: 30513,
          tier: 21,
          title: '하이퍼 삼각형 자르기',
        },
        {
          createdAt: '2024-06-12T12:49:04.000Z',
          problemId: 23912,
          tier: 18,
          title: 'Locked Doors',
        },
        {
          createdAt: '2024-06-12T12:48:56.000Z',
          problemId: 5751,
          tier: 3,
          title: 'Head or Tail',
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
          createdAt: '2024-06-12T09:25:01.000Z',
          problemId: 24141,
          tier: 12,
          title: 'インフルエンザ (Flu)',
        },
        {
          createdAt: '2023-06-29T10:02:25.000Z',
          problemId: 14434,
          tier: 15,
          title: '놀이기구1',
        },
      ],
      timers: [
        {
          problemId: 1234,
          expiresAt: '3024-10-09T15:35:32.677Z',
        },
        {
          problemId: 5678,
          expiresAt: '3025-10-09T15:35:32.677Z',
        },
      ],
      gachaOptions: DEFAULT_GACHA_OPTIONS,
      totamjungTheme: 'totamjung',
      fontNo: 19,
      shouldShowWelcomeMessage: false,
    };

    expect(convertV2ToLatestOptionsData(legacyData)).toEqual(expected);
  });
});

describe('Test #2 - 손상된 데이터 변환 테스트', () => {
  test('손상된 1버전 데이터를 2버전 데이터로 변환할 경우 복구 가능한 범위 내에서 복구한 데이터를 반환해야 한다.', async () => {
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

    const expected: V2.OptionsData = {
      checkedAlgorithmIds: [1, 2, 4, 7, 14, 171, 194, 200, 1234],
      dataVersion: 2,
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
          createdAt: '2024-06-12T12:49:04.000Z',
          problemId: 23912,
          tier: 18,
          title: 'Locked Doors',
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
      ],
      timers: [],
      totamjungTheme: 'none',
      shouldShowWelcomeMessage: false,
      fontNo: 3,
    };

    expect(convertV1ToV2OptionsData(legacySyncData, legacyLocalData)).toEqual(
      expected,
    );
  });

  test('1버전 데이터의 일부 키값이 복구가 불가능할 정도로 손상되어 있다면, 해당 키 값들에 대해서는 2버전의 초기 데이터를 반환해야 한다.', async () => {
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

    const expected: V2.OptionsData = {
      checkedAlgorithmIds: DEFAULT_CHECKED_ALGORITHM_IDS,
      dataVersion: 2,
      hiderOptions: {
        algorithmHiderUsage: 'click',
        problemTagLockDuration: { hours: 1, minutes: 30 },
        problemTagLockUsage: 'click',
        shouldHideTier: false,
        shouldWarnHighTier: false,
        warnTier: 1,
      },
      isTierHidden: DEFAULT_IS_TIER_HIDDEN,
      quickSlots: DEFAULT_QUICK_SLOTS,
      randomDefenseHistory: DEFAULT_RANDOM_DEFENSE_HISTORY,
      timers: DEFAULT_TIMERS,
      totamjungTheme: 'totamjung',
      fontNo: DEFAULT_FONT_NO,
      shouldShowWelcomeMessage: false,
    };

    expect(convertV1ToV2OptionsData(legacySyncData, legacyLocalData)).toEqual(
      expected,
    );
  });

  test('손상된 2버전 데이터를 3버전 데이터로 변환할 경우 복구 가능한 범위 내에서 복구한 데이터를 반환해야 한다.', async () => {
    const legacyData = {
      checkedAlgorithmIds: ['', -2.3, -5, 'foo', 1, 2, 3, undefined, null],
      dataVersion: 2,
      hiderOptions: {
        algorithmHiderUsage: 'click',
        problemTagLockDuration: { hours: 0, minutes: 20 },
        problemTagLockUsage: 'auto',
        shouldHideTier: true,
        shouldWarnHighTier: true,
        warnTier: 16,
      },
      quickSlots: {
        hotkey: 'F2',
        selectedSlotNo: 0,
        slots: {
          1: 'asdf',
          2: {},
          3: 100,
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
          6: { empty: true },
          7: 'not an object',
          8: { isEmpty: true },
          9: { isEmpty: true },
          0: { isEmpty: true },
        },
      },
      randomDefenseHistory: [
        {
          createdAt: '2024-06-30T13:34:10.000Z',
          problemId: 1036,
          tier: 15,
          title: '36진수',
        },
        {
          createdAt: '2024-06-28T11:33:36.000Z',
          problemId: 29063,
          tier: 0,
          title: 'Телепорты',
        },
        null,
        {
          date: '2024-06-12 21:49:04',
          no: 23912,
          tier: 18,
          title: 'Locked Doors',
        },
      ],
      timers: [
        {
          problemId: 12340,
          expiresAt: '2034-10-09T15:35:32.677Z',
        },
        { foo: 1 },
        {
          problemId: 30291,
          expiresAt: '2034-10-19T15:35:32.677Z',
        },
      ],
      totamjungTheme: 'totamjung',
      fontNo: 5,
      shouldShowWelcomeMessage: true,
    };

    const expected: OptionsData = {
      checkedAlgorithmIds: [1, 2, 3],
      quickSlots: {
        hotkey: 'F2',
        selectedSlotNo: 0,
        slots: {
          1: { isEmpty: true },
          2: { isEmpty: true },
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
      hiderOptions: {
        algorithmHiderUsage: 'click',
        problemTagLockDuration: { hours: 0, minutes: 20 },
        problemTagLockUsage: 'auto',
        shouldHideTier: true,
        shouldWarnHighTier: true,
        shouldRevealTierOnHover: false,
        warnTier: 16,
      },
      randomDefenseHistory: [
        {
          createdAt: '2024-06-30T13:34:10.000Z',
          problemId: 1036,
          tier: 15,
          title: '36진수',
        },
        {
          createdAt: '2024-06-28T11:33:36.000Z',
          problemId: 29063,
          tier: 0,
          title: 'Телепорты',
        },
      ],
      timers: [
        {
          problemId: 12340,
          expiresAt: '2034-10-09T15:35:32.677Z',
        },
        {
          problemId: 30291,
          expiresAt: '2034-10-19T15:35:32.677Z',
        },
      ],
      gachaOptions: {
        isTierHidden: false,
        isAudioMuted: true,
      },
      totamjungTheme: 'totamjung',
      fontNo: 5,
      shouldShowWelcomeMessage: true,
      dataVersion: 3,
      isTierHidden: false,
    };

    expect(convertV2ToLatestOptionsData(legacyData)).toEqual(expected);
  });
});
