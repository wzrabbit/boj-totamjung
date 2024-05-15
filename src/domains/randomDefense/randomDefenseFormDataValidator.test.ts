import { ALGORITHMS_COUNT } from '~constants/algorithmInfos';
import { validateRandomDefenseFormData } from './randomDefenseFormDataValidator';
import {
  MAX_SEARCH_ALGORITHMS_COUNT,
  MAX_SOLVED_COUNT,
  TITLE_MAX_LENGTH,
} from '~constants/randomDefense';
import type { RandomDefenseFormData } from '~types/randomDefense';

const emptyValidFormData: RandomDefenseFormData = {
  mode: 'easy',
  title: '',
  handle: '',
  solvedMin: '',
  solvedMax: '',
  startTier: 1,
  endTier: 30,
  searchOperator: 'OR',
  algorithmIds: [],
  customQuery: 'tier:g5..g1',
};

describe('# Test 1 - 정상 추첨 판정', () => {
  describe('정상적인 추첨을 이루는 값이 주어질 경우, true를 반환해야 한다.', () => {
    const testcases: RandomDefenseFormData[] = [
      {
        mode: 'easy',
        title: '연습 1',
        handle: 'testuser1234',
        solvedMin: '1',
        solvedMax: '2',
        startTier: 1,
        endTier: 30,
        searchOperator: 'OR',
        algorithmIds: [],
        customQuery: '',
      },
      {
        mode: 'easy',
        title: '123123123123123123123123123123',
        handle: '1_ABc__DeFgHIJ0_KlM9',
        solvedMin: '0',
        solvedMax: '100000',
        startTier: 0,
        endTier: 30,
        searchOperator: 'AND',
        algorithmIds: [1, 2, 3, 4, 5],
        customQuery: 'asdf',
      },
      {
        mode: 'easy',
        title: 'X',
        handle: 'abc',
        solvedMin: '300',
        solvedMax: '',
        startTier: 5,
        endTier: 10,
        searchOperator: 'NOR',
        algorithmIds: [100],
        customQuery: 'a'.repeat(999),
      },
      {
        mode: 'easy',
        title: '테스트 연습 1',
        handle: '',
        solvedMin: '',
        solvedMax: '10000',
        startTier: 3,
        endTier: 3,
        searchOperator: 'OR',
        algorithmIds: [97, 12, 4, 10, 6],
        customQuery: '',
      },
      {
        mode: 'easy',
        title: 'solved max',
        handle: '',
        solvedMin: '100000000',
        solvedMax: '100000000',
        startTier: 19,
        endTier: 19,
        searchOperator: 'OR',
        algorithmIds: [],
        customQuery: '',
      },
      {
        mode: 'easy',
        title: '1★ Practice ☆@!?※△  NOR+=',
        handle: '      ',
        solvedMin: '   ',
        solvedMax: ' ',
        startTier: 8,
        endTier: 29,
        searchOperator: 'OR',
        algorithmIds: [168, 1, 4],
        customQuery: '',
      },
      {
        mode: 'easy',
        title: '0',
        handle: '',
        solvedMin: '',
        solvedMax: '0',
        startTier: 10,
        endTier: 15,
        searchOperator: 'NOR',
        algorithmIds: [168, 1, 4],
        customQuery: '',
      },
      {
        mode: 'manual',
        title: '더러워서 수동으로 연습 만든다',
        handle: 'Invalid Handle',
        solvedMin: '-1029',
        solvedMax: '-92823',
        startTier: 0,
        endTier: 30,
        searchOperator: 'OR',
        algorithmIds: [5, 9, 14, -2],
        customQuery: 'tier:g5..g1 ~@InvalidHandle10293842',
      },
      {
        mode: 'manual',
        title: '',
        handle: '',
        solvedMin: '',
        solvedMax: '',
        startTier: 20,
        endTier: 20,
        searchOperator: 'NOR',
        algorithmIds: [],
        customQuery: 'tier:g5..g1',
      },
    ];

    test.each(testcases)('#%#', (randomDefenseFormData) => {
      expect(validateRandomDefenseFormData(randomDefenseFormData)).toEqual({
        isValid: true,
      });
    });
  });
});

describe('# Test 2 - 잘못된 추첨명에 대응하기', () => {
  test(`추첨명이 ${TITLE_MAX_LENGTH}글자를 넘을 경우, 관련 오류 메시지를 반환해야 한다.`, () => {
    const randomDefenseFormData: RandomDefenseFormData = {
      ...emptyValidFormData,
      title: '1231231231231231231231231231231',
    };

    expect(validateRandomDefenseFormData(randomDefenseFormData)).toEqual({
      isValid: false,
      errorMessage: `추첨 이름은 ${TITLE_MAX_LENGTH}자 이하여야 해요.`,
      focusElementName: 'title',
    });
  });
});

