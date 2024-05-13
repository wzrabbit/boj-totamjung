import { useState, useRef } from 'react';
import type { ChangeEventHandler } from 'react';
import type {
  RandomDefenseFormData,
  TierWithoutNotRatable,
} from '~types/randomDefense';

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

const useRandomDefenseCreateMenu = () => {
  const [randomDefenseFormData, setRandomDefenseFormData] =
    useState<RandomDefenseFormData>(initialRandomDefenseFormData);
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
    titleRef,
    handleRef,
    solvedMinRef,
    solvedMaxRef,
    customQueryRef,
  };
};

export default useRandomDefenseCreateMenu;
