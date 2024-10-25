import { ALGORITHM_INFOS } from '@/constants/algorithmInfos';
import type {
  RandomDefenseFormData,
  Language,
  SearchOperator,
} from '@/types/randomDefense';

export const generateRandomDefenseQuery = (
  randomDefenseFormData: RandomDefenseFormData,
) => {
  const {
    mode,
    handle,
    solvedMin,
    solvedMax,
    language,
    startTier,
    endTier,
    searchOperator,
    algorithmIds,
    customQuery,
  } = randomDefenseFormData;

  if (mode === 'manual') {
    return customQuery.replace(/\n/g, ' ').trim();
  }

  const algorithmTags = generateAlgorithmTags(algorithmIds);
  const convertedLanguage = convertLanguage(language);
  const convertedOperator = convertOperator(searchOperator);

  const shouldGenerateHandleBanQuery = handle.trim() !== '';
  const shouldGenerateSolvedRangeQuery =
    solvedMin.trim() !== '' || solvedMax.trim() !== '';
  const shouldGenerateAlgorithmNamesQuery = algorithmTags.length > 0;

  const handleBanQuery = shouldGenerateHandleBanQuery ? `~@${handle} ` : '';
  const solvedRangeQuery = shouldGenerateSolvedRangeQuery
    ? `s#${solvedMin}..${solvedMax} `
    : '';
  const languageQuery = convertedLanguage === '' ? '' : `${convertedLanguage} `;
  const difficultyRangeQuery =
    startTier === endTier ? `*${startTier} ` : `*${startTier}..${endTier} `;
  const algorithmNamesQuery = shouldGenerateAlgorithmNamesQuery
    ? algorithmTags.length === 1
      ? algorithmTags[0]
      : `(${convertedOperator === '~' ? '~' : ''}${algorithmTags.join(
          convertedOperator,
        )})`
    : '';

  return `(*0&!s?|!*0) o? -w? ${handleBanQuery}${solvedRangeQuery}${languageQuery}${difficultyRangeQuery}${algorithmNamesQuery}`.trim();
};

const generateAlgorithmTags = (algorithmIds: number[]) => {
  const algorithmTags: string[] = [];

  algorithmIds.forEach((algorithmId) => {
    const searchedAlgorithmName = ALGORITHM_INFOS.find(
      (info) => info.id === algorithmId,
    )?.tag;

    if (searchedAlgorithmName) {
      algorithmTags.push(`#${searchedAlgorithmName}`);
    }
  });

  return algorithmTags;
};

export const convertLanguage = (language: Language) => {
  switch (language) {
    case 'ko':
      return 'lang:ko';
    case 'en':
      return '(lang:en~lang:ko~lang:ja~lang:sv)';
    case 'ko/en':
      return '(lang:ko|(lang:en~lang:ja~lang:sv))';
    default:
      return '';
  }
};

const convertOperator = (searchOperator: SearchOperator) => {
  switch (searchOperator) {
    case 'OR':
      return '|';
    case 'AND':
      return '&';
    default:
      return '~';
  }
};
