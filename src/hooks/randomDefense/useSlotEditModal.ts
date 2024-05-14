import { useState, useEffect, useRef } from 'react';
import { validateSlot } from '~domains/randomDefense/slotValidator';

interface UseSlotEditModalParams {
  initTitle: string;
  initQuery: string;
  onSlotChange: (title: string, query: string) => void;
}

const useSlotEditModal = (params: UseSlotEditModalParams) => {
  const { initTitle, initQuery, onSlotChange } = params;
  const [title, setTitle] = useState(initTitle);
  const [query, setQuery] = useState(initQuery);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorElementName, setErrorElementName] = useState<string | undefined>(
    undefined,
  );
  const titleRef = useRef<HTMLInputElement>(null);
  const queryRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setTitle(initTitle);
    setQuery(initQuery);
    setErrorMessage('');
    setErrorElementName(undefined);
  }, [initTitle, initQuery]);

  const submitSlotInfo = () => {
    const slotValidationResult = validateSlot(title, query);

    if (slotValidationResult.isValid) {
      onSlotChange(title, query);
      setErrorMessage('');
      return;
    }

    const titleElement = titleRef.current;
    const queryElement = queryRef.current;
    const { focusElementName } = slotValidationResult;

    if (focusElementName === 'title') {
      titleElement?.select();
    }

    if (focusElementName === 'query') {
      queryElement?.select();
    }

    setErrorElementName(focusElementName);
    setErrorMessage(slotValidationResult.errorMessage);
  };

  const isTitleElementHasErrors = errorElementName === 'title';
  const isQueryElementHasErrors = errorElementName === 'query';

  return {
    title,
    query,
    errorMessage,
    isTitleElementHasErrors,
    isQueryElementHasErrors,
    setQuery,
    setTitle,
    submitSlotInfo,
    titleRef,
    queryRef,
  };
};

export default useSlotEditModal;
