import { CheckIcon } from '@/assets/svg';
import type { SearchOperator, SearchOperatorInfo } from '@/types/randomDefense';
import * as S from './SearchOperatorSelect.styled';

interface SearchOperatorSelectProps {
  selectedOperator: SearchOperator;
  onClick: (operator: SearchOperator) => void;
}

const searchOperatorInfos: readonly SearchOperatorInfo[] = [
  {
    operator: 'OR',
    description:
      'OR: 선택된 알고리즘 분류 중 하나 이상 포함되는 문제들만 추첨에서 등장합니다.',
  },
  {
    operator: 'AND',
    description:
      'AND: 선택된 알고리즘 분류 모두를 포함하는 문제들만 추첨에서 등장합니다.',
  },
  {
    operator: 'NOR',
    description:
      'NOR: 선택된 알고리즘 분류 모두를 포함하지 않는 문제들만 추첨에서 등장합니다.',
  },
];

const SearchOperatorSelect = (props: SearchOperatorSelectProps) => {
  const { selectedOperator, onClick } = props;

  return (
    <S.Container>
      {searchOperatorInfos.map(({ operator, description }) => (
        <S.ButtonContainer key={operator}>
          {operator === selectedOperator && (
            <S.CheckIconWrapper>
              <CheckIcon />
            </S.CheckIconWrapper>
          )}
          <S.Button
            type="button"
            title={description}
            aria-label={`알고리즘 검색 옵션을 ${operator}로 설정하기`}
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
