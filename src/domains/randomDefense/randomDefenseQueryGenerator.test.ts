import { generateRandomDefenseQuery } from './randomDefenseQueryGenerator';
import type { RandomDefenseFormData } from '~types/randomDefense';

describe('#Test 1 - 쿼리 생성 테스트', () => {
  const testcases: [RandomDefenseFormData, string][] = [
    [
      {
        mode: 'easy',
        title: '랜덤 디펜스',
        handle: 'test_user',
        solvedMin: '100',
        solvedMax: '500',
        startTier: 10,
        endTier: 16,
        searchOperator: 'OR',
        algorithmIds: [],
        customQuery: '',
      },
      '(*0&s?false|!*0) o?true w?false ~@test_user s#100..500 *10..16',
    ],
    [
      {
        mode: 'easy',
        title: '골랜디',
        handle: '',
        solvedMin: '',
        solvedMax: '',
        startTier: 11,
        endTier: 15,
        searchOperator: 'OR',
        algorithmIds: [],
        customQuery: '',
      },
      '(*0&s?false|!*0) o?true w?false *11..15',
    ],
    [
      {
        mode: 'easy',
        title: '실버 그리디',
        handle: 'silverlove1234',
        solvedMin: '200',
        solvedMax: '',
        startTier: 6,
        endTier: 10,
        searchOperator: 'OR',
        algorithmIds: [7],
        customQuery: '',
      },
      '(*0&s?false|!*0) o?true w?false ~@silverlove1234 s#200.. *6..10 (#greedy)',
    ],
    [
      {
        mode: 'easy',
        title: '언레사냥',
        handle: 'ChoGosu',
        solvedMin: '',
        solvedMax: '',
        startTier: 0,
        endTier: 0,
        searchOperator: 'NOR',
        algorithmIds: [],
        customQuery: 'foobar 1234',
      },
      '(*0&s?false|!*0) o?true w?false ~@ChoGosu *0',
    ],
    [
      {
        mode: 'easy',
        title: 'bfs random defense',
        handle: '',
        solvedMin: '',
        solvedMax: '10000',
        startTier: 1,
        endTier: 30,
        searchOperator: 'AND',
        algorithmIds: [4, 9, 16],
        customQuery: '',
      },
      '(*0&s?false|!*0) o?true w?false s#..10000 *1..30 (#graphs&#graph_traversal&#bfs)',
    ],
    [
      {
        mode: 'easy',
        title: '수학시러',
        handle: '',
        solvedMin: '0',
        solvedMax: '',
        startTier: 1,
        endTier: 30,
        searchOperator: 'NOR',
        algorithmIds: [1, 14],
        customQuery: '',
      },
      '(*0&s?false|!*0) o?true w?false s#0.. *1..30 (-#math-#geometry)',
    ],
  ];

  test.each(testcases)('%c"%s"', (queryInfo, result) => {
    expect(generateRandomDefenseQuery(queryInfo)).toBe(result);
  });
});

describe('#Test 2 - 커스텀 쿼리 생성 테스트', () => {
  test('사용자가 직접 생성 모드를 통해 쿼리를 생성한 경우, 별도의 쿼리 생성을 하지 않고 사용자가 명시한 쿼리를 그대로 반환하여야 한다.', () => {
    const queryInfo: RandomDefenseFormData = {
      mode: 'manual',
      title: '직접 적어서 만든 쿼리',
      handle: '',
      solvedMin: '200',
      solvedMax: '500',
      startTier: 1,
      endTier: 30,
      searchOperator: 'NOR',
      algorithmIds: [],
      customQuery: 'A+B',
    };

    expect(generateRandomDefenseQuery(queryInfo)).toBe('A+B');
  });
});
