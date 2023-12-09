import * as S from './Checkbox.styled';

interface CheckboxProps {
  isChecked: boolean;
  onChange: () => void;
}

const Checkbox = (props: CheckboxProps) => {
  const { isChecked, onChange } = props;

  return (
    <label>
      <S.FakeVisualCheckbox $isChecked={isChecked} />
      <S.Checkbox checked={isChecked} onChange={onChange} />
    </label>
  );
};

export default Checkbox;
