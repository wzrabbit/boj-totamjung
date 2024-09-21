import { useState, useRef } from 'react';
import { isRandomDefenseFormData } from '~domains/randomDefense/randomDefenseFormDataValidator';
import { validateRandomDefenseFormData } from '~domains/randomDefense/randomDefenseFormDataValidator';
import type { ChangeEventHandler, MouseEventHandler } from 'react';
import type {
  RandomDefenseFormData,
  SlotNo,
  TierWithoutNotRatable,
} from '~types/randomDefense';
import { generateRandomDefenseQuery } from '~domains/randomDefense/randomDefenseQueryGenerator';

interface UseRandomDefenseCreateMenuParams {
  selectedSlotNo: SlotNo;
  onSubmit: (title: string, query: string) => void;
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
  const { selectedSlotNo, onSubmit } = params;
  const [randomDefenseFormData, setRandomDefenseFormData] =
    useState<RandomDefenseFormData>(initialRandomDefenseFormData);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorElementName, setErrorElementName] = useState<string | undefined>(
    undefined,
  );
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
    setErrorElementName(undefined);
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
      const title =
        randomDefenseFormData.title.trim() === ''
          ? `추첨 ${selectedSlotNo}`
          : randomDefenseFormData.title;
      const query = generateRandomDefenseQuery(randomDefenseFormData);

      onSubmit(title, query);
      setErrorMessage('');
      setErrorElementName(undefined);
      return;
    }

    setErrorMessage(validationResult.errorMessage);
    setErrorElementName(validationResult.focusElementName);

    const focusElementName = validationResult.focusElementName;

    switch (focusElementName) {
      case 'title':
        titleRef.current?.select();
        break;
      case 'handle':
        handleRef.current?.select();
        break;
      case 'solvedMin':
        solvedMinRef.current?.select();
        break;
      case 'solvedMax':
        solvedMaxRef.current?.select();
        break;
      case 'customQuery':
        customQueryRef.current?.select();
        break;
    }
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
    errorMessage,
    errorElementName,
    setMode,
    setRandomDefenseInputValue,
    setTierRange,
    setSearchOperator,
    setAlgorithmIds,
    submitRandomDefense,
    titleRef,
    handleRef,
    solvedMinRef,
    solvedMaxRef,
    customQueryRef,
  };
};

export default useRandomDefenseCreateMenu;
