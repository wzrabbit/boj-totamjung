import NamedFrame from '@/components/common/NamedFrame';
import Input from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';
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
import type { SlotNo } from '@/types/randomDefense';
import Select from '@/components/common/Select';
import { MAX_CUSTOM_QUERY_LENGTH } from '@/constants/randomDefense';

interface RandomDefenseCreateMenuProps {
  selectedSlotNo: SlotNo;
  isLoaded: boolean;
  onSubmit: (title: string, query: string) => void;
}

const languageOptions = [
  {
    label: '한국어',
    value: 'ko',
  },
  {
    label: '영어',
    value: 'en',
  },
  {
    label: '한국어 및 영어',
    value: 'ko/en',
  },
  {
    label: '모든 언어',
    value: 'all',
  },
];

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
    submitRandomDefense,
    titleRef,
    handleRef,
    solvedMinRef,
    solvedMaxRef,
    customQueryRef,
  } = useRandomDefenseCreateMenu({ selectedSlotNo, onSubmit });

  return (
    <NamedFrame width="650px" height="373px" padding="10px" title="추첨 만들기">
      <S.Form>
        <S.ErrorTextWrapper>
          <ErrorText errorMessage={errorMessage} fontSize="14px" />
        </S.ErrorTextWrapper>
        <S.RandomDefenseCapsuleButtonWrapper>
          <RandomDefenseCapsuleButton mode={mode} onClick={setMode} />
        </S.RandomDefenseCapsuleButtonWrapper>
        <S.Label $width="380px">
          <Text type="primary" fontSize="16px">
            추첨 이름
          </Text>
          <Input
            ref={titleRef}
            type="text"
            width="100%"
            textAlign="left"
            placeholder="0 ~ 30자"
            ariaLabel="추첨 이름"
            name="title"
            value={title}
            maxLength={30}
            hasError={errorElementName === 'title'}
            onChange={setRandomDefenseInputValue}
          />
        </S.Label>
        {mode === 'easy' ? (
          <>
            <S.Row $columnGap="50px">
              <S.Label $width="190px">
                <Text type="primary" fontSize="16px">
                  검색에서 제외할 닉네임
                </Text>
                <Input
                  ref={handleRef}
                  type="text"
                  width="100%"
                  textAlign="left"
                  placeholder="3 ~ 20자"
                  ariaLabel="검색에서 제외할 닉네임"
                  name="handle"
                  value={handle}
                  minLength={3}
                  maxLength={20}
                  hasError={errorElementName === 'handle'}
                  onChange={setRandomDefenseInputValue}
                />
              </S.Label>
              <S.PanelContainer $width="166px">
                <Text type="primary" fontSize="16px">
                  맞은 사람 수
                </Text>
                <S.SolvedRangeInputsContainer>
                  <Input
                    ref={solvedMinRef}
                    type="number"
                    width="70px"
                    textAlign="center"
                    placeholder=""
                    ariaLabel="맞은 사람 수의 하한"
                    name="solvedMin"
                    value={solvedMin}
                    hasError={errorElementName === 'solvedMin'}
                    onChange={setRandomDefenseInputValue}
                  />
                  <Text type="primary" fontSize="16px">
                    ~
                  </Text>
                  <Input
                    ref={solvedMaxRef}
                    type="number"
                    width="70px"
                    textAlign="center"
                    placeholder=""
                    ariaLabel="맞은 사람 수의 상한"
                    name="solvedMax"
                    value={solvedMax}
                    hasError={errorElementName === 'solvedMax'}
                    onChange={setRandomDefenseInputValue}
                  />
                </S.SolvedRangeInputsContainer>
              </S.PanelContainer>
              <S.PanelContainer $width="190px">
                <Text type="primary" fontSize="16px">
                  문제 언어
                </Text>
                <Select
                  options={languageOptions}
                  selectedValue={language}
                  width="130px"
                  ariaLabel="문제 언어 고르기"
                  onChange={setLanguage}
                />
              </S.PanelContainer>
            </S.Row>
            <S.PanelContainer $width="100%">
              <Text type="primary" fontSize="16px">
                난이도 범위
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
              <S.Row $columnGap="110px">
                <Text type="primary" fontSize="16px">
                  검색에 포함할 알고리즘
                </Text>
                <SearchOperatorSelect
                  searchOperator={searchOperator}
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
              <Text type="primary" fontSize="16px">
                쿼리
              </Text>
              <Textarea
                ref={customQueryRef}
                width="100%"
                height="160px"
                name="customQuery"
                value={customQuery}
                placeholder={`1 ~ ${MAX_CUSTOM_QUERY_LENGTH}자`}
                minLength={1}
                maxLength={MAX_CUSTOM_QUERY_LENGTH}
                hasError={errorElementName === 'customQuery'}
                ariaLabel="쿼리"
                onChange={setRandomDefenseInputValue}
              />
            </S.Label>
            <S.InformationTextContainer>
              <Text type="normal" fontSize="14px">
                solved.ac 검색 쿼리 작성법을 모르신다면,{' '}
                <TextLink href="https://solved.ac/search" fontSize="14px">
                  solved.ac 문제 고급 검색
                </TextLink>{' '}
                페이지를 확인해 보세요!
              </Text>
              <Text type="normal" fontSize="14px">
                추첨은 비로그인 상태에서 진행되므로, 서포터 전용 쿼리는 사용할
                수 없음에 유의해 주세요.
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
