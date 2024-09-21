import { Algorithm } from '~types/algorithm';
import { ALGORITHM_INFOS } from '~constants/algorithmInfos';

const trimWord = (word: string) => {
  const loweredWord = word.toLowerCase();
  const trimmedWord = loweredWord.replace(/^(tag:|#)|[ ,_/-]|\u2013/g, '');

  return trimmedWord;
};

export const getSearchResults = (keyword: string) => {
  const trimmedKeyword = trimWord(keyword);
  const searchResults: Algorithm[] = [];

  ALGORITHM_INFOS.forEach(({ id, name, englishName, tag, alias }) => {
    const acceptableWords = [name, englishName, tag, ...alias].map((word) =>
      trimWord(word),
    );

    const shouldAddToResult =
      trimmedKeyword === '' ||
      acceptableWords.some((word) => word.indexOf(trimmedKeyword) !== -1);

    if (shouldAddToResult) {
      searchResults.push({ id, name });
    }
  });

  return searchResults;
};
