import { styled } from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: flex-end;
  column-gap: 20px;

  height: 85px;

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
  column-gap: 6px;

  width: 106px;
  height: 50px;

  margin-left: auto;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;

  background: none;
`;

export const ButtonImage = styled.img`
  width: 100%;
  height: 100%;
`;
