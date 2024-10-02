import type { SVGProps, ReactElement } from 'react';
import * as S from './MenuTitle.styled';

interface MenuTitleProps {
  iconSrc: string | ReactElement<SVGProps<SVGSVGElement>>;
  title: string;
}

const MenuTitle = (props: MenuTitleProps) => {
  const { iconSrc, title } = props;

  return (
    <S.Container>
      <S.ContentContainer>
        {iconSrc &&
          (typeof iconSrc === 'string' ? (
            <S.IconImage src={iconSrc} alt="" />
          ) : (
            <S.IconWrapper>{iconSrc}</S.IconWrapper>
          ))}
        <S.Title>{title}</S.Title>
      </S.ContentContainer>
      <S.Underline />
    </S.Container>
  );
};

export default MenuTitle;
