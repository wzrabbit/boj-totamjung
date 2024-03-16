import { styled } from 'styled-components';
import type { CSSProperties } from 'styled-components';

export const Container = styled.div<{
  $width: CSSProperties['width'];
  $height: CSSProperties['height'];
  $padding: CSSProperties['padding'];
}>`
  display: inline-block;
  position: relative;

  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  padding: ${({ $padding }) => $padding};

  border: 2px solid ${({ theme }) => theme.color.LIGHTER_BROWN};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color.DARK_BROWN};
`;

export const Title = styled.div`
  display: inline-block;
  overflow: hidden;
  position: absolute;
  top: -2px;
  right: -2px;

  max-width: 80%;
  height: 26px;

  padding: 0 8px 0 8px;
  border-radius: 0 6px 0 6px;
  background-color: ${({ theme }) => theme.color.LIGHTER_BROWN};

  font-size: 14px;
  font-weight: 800;
  line-height: 26px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
