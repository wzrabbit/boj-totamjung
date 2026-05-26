import RandomDefenseHistoryList from './RandomDefenseHistoryList';
import useRandomDefenseHistoryMenu from '@/hooks/randomDefense/useRandomDefenseHistoryMenu';
import * as S from './RandomDefenseHistoryMenu.styled';
import Switch from '@/components/common/Switch';
import NamedFrame from '@/components/common/NamedFrame/NamedFrame';
import SimpleModal from '@/components/common/SimpleModal';
import FallbackWithImage from '@/components/common/FallbackWithImage';
import Loading from '@/components/common/Loading';
import { TrashIcon, PackageIcon } from '@/assets/svg';
import {
  MAX_HISTORY_LIMIT,
  MAX_PROBLEM_COUNT_PER_RANDOM_DEFENSE,
} from '@/constants/randomDefense';
import Text from '@/components/common/Text';
import useModalState from '@/hooks/useModalState';
import { theme } from '@/styles/theme';
import { tierParcel } from '@/assets/png';
import { useTranslation } from '@/i18n';

const RandomDefenseHistoryMenu = () => {
  const {
    items,
    isTierHidden,
    isLoaded,
    isEmpty,
    deleteHistoryById,
    clearHistory,
    updateIsTierHidden,
  } = useRandomDefenseHistoryMenu();
  const { activeModalName, openModal, closeModal } =
    useModalState<'confirmClearHistory'>();
  const { t } = useTranslation();

  const historyCapacityLeftSpaceCount = MAX_HISTORY_LIMIT - items.length;
  const historyCapacityStatus =
    historyCapacityLeftSpaceCount >= MAX_PROBLEM_COUNT_PER_RANDOM_DEFENSE
      ? 'normal'
      : historyCapacityLeftSpaceCount > 0
        ? 'warn'
        : 'danger';

  const indicatorDefaultMessage = t(
    'randomDefenseHistory.indicatorDefaultMessage',
    [String(items.length), String(MAX_HISTORY_LIMIT)],
  );
  const indicatorExtraMessage =
    historyCapacityStatus === 'warn'
      ? t('randomDefenseHistory.indicatorWarning')
      : historyCapacityStatus === 'danger'
        ? t('randomDefenseHistory.indicatorFull')
        : '';
  const indicatorMessage = `${indicatorDefaultMessage}${indicatorExtraMessage}`;
  const indicatorColor =
    historyCapacityStatus === 'normal'
      ? theme.colors.WHITE
      : historyCapacityStatus === 'warn'
        ? theme.colors.ORANGE
        : theme.colors.LIGHT_RED;

  return (
    <NamedFrame
      width="370px"
      height="553px"
      padding="10px"
      title={t('randomDefenseHistory.frameTitle')}
    >
      <S.Container>
        {isLoaded ? (
          <>
            <S.TierSwitchPanel>
              <Text type="normal" fontSize={16} width="auto" as="span">
                {t('randomDefenseHistory.hideTierLabel')}
              </Text>
              <Switch
                size="large"
                isChecked={isTierHidden}
                ariaLabel={t('randomDefenseHistory.hideTierAriaLabel')}
                onChange={updateIsTierHidden}
              />
            </S.TierSwitchPanel>
            <S.HistoryListContainer>
              {items.length > 0 ? (
                <RandomDefenseHistoryList
                  items={items}
                  isHidden={isTierHidden}
                  onDelete={deleteHistoryById}
                />
              ) : (
                <FallbackWithImage
                  imageSrc={tierParcel}
                  imageWidth={100}
                  imageHeight={86}
                  title={t('randomDefenseHistory.emptyTitle')}
                  description={t('randomDefenseHistory.emptyDescription')}
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
                {t('randomDefenseHistory.clearButton')}
              </Text>
              <S.DeleteButton
                onClick={() => {
                  openModal('confirmClearHistory');
                }}
                disabled={isEmpty}
                aria-label={t('randomDefenseHistory.clearAriaLabel')}
              >
                <TrashIcon />
              </S.DeleteButton>
            </S.HistoryManagePanel>
          </>
        ) : (
          <Loading />
        )}
        <SimpleModal
          title={t('randomDefenseHistory.clearConfirmTitle')}
          actionType="yesNo"
          width="350px"
          height="auto"
          open={activeModalName === 'confirmClearHistory'}
          message={t('randomDefenseHistory.clearConfirmMessage')}
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
