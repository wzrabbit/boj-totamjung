import { styled } from 'styled-components';

export const Fieldset = styled.fieldset`
  width: 100%;
  height: auto;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`;

export const Legend = styled.legend`
  font-size: 16px;
  color: ${({ theme }) => theme.color.WHITE};
  margin-bottom: 6px;
`;

export const OptionsContainer = styled.div<{ $isVertical: boolean }>`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: ${({ $isVertical }) => ($isVertical ? 'column' : 'row')};
  row-gap: 6px;
  column-gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;
