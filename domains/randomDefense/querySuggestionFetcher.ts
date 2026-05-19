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
        errorMessage: { key: 'errors.querySuggestion.fetchFailed' },
      };
    }

    const suggestionResponse = await response.json();

    if (!isSolvedAcQuerySuggestionResponse(suggestionResponse)) {
      return {
        success: false,
        errorMessage: { key: 'errors.querySuggestion.unexpected' },
      };
    }

    const suggestions = simplifySuggestionResponse(suggestionResponse);

    return { success: true, suggestions };
  } catch (error) {
    return {
      success: false,
      errorMessage: { key: 'errors.querySuggestion.fetchFailed' },
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
