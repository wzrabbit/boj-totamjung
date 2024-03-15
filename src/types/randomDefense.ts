export interface RandomDefenseFormData {
  title: string;
  handle: string;
  solvedMin: number;
  solvedMax: number;
  difficultyMin: number;
  difficultyMax: number;
  algorithmOperator: 'and' | 'or' | 'nor';
}

export type RandomDefenseFormDataVerdict =
  | RandomDefenseFormDataSuccessVerdict
  | RandomDefenseFormDataFailureVerdict;

interface RandomDefenseFormDataSuccessVerdict {
  isValid: true;
}

interface RandomDefenseFormDataFailureVerdict {
  isValid: false;
  message: string;
}
