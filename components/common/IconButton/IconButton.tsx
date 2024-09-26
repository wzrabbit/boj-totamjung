import * as S from './IconButton.styled';
import { SVGProps } from 'react';

interface CommonIconButtonProps {
  name: string;
  size: 'large' | 'medium';
  width?: string;
  color: string;
  iconSrc?: string | SVGProps<SVGSVGElement>;
  disabled: boolean;
  ariaLabel: string;
  autoFocus?: boolean;
}

interface ButtonTypeProps {
  type: 'submit';
}

interface SubmitTypeProps {
  type: 'button';
  onClick: () => void;
}

type IconButtonProps = CommonIconButtonProps &
  (ButtonTypeProps | SubmitTypeProps);

const IconButton = (props: IconButtonProps) => {
  const { name, size, width, color, iconSrc, ariaLabel, ...rest } = props;

  return (
    <S.Button
      $size={size}
      $width={width}
      $color={color}
      aria-label={ariaLabel}
      {...rest}
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
