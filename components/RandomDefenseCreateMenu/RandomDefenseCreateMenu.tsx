import NamedFrame from '@/components/common/NamedFrame';
import Input from '@/components/common/Input';
import TextLink from '@/components/common/TextLink';
import ErrorText from '@/components/common/ErrorText';
import Text from '@/components/common/Text';
import RandomDefenseCreateButton from './RandomDefenseCreateButton';
import RandomDefenseCapsuleButton from './RandomDefenseCapsuleButton';
import DifficultyAdjustMenu from './DifficultyAdjustMenu';
import SearchOperatorSelect from './SearchOperatorSelect';
import AlgorithmSearchInput from './AlgorithmSearchInput';
import useRandomDefenseCreateMenu from '@/hooks/randomDefense/useRandomDefenseCreateMenu';
import * as S from './RandomDefenseCreateMenu.styled';
import type { QuickSlotNo } from '@/types/randomDefense';
import Select from '@/components/common/Select';
import { MAX_CUSTOM_QUERY_LENGTH } from '@/constants/randomDefense';
import QueryInput from '@/components/QueryInput/QueryInput';
import { useTranslation } from '@/i18n';

interface RandomDefenseCreateMenuProps {
  selectedSlotNo: QuickSlotNo;
  isLoaded: boolean;
  onSubmit: (title: string, query: string) => void;
}

