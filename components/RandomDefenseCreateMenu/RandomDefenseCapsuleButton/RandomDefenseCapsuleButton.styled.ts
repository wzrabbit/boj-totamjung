import { styled, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;

  width: 180px;
  height: 50px;

  user-select: none;
`;

const capsuleButton = css`
  width: 50%;

  border: 1.5px solid ${({ theme }) => theme.colors.BROWN_500};
  background-color: ${({ theme }) => theme.colors.BROWN_900};

  font-size: 16px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.BROWN_500};

  transition: 0.2s;
`;

export const LeftButton = styled.button<{ $isActivated: boolean }>`
  ${capsuleButton}

  border-radius: 25px 0 0 25px;
  padding-left: 10px;

  text-align: left;

  ${({ $isActivated }) =>
    $isActivated
      ? css`
          border-color: ${({ theme }) => theme.colors.MAGENTA};
          background-color: ${({ theme }) => theme.colors.MAGENTA};
          box-shadow: 0 0 12px ${({ theme }) => theme.colors.MAGENTA};

          color: ${({ theme }) => theme.colors.OFF_WHITE};
        `
      : css`
          &:hover {
            border-color: ${({ theme }) => theme.colors.MAGENTA};
            box-shadow: 0 0 12px ${({ theme }) => theme.colors.MAGENTA};

            color: ${({ theme }) => theme.colors.MAGENTA};
          }
        `}
`;

export const RightButton = styled.button<{ $isActivated: boolean }>`
  ${capsuleButton}

  border-radius: 0 25px 25px 0;
  padding-right: 10px;

  text-align: right;

  ${({ $isActivated }) =>
    $isActivated
      ? css`
          border-color: ${({ theme }) => theme.colors.AZURE_BLUE};
          background-color: ${({ theme }) => theme.colors.AZURE_BLUE};
          box-shadow: 0 0 12px ${({ theme }) => theme.colors.AZURE_BLUE};

          color: ${({ theme }) => theme.colors.OFF_WHITE};
        `
      : css`
          &:hover {
            border-color: ${({ theme }) => theme.colors.AZURE_BLUE};
            box-shadow: 0 0 12px ${({ theme }) => theme.colors.AZURE_BLUE};

            color: ${({ theme }) => theme.colors.AZURE_BLUE};
          }
        `}
`;

export const MidCircle = styled.span`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;

  width: 32px;
  height: 32px;

  border: 1.5px solid ${({ theme }) => theme.colors.BROWN_500};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.BROWN_900};

  color: ${({ theme }) => theme.colors.BROWN_500};
  font-size: 12px;
  font-weight: 800;
  text-align: center;
  line-height: 29px;

  transform: translate(-50%, -50%);
`;
