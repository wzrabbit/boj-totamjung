import type { ChangeEvent } from 'react';
import * as S from './Switch.styled';

interface SwitchProps {
  size: 'large' | 'medium';
  isChecked: boolean;
  ariaLabel: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Switch = (props: SwitchProps) => {
  const { size, isChecked, ariaLabel, onChange } = props;

  return (
    <S.Container $size={size}>
      <S.Switch
        checked={isChecked}
        aria-label={ariaLabel}
        onChange={onChange}
        value=""
      />
      <S.FakeVisualSwitch $isChecked={isChecked}>
        <S.Handle $size={size} $isChecked={isChecked} />
      </S.FakeVisualSwitch>
    </S.Container>
  );
};

export default Switch;
