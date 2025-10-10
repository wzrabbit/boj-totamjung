import Text from '@/components/common/Text';
import useQueryInput from '@/hooks/randomDefense/useQueryInput';
import * as S from './QueryInput.styled';
import { toPx } from '@/utils/toPx';
import { MAX_CUSTOM_QUERY_LENGTH } from '@/constants/randomDefense';
import { EnterKeyIcon } from '@/assets/svg';
import { forwardRef } from 'react';

interface QueryInputProps {
  width: string | number;
  height: string | number;
  value: string;
  placeholder: string;
  hasError?: boolean;
  onChange: (query: string) => void;
}

const QueryInput = forwardRef<HTMLTextAreaElement, QueryInputProps>(
  (props, ref) => {
    const {
      width,
      height,
      value,
      placeholder,
      hasError = false,
      onChange,
    } = props;
    const {
      suggestions,
      fallbackMessage,
      updateQuery,
      applySuggestion,
      applyFirstSuggestionIfEnterKeyPressed,
    } = useQueryInput({ value, textareaRef: ref, onChange });

    return (
      <S.Container
        $width={toPx(width)}
        $height={toPx(height)}
        $hasError={hasError}
      >
        <S.Textarea
          value={value}
          onChange={updateQuery}
          onKeyDown={applyFirstSuggestionIfEnterKeyPressed}
          ref={ref}
          placeholder={placeholder}
          minLength={1}
          maxLength={MAX_CUSTOM_QUERY_LENGTH}
          spellCheck={false}
        />
        <S.AutoCompletePanel tabIndex={-1}>
          {fallbackMessage ? (
            <Text as="span" type="gray" fontSize={13}>
              {fallbackMessage}
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
  },
);

export default QueryInput;
