import useQueryInput from '@/hooks/randomDefense/useQueryInput';
import * as S from './QueryInput.styled';
import { toPx } from '@/utils/toPx';
import { MAX_CUSTOM_QUERY_LENGTH } from '@/constants/randomDefense';

interface QueryInputProps {
  width: string | number;
  height: string | number;
  hasError?: boolean;
  onChange: (query: string) => void;
}

const QueryInput = (props: QueryInputProps) => {
  const { width, height, hasError = false, onChange } = props;
  const {
    query,
    suggestions,
    textareaRef,
    updateQuery,
    applySuggestion,
    applyFirstSuggestionIfEnterKeyPressed,
  } = useQueryInput({ onChange });

  return (
    <S.Container
      $width={toPx(width)}
      $height={toPx(height)}
      $hasError={hasError}
    >
      <S.Textarea
        value={query}
        onChange={updateQuery}
        onKeyDown={applyFirstSuggestionIfEnterKeyPressed}
        ref={textareaRef}
        placeholder={`1 ~ ${MAX_CUSTOM_QUERY_LENGTH}자`}
        minLength={1}
        maxLength={MAX_CUSTOM_QUERY_LENGTH}
        spellCheck={false}
      />
      <S.AutoCompletePanel>
        {suggestions.map((suggestion) => (
          <S.Suggestion
            key={suggestion.caption}
            title={suggestion.description}
            type="button"
            onClick={() => applySuggestion(suggestion)}
          >
            {suggestion.caption}
          </S.Suggestion>
        ))}
      </S.AutoCompletePanel>
    </S.Container>
  );
};

export default QueryInput;
