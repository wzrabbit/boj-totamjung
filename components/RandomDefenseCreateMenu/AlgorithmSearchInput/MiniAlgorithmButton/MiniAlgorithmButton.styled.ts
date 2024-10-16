import { styled } from 'styled-components';

export const Container = styled.li`
  display: inline-block;

  height: 26px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  max-width: 100%;
  height: 100%;

  padding: 0 6px;

  border: 1px solid ${({ theme }) => theme.color.LIGHTER_BROWN};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.DARK_BROWN};
`;

export const Text = styled.p`
  overflow: hidden;

  color: ${({ theme }) => theme.color.LEMON};
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CloseIconWrapper = styled.div`
  flex-shrink: 0;

  width: 20px;
  height: 20px;

  margin-right: -6px;

  & svg {
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.color.LEMON};
  }
`;
