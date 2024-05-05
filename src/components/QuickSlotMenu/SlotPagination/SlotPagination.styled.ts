import { styled, css } from 'styled-components';

export const Container = styled.ol`
  display: inline-flex;
  column-gap: 5px;

  height: 26px;
`;

export const CircleSlotButtonWrapper = styled.li`
  width: 26px;
  height: 26px;
`;

export const CircleSlotButton = styled.button<{
  $isSelected: boolean;
  $isOccupied: boolean;
}>`
  width: 100%;
  height: 100%;

  border: 2px solid ${({ theme }) => theme.color.LIGHTER_BROWN};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.DARK_BROWN};

  color: ${({ theme }) => theme.color.LIGHTER_BROWN};
  font-size: 14px;
  font-weight: 600;

  transition: 0.05s;
  user-select: none;

  ${({ theme, $isSelected, $isOccupied }) => {
    if ($isSelected) {
      return css`
        border-color: ${theme.color.LEMON};
        background-color: ${theme.color.LEMON};
        outline: 3px solid ${theme.color.LEMON}70;

        color: ${theme.color.DARK_BROWN};
      `;
    }

    if ($isOccupied) {
      return css`
        border-color: ${theme.color.GOLD};

        color: ${theme.color.GOLD};
      `;
    }
  }}
`;
