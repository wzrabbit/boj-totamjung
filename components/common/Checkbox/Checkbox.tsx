import * as S from './Checkbox.styled';

interface CheckboxProps {
  isChecked: boolean;
  ariaLabel: string;
  onChange: () => void;
}

const Checkbox = (props: CheckboxProps) => {
  const { isChecked, ariaLabel, onChange } = props;

  return (
    <S.Container>
      <S.Checkbox
        checked={isChecked}
        aria-label={ariaLabel}
        onChange={onChange}
      />
      <S.FakeVisualCheckbox $isChecked={isChecked} />
    </S.Container>
  );
};

export default Checkbox;
