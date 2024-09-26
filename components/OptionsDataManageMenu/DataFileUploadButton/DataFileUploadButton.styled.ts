import { styled } from 'styled-components';

export const Container = styled.label`
  display: block;
  width: 270px;
`;

export const FakeUploadButton = styled.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 40px;
  padding: 4px 6px;

  border: 3px solid ${({ theme }) => theme.color.LIME};
  border-radius: 6px;
  background-color: transparent;

  color: ${({ theme }) => theme.color.LIME};

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 10px ${({ theme }) => theme.color.LIME};
  }
`;

export const UploadIconWrapper = styled.div`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  & > svg {
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.color.LIME};
  }
`;

export const Text = styled.span`
  flex-grow: 1;

  font-size: 20px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.LIME};
`;

export const UploadInput = styled.input`
  display: none;
`;