describe('# Test 3 - 잘못된 핸들명에 대응하기', () => {
  test('핸들 이름이 비어있지 않으면서, 핸들명이 3자 미만으로 너무 짧을 경우 관련 오류 메시지를 반환해야 한다.', () => {
    const randomDefenseFormData: RandomDefenseFormData = {
      ...emptyValidFormData,
      handle: 'ab',
    };

    expect(validateRandomDefenseFormData(randomDefenseFormData)).toEqual({
      isValid: false,
      errorMessage: '핸들(닉네임)은 3자 이상 20자 이하여야 해요.',
      focusElementName: 'handle',
    });
  });

  test('핸들 이름이 비어있지 않으면서, 핸들명이 20자 초과로 너무 길 경우 관련 오류 메시지를 반환해야 한다.', () => {
    const randomDefenseFormData: RandomDefenseFormData = {
      ...emptyValidFormData,
      handle: 'too_looooooooooooooooong_handle',
    };

    expect(validateRandomDefenseFormData(randomDefenseFormData)).toEqual({
      isValid: false,
      errorMessage: '핸들(닉네임)은 3자 이상 20자 이하여야 해요.',
      focusElementName: 'handle',
    });
  });

  describe(`핸들 이름이 비어있지 않으면서, 핸들명의 형식이 올바르지 않을 경우 관련 오류 메시지를 반환해야 한다.`, () => {
    const testcases: RandomDefenseFormData[] = [
      {
        ...emptyValidFormData,
        handle: '★Stardust★',
      },
      {
        ...emptyValidFormData,
        handle: 'Lorem Ipsum',
      },
      {
        ...emptyValidFormData,
        handle: '엄준식',
      },
      {
        ...emptyValidFormData,
        handle: '(Test_User)',
      },
      {
        ...emptyValidFormData,
        handle: 'user.name',
      },
    ];

    test.each(testcases)('#%#', (randomDefenseFormData) => {
      expect(validateRandomDefenseFormData(randomDefenseFormData)).toEqual({
        isValid: false,
        focusElementName: 'handle',
        errorMessage:
          '핸들(닉네임)은 영문자, 숫자, 언더바(_), 하이픈(-)으로만 이루어져야 해요.',
      });
    });
  });
});

