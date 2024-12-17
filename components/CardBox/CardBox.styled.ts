import { styled } from 'styled-components';

export const Container = styled.button`
  display: inline-block;
  position: relative;

  width: 160px;
  height: 228px;

  background: none;

  user-select: none;
`;

export const CardBoxInside = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
`;

export const InsideCardList = styled.div`
  position: absolute;
  top: 10%;
  left: 0;

  width: 100%;
`;

export const InsideCard = styled.img`
  position: absolute;
  top: 0;
  left: 2.5%;

  width: 95%;
`;

export const CardBoxFront = styled.img`
  position: absolute;
  top: 7%;
  left: 0;

  width: 100%;
`;

export const CardBoxTop = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
`;
