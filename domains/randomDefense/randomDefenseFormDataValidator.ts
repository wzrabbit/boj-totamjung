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
  RandomDefenseFormData,
  RandomDefenseFormDataVerdict,
} from '@/types/randomDefense';

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
    'startTier' in data &&
    'endTier' in data &&
    'searchOperator' in data &&
    'algorithmIds' in data &&
    'customQuery' in data &&
    typeof data.mode === 'string' &&
    ['easy', 'manual'].includes(data.mode) &&
    typeof data.title === 'string' &&
    typeof data.handle === 'string' &&
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
      errorMessage: `추첨 이름은 ${TITLE_MAX_LENGTH}자 이하여야 해요.`,
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
      errorMessage: '핸들(닉네임)은 3자 이상 20자 이하여야 해요.',
      focusElementName: 'handle',
    };
  }

  if (!HANDLE_REGEX.test(handle)) {
    return {
      isValid: false,
      errorMessage:
        '핸들(닉네임)은 영문자, 숫자, 언더바(_), 하이픈(-)으로만 이루어져야 해요.',
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
      errorMessage: '맞은 사람 수의 하한은 양의 정수 또는 0이어야 해요.',
      focusElementName: 'solvedMin',
    };
  }

  if (!isSolvedMaxEmpty && !NUMBER_REGEX.test(solvedMax)) {
    return {
      isValid: false,
      errorMessage: '맞은 사람 수의 상한은 양의 정수 또는 0이어야 해요.',
      focusElementName: 'solvedMax',
    };
  }

  if (!isSolvedMinEmpty && numerizedSolvedMin > MAX_SOLVED_COUNT) {
    return {
      isValid: false,
      errorMessage: `맞은 사람 수는 ${MAX_SOLVED_COUNT.toLocaleString()}명 이하여야 해요.`,
      focusElementName: 'solvedMin',
    };
  }

  if (!isSolvedMaxEmpty && numerizedSolvedMax > MAX_SOLVED_COUNT) {
    return {
      isValid: false,
      errorMessage: `맞은 사람 수는 ${MAX_SOLVED_COUNT.toLocaleString()}명 이하여야 해요.`,
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
      errorMessage: '맞은 사람 수의 하한은 상한보다 클 수 없어요.',
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
      errorMessage: '난이도의 범위는 하한보다 상한이 더 낮을 수 없어요.',
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
      errorMessage: `추첨에 사용할 알고리즘의 개수는 ${MAX_SEARCH_ALGORITHMS_COUNT.toLocaleString()}개 이하여야 해요.`,
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
      errorMessage:
        '잘못된 알고리즘이 포함되어 있는 것 같습니다. 페이지 새로고침 후 다시 시도해 주세요.',
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
      errorMessage: '쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.',
      focusElementName: 'customQuery',
    };
  }

  if (customQuery.length > MAX_CUSTOM_QUERY_LENGTH) {
    return {
      isValid: false,
      errorMessage: `쿼리의 길이가 너무 길어요. ${MAX_CUSTOM_QUERY_LENGTH}자 이하가 되도록 줄여 주세요.`,
      focusElementName: 'customQuery',
    };
  }

  return {
    isValid: true,
  };
};