const RandomDefenseCreateMenu = (props: RandomDefenseCreateMenuProps) => {
  const { selectedSlotNo, isLoaded, onSubmit } = props;
  const {
    mode,
    title,
    handle,
    solvedMin,
    solvedMax,
    language,
    startTier,
    endTier,
    searchOperator,
    algorithmIds,
    customQuery,
    errorMessage,
    errorElementName,
    setMode,
    setRandomDefenseInputValue,
    setLanguage,
    setTierRange,
    setSearchOperator,
    setAlgorithmIds,
    setCustomQuery,
    submitRandomDefense,
    titleRef,
    handleRef,
    solvedMinRef,
    solvedMaxRef,
    customQueryRef,
  } = useRandomDefenseCreateMenu({ selectedSlotNo, onSubmit });
  const { t } = useTranslation();

  const languageOptions = [
    { label: t('randomDefenseCreate.languageKo'), value: 'ko' },
    { label: t('randomDefenseCreate.languageEn'), value: 'en' },
    { label: t('randomDefenseCreate.languageBoth'), value: 'ko/en' },
    { label: t('randomDefenseCreate.languageAll'), value: 'all' },
  ];

  return (
    <NamedFrame
      width="650px"
      height="373px"
      padding="10px"
      title={t('randomDefenseCreate.frameTitle')}
    >
      <S.Form>
        <S.ErrorTextWrapper>
          <ErrorText errorMessage={errorMessage} fontSize={14} />
        </S.ErrorTextWrapper>
        <S.RandomDefenseCapsuleButtonWrapper>
          <RandomDefenseCapsuleButton mode={mode} onClick={setMode} />
        </S.RandomDefenseCapsuleButtonWrapper>
        <S.Label $width="380px">
          <Text type="primary" fontSize={16}>
            {t('randomDefenseCreate.nameLabel')}
          </Text>
          <Input
            ref={titleRef}
            type="text"
            width="100%"
            height="30px"
            textAlign="left"
            placeholder={t('randomDefenseCreate.namePlaceholder')}
            aria-label={t('randomDefenseCreate.nameAriaLabel')}
            name="title"
            value={title}
            maxLength={30}
            hasError={errorElementName === 'title'}
            onChange={setRandomDefenseInputValue}
          />
        </S.Label>
        {mode === 'simple' ? (
          <>
            <S.Row $columnGap="50px">
              <S.Label $width="190px">
                <Text type="primary" fontSize={16}>
                  {t('randomDefenseCreate.excludeNicknameLabel')}
                </Text>
                <Input
                  ref={handleRef}
                  type="text"
                  width="100%"
                  height="30px"
                  textAlign="left"
                  placeholder={t(
                    'randomDefenseCreate.excludeNicknamePlaceholder',
                  )}
                  aria-label={t('randomDefenseCreate.excludeNicknameLabel')}
                  name="handle"
                  value={handle}
                  minLength={3}
                  maxLength={20}
                  hasError={errorElementName === 'handle'}
                  onChange={setRandomDefenseInputValue}
                />
              </S.Label>
              <S.PanelContainer $width="166px">
                <Text type="primary" fontSize={16}>
                  {t('randomDefenseCreate.solvedRangeLabel')}
                </Text>
                <S.SolvedRangeInputsContainer>
                  <Input
                    ref={solvedMinRef}
                    type="number"
                    width="70px"
                    height="30px"
                    textAlign="center"
                    placeholder=""
                    aria-label={t('randomDefenseCreate.solvedMinAriaLabel')}
                    name="solvedMin"
                    value={solvedMin}
                    hasError={errorElementName === 'solvedMin'}
                    onChange={setRandomDefenseInputValue}
                  />
                  <Text type="primary" fontSize={16}>
                    ~
                  </Text>
                  <Input
                    ref={solvedMaxRef}
                    type="number"
                    width="70px"
                    height="30px"
                    textAlign="center"
                    placeholder=""
                    aria-label={t('randomDefenseCreate.solvedMaxAriaLabel')}
                    name="solvedMax"
                    value={solvedMax}
                    hasError={errorElementName === 'solvedMax'}
                    onChange={setRandomDefenseInputValue}
                  />
                </S.SolvedRangeInputsContainer>
              </S.PanelContainer>
              <S.PanelContainer $width="190px">
                <Text type="primary" fontSize={16}>
                  {t('randomDefenseCreate.languageLabel')}
                </Text>
                <Select
                  options={languageOptions}
                  selectedValue={language}
                  width="130px"
                  ariaLabel={t('randomDefenseCreate.languageAriaLabel')}
                  onChange={setLanguage}
                />
              </S.PanelContainer>
            </S.Row>
            <S.PanelContainer $width="100%">
              <Text type="primary" fontSize={16}>
                {t('randomDefenseCreate.tierRangeLabel')}
              </Text>
              <S.DifficultyAdjustMenuWrapper>
                <DifficultyAdjustMenu
                  startTier={startTier}
                  endTier={endTier}
                  onChange={setTierRange}
                />
              </S.DifficultyAdjustMenuWrapper>
            </S.PanelContainer>
            <S.PanelContainer $width="446px">
              <S.Row>
                <Text type="primary" fontSize={16}>
                  {t('randomDefenseCreate.includeAlgorithmsLabel')}
                </Text>
                <SearchOperatorSelect
                  selectedOperator={searchOperator}
                  onClick={setSearchOperator}
                />
              </S.Row>
              <AlgorithmSearchInput
                selectedAlgorithmIds={algorithmIds}
                onChange={(foo) => {
                  setAlgorithmIds(foo);
                }}
              />
            </S.PanelContainer>
          </>
        ) : (
          <>
            <S.Label $width="100%">
              <Text type="primary" fontSize={16}>
                {t('randomDefenseCreate.queryLabel')}
              </Text>
              <QueryInput
                ref={customQueryRef}
                width="100%"
                height="160px"
                value={customQuery}
                placeholder={t('randomDefenseCreate.queryPlaceholder', [
                  String(MAX_CUSTOM_QUERY_LENGTH),
                ])}
                hasError={errorElementName === 'customQuery'}
                onChange={setCustomQuery}
              />
            </S.Label>
            <S.InformationTextContainer>
              <Text type="normal" fontSize={14}>
                <TextLink href="https://solved.ac/search" fontSize={14}>
                  {t('randomDefenseCreate.advancedSearchLinkText')}
                </TextLink>{' '}
                {t('randomDefenseCreate.advancedSearchSuffix')}
              </Text>
              <Text type="normal" fontSize={14}>
                {t('randomDefenseCreate.proPlanNotice')}
              </Text>
            </S.InformationTextContainer>
          </>
        )}
        <S.RandomDefenseCreateButtonWrapper>
          <RandomDefenseCreateButton
            isLoaded={isLoaded}
            selectedSlotNo={selectedSlotNo}
            onClick={submitRandomDefense}
          />
        </S.RandomDefenseCreateButtonWrapper>
      </S.Form>
    </NamedFrame>
  );
};

export default RandomDefenseCreateMenu;
