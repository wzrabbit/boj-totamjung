import * as S from './TextLink.styled';
import { LinkIcon } from '~images/svg';

interface TextLinkProps {
  href: string;
  children: string;
}

const TextLink = (props: TextLinkProps) => {
  const { href, children } = props;

  return (
    <S.Container href={href} target="__blank" rel="noopener">
      <S.TextLink>{children}</S.TextLink>
      <S.LinkIconWrapper>
        <LinkIcon />
      </S.LinkIconWrapper>
    </S.Container>
  );
};

export default TextLink;
