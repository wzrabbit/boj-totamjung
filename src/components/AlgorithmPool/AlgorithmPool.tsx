import * as S from './AlgorithmPool.styled';
import AlgorithmList from './AlgorithmList';
import useAlgorithmPool from '@hooks/algorithm/useAlgorithmPool';

const AlgorithmPool = () => {
  const {
    keyword,
    items,
    checkedIds,
    setKeyword,
    toggleAlgorithm,
    checkAllAlgorithms,
    uncheckAllAlgorithms,
  } = useAlgorithmPool();

  return (
    <S.Container>
      <AlgorithmList
        items={items}
        checkedIds={checkedIds}
        onChange={toggleAlgorithm}
      />
      <input
        placeholder="검색어를 입력해 주세요..."
        value={keyword}
        onChange={(event) => setKeyword(() => event.target.value)}
      />
      <button onClick={checkAllAlgorithms}>전체 선택</button>
      <button onClick={uncheckAllAlgorithms}>전체 해제</button>
    </S.Container>
  );
};

export default AlgorithmPool;
