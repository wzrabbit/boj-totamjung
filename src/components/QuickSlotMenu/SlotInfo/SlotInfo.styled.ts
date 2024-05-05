import { styled, css } from 'styled-components';

export const Container = styled.ol`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 600px;
  height: 70px;
`;

export const NamePanel = styled.div`
  display: flex;
  column-gap: 16px;

  height: 20px;
`;

export const QueryPanel = styled.div`
  display: flex;
  column-gap: 16px;

  height: 40px;
`;

export const TextLabel = styled.span<{
  $backgroundColor: 'gold' | 'white';
}>`
  display: inline-block;
  flex-shrink: 0;

  width: 80px;
  height: 20px;

  border-radius: 10px;
  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor === 'gold' ? theme.color.GOLD : theme.color.WHITE};

  color: ${({ theme }) => theme.color.DARK_BROWN};
  font-size: 14px;
  text-align: center;
  font-weight: 800;
  line-height: 20px;

  user-select: none;
`;

export const NameEmptyText = styled.p`
  color: ${({ theme }) => theme.color.LIGHT_GRAY};
  font-size: 16px;
`;

export const QueryEmptyText = styled.p`
  color: ${({ theme }) => theme.color.LIGHT_GRAY};
  font-size: 14px;
`;

const textWrapper = css`
  width: 504px;

  & p {
    overflow: hidden;

    text-overflow: ellipsis;
  }
`;

export const NameTextWrapper = styled.div`
  ${textWrapper}

  white-space: nowrap;
`;

export const QueryTextWrapper = styled.div`
  ${textWrapper}
  & p {
    display: -webkit-box;

    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
