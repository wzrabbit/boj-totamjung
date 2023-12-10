import * as S from './Radio.styled';

interface RadioProps {
  name: string;
  isChecked: boolean;
  onChange: () => void;
}

const Radio = (props: RadioProps) => {
  const { name, isChecked, onChange } = props;

  return (
    <label>
      <S.FakeVisualRadio $isChecked={isChecked} />
      <S.Radio name={name} checked={isChecked} onChange={onChange} />
    </label>
  );
};

export default Radio;
