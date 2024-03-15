import {
  TITLE_MAX_LENGTH,
  HANDLE_REGEX,
  NUMBER_REGEX,
  MAX_SOLVED_COUNT,
} from '~constants/randomDefense';
import type {
  RandomDefenseFormData,
  RandomDefenseFormDataVerdict,
} from '~types/randomDefense';

export const validateRandomDefenseFormData = (
  randomDefenseFormData: RandomDefenseFormData,
): RandomDefenseFormDataVerdict => {
  const {
    title,
    handle,
    solvedMin,
    solvedMax,
    difficultyMin,
    difficultyMax,
    algorithmOperator,
  } = randomDefenseFormData;

  const validationResults = [
    validateTitle(title),
    validateHandle(handle),
    validateSolvedCount(solvedMin, solvedMax),
    validateDifficulty(difficultyMin, difficultyMax),
  ];

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
      message: `추첨 이름은 ${TITLE_MAX_LENGTH}자 이하여야 합니다.`,
    };
  }

  return {
    isValid: true,
  };
};

const validateHandle = (
  title: RandomDefenseFormData['handle'],
): RandomDefenseFormDataVerdict => {
  if (!HANDLE_REGEX.test(handle)) {
    return {
      isValid: false,
      message:
        '핸들(닉네임)은 3자 이상 20자 이하여야 하며, 영문자, 숫자, 언더바(_), 하이픈(-)으로만 이루어져야 합니다.',
    };
  }
};

const validateSolvedCount = (
  solvedMin: RandomDefenseFormData['solvedMin'],
  solvedMax: RandomDefenseFormData['solvedMax'],
): RandomDefenseFormDataVerdict => {
  if (
    !NUMBER_REGEX.test(String(solvedMin)) ||
    !NUMBER_REGEX.test(String(solvedMax))
  ) {
    return {
      isValid: false,
      message: '맞은 사람 수는 양의 정수 또는 0이어야 합니다.',
    };
  }

  if (solvedMin > solvedMax) {
    return {
      isValid: false,
      message: '맞은 사람 수의 최솟값은 최댓값보다 클 수 없습니다.',
    };
  }

  if (solvedMax > MAX_SOLVED_COUNT) {
    return {
      isValid: false,
      message: `맞은 사람 수의 최댓값은 ${MAX_SOLVED_COUNT} 이하여야 합니다.`,
    };
  }

  return {
    isValid: true,
  };
};

const validateDifficulty = (
  difficultyMin: RandomDefenseFormData['difficultyMin'],
  difficultyMax: RandomDefenseFormData['difficultyMax'],
): RandomDefenseFormDataVerdict => {
  if (
    !NUMBER_REGEX.test(String(difficultyMin)) ||
    !NUMBER_REGEX.test(String(difficultyMax))
  ) {
    return {
      isValid: false,
      message: '난이도는 양의 정수 또는 0이어야 합니다.',
    };
  }

  if (difficultyMin > difficultyMax) {
    return {
      isValid: false,
      message: '난이도의 범위는 하한보다 상한이 더 낮을 수 없습니다.',
    };
  }

  return {
    isValid: true,
  };
};
