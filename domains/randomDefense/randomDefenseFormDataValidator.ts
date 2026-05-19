import {
  TITLE_MAX_LENGTH,
  HANDLE_REGEX,
  NUMBER_REGEX,
  MAX_SOLVED_COUNT,
  MAX_SEARCH_ALGORITHMS_COUNT,
  MAX_CUSTOM_QUERY_LENGTH,
} from '@/constants/randomDefense';
import { ALGORITHMS_COUNT } from '@/constants/algorithmInfos';
import {
  isNumericArray,
  isObject,
  isTierWithoutNotRatable,
} from '@/types/typeGuards';
import type {
  Language,
  RandomDefenseFormData,
  RandomDefenseFormDataVerdict,
} from '@/types/randomDefense';

export const isLanguage = (data: unknown): data is Language => {
  return (
    typeof data === 'string' && ['ko', 'en', 'ko/en', 'all'].includes(data)
  );
};

export const isRandomDefenseFormData = (
  data: unknown,
): data is RandomDefenseFormData => {
  return (
    isObject(data) &&
    'mode' in data &&
    'title' in data &&
    'handle' in data &&
    'solvedMin' in data &&
    'solvedMax' in data &&
    'language' in data &&
    'startTier' in data &&
    'endTier' in data &&
    'searchOperator' in data &&
    'algorithmIds' in data &&
    'customQuery' in data &&
    typeof data.mode === 'string' &&
    ['easy', 'manual'].includes(data.mode) &&
    typeof data.title === 'string' &&
    typeof data.handle === 'string' &&
    typeof data.language === 'string' &&
    typeof data.solvedMin === 'string' &&
    typeof data.solvedMax === 'string' &&
    isNumericArray(data.algorithmIds) &&
    isTierWithoutNotRatable(data.startTier) &&
    isTierWithoutNotRatable(data.endTier) &&
    typeof data.searchOperator === 'string' &&
    ['OR', 'AND', 'NOR'].includes(data.searchOperator) &&
    typeof data.customQuery === 'string'
  );
};

export const validateRandomDefenseFormData = (
  randomDefenseFormData: RandomDefenseFormData,
): RandomDefenseFormDataVerdict => {
  const {
    mode,
    title,
    handle,
    solvedMin,
    solvedMax,
    startTier,
    endTier,
    algorithmIds,
    customQuery,
  } = randomDefenseFormData;

  const validationResults =
    mode === 'easy'
      ? [
          validateTitle(title),
          validateHandle(handle),
          validateSolvedCount(solvedMin, solvedMax),
          validateDifficulty(startTier, endTier),
          validateAlgorithmIds(algorithmIds),
        ]
      : [validateTitle(title), validateCustomQuery(customQuery)];

  for (let i = 0; i < validationResults.length; i++) {
    const currentValidationResult = validationResults[i];

    if (!currentValidationResult.isValid) {
      return currentValidationResult;
    }
  }

  return {
    isValid: true,
  };
};

const validateTitle = (
  title: RandomDefenseFormData['title'],
): RandomDefenseFormDataVerdict => {
  if (title.length > TITLE_MAX_LENGTH) {
    return {
      isValid: false,
      errorMessage: {
        key: 'errors.randomDefenseForm.titleTooLong',
        substitutions: [String(TITLE_MAX_LENGTH)],
      },
      focusElementName: 'title',
    };
  }

  return {
    isValid: true,
  };
};

const validateHandle = (
  handle: RandomDefenseFormData['handle'],
): RandomDefenseFormDataVerdict => {
  if (handle.trim() === '') {
    return {
      isValid: true,
    };
  }

  if (handle.length < 3 || handle.length > 20) {
    return {
      isValid: false,
      errorMessage: { key: 'errors.randomDefenseForm.handleLength' },
      focusElementName: 'handle',
    };
  }

  if (!HANDLE_REGEX.test(handle)) {
    return {
      isValid: false,
      errorMessage: { key: 'errors.randomDefenseForm.handleFormat' },
      focusElementName: 'handle',
    };
  }

  return {
    isValid: true,
  };
};

