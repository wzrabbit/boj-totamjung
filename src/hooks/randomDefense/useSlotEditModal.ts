import { useState, useEffect } from 'react';
import type { RefObject } from 'react';
import { validateSlot } from '~domains/randomDefense/slotValidator';

interface UseSlotEditModalParams {
  initSlotName: string;
  initQuery: string;
  slotNameRef: RefObject<HTMLInputElement>;
  queryRef: RefObject<HTMLTextAreaElement>;
  onSlotChange: (slotName: string, query: string) => void;
}

const useSlotEditModal = (params: UseSlotEditModalParams) => {
  const { initSlotName, initQuery, slotNameRef, queryRef, onSlotChange } =
    params;
  const [slotName, setSlotName] = useState(initSlotName);
  const [query, setQuery] = useState(initQuery);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorElementName, setErrorElementName] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    setSlotName(initSlotName);
    setQuery(initQuery);
    setErrorMessage('');
    setErrorElementName(undefined);
  }, [initSlotName, initQuery]);

  const submitSlotInfo = () => {
    const slotValidationResult = validateSlot(slotName, query);

    if (slotValidationResult.isValid) {
      onSlotChange(slotName, query);
      setErrorMessage('');
      return;
    }

    const slotNameElement = slotNameRef.current;
    const queryElement = queryRef.current;
    const { focusElementName } = slotValidationResult;

    if (focusElementName === 'slotName') {
      slotNameElement?.select();
    }

    if (focusElementName === 'query') {
      queryElement?.select();
    }

    setErrorElementName(focusElementName);
    setErrorMessage(slotValidationResult.errorMessage);
  };

  const isSlotNameElementHasErrors = errorElementName === 'slotName';
  const isQueryElementHasErrors = errorElementName === 'query';

  return {
    slotName,
    query,
    errorMessage,
    isSlotNameElementHasErrors,
    isQueryElementHasErrors,
    setQuery,
    setSlotName,
    submitSlotInfo,
  };
};

export default useSlotEditModal;
