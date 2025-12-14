import * as S from './Select.styled';
import { CheckIcon, ArrowDownTriangleIcon } from '@/assets/svg';
import useSelect from '@/hooks/useSelect';

interface SelectProps {
  options: Option[];
  selectedValue: string;
  width: string;
  ariaLabel: string;
  onChange: (value: string) => void;
}

interface Option {
  label: string;
  value: string;
}

const Select = (props: SelectProps) => {
  const {
    options,
    selectedValue: initSelectedValue,
    width,
    ariaLabel,
    onChange,
  } = props;
  const {
    selectedValue,
    updateSelectedValue,
    isSelectOpen,
    toggleSelect,
    containerRef,
    selectButtonRef,
  } = useSelect<string>({
    initSelectedValue,
    onChange,
  });
  const selectedLabel =
    options.find(({ value }) => value === selectedValue)?.label ?? '';

  return (
    <S.Container ref={containerRef} $width={width} role="combobox">
      <S.Button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={isSelectOpen}
        onClick={toggleSelect}
        ref={selectButtonRef}
        $isActivated={isSelectOpen}
      >
        <S.OptionText $isBold={true}>{selectedLabel}</S.OptionText>
        <S.ArrowDownTriangleIconWrapper>
          <ArrowDownTriangleIcon />
        </S.ArrowDownTriangleIconWrapper>
      </S.Button>
      <S.List $isOpen={isSelectOpen} role="listbox" aria-labelledby={ariaLabel}>
        {options.map(({ label, value }) => (
          <S.ListItem
            key={value}
            role="option"
            aria-selected={value === selectedValue}
          >
            <S.ListButton
              type="button"
              onClick={() => {
                updateSelectedValue(value);
              }}
            >
              <S.OptionText $isBold={value === selectedValue}>
                {label}
              </S.OptionText>
              {value === selectedValue && (
                <S.CheckIconWrapper>
                  <CheckIcon />
                </S.CheckIconWrapper>
              )}
            </S.ListButton>
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
};

export default Select;
