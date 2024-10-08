import { styled, css } from 'styled-components';

export const Button = styled.button`
  position: relative;

  width: 126px;
  height: 60px;

  background: none;

  user-select: none;

  &:disabled {
    opacity: 0.6;
  }
`;

const buttonSide = css`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 126px;
  height: 50px;

  background-color: ${({ theme }) => theme.color.DARK_BROWN};
  border: 2px solid ${({ theme }) => theme.color.LIGHTER_BROWN};
  border-radius: 6px;
`;

export const UpperSide = styled.div`
  ${buttonSide}

  display: flex;
  align-items: center;

  padding: 4px;

  transition: 0.15s;
  transform: translateY(-10px);
  z-index: 1;

  ${Button}:not([disabled]):active > & {
    transform: translateY(-4px);
  }
`;

export const LowerSide = styled.div`
  ${buttonSide}

  bottom: 0;
`;

export const DiceIcon = styled.img`
  flex-shrink: 0;

  width: 26px;
  height: 27px;
  margin: 4px;

  filter: ${({ theme }) => theme.filter.DARK_ORANGE_FILTER};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const TitleText = styled.p`
  font-size: 20px;
  font-family: 'Do Hyeon', Pretendard;
  color: ${({ theme }) => theme.color.ORANGE};
`;

export const SlotNoText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.LIGHT_GRAY};
`;
