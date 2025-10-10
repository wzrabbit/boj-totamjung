import Text from '@/components/common/Text';
import useQueryInput from '@/hooks/randomDefense/useQueryInput';
import * as S from './QueryInput.styled';
import { toPx } from '@/utils/toPx';
import { MAX_CUSTOM_QUERY_LENGTH } from '@/constants/randomDefense';
import { EnterKeyIcon } from '@/assets/svg';

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
    errorMessage,
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
        {errorMessage ? (
          <Text as="span" type="gray" fontSize={13}>
            {errorMessage}
          </Text>
        ) : suggestions.length === 0 ? (
          <Text as="span" type="gray" fontSize={13}>
            자동완성 결과가 없습니다.
          </Text>
        ) : (
          suggestions.map((suggestion) => (
            <S.SuggestionButtonContainer key={suggestion.caption}>
              <S.SuggestionButton
                title={suggestion.description}
                type="button"
                onClick={() => applySuggestion(suggestion)}
              >
                {suggestion.caption}
              </S.SuggestionButton>
              <S.EnterKeyIconWrapper>
                <EnterKeyIcon />
              </S.EnterKeyIconWrapper>
            </S.SuggestionButtonContainer>
          ))
        )}
      </S.AutoCompletePanel>
    </S.Container>
  );
};

export default QueryInput;
