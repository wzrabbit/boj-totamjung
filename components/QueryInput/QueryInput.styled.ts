import { styled } from 'styled-components';
import { getTransparentHexColor } from '@/utils/getTransparentHexColor';

export const Container = styled.div<{
  $width: string;
  $height: string;
  $hasError: boolean;
}>`
  display: flex;
  flex-direction: column;

  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  border: 1.5px solid ${({ theme }) => theme.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.DARK_BROWN};

  &:focus-within {
    box-shadow: 0 0 15px
      ${({ theme, $hasError }) =>
        $hasError
          ? theme.color.RED
          : getTransparentHexColor(theme.color.GOLD, 0.5)};
  }

  transition: 0.2s;
`;

export const Textarea = styled.textarea`
  flex-grow: 1;

  width: 100%;

  padding: 6px;

  border: none;
  border-bottom: 1.5px solid ${({ theme }) => theme.color.LIGHTER_BROWN};
  background: transparent;

  color: ${({ theme }) => theme.color.WHITE};
  font-size: 13px;

  resize: none;
  outline: none;
  transition: border-bottom-color 0.2s;
`;

export const AutoCompletePanel = styled.div`
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  column-gap: 20px;
  flex-wrap: wrap;

  width: 100%;
  height: 48px;

  padding: 4px 6px;
`;

export const SuggestionButtonContainer = styled.div`
  display: inline-flex;

  width: auto;
  height: 20px;
`;

export const SuggestionButton = styled.button`
  background: none;
  border: none;

  height: 100%;
  padding: 0 4px;

  color: ${({ theme }) => theme.color.GOLD};
  font-size: 13px;
  line-height: 20px;

  transition: 0.15s;
  outline: none;
  opacity: 0.6;

  &:hover,
  &:focus {
    opacity: 1;
    text-shadow: 0 0 5px ${({ theme }) => theme.color.GOLD};
  }
`;

export const EnterKeyIconWrapper = styled.div`
  width: 14px;
  height: 20px;
  padding: 3px 0;

  opacity: 0;
  transition: 0.15s;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.color.GOLD};
  }

  ${AutoCompletePanel}:not(:has(:focus-visible)) ${SuggestionButtonContainer}:first-child & {
    opacity: 0.6;
  }

  ${AutoCompletePanel} ${SuggestionButtonContainer} ${SuggestionButton}:focus-visible + & {
    opacity: 1;
  }
`;