describe('# Test 4 - 잘못된 맞은 사람 수 범위에 대응하기', () => {
  test('맞은 사람 수의 하한이 음수일 경우 관련 오류 메시지를 반환해야 한다.', () => {
    const randomDefenseFormData: RandomDefenseFormData = {
      ...emptyValidFormData,
      solvedMin: '-3000',
      solvedMax: '',
    };

    expect(validateRandomDefenseFormData(randomDefenseFormData)).toEqual({
      isValid: false,
      errorMessage: '맞은 사람 수의 하한은 양의 정수 또는 0이어야 해요.',
      focusElementName: 'solvedMin',
    });
  });

  test('맞은 사람 수의 하한이 정수가 아닐 경우 관련 오류 메시지를 반환해야 한다.', () => {
    const randomDefenseFormData: RandomDefenseFormData = {
      ...emptyValidFormData,
      solvedMin: '14.3',
      solvedMax: '6',
    };

    expect(validateRandomDefenseFormData(randomDefenseFormData)).toEqual({
      isValid: false,
      errorMessage: '맞은 사람 수의 하한은 양의 정수 또는 0이어야 해요.',
      focusElementName: 'solvedMin',
    });
  });

  test('맞은 사람 수의 상한이 음수일 경우 관련 오류 메시지를 반환해야 한다.', () => {
    const randomDefenseFormData: RandomDefenseFormData = {
      ...emptyValidFormData,
      solvedMin: '30',
      solvedMax: '-30',
    };

    expect(validateRandomDefenseFormData(randomDefenseFormData)).toEqual({
      isValid: false,
      errorMessage: '맞은 사람 수의 상한은 양의 정수 또는 0이어야 해요.',
      focusElementName: 'solvedMax',
    });
  });

  test('하한과 상한 모두 잘못된 값인 경우에는, 하한에 관련된 오류 메시지를 우선적으로 반환해야 한다.', () => {
    const randomDefenseFormData: RandomDefenseFormData = {
      ...emptyValidFormData,
      solvedMin: 'Hello, World!',
      solvedMax: '뷁',
    };

    expect(validateRandomDefenseFormData(randomDefenseFormData)).toEqual({
      isValid: false,
      errorMessage: '맞은 사람 수의 하한은 양의 정수 또는 0이어야 해요.',
      focusElementName: 'solvedMin',
    });
  });

  test(`하한이 ${MAX_SOLVED_COUNT.toLocaleString()}명을 초과할 경우, 관련 오류 메시지를 반환해야 한다.`, () => {
    const randomDefenseFormData: RandomDefenseFormData = {
      ...emptyValidFormData,
      solvedMin: '100000001',
      solvedMax: '149382301',
    };

    expect(validateRandomDefenseFormData(randomDefenseFormData)).toEqual({
      isValid: false,
      errorMessage: `맞은 사람 수는 ${MAX_SOLVED_COUNT.toLocaleString()}명 이하여야 해요.`,
      focusElementName: 'solvedMin',
    });
  });

  test(`상한이 ${MAX_SOLVED_COUNT.toLocaleString()}명을 초과할 경우, 관련 오류 메시지를 반환해야 한다.`, () => {
    const randomDefenseFormData: RandomDefenseFormData = {
      ...emptyValidFormData,
      solvedMin: '99999999',
      solvedMax: '100000001',
    };

    expect(validateRandomDefenseFormData(randomDefenseFormData)).toEqual({
      isValid: false,
      errorMessage: `맞은 사람 수는 ${MAX_SOLVED_COUNT.toLocaleString()}명 이하여야 해요.`,
      focusElementName: 'solvedMax',
    });
  });

  test('하한이 상한보다 클 경우, 관련 오류 메시지를 반환해야 한다.', () => {
    const randomDefenseFormData: RandomDefenseFormData = {
      ...emptyValidFormData,
      solvedMin: '700',
      solvedMax: '200',
    };

    expect(validateRandomDefenseFormData(randomDefenseFormData)).toEqual({
      isValid: false,
      errorMessage: '맞은 사람 수의 하한은 상한보다 클 수 없어요.',
      focusElementName: 'solvedMin',
    });
  });
});

describe('# Test 5 - 잘못된 난이도 범위에 대응하기', () => {
  test('티어의 하한이 상한보다 높을 경우, 관련 오류 메시지를 반환해야 한다.', () => {
    const randomDefenseFormData: RandomDefenseFormData = {
      ...emptyValidFormData,
      startTier: 15,
      endTier: 14,
    };

    expect(validateRandomDefenseFormData(randomDefenseFormData)).toEqual({
      isValid: false,
      errorMessage: '난이도의 범위는 하한보다 상한이 더 낮을 수 없어요.',
    });
  });
});

describe('# Test 6 - 잘못된 알고리즘 분류 아이디에 대응하기', () => {
  test(`알고리즘 분류 아이디의 개수가 상한인 ${MAX_SEARCH_ALGORITHMS_COUNT}개를 넘을 경우, 관련 오류 메시지를 반환해야 한다.`, () => {
    const randomDefenseFormData: RandomDefenseFormData = {
      ...emptyValidFormData,
      algorithmIds: [1, 3, 9, 20, 176, 24],
    };

    expect(validateRandomDefenseFormData(randomDefenseFormData)).toEqual({
      isValid: false,
      errorMessage: `추첨에 사용할 알고리즘의 개수는 ${MAX_SEARCH_ALGORITHMS_COUNT.toLocaleString()}개 이하여야 해요.`,
    });
  });

  describe('잘못된 알고리즘 분류 아이디가 포함되어 있을 경우, 관련 오류 메시지를 반환해야 한다.', () => {
    const testcases: RandomDefenseFormData[] = [
      {
        ...emptyValidFormData,
        algorithmIds: [0, 1, 2, 3, 4],
      },
      {
        ...emptyValidFormData,
        algorithmIds: [ALGORITHMS_COUNT + 1, 8],
      },
      {
        ...emptyValidFormData,
        algorithmIds: [9, 2.5, 45, 10, 2],
      },
      {
        ...emptyValidFormData,
        algorithmIds: [10000000000000000],
      },
    ];

    test.each(testcases)('#%#', (randomDefenseFormData) => {
      expect(validateRandomDefenseFormData(randomDefenseFormData)).toEqual({
        isValid: false,
        errorMessage:
          '잘못된 알고리즘이 포함되어 있는 것 같습니다. 페이지 새로고침 후 다시 시도해 주세요.',
      });
    });
  });
});
