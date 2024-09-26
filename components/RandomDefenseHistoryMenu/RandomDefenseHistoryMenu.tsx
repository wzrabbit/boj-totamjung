import RandomDefenseHistoryList from './RandomDefenseHistoryList';
import useRandomDefenseHistoryMenu from '@/hooks/randomDefense/useRandomDefenseHistoryMenu';
import * as S from './RandomDefenseHistoryMenu.styled';
import Switch from '@/components/common/Switch';
import NamedFrame from '@/components/common/NamedFrame/NamedFrame';
import { TrashIcon, PackageIcon } from '@/assets/svg';
import { MAX_HISTORY_LIMIT } from '@/constants/randomDefense';

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
    <NamedFrame width="370px" height="537px" padding="10px" title="추첨 기록">
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
            <S.HistoryManagePanel>
              <S.Indicator>
                <S.PackageIconWrapper>
                  <PackageIcon />
                </S.PackageIconWrapper>
                <S.IndicatorText>{`${items.length} / ${MAX_HISTORY_LIMIT}`}</S.IndicatorText>
              </S.Indicator>
              <S.Text>추첨 기록 비우기</S.Text>
              <S.DeleteButton
                onClick={clearHistory}
                disabled={isEmpty}
                aria-label="추첨 기록 비우기"
              >
                <TrashIcon />
              </S.DeleteButton>
            </S.HistoryManagePanel>
          </>
        )}
      </S.Container>
    </NamedFrame>
  );
};

export default RandomDefenseHistoryMenu;
