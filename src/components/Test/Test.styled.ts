import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;
  height: 250px;

  border: 1px solid brown;

  & * {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Content = styled.p`
  font-size: 16px;
`;

export { Container, Title, Content };
