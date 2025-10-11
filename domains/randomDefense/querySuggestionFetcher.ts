import type {
  QuerySuggestion,
  QuerySuggestionResult,
} from '@/types/randomDefense';
import { isSolvedAcQuerySuggestionResponse } from './querySuggestionValidator';
import { SolvedAcQuerySuggestionResponse } from '@/types/solvedAcApi';
import { MAX_QUERY_SUGGESTION_COUNT } from '@/constants/randomDefense';

export const fetchQuerySuggestion = async (
  query: string,
): Promise<QuerySuggestionResult> => {
  try {
    const response = await fetch(
      `https://solved.ac/api/v3/search/suggestion?query=${encodeURIComponent(
        query,
      )}`,
      {
        headers: {
          'x-solvedac-language': 'ko',
        },
      },
    );

    if (!response.ok) {
      return {
        success: false,
        errorMessage: '자동 완성 결과를 불러오지 못했습니다.',
      };
    }

    const suggestionResponse = await response.json();

    if (!isSolvedAcQuerySuggestionResponse(suggestionResponse)) {
      return {
        success: false,
        errorMessage:
          '예기치 못한 오류가 발생했습니다. 개발자에게 이 버그를 제보해주세요.',
      };
    }

    const suggestions = simplifySuggestionResponse(suggestionResponse);

    return { success: true, suggestions };
  } catch (error) {
    return {
      success: false,
      errorMessage: '자동 완성 결과를 불러오지 못했습니다.',
    };
  }
};

const simplifySuggestionResponse = (
  suggestionResponse: SolvedAcQuerySuggestionResponse,
): QuerySuggestion[] => {
  const { autocomplete, tags } = suggestionResponse;
  const suggestions = [
    ...autocomplete.filter(({ description }) => description !== ''),
    ...tags.map(({ name, caption }) => ({ caption, description: name })),
  ].slice(0, MAX_QUERY_SUGGESTION_COUNT);

  return suggestions;
};