const validateSolvedCount = (
  solvedMin: RandomDefenseFormData['solvedMin'],
  solvedMax: RandomDefenseFormData['solvedMax'],
): RandomDefenseFormDataVerdict => {
  const numerizedSolvedMin = Number(solvedMin);
  const numerizedSolvedMax = Number(solvedMax);
  const isSolvedMinEmpty = solvedMin.trim() === '';
  const isSolvedMaxEmpty = solvedMax.trim() === '';

  if (!isSolvedMinEmpty && !NUMBER_REGEX.test(solvedMin)) {
    return {
      isValid: false,
      errorMessage: { key: 'errors.randomDefenseForm.solvedMinFormat' },
      focusElementName: 'solvedMin',
    };
  }

  if (!isSolvedMaxEmpty && !NUMBER_REGEX.test(solvedMax)) {
    return {
      isValid: false,
      errorMessage: { key: 'errors.randomDefenseForm.solvedMaxFormat' },
      focusElementName: 'solvedMax',
    };
  }

  if (!isSolvedMinEmpty && numerizedSolvedMin > MAX_SOLVED_COUNT) {
    return {
      isValid: false,
      errorMessage: {
        key: 'errors.randomDefenseForm.solvedCountTooLarge',
        substitutions: [MAX_SOLVED_COUNT.toLocaleString()],
      },
      focusElementName: 'solvedMin',
    };
  }

  if (!isSolvedMaxEmpty && numerizedSolvedMax > MAX_SOLVED_COUNT) {
    return {
      isValid: false,
      errorMessage: {
        key: 'errors.randomDefenseForm.solvedCountTooLarge',
        substitutions: [MAX_SOLVED_COUNT.toLocaleString()],
      },
      focusElementName: 'solvedMax',
    };
  }

  if (
    !isSolvedMinEmpty &&
    !isSolvedMaxEmpty &&
    numerizedSolvedMin > numerizedSolvedMax
  ) {
    return {
      isValid: false,
      errorMessage: { key: 'errors.randomDefenseForm.solvedMinGreaterThanMax' },
      focusElementName: 'solvedMin',
    };
  }

  return {
    isValid: true,
  };
};

const validateDifficulty = (
  startTier: RandomDefenseFormData['startTier'],
  endTier: RandomDefenseFormData['endTier'],
): RandomDefenseFormDataVerdict => {
  const numerizedDifficultyMin = Number(startTier);
  const numerizedDifficultyMax = Number(endTier);

  if (numerizedDifficultyMin > numerizedDifficultyMax) {
    return {
      isValid: false,
      errorMessage: { key: 'errors.randomDefenseForm.difficultyRangeInverted' },
    };
  }

  return {
    isValid: true,
  };
};

const validateAlgorithmIds = (
  algorithmIds: RandomDefenseFormData['algorithmIds'],
): RandomDefenseFormDataVerdict => {
  if (algorithmIds.length > MAX_SEARCH_ALGORITHMS_COUNT) {
    return {
      isValid: false,
      errorMessage: {
        key: 'errors.randomDefenseForm.algorithmCountTooMany',
        substitutions: [MAX_SEARCH_ALGORITHMS_COUNT.toLocaleString()],
      },
    };
  }
  const isAlgorithmIdsValid = algorithmIds.every(
    (algorithmId) =>
      typeof algorithmId === 'number' &&
      algorithmId % 1 === 0 &&
      algorithmId >= 1 &&
      algorithmId <= ALGORITHMS_COUNT,
  );

  if (!isAlgorithmIdsValid) {
    return {
      isValid: false,
      errorMessage: { key: 'errors.randomDefenseForm.invalidAlgorithm' },
    };
  }

  return {
    isValid: true,
  };
};

const validateCustomQuery = (
  customQuery: RandomDefenseFormData['customQuery'],
): RandomDefenseFormDataVerdict => {
  if (customQuery.trim() === '') {
    return {
      isValid: false,
      errorMessage: { key: 'errors.randomDefenseForm.queryEmpty' },
      focusElementName: 'customQuery',
    };
  }

  if (customQuery.length > MAX_CUSTOM_QUERY_LENGTH) {
    return {
      isValid: false,
      errorMessage: {
        key: 'errors.randomDefenseForm.queryTooLong',
        substitutions: [String(MAX_CUSTOM_QUERY_LENGTH)],
      },
      focusElementName: 'customQuery',
    };
  }

  return {
    isValid: true,
  };
};
