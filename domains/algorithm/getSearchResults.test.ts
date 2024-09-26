import { getSearchResults } from './getSearchResults';
import { ALGORITHM_INFOS } from '@/constants/algorithmInfos';
import type { Algorithm } from '@/types/algorithm';

const allAlgorithms = ALGORITHM_INFOS.map(({ id, name }) => ({ id, name }));

const testcases: [string, Algorithm[]][] = [
  ['그리디 알고리즘', [{ id: 7, name: '그리디 알고리즘' }]],
  ['Convex Hull Trick', [{ id: 70, name: '볼록 껍질을 이용한 최적화' }]],
  [
    'smaller_to_larger',
    [{ id: 69, name: '작은 집합에서 큰 집합으로 합치는 테크닉' }],
  ],
  ['구성적', [{ id: 23, name: '해 구성하기' }]],
  ['', allAlgorithms],
  ['     ', allAlgorithms],
  ['#math', [{ id: 1, name: '수학' }]],
  ['tag:math', [{ id: 1, name: '수학' }]],
  ['math#', []],
  [
    '세그',
    [
      { id: 13, name: '세그먼트 트리' },
      {
        id: 40,
        name: '느리게 갱신되는 세그먼트 트리',
      },
      { id: 96, name: '퍼시스턴트 세그먼트 트리' },
      { id: 114, name: '다차원 세그먼트 트리' },
    ],
  ],
  ['#  브루 트,,포_-스/// 알고리즘', [{ id: 8, name: '브루트포스 알고리즘' }]],
  [
    '하',
    [
      {
        id: 14,
        name: '기하학',
      },
      { id: 23, name: '해 구성하기' },
      {
        id: 79,
        name: '3차원 기하학',
      },
      {
        id: 82,
        name: '가장 긴 증가하는 부분 수열: O(log n)',
      },
      {
        id: 124,
        name: '회전하는 캘리퍼스',
      },
      {
        id: 169,
        name: '4차원 이상의 기하학',
      },
      {
        id: 188,
        name: '하켄부시 게임',
      },
      {
        id: 196,
        name: '경사 하강법',
      },
    ],
  ],
  ['플로이드\u2013워셜', [{ id: 60, name: '플로이드-워셜' }]],
];

describe('Test #1 - 검색 테스트', () => {
  test.each(testcases)('검색어: %s', (keyword, expected) => {
    expect(getSearchResults(keyword)).toEqual(expected);
  });
});
