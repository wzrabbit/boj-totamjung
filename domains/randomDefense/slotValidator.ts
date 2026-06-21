import {
  MAX_CUSTOM_QUERY_LENGTH,
  TITLE_MAX_LENGTH,
} from '@/constants/randomDefense';
import type { QuickSlotVerdict } from '@/types/randomDefense';

export const validateSlot = (
  title: string,
  query: string,
): QuickSlotVerdict => {
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

  if (query.trim() === '') {
    return {
      isValid: false,
      errorMessage: { key: 'errors.randomDefenseForm.queryEmpty' },
      focusElementName: 'query',
    };
  }

  if (query.length > MAX_CUSTOM_QUERY_LENGTH) {
    return {
      isValid: false,
      errorMessage: {
        key: 'errors.randomDefenseForm.queryTooLong',
        substitutions: [String(MAX_CUSTOM_QUERY_LENGTH)],
      },
      focusElementName: 'query',
    };
  }

  return {
    isValid: true,
  };
};
