import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 120px;
  height: 50px;

  border: 1.5px solid ${({ theme }) => theme.colors.BROWN_500};
  background-color: ${({ theme }) => theme.colors.BROWN_700};

  border-radius: 6px;

  user-select: none;
`;

export const TierBadge = styled.img`
  width: 26px;
`;

export const Tilde = styled.div`
  width: 16px;

  font-size: 24px;
  color: ${({ theme }) => theme.colors.GOLD};
  font-weight: 800;
`;
