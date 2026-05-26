import * as S from './AlgorithmPool.styled';
import AlgorithmList from './AlgorithmList';
import SimpleModal from '@/components/common/SimpleModal';
import FallbackWithImage from '@/components/common/FallbackWithImage';
import Loading from '@/components/common/Loading';
import useAlgorithmPool from '@/hooks/algorithm/useAlgorithmPool';
import useModalState from '@/hooks/useModalState';
import { SearchIcon } from '@/assets/svg';
import { allCheckedIcon, allUncheckedIcon, noSearchResult } from '@/assets/png';
import { useTranslation } from '@/i18n';

const AlgorithmPool = () => {
  const {
    keyword,
    items,
    checkedAlgorithmIds,
    isLoaded,
    handleChangeKeyword,
    toggleAlgorithm,
    checkAllAlgorithms,
    uncheckAllAlgorithms,
  } = useAlgorithmPool();
  const { activeModalName, openModal, closeModal } = useModalState<
    'checkAll' | 'uncheckAll'
  >();
  const { t } = useTranslation();

  return (
    <S.Container role="group">
      <S.AlgorithmPanel>
        {isLoaded ? (
          items.length > 0 ? (
            <AlgorithmList
              items={items}
              checkedAlgorithmIds={checkedAlgorithmIds}
              onChange={toggleAlgorithm}
            />
          ) : (
            <FallbackWithImage
              imageSrc={noSearchResult}
              imageWidth={136}
              imageHeight={125}
              title={t('options.algorithmPool.noResultTitle')}
              description={t('options.algorithmPool.noResultDescription')}
            />
          )
        ) : (
          <Loading />
        )}
      </S.AlgorithmPanel>
      <S.ControlPanel>
        <S.SearchPanelContainer>
          <S.SearchIconWrapper>
            <SearchIcon />
          </S.SearchIconWrapper>
          <S.SearchInput
            placeholder={t('options.algorithmPool.searchPlaceholder')}
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
            aria-label={t('options.algorithmPool.checkAllAriaLabel')}
            disabled={!isLoaded}
          >
            <S.CheckButtonImage src={allCheckedIcon} />
            <S.CheckButtonLabel>
              {t('options.algorithmPool.checkAllLabel')}
            </S.CheckButtonLabel>
          </S.CheckButton>
          <S.CheckButton
            type="button"
            onClick={() => {
              openModal('uncheckAll');
            }}
            aria-label={t('options.algorithmPool.uncheckAllAriaLabel')}
            disabled={!isLoaded}
          >
            <S.CheckButtonImage src={allUncheckedIcon} />
            <S.CheckButtonLabel>
              {t('options.algorithmPool.uncheckAllLabel')}
            </S.CheckButtonLabel>
          </S.CheckButton>
        </S.CheckButtonPanel>
      </S.ControlPanel>
      <SimpleModal
        title={t('options.algorithmPool.checkAllConfirmTitle')}
        actionType="yesNo"
        width="350px"
        height="auto"
        open={activeModalName === 'checkAll'}
        message={t('options.algorithmPool.checkAllConfirmMessage')}
        onYesSelect={() => {
          checkAllAlgorithms();
          closeModal();
        }}
        onNoSelect={closeModal}
      />
      <SimpleModal
        title={t('options.algorithmPool.uncheckAllConfirmTitle')}
        actionType="yesNo"
        width="350px"
        height="auto"
        open={activeModalName === 'uncheckAll'}
        message={t('options.algorithmPool.uncheckAllConfirmMessage')}
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
