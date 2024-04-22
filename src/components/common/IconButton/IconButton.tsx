import * as S from './IconButton.styled';
import { SVGProps } from 'react';
import type { CSSProperties } from 'styled-components';

interface IconButtonProps {
  name: string;
  size: 'large' | 'medium';
  width: CSSProperties['width'];
  color: string;
  iconSrc?: string | SVGProps<SVGSVGElement>;
  disabled: boolean;
  ariaLabel: string;
  onClick: () => void;
}

const IconButton = (props: IconButtonProps) => {
  const { name, size, width, color, iconSrc, disabled, ariaLabel, onClick } =
    props;

  return (
    <S.Button
      $size={size}
      $width={width}
      $color={color}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
    >
      {iconSrc &&
        (typeof iconSrc === 'string' ? (
          <S.IconImage src={iconSrc} alt={name} $size={size} />
        ) : (
          <S.IconWrapper $size={size} $color={color}>
            {iconSrc}
          </S.IconWrapper>
        ))}
      <S.Text $size={size}>{name}</S.Text>
    </S.Button>
  );
};

export default IconButton;
