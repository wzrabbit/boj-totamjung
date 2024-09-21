import * as S from './TextLink.styled';
import { LinkIcon } from '~images/svg';

interface TextLinkProps {
  href: string;
  fontSize: '16px' | '14px' | '13px';
  children: string;
}

const TextLink = (props: TextLinkProps) => {
  const { href, fontSize, children } = props;

  return (
    <S.Container href={href} target="__blank" rel="noopener">
      <S.TextLink $fontSize={fontSize}>{children}</S.TextLink>
      <S.LinkIconWrapper $fontSize={fontSize}>
        <LinkIcon />
      </S.LinkIconWrapper>
    </S.Container>
  );
};

export default TextLink;
