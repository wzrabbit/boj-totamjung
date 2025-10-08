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
  height: 100%;

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
  align-items: center;
  column-gap: 20px;

  width: 100%;
  height: 34px;

  padding: 0 10px;
`;

export const Suggestion = styled.button`
  background: none;
  border: none;

  color: ${({ theme }) => theme.color.GOLD};
  font-size: 13px;
`;
