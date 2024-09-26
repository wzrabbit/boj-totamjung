import * as S from './Fieldset.styled';
import Radio from '@/components/common/Radio';
import Text from '@/components/common/Text';
import type { ReactNode } from 'react';

interface FieldsetProps {
  legend: string;
  name: string;
  options: Option[];
  checkedValue: string;
  disabled?: boolean;
  isVertical?: boolean;
  onChange: (value: string) => void;
}

interface Option {
  label: string | ReactNode;
  value: string;
}

const Fieldset = (props: FieldsetProps) => {
  const {
    legend,
    name,
    options,
    checkedValue,
    disabled,
    isVertical,
    onChange,
  } = props;

  return (
    <S.Fieldset disabled={disabled}>
      <S.Legend>{legend}</S.Legend>
      <S.OptionsContainer $isVertical={isVertical}>
        {options.map(({ label, value }) => (
          <S.Label key={value}>
            <Radio
              name={name}
              value={value}
              checked={value === checkedValue}
              disabled={disabled}
              onChange={onChange}
            />
            {typeof label === 'string' ? (
              <Text type="semiPrimary" fontSize="16px">
                {label}
              </Text>
            ) : (
              label
            )}
          </S.Label>
        ))}
      </S.OptionsContainer>
    </S.Fieldset>
  );
};

export default Fieldset;
