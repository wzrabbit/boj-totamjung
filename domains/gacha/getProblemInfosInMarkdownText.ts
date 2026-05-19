import type { ProblemInfo } from '@/types/randomDefense';
import { getMessage } from '@/i18n/dict';
import type { ResolvedLanguage } from '@/i18n';

const diceEmoji = '\u{1F3B2}';
const greenCheckEmoji = '✅';
const scrollEmoji = '\u{1f4dc}';

export const getProblemInfosInMarkdownText = (
  slotTitle: string,
  problemInfos: ProblemInfo[],
  language: ResolvedLanguage,
) => {
  const t = (
    key: Parameters<typeof getMessage>[1],
    substitutions?: readonly string[],
  ) => getMessage(language, key, substitutions);

  const problemListInMarkdownText = problemInfos
    .map(({ problemId, title }) =>
      t('markdown.gacha.problemListItem', [
        String(problemId),
        title,
        String(problemId),
      ]),
    )
    .join('\n');

  return `
# ${t('markdown.gacha.headingResult')} ${diceEmoji}

## ${t('markdown.gacha.headingInfo')} ${greenCheckEmoji}

- ${t('markdown.gacha.drawName', [slotTitle])}
- ${t('markdown.gacha.problemCount', [String(problemInfos.length)])}

## ${t('markdown.gacha.headingProblemList')} ${scrollEmoji}
${problemListInMarkdownText}
`.trim();
};
