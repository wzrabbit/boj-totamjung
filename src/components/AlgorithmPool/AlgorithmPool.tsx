import * as S from './AlgorithmPool.styled';
import AlgorithmList from './AlgorithmList';
import useAlgorithmPool from '~hooks/algorithm/useAlgorithmPool';
import { SearchIcon } from '~images/svg';
import { allCheckedIcon, allUncheckedIcon } from '~images/png';

const AlgorithmPool = () => {
  const {
    keyword,
    items,
    checkedIds,
    isLoaded,
    handleChangeKeyword,
    toggleAlgorithm,
    checkAllAlgorithms,
    uncheckAllAlgorithms,
  } = useAlgorithmPool();

  return (
    <S.Container>
      <S.AlgorithmPanel>
        {isLoaded && (
          <AlgorithmList
            items={items}
            checkedIds={checkedIds}
            onChange={toggleAlgorithm}
          />
        )}
      </S.AlgorithmPanel>
      <S.ControlPanel>
        <S.SearchPanelContainer>
          <S.SearchIconWrapper>
            <SearchIcon />
          </S.SearchIconWrapper>
          <S.SearchInput
            placeholder="검색어를 입력해 주세요..."
            value={keyword}
            onChange={handleChangeKeyword}
          />
        </S.SearchPanelContainer>
        <S.CheckButtonPanel>
          <S.CheckButton
            type="button"
            onClick={checkAllAlgorithms}
            aria-label="알고리즘 분류 전체 선택"
          >
            <S.CheckButtonImage src={allCheckedIcon} />
            <S.CheckButtonLabel>전체 선택</S.CheckButtonLabel>
          </S.CheckButton>
          <S.CheckButton
            type="button"
            onClick={uncheckAllAlgorithms}
            aria-label="알고리즘 분류 전체 해제"
          >
            <S.CheckButtonImage src={allUncheckedIcon} />
            <S.CheckButtonLabel>전체 해제</S.CheckButtonLabel>
          </S.CheckButton>
        </S.CheckButtonPanel>
      </S.ControlPanel>
    </S.Container>
  );
};

export default AlgorithmPool;
