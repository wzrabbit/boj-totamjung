import MenuTitle from '@/components/MenuTitle';
import Fieldset from '@/components/common/Fieldset';
import TierSelect from '@/components/TierSelect';
import Text from '@/components/common/Text';
import ProblemTagLockTimer from '@/components/ProblemTagLockTimer';
import { ToolsIcon } from '@/assets/svg';
import { hiddenTierBadgeIcon } from '@/assets/png';
import useHiderFieldsetMenu from '@/hooks/algorithm/useHiderFieldsetMenu';
import * as S from './HiderFieldsetMenu.styled';

const HiderFieldsetMenu = () => {
  const {
    problemTagLockDuration,
    shouldHideTier,
    shouldWarnHighTier,
    shouldRevealTierOnHover,
    warnTier,
    algorithmHiderUsage,
    problemTagLockUsage,
    updateProblemTagLockDuration,
    updateShouldHideTier,
    updateShouldWarnHighTier,
    updateShouldRevealTierOnHover,
    updateWarnTier,
    updateAlgorithmHiderUsage,
    updateProblemTagLockUsage,
  } = useHiderFieldsetMenu();
  const { hours, minutes } = problemTagLockDuration;

  return (
    <S.Container>
      <MenuTitle
        title="잠금 시간 설정"
        iconSrc={browser.runtime.getURL('/lock.png')}
      />
      <ProblemTagLockTimer
        hours={hours}
        minutes={minutes}
        onChange={updateProblemTagLockDuration}
      />
      <MenuTitle title="티어 가리개 설정" iconSrc={hiddenTierBadgeIcon} />
      <Fieldset
        legend="맞추지 않은 문제의 난이도 숨기기"
        name="shouldHideTier"
        options={[
          { label: '숨기기', value: 'true' },
          { label: '숨기지 않기', value: 'false' },
        ]}
        checkedValue={
          shouldHideTier ? 'true' : shouldHideTier === undefined ? '' : 'false'
        }
        onChange={updateShouldHideTier}
      />
      <Fieldset
        legend="어려운 문제 경고"
        name="shouldWarnHighTier"
        isVertical={true}
        disabled={!shouldHideTier}
        options={[
          { label: '사용하지 않음', value: 'false' },
          {
            label: (
              <S.WarningTierLabel>
                <TierSelect selectedTier={warnTier} onChange={updateWarnTier} />
                <Text type="semiPrimary" fontSize="16px">
                  이상 난이도일 경우 경고
                </Text>
              </S.WarningTierLabel>
            ),
            value: 'true',
          },
        ]}
        checkedValue={shouldWarnHighTier ? 'true' : 'false'}
        onChange={updateShouldWarnHighTier}
      />
      <Fieldset
        legend="티어 아이콘에 마우스를 올릴 경우 난이도 공개하기"
        name="shouldRevealTierOnHover"
        disabled={!shouldHideTier}
        options={[
          { label: '공개', value: 'true' },
          { label: '공개하지 않음', value: 'false' },
        ]}
        checkedValue={shouldRevealTierOnHover ? 'true' : 'false'}
        onChange={updateShouldRevealTierOnHover}
      />
      <MenuTitle title="기본 설정" iconSrc={<ToolsIcon />} />
      <Fieldset
        legend="알고 있는 알고리즘만으로 문제를 풀 수 있는지의 여부 공개 방법"
        name="algorithmHiderUsage"
        options={[
          { label: '클릭하여 공개', value: 'click' },
          { label: '항상 공개', value: 'always' },
        ]}
        checkedValue={algorithmHiderUsage ?? ''}
        onChange={updateAlgorithmHiderUsage}
      />
      <Fieldset
        legend="알고리즘 분류 잠금 방법"
        name="problemTagLockUsage"
        options={[
          { label: '클릭하여 잠금', value: 'click' },
          { label: '자동으로 잠금', value: 'auto' },
        ]}
        checkedValue={problemTagLockUsage ?? ''}
        onChange={updateProblemTagLockUsage}
      />
    </S.Container>
  );
};

export default HiderFieldsetMenu;
