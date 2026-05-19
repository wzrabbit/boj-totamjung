import { CheckIcon } from '@/assets/svg';
import type { SearchOperator } from '@/types/randomDefense';
import { useTranslation } from '@/i18n';
import type { TranslationKey } from '@/i18n';
import * as S from './SearchOperatorSelect.styled';

interface SearchOperatorSelectProps {
  selectedOperator: SearchOperator;
  onClick: (operator: SearchOperator) => void;
}

const DESCRIPTION_KEYS: Record<SearchOperator, TranslationKey> = {
  OR: 'randomDefenseCreate.searchOperator.orDescription',
  AND: 'randomDefenseCreate.searchOperator.andDescription',
  NOR: 'randomDefenseCreate.searchOperator.norDescription',
};

const SearchOperatorSelect = (props: SearchOperatorSelectProps) => {
  const { selectedOperator, onClick } = props;
  const { t } = useTranslation();

  const operators: SearchOperator[] = ['OR', 'AND', 'NOR'];

  return (
    <S.Container>
      {operators.map((operator) => (
        <S.ButtonContainer key={operator}>
          {operator === selectedOperator && (
            <S.CheckIconWrapper>
              <CheckIcon />
            </S.CheckIconWrapper>
          )}
          <S.Button
            type="button"
            title={t(DESCRIPTION_KEYS[operator])}
            aria-label={t('randomDefenseCreate.searchOperator.setAriaLabel', [
              operator,
            ])}
            $isSelected={operator === selectedOperator}
            onClick={() => {
              onClick(operator);
            }}
          >
            {operator}
          </S.Button>
        </S.ButtonContainer>
      ))}
    </S.Container>
  );
};

export default SearchOperatorSelect;
