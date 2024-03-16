import RandomDefenseHistoryList from './RandomDefenseHistoryList';
import useRandomDefenseHistoryMenu from '~hooks/randomDefense/useRandomDefenseHistoryMenu';
import * as S from './RandomDefenseHistoryMenu.styled';
import Switch from '~components/common/Switch';
import NamedFrame from '~components/common/NamedFrame/NamedFrame';

const RandomDefenseHistoryMenu = () => {
  const {
    items,
    isHidden,
    isLoaded,
    isEmpty,
    deleteHistoryById,
    clearHistory,
    updateIsHidden,
  } = useRandomDefenseHistoryMenu();

  return (
    <NamedFrame width="370px" height="520px" padding="10px" title="추첨 기록">
      <S.Container>
        {isLoaded && (
          <>
            <S.TierSwitchPanel>
              <S.Text>티어 숨기기</S.Text>
              <Switch
                size="large"
                isChecked={isHidden}
                ariaLabel="티어 숨기기"
                onChange={updateIsHidden}
              />
            </S.TierSwitchPanel>
            <S.HistoryListContainer>
              <RandomDefenseHistoryList
                items={items}
                isHidden={isHidden}
                onDelete={deleteHistoryById}
              />
            </S.HistoryListContainer>
            <S.DeletePanel>
              <button onClick={clearHistory} disabled={isEmpty}>
                모두 삭제
              </button>
            </S.DeletePanel>
          </>
        )}
      </S.Container>
    </NamedFrame>
  );
};

export default RandomDefenseHistoryMenu;
