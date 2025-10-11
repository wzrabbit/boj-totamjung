import { styled } from 'styled-components';

export const Fallback = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 4px;

  width: 100%;
  height: 100%;

  user-select: none;
`;

export const Title = styled.div`
  display: inline-block;

  color: ${({ theme }) => theme.color.GOLD};
  font-family: 'Do Hyeon';
  font-size: 22px;
`;

export const Image = styled.img`
  margin-bottom: 10px;
`;
