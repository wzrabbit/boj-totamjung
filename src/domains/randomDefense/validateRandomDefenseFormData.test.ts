import { validateRandomDefenseFormData } from './validateRandomDefenseFormData';
import { MAX_SOLVED_COUNT, TITLE_MAX_LENGTH } from '~constants/randomDefense';
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
