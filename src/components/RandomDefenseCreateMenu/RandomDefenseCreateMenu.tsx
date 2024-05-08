import NamedFrame from '~components/common/NamedFrame';
import RandomDefenseCapsuleButton from '~components/RandomDefenseCapsuleButton';
import Input from '~components/common/Input';
import Textarea from '~components/common/Textarea';
import TextLink from '~components/common/TextLink';
import Text from '~components/common/Text';
import DifficultyAdjustMenu from '~components/DifficultyAdjustMenu';
import AlgorithmSearchInput from '~components/AlgorithmSearchInput';
import * as S from './RandomDefenseCreateMenu.styled';

const RandomDefenseCreateMenu = () => {
  const mode = 'easy';

  return (
    <NamedFrame width="650px" height="386px" padding="10px" title="추첨 만들기">
      <S.Container>
        <S.RandomDefenseCapsuleButtonWrapper>
          <RandomDefenseCapsuleButton mode={mode} onClick={() => {}} />
        </S.RandomDefenseCapsuleButtonWrapper>
        <S.Label $width="380px">
          <Text type="primary" fontSize="16px">
            추첨 이름
          </Text>
          <Input
            type="text"
            width="100%"
            textAlign="left"
            placeholder="0 ~ 30자"
            ariaLabel="추첨 이름"
            value=""
            hasError={false}
            onChange={() => {}}
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
                  type="text"
                  width="100%"
                  textAlign="left"
                  placeholder="3 ~ 20자"
                  ariaLabel="검색에서 제외할 닉네임"
                  value=""
                  hasError={false}
                  onChange={() => {}}
                />
              </S.Label>
              <S.PanelContainer $width="166px">
                <Text type="primary" fontSize="16px">
                  맞은 사람 수
                </Text>
                <S.SolvedRangeInputsContainer>
                  <Input
                    type="number"
                    width="70px"
                    textAlign="center"
                    placeholder=""
                    ariaLabel="맞은 사람 수의 하한"
                    value=""
                    hasError={false}
                    onChange={() => {}}
                  />
                  <Text type="primary" fontSize="16px">
                    ~
                  </Text>
                  <Input
                    type="number"
                    width="70px"
                    textAlign="center"
                    placeholder=""
                    ariaLabel="맞은 사람 수의 상한"
                    value=""
                    hasError={false}
                    onChange={() => {}}
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
                  startTier={1}
                  endTier={30}
                  onChange={() => {}}
                />
              </S.DifficultyAdjustMenuWrapper>
            </S.PanelContainer>
            <S.Label $width="446px">
              <Text type="primary" fontSize="16px">
                검색에 포함할 알고리즘
              </Text>
              <AlgorithmSearchInput
                selectedAlgorithms={[]}
                onChange={() => {}}
              />
            </S.Label>
          </>
        ) : (
          <>
            <S.Label $width="100%">
              <Text type="primary" fontSize="16px">
                쿼리
              </Text>
              <Textarea
                width="100%"
                height="150px"
                value=""
                placeholder="1 ~ 300자"
                hasError={false}
                ariaLabel="쿼리"
                onChange={() => {}}
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
      </S.Container>
    </NamedFrame>
  );
};

export default RandomDefenseCreateMenu;
