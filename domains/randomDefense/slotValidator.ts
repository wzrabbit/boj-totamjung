import type { SlotVerdict } from '~types/randomDefense';

export const validateSlot = (title: string, query: string): SlotVerdict => {
  if (title.length > 30) {
    return {
      isValid: false,
      errorMessage:
        '추첨 이름의 길이가 너무 길어요. 30자 이하가 되도록 줄여 주세요.',
      focusElementName: 'title',
    };
  }

  if (query.trim() === '') {
    return {
      isValid: false,
      errorMessage: '쿼리는 비워둘 수 없어요. 쿼리를 입력해 주세요.',
      focusElementName: 'query',
    };
  }

  if (query.length > 300) {
    return {
      isValid: false,
      errorMessage:
        '쿼리의 길이가 너무 길어요. 300자 이하가 되도록 줄여 주세요.',
      focusElementName: 'query',
    };
  }

  return {
    isValid: true,
  };
};
