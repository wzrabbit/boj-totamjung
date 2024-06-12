import * as S from './Radio.styled';

type RadioProps = RadioWithValue | RadioWithoutValue;

interface RadioWithValue {
  name: string;
  value: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
}

interface RadioWithoutValue {
  name: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
}

const Radio = (props: RadioProps) => {
  const { checked, disabled } = props;

  return (
    <S.Label>
      <S.Radio
        {...props}
        onChange={() => {
          if ('value' in props) {
            props.onChange(props.value);
            return;
          }

          props.onChange();
        }}
      />
      <S.FakeVisualRadio $checked={checked} $disabled={disabled} />
    </S.Label>
  );
};

export default Radio;
