import { forwardRef } from 'react';
import * as S from './Checkbox.styled';
import type { KeyboardEventHandler } from 'react';

interface CheckboxProps {
  isChecked: boolean;
  name?: string;
  ariaLabel: string;
  tabIndex?: number;
  onChange: () => void;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    isChecked,
    name,
    ariaLabel,
    tabIndex = 0,
    onChange,
    onKeyDown,
  } = props;

  return (
    <S.Container>
      <S.Checkbox
        checked={isChecked}
        name={name}
        aria-label={ariaLabel}
        onChange={onChange}
        ref={ref}
        tabIndex={tabIndex}
        onKeyDown={onKeyDown}
      />
      <S.FakeVisualCheckbox $isChecked={isChecked} />
    </S.Container>
  );
});

export default Checkbox;
