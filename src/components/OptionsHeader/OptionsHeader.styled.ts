import { styled } from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: flex-end;
  column-gap: 20px;

  height: 75px;

  user-select: none;

  & > * {
    flex-shrink: 0;
  }
`;

export const Title = styled.h1`
  width: 130px;
  height: 100%;
`;

export const OptionsLogoImage = styled.img`
  width: 100%;
`;

export const ButtonPanel = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 6px;

  height: 50px;

  margin-left: auto;
`;

export const VersionText = styled.span`
  margin-bottom: 10px;
  margin-left: auto;

  font-size: 18px;
  font-family: 'Jua';
  color: ${({ theme }) => theme.color.GOLD};
`;

export const Button = styled.button`
  width: 51.5px;
  height: 50px;

  background: none;
`;

export const ButtonImage = styled.img`
  width: 100%;
  height: 100%;

  transition: 0.2s;

  &:hover {
    filter: brightness(140%);
  }
`;
