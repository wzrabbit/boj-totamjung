import { CheckIcon } from '~images/svg';
import * as S from './SearchOperatorSelect.styled';

interface SearchOperatorSelectProps {
  searchOperator: 'OR' | 'AND' | 'NOR';
  onClick: (searchOperator: 'OR' | 'AND' | 'NOR') => void;
}

const OPERATORS = ['OR', 'AND', 'NOR'] as const;

const SearchOperatorSelect = (props: SearchOperatorSelectProps) => {
  const { searchOperator, onClick } = props;

  return (
    <S.Container>
      {OPERATORS.map((operator) => (
        <S.ButtonContainer key={operator}>
          {operator === searchOperator && (
            <S.CheckIconWrapper>
              <CheckIcon />
            </S.CheckIconWrapper>
          )}
          <S.Button
            type="button"
            aria-label={`알고리즘 검색 옵션을 ${operator}로 설정하기`}
            $isSelected={operator === searchOperator}
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
