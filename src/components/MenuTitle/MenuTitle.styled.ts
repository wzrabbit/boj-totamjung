import { styled } from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-self: flex-start;
  position: relative;

  width: auto;
  max-width: 100%;
  height: 32px;

  user-select: none;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  column-gap: 6px;

  font-family: 'Do Hyeon', Pretendard;
`;

export const IconImage = styled.img`
  flex-shrink: 0;

  width: auto;
  height: 30px;

  filter: ${({ theme }) => theme.filter.ORANGE_FILTER};
  object-fit: contain;
`;

export const IconWrapper = styled.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.color.ORANGE};
  }
`;

export const Title = styled.h2`
  display: inline-block;
  overflow: hidden;

  font-size: 26px;
  color: ${({ theme }) => theme.color.ORANGE};
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Underline = styled.div`
  position: absolute;
  bottom: 0;

  width: calc(100% + 6px);
  margin-left: -3px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.ORANGE_TRANSPARENT};

  z-index: -1;
`;
