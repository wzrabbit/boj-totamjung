import { styled, css } from 'styled-components';
import type { RatedTier } from '@/types/tierHider';

export const Container = styled.div`
  overflow: visible;
  position: relative;

  width: 134px;
  height: 32px;

  pointer-events: none;
  z-index: 1;
  user-select: none;
`;

export const Button = styled.button<{ $isActivated: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;

  width: 134px;
  height: 32px;
  padding: 6px;

  border: 1.5px solid ${({ theme }) => theme.color.LIGHT_BROWN};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.DARK_BROWN};

  transition: 0.2s;
  pointer-events: auto;

  ${({ theme, $isActivated }) =>
    $isActivated
      ? css`
          border: 1.5px solid ${theme.color.LEMON};
          box-shadow: 0 0 12px ${theme.color.GOLD}70;
        `
      : css`
          border: 1.5px solid ${theme.color.BROWN};
        `}
`;

export const TierBadge = styled.img`
  width: 12px;
  height: auto;
`;

export const TierText = styled.p<{ $tier: RatedTier; $isBold: boolean }>`
  font-size: 14px;
  color: ${({ theme, $tier }) => theme.solvedAcTier[$tier]};
  font-weight: ${({ $isBold }) => ($isBold ? 700 : 400)};

  transition: font-weight 0.1s;
`;

export const ArrowDownTriangleIconWrapper = styled.div`
  width: 16px;
  height: 16px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.color.GOLD};
  }
`;

export const List = styled.ul<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  overflow-y: scroll;
  flex-direction: column;
  position: absolute;

  width: 150px;
  height: 172px;
  margin: 4px 0 0 -8px;

  border: 1.5px solid ${({ theme }) => theme.color.LEMON};
  box-shadow: 0 0 12px ${({ theme }) => theme.color.GOLD}70;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.DARK_BROWN};

  scrollbar-width: none;

  transform-origin: top;
  pointer-events: auto;
  animation: zoomIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes zoomIn {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }
`;

export const ListItem = styled.li`
  padding: 2px;
`;

export const ListButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 100%;
  height: 30px;
  padding: 0 10px;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.DARK_BROWN};

  transition: 0.15s;

  &:hover {
    background-color: ${({ theme }) => theme.color.BROWN};
  }
`;

export const CheckIconWrapper = styled.div`
  width: 16px;
  height: 16px;
  margin-left: auto;

  & > svg {
    width: 16px;
    height: 16px;

    color: ${({ theme }) => theme.color.GOLD};
  }
`;
