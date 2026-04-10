import { styled } from 'styled-components';

export const Container = styled.div`
  flex-shrink: 0;

  width: 700px;
  height: 555px;

  border-radius: 16px;
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.GOLD};
`;

export const AlgorithmPanel = styled.div`
  position: relative;

  width: 700px;
  height: 505px;
  padding: 14px;

  border: 2px solid ${({ theme }) => theme.colors.GOLD};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.BROWN_900};
`;

export const ControlPanel = styled.div`
  display: flex;

  width: 700px;
  height: 100px;
  margin-top: -50px;
  padding: 54px 12px 6px 12px;

  border: 2px solid ${({ theme }) => theme.colors.GOLD};
  border-radius: 16px;
  border-top: none;
  background-color: ${({ theme }) => theme.colors.BROWN_900};
`;

export const SearchPanelContainer = styled.div`
  display: flex;
  column-gap: 6px;

  width: 420px;
  height: 100%;
  margin-right: auto;
`;

export const SearchIconWrapper = styled.div`
  & svg {
    height: 100%;

    color: ${({ theme }) => theme.colors.GOLD};
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  flex-grow: 1;

  padding: 6px;

  border: none;
  background-color: transparent;

  font-size: 16px;

  color: ${({ theme }) => theme.colors.OFF_WHITE};
`;

export const CheckButtonPanel = styled.div`
  display: flex;

  user-select: none;
`;

export const CheckButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 6px;

  width: 120px;
  height: 100%;

  background-color: transparent;
`;

export const CheckButtonImage = styled.img`
  width: 30px;
  height: 30px;
`;

export const CheckButtonLabel = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.GOLD};

  transition: 0.2s;

  button:hover > & {
    text-shadow: 0 0 12px ${({ theme }) => theme.colors.GOLD};
  }
`;
