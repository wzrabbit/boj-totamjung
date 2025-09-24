import { styled } from 'styled-components';

export const TimeDisplay = styled.div`
  flex-shrink: 0;

  margin: 0 0.05em 0 0.15em;

  font-size: 0.5em;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
`;

export const TransparentDisplay = styled.span`
  opacity: 0.2;
`;

export const ButtonContainer = styled.div<{ $maxButtonCount: number }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  min-width: ${({ $maxButtonCount }) => $maxButtonCount * 0.65}em;
`;

export const ControlButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 0.65em;
  height: 0.65em;

  background: transparent;

  font-size: inherit;

  cursor: pointer;
  transition: opacity 0.1s;

  &:hover {
    opacity: 0.8;
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.div<{
  $color: string;
  $height: number | string;
}>`
  display: inline-flex;
  align-items: center;
  height: 1em;

  font-size: ${({ $height }) => $height};

  user-select: none;

  & > ${TimeDisplay}, & ${ControlButton} > svg {
    color: ${({ $color }) => $color};
  }
`;
