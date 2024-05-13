import { useState, useRef } from 'react';
import { isRandomDefenseFormData } from '~types/typeGuards';
import { validateRandomDefenseFormData } from '~domains/randomDefense/validateRandomDefenseFormData';
import type { ChangeEventHandler, MouseEventHandler } from 'react';
import type {
  RandomDefenseFormData,
  TierWithoutNotRatable,
} from '~types/randomDefense';

interface UseRandomDefenseCreateMenuParams {
  onSubmit: (randomDefenseFormData: RandomDefenseFormData) => void;
}

const initialRandomDefenseFormData: RandomDefenseFormData = {
  mode: 'easy',
  title: '',
  handle: '',
  solvedMin: '',
  solvedMax: '',
  startTier: 1,
  endTier: 30,
  searchOperator: 'OR',
  algorithmIds: [],
  customQuery: '',
};

const useRandomDefenseCreateMenu = (
  params: UseRandomDefenseCreateMenuParams,
) => {
  const { onSubmit } = params;
  const [randomDefenseFormData, setRandomDefenseFormData] =
    useState<RandomDefenseFormData>(initialRandomDefenseFormData);
  const [errorMessage, setErrorMessage] = useState('');
  const {
    mode,
    title,
    handle,
    solvedMin,
    solvedMax,
    startTier,
    endTier,
    searchOperator,
    algorithmIds,
    customQuery,
  } = randomDefenseFormData;
  const titleRef = useRef<HTMLInputElement>(null);
  const handleRef = useRef<HTMLInputElement>(null);
  const solvedMinRef = useRef<HTMLInputElement>(null);
  const solvedMaxRef = useRef<HTMLInputElement>(null);
  const customQueryRef = useRef<HTMLTextAreaElement>(null);

  const setMode = (mode: RandomDefenseFormData['mode']) => {
    setRandomDefenseFormData((prev) => ({
      ...prev,
      mode,
    }));
    setErrorMessage('');
  };

  const setRandomDefenseInputValue: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name, value } = event.target;

    if (!(name in initialRandomDefenseFormData)) {
      return;
    }

    setRandomDefenseFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const setTierRange = (
    startTier: TierWithoutNotRatable,
    endTier: TierWithoutNotRatable,
  ) => {
    setRandomDefenseFormData((prev) => ({
      ...prev,
      startTier,
      endTier,
    }));
  };

  const setSearchOperator = (
    searchOperator: RandomDefenseFormData['searchOperator'],
  ) => {
    setRandomDefenseFormData((prev) => ({
      ...prev,
      searchOperator,
    }));
  };

  const setAlgorithmIds = (
    algorithmIds: RandomDefenseFormData['algorithmIds'],
  ) => {
    setRandomDefenseFormData((prev) => ({
      ...prev,
      algorithmIds,
    }));
  };

  const submitRandomDefense: MouseEventHandler = () => {
    if (!isRandomDefenseFormData(randomDefenseFormData)) {
      return;
    }

    const validationResult = validateRandomDefenseFormData(
      randomDefenseFormData,
    );

    if (validationResult.isValid) {
      onSubmit(randomDefenseFormData);
      setErrorMessage('');
      return;
    }

    setErrorMessage(validationResult.errorMessage);
  };

  return {
    mode,
    title,
    handle,
    solvedMin,
    solvedMax,
    startTier,
    endTier,
    searchOperator,
    algorithmIds,
    customQuery,
    setMode,
    setRandomDefenseInputValue,
    setTierRange,
    setSearchOperator,
    setAlgorithmIds,
    submitRandomDefense,
    errorMessage,
    titleRef,
    handleRef,
    solvedMinRef,
    solvedMaxRef,
    customQueryRef,
  };
};

export default useRandomDefenseCreateMenu;
