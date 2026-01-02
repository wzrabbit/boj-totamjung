import { ALGORITHM_INFOS } from '@/constants/algorithmInfos';
import type {
  RandomDefenseFormData,
  Language,
  SearchOperator,
  TierWithoutNotRatable,
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
  const shouldGenerateAlgorithmNamesQuery = algorithmTags.length > 0;

  const handleBanQuery = shouldGenerateHandleBanQuery ? `~@${handle} ` : '';
  const solvedRangeQuery = getSolvedRangeQuery(solvedMin, solvedMax);
  const languageQuery = convertedLanguage === '' ? '' : `${convertedLanguage} `;
  const difficultyRangeQuery = getDifficultyRangeQuery(startTier, endTier);
  const algorithmNamesQuery = shouldGenerateAlgorithmNamesQuery
    ? algorithmTags.length === 1
      ? `${convertedOperator === '~' ? '~' : ''}${algorithmTags[0]}`
      : `(${convertedOperator === '~' ? '~' : ''}${algorithmTags.join(
          convertedOperator,
        )})`
    : '';

  return `(*0&!s?|!*0) o? -w? ${handleBanQuery}${solvedRangeQuery}${languageQuery}${difficultyRangeQuery}${algorithmNamesQuery}`.trim();
};

const getSolvedRangeQuery = (solvedMin: string, solvedMax: string) => {
  if (solvedMin.trim() === '' && solvedMax.trim() === '') {
    return '';
  }

  if (solvedMin === solvedMax) {
    return `s#${solvedMin} `;
  }

  return `s#${solvedMin}..${solvedMax} `;
};

const rankFirstLetters = ['b', 's', 'g', 'p', 'd', 'r'] as const;

const getDifficultyRangeQuery = (
  startTier: TierWithoutNotRatable,
  endTier: TierWithoutNotRatable,
) => {
  if (startTier === 0 && endTier === 30) {
    return '';
  }

  if (startTier % 5 === 1 && startTier + 4 === endTier) {
    return `*${rankFirstLetters[Math.floor(startTier / 5)]} `;
  }

  if (startTier % 5 === 1 && endTier % 5 === 0) {
    const startRankLetter = rankFirstLetters[Math.floor(startTier / 5)];
    const endRankLetter = rankFirstLetters[Math.floor(endTier / 5) - 1];

    return `*${startRankLetter}..${endRankLetter} `;
  }

  if (startTier === endTier) {
    return `*${startTier} `;
  }

  return `*${startTier}..${endTier} `;
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
      return '%ko';
    case 'en':
      return '(%en~%ko~%ja~%sv)';
    case 'ko/en':
      return '(%ko|(%en~%ja~%sv))';
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
