import * as S from './MiniAlgorithmButton.styled';
import { CloseSmallIcon } from '~images/svg';

interface MiniAlgorithmButtonProps {
  id: number;
  name: string;
  mode: 'add' | 'delete';
  onClick: (algorithmId: number) => void;
}

const MiniAlgorithmButton = (props: MiniAlgorithmButtonProps) => {
  const { id, name, mode, onClick } = props;

  return (
    <S.Container>
      <S.Button
        type="button"
        aria-label={
          mode === 'add'
            ? `${name}을 검색에 포함할 알고리즘 목록에 추가하기`
            : `${name}을 검색에 포함할 알고리즘 목록에서 제거하기`
        }
        onClick={() => {
          onClick(id);
        }}
      >
        <S.Text>{name}</S.Text>
        {mode === 'delete' && (
          <S.CloseIconWrapper>
            <CloseSmallIcon />
          </S.CloseIconWrapper>
        )}
      </S.Button>
    </S.Container>
  );
};

export default MiniAlgorithmButton;
