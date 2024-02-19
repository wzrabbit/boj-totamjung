import * as S from './AlgorithmPool.styled';
import AlgorithmList from './AlgorithmList';

const AlgorithmPool = () => {
  return (
    <S.Container>
      <AlgorithmList items={[]} checkedIds={[]} onChange={() => {}} />
      <input />
      <button>전체 선택</button>
      <button>전체 해제</button>
    </S.Container>
  );
};

export default AlgorithmPool;
