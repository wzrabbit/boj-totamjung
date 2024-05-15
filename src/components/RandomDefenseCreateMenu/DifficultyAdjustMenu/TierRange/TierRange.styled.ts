import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 120px;
  height: 50px;

  border: 1.5px solid ${({ theme }) => theme.color.LIGHTER_BROWN};
  background-color: ${({ theme }) => theme.color.BROWN};

  border-radius: 6px;

  user-select: none;
`;

export const TierBadge = styled.img`
  width: 26px;
`;

export const Tilde = styled.div`
  width: 16px;

  font-size: 24px;
  color: ${({ theme }) => theme.color.GOLD};
  font-weight: 800;
`;
