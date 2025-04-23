import type { ProblemInfo } from '@/types/randomDefense';

const diceEmoji = '\u{1F3B2}';
const greenCheckEmoji = '\u2705';
const scrollEmoji = '\u{1f4dc}';

export const getProblemInfosInMarkdownText = (
  slotTitle: string,
  problemInfos: ProblemInfo[],
) => {
  const problemListInMarkdownText = problemInfos
    .map(
      ({ problemId, title }) =>
        `- ${problemId}번 - ${title} (https://acmicpc.net/problem/${problemId})`,
    )
    .join('\n');

  return `
# 추첨 결과 ${diceEmoji}

## 추첨 정보 ${greenCheckEmoji}

- 추첨 이름: ${slotTitle}
- 문제 수: ${problemInfos.length}

## 문제 목록 ${scrollEmoji}
${problemListInMarkdownText}
`.trim();
};
