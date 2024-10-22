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
  const languageQuery =
    convertedLanguage === '' ? '' : ` ${convertedLanguage} `;
  const solvedRangeQuery = shouldGenerateSolvedRangeQuery
    ? `s#${solvedMin}..${solvedMax} `
    : '';
  const difficultyRangeQuery =
    startTier === endTier ? `*${startTier} ` : `*${startTier}..${endTier} `;
  const algorithmNamesQuery = shouldGenerateAlgorithmNamesQuery
    ? `(${convertedOperator === '-' ? '-' : ''}${algorithmTags.join(
        convertedOperator,
      )})`
    : '';

  return `(*0&!s?|!*0) o? -w? ${handleBanQuery}${languageQuery}${solvedRangeQuery}${difficultyRangeQuery}${algorithmNamesQuery}`.trim();
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
      return 'lang:en';
    case 'ko/en':
      return '(lang:ko|lang:en)';
    default:
      return '';
  }
};

const convertOperator = (searchOperator: SearchOperator) => {
  if (searchOperator === 'OR') {
    return '|';
  }

  if (searchOperator === 'AND') {
    return '&';
  }

  return '-';
};
