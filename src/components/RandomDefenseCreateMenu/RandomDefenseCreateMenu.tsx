import NamedFrame from '~components/common/NamedFrame';
import RandomDefenseCapsuleButton from '~components/RandomDefenseCapsuleButton';
import Input from '~components/common/Input';
import Textarea from '~components/common/Textarea';
import TextLink from '~components/common/TextLink';
import Text from '~components/common/Text';
import DifficultyAdjustMenu from '~components/DifficultyAdjustMenu';
import SearchOperatorSelect from '~components/SearchOperatorSelect';
import AlgorithmSearchInput from '~components/AlgorithmSearchInput';
import useRandomDefenseCreateMenu from '~hooks/randomDefense/useRandomDefenseCreateMenu';
import RandomDefenseCreateButton from '~components/RandomDefenseCreateButton';
import ErrorText from '~components/common/ErrorText';
import * as S from './RandomDefenseCreateMenu.styled';
import { RandomDefenseFormData } from '~types/randomDefense';

interface RandomDefenseCreateMenuProps {
  onSubmit: (randomDefenseFormData: RandomDefenseFormData) => void;
}

const RandomDefenseCreateMenu = (props: RandomDefenseCreateMenuProps) => {
  const { onSubmit } = props;
  const {
    mode,
    title,
    handle,
    solvedMin,
    solvedMax,
    startTier,
    endTier,
    searchOperator,
    algorithmIds,
    customQuery,
    errorMessage,
    setMode,
    setRandomDefenseInputValue,
    setTierRange,
    setSearchOperator,
    setAlgorithmIds,
    submitRandomDefense,
    titleRef,
    handleRef,
    solvedMinRef,
    solvedMaxRef,
    customQueryRef,
  } = useRandomDefenseCreateMenu({ onSubmit });

  return (
    <NamedFrame width="650px" height="386px" padding="10px" title="추첨 만들기">
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
            hasError={false}
            onChange={setRandomDefenseInputValue}
          />
        </S.Label>
        {mode === 'easy' ? (
          <>
            <S.Row $columnGap="30px">
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
                  hasError={false}
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
                    hasError={false}
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
                    hasError={false}
                    onChange={setRandomDefenseInputValue}
                  />
                </S.SolvedRangeInputsContainer>
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
                height="150px"
                name="customQuery"
                value={customQuery}
                placeholder="1 ~ 300자"
                minLength={1}
                maxLength={300}
                hasError={false}
                ariaLabel="쿼리"
                onChange={setRandomDefenseInputValue}
              />
            </S.Label>
            <Text type="normal" fontSize="14px">
              solved.ac 검색 쿼리 작성법을 모르신다면,{' '}
              <TextLink href="https://solved.ac/search" fontSize="14px">
                solved.ac 문제 고급 검색
              </TextLink>{' '}
              페이지를 확인해 보세요!
            </Text>
          </>
        )}
        <S.RandomDefenseCreateButtonWrapper>
          <RandomDefenseCreateButton
            selectedSlotNo={0}
            onClick={submitRandomDefense}
          />
        </S.RandomDefenseCreateButtonWrapper>
      </S.Form>
    </NamedFrame>
  );
};

export default RandomDefenseCreateMenu;
