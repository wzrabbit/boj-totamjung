import * as S from './AlgorithmPool.styled';
import AlgorithmList from './AlgorithmList';
import SimpleModal from '@/components/common/SimpleModal';
import useAlgorithmPool from '@/hooks/algorithm/useAlgorithmPool';
import useModal from '@/hooks/useModal';
import { SearchIcon } from '@/images/svg';
import { allCheckedIcon, allUncheckedIcon } from '@/images/png';

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
  const { activeModalName, openModal, closeModal } = useModal<
    'checkAll' | 'uncheckAll'
  >();

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
            onClick={() => {
              openModal('checkAll');
            }}
            aria-label="알고리즘 분류 전체 선택"
          >
            <S.CheckButtonImage src={allCheckedIcon} />
            <S.CheckButtonLabel>전체 선택</S.CheckButtonLabel>
          </S.CheckButton>
          <S.CheckButton
            type="button"
            onClick={() => {
              openModal('uncheckAll');
            }}
            aria-label="알고리즘 분류 전체 해제"
          >
            <S.CheckButtonImage src={allUncheckedIcon} />
            <S.CheckButtonLabel>전체 해제</S.CheckButtonLabel>
          </S.CheckButton>
        </S.CheckButtonPanel>
      </S.ControlPanel>
      <SimpleModal
        title="알고리즘 분류 전체 선택 확인"
        actionType="yesNo"
        width="350px"
        height="auto"
        open={activeModalName === 'checkAll'}
        message="모든 알고리즘 분류를 선택할까요?"
        onYesSelect={() => {
          checkAllAlgorithms();
          closeModal();
        }}
        onNoSelect={closeModal}
      />
      <SimpleModal
        title="알고리즘 분류 전체 해제 확인"
        actionType="yesNo"
        width="350px"
        height="auto"
        open={activeModalName === 'uncheckAll'}
        message="모든 알고리즘 분류를 선택 해제할까요?"
        onYesSelect={() => {
          uncheckAllAlgorithms();
          closeModal();
        }}
        onNoSelect={closeModal}
      />
    </S.Container>
  );
};

export default AlgorithmPool;
