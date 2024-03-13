import * as S from './Switch.styled';

interface CheckboxProps {
  size: 'large' | 'medium';
  isChecked: boolean;
  ariaLabel: string;
  onChange: () => void;
}

const Switch = (props: CheckboxProps) => {
  const { size, isChecked, ariaLabel, onChange } = props;

  return (
    <S.Container $size={size}>
      <S.Switch
        checked={isChecked}
        aria-label={ariaLabel}
        onChange={onChange}
      />
      <S.FakeVisualSwitch $isChecked={isChecked}>
        <S.Handle $size={size} $isChecked={isChecked} />
      </S.FakeVisualSwitch>
    </S.Container>
  );
};

export default Switch;
