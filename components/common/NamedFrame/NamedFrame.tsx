import type { PropsWithChildren } from 'react';
import type { CSSProperties } from 'styled-components';
import * as S from './NamedFrame.styled';

interface NamedFrameProps {
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  padding: CSSProperties['padding'];
  title: string;
}

const NamedFrame = (props: PropsWithChildren<NamedFrameProps>) => {
  const { width, height, padding, title, children } = props;
  return (
    <S.Container $width={width} $height={height} $padding={padding}>
      {title !== '' && <S.Title>{title}</S.Title>}
      {children}
    </S.Container>
  );
};

export default NamedFrame;
