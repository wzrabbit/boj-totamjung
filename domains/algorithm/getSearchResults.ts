import { Algorithm } from '@/types/algorithm';
import { ALGORITHM_INFOS } from '@/constants/algorithmInfos';
import { getAlgorithmDisplayName } from '@/i18n/getAlgorithmDisplayName';
import type { ResolvedLanguage } from '@/i18n';

const trimWord = (word: string) => {
  const loweredWord = word.toLowerCase();
  const trimmedWord = loweredWord.replace(/^(tag:|#)|[ ,_/-]|–/g, '');

  return trimmedWord;
};

export const getSearchResults = (
  keyword: string,
  language: ResolvedLanguage = 'ko',
): Algorithm[] => {
  const trimmedKeyword = trimWord(keyword);
  const searchResults: Algorithm[] = [];

  ALGORITHM_INFOS.forEach((info) => {
    const { id, name, englishName, tag, alias } = info;
    const acceptableWords = [name, englishName, tag, ...alias].map((word) =>
      trimWord(word),
    );

    const shouldAddToResult =
      trimmedKeyword === '' ||
      acceptableWords.some((word) => word.indexOf(trimmedKeyword) !== -1);

    if (shouldAddToResult) {
      searchResults.push({ id, name: getAlgorithmDisplayName(info, language) });
    }
  });

  return searchResults;
};
