import { CheckIcon } from '@/assets/svg';
import type { SearchOperator } from '@/types/randomDefense';
import * as S from './SearchOperatorSelect.styled';

interface SearchOperatorSelectProps {
  searchOperator: SearchOperator;
  onClick: (searchOperator: SearchOperator) => void;
}

const operators: readonly SearchOperator[] = ['OR', 'AND', 'NOR'];

const SearchOperatorSelect = (props: SearchOperatorSelectProps) => {
  const { searchOperator, onClick } = props;

  return (
    <S.Container>
      {operators.map((operator) => (
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
