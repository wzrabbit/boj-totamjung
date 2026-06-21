import { useState, useEffect, useRef } from 'react';
import { validateSlot } from '@/domains/randomDefense/slotValidator';
import { useTranslation } from '@/i18n';
import type { LocalizableMessage } from '@/i18n';

interface UseSlotEditModalParams {
  initTitle: string;
  initQuery: string;
  onSlotChange: (title: string, query: string) => void;
}

const useSlotEditModal = (params: UseSlotEditModalParams) => {
  const { initTitle, initQuery, onSlotChange } = params;
  const { t } = useTranslation();
  const [title, setTitle] = useState(initTitle);
  const [query, setQuery] = useState(initQuery);
  const [errorLocalizableMessage, setErrorLocalizableMessage] =
    useState<LocalizableMessage | null>(null);
  const [errorElementName, setErrorElementName] = useState<string | undefined>(
    undefined,
  );
  const titleRef = useRef<HTMLInputElement>(null);
  const queryRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setTitle(initTitle);
    setQuery(initQuery);
    setErrorLocalizableMessage(null);
    setErrorElementName(undefined);
  }, [initTitle, initQuery]);

  const submitSlotInfo = () => {
    const slotValidationResult = validateSlot(title, query);

    if (slotValidationResult.isValid) {
      onSlotChange(title, query);
      setErrorLocalizableMessage(null);
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
    setErrorLocalizableMessage(slotValidationResult.errorMessage);
  };

  const errorMessage = errorLocalizableMessage
    ? t(errorLocalizableMessage.key, errorLocalizableMessage.substitutions)
    : '';
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
