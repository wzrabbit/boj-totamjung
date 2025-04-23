import type { ProblemInfo } from '@/types/randomDefense';
import { getProblemInfosInMarkdownText } from './getProblemInfosInMarkdownText';

describe('Test #1 - 마크다운 텍스트 생성 테스트', () => {
  test('문제 정보들이 주어지면, 문제 정보르 마크다운으로 나타낸 텍스트를 올바르게 반환하여야 한다.', () => {
    const problemInfos: ProblemInfo[] = [
      {
        problemId: 22289,
        title: '큰 수 곱셈 (3)',
        tier: 20,
      },
      {
        problemId: 1064,
        title: '평행사변형',
        tier: 6,
      },
      {
        problemId: 31002,
        title: '그래프 변환',
        tier: 14,
      },
    ];

    const expectedMarkdownText = `
# 추첨 결과 \u{1F3B2}

## 추첨 정보 \u2705

- 추첨 이름: 테스트용 연습
- 문제 수: 3

## 문제 목록 \u{1f4dc}
- 22289번 - 큰 수 곱셈 (3) (https://acmicpc.net/problem/22289)
- 1064번 - 평행사변형 (https://acmicpc.net/problem/1064)
- 31002번 - 그래프 변환 (https://acmicpc.net/problem/31002)
`.trim();

    expect(getProblemInfosInMarkdownText('테스트용 연습', problemInfos)).toBe(
      expectedMarkdownText,
    );
  });
});
