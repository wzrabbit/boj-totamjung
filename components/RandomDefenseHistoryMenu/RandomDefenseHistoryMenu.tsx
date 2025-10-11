import RandomDefenseHistoryList from './RandomDefenseHistoryList';
import useRandomDefenseHistoryMenu from '@/hooks/randomDefense/useRandomDefenseHistoryMenu';
import * as S from './RandomDefenseHistoryMenu.styled';
import Switch from '@/components/common/Switch';
import NamedFrame from '@/components/common/NamedFrame/NamedFrame';
import SimpleModal from '@/components/common/SimpleModal';
import FallbackWithImage from '../common/FallbackWithImage';
import Loading from '@/components/common/Loading';
import { TrashIcon, PackageIcon } from '@/assets/svg';
import {
  MAX_HISTORY_LIMIT,
  MAX_PROBLEM_COUNT_PER_RANDOM_DEFENSE,
} from '@/constants/randomDefense';
import Text from '@/components/common/Text';
import useModal from '@/hooks/useModal';
import { theme } from '@/styles/theme';
import { tierParcel } from '@/assets/png';

const getIndicatorMessageInfo = (itemsCount: number) => {
  const historyCapacityLeftSpaceCount = MAX_HISTORY_LIMIT - itemsCount;
  const historyCapacityStatus =
    historyCapacityLeftSpaceCount >= MAX_PROBLEM_COUNT_PER_RANDOM_DEFENSE
      ? 'normal'
      : historyCapacityLeftSpaceCount > 0
        ? 'warn'
        : 'danger';

  const indicatorDefaultMessage = `현재 ${itemsCount}문제가 기록에 저장되어 있으며, 저장할 수 있는 최대 문제 수는 ${MAX_HISTORY_LIMIT}문제입니다.\n저장할 수 있는 최대 문제 수를 넘을 경우 오래된 문제 순으로 기록에서 삭제됩니다.`;
  const indicatorExtraMessage =
    historyCapacityStatus === 'warn'
      ? '\n\n저장된 문제 수가 최대 문제 수에 가까워지고 있습니다. 원치 않는 기록 삭제를 방지하려면 문제 공간을 확보해 주세요.'
      : historyCapacityStatus === 'danger'
        ? '\n\n저장된 문제 수가 최대 문제 수에 도달했습니다. 이 상태에서는 추첨 진행 시 오래된 기록들이 삭제될 것입니다. 원치 않는 기록 삭제를 방지하려면 문제 공간을 확보해 주세요.'
        : '';

  const indicatorMessage = `${indicatorDefaultMessage}${indicatorExtraMessage}`;
  const indicatorColor =
    historyCapacityStatus === 'normal'
      ? theme.color.WHITE
      : historyCapacityStatus === 'warn'
        ? theme.color.ORANGE
        : theme.color.LIGHT_RED;

  return { indicatorMessage, indicatorColor };
};

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
  const { activeModalName, openModal, closeModal } =
    useModal<'confirmClearHistory'>();
  const { indicatorMessage, indicatorColor } = getIndicatorMessageInfo(
    items.length,
  );

  return (
    <NamedFrame width="370px" height="553px" padding="10px" title="추첨 기록">
      <S.Container>
        {isLoaded ? (
          <>
            <S.TierSwitchPanel>
              <Text type="normal" fontSize={16} width="auto" as="span">
                티어 숨기기
              </Text>
              <Switch
                size="large"
                isChecked={isHidden}
                ariaLabel="티어 숨기기"
                onChange={updateIsHidden}
              />
            </S.TierSwitchPanel>
            <S.HistoryListContainer>
              {items.length > 0 ? (
                <RandomDefenseHistoryList
                  items={items}
                  isHidden={isHidden}
                  onDelete={deleteHistoryById}
                />
              ) : (
                <FallbackWithImage
                  imageSrc={tierParcel}
                  imageWidth={100}
                  imageHeight={86}
                  title="추첨 기록"
                  description="문제를 추첨하면 여기에 기록이 표시될 거에요."
                />
              )}
            </S.HistoryListContainer>
            <S.HistoryManagePanel>
              <S.Indicator title={indicatorMessage}>
                <S.PackageIconWrapper>
                  <PackageIcon />
                </S.PackageIconWrapper>
                <S.IndicatorText
                  $color={indicatorColor}
                >{`${items.length} / ${MAX_HISTORY_LIMIT}`}</S.IndicatorText>
              </S.Indicator>
              <Text type="normal" fontSize={16} width="auto" as="span">
                추첨 기록 비우기
              </Text>
              <S.DeleteButton
                onClick={() => {
                  openModal('confirmClearHistory');
                }}
                disabled={isEmpty}
                aria-label="추첨 기록 비우기"
              >
                <TrashIcon />
              </S.DeleteButton>
            </S.HistoryManagePanel>
          </>
        ) : (
          <Loading />
        )}
        <SimpleModal
          title="추첨 기록 전체 제거 확인"
          actionType="yesNo"
          width="350px"
          height="auto"
          open={activeModalName === 'confirmClearHistory'}
          message="모든 추첨 기록을 제거할까요?"
          onYesSelect={() => {
            clearHistory();
            closeModal();
          }}
          onNoSelect={closeModal}
        />
      </S.Container>
    </NamedFrame>
  );
};

export default RandomDefenseHistoryMenu;
