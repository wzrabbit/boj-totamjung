import MenuTitle from '@/components/MenuTitle';
import Fieldset from '@/components/common/Fieldset';
import TierSelect from '@/components/TierSelect';
import Text from '@/components/common/Text';
import ProblemTagLockTimer from '@/components/ProblemTagLockTimer';
import { ToolsIcon, BookIcon } from '@/assets/svg';
import { hiddenTierBadgeIcon } from '@/assets/png';
import useHiderFieldsetMenu from '@/hooks/algorithm/useHiderFieldsetMenu';
import { useTranslation } from '@/i18n';
import * as S from './HiderFieldsetMenu.styled';

const HiderFieldsetMenu = () => {
  const {
    problemTagLockDuration,
    shouldHideTier,
    shouldWarnHighTier,
    shouldRevealTierOnHover,
    shouldHideSource,
    warnTier,
    algorithmHiderUsage,
    problemTagLockUsage,
    updateProblemTagLockDuration,
    updateShouldHideTier,
    updateShouldWarnHighTier,
    updateShouldRevealTierOnHover,
    updateShouldHideSource,
    updateWarnTier,
    updateAlgorithmHiderUsage,
    updateProblemTagLockUsage,
  } = useHiderFieldsetMenu();
  const { hours, minutes } = problemTagLockDuration;
  const { t } = useTranslation();

  return (
    <S.Container>
      <MenuTitle
        title={t('options.hider.lockTimeTitle')}
        iconSrc={browser.runtime.getURL('/lock.png')}
      />
      <ProblemTagLockTimer
        hours={hours}
        minutes={minutes}
        onChange={updateProblemTagLockDuration}
      />
      <MenuTitle
        title={t('options.hider.tierHiderTitle')}
        iconSrc={hiddenTierBadgeIcon}
      />
      <Fieldset
        legend={t('options.hider.hideTierLegend')}
        name="shouldHideTier"
        options={[
          { label: t('options.hider.hide'), value: 'true' },
          { label: t('options.hider.doNotHide'), value: 'false' },
        ]}
        checkedValue={
          shouldHideTier ? 'true' : shouldHideTier === undefined ? '' : 'false'
        }
        onChange={updateShouldHideTier}
      />
      <Fieldset
        legend={t('options.hider.warnHighTierLegend')}
        name="shouldWarnHighTier"
        isVertical={true}
        disabled={!shouldHideTier}
        options={[
          { label: t('options.hider.doNotUse'), value: 'false' },
          {
            label: (
              <S.WarningTierLabel>
                <TierSelect selectedTier={warnTier} onChange={updateWarnTier} />
                <Text type="semiPrimary" fontSize={16}>
                  {t('options.hider.warnAtHighTierSuffix')}
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
        legend={t('options.hider.revealOnHoverLegend')}
        name="shouldRevealTierOnHover"
        disabled={!shouldHideTier}
        options={[
          { label: t('options.hider.reveal'), value: 'true' },
          { label: t('options.hider.doNotReveal'), value: 'false' },
        ]}
        checkedValue={shouldRevealTierOnHover ? 'true' : 'false'}
        onChange={updateShouldRevealTierOnHover}
      />
      <MenuTitle
        title={t('options.hider.sourceHiderTitle')}
        iconSrc={<BookIcon />}
      />
      <Fieldset
        legend={t('options.hider.hideSourceLegend')}
        name="shouldHideSource"
        options={[
          { label: t('options.hider.hide'), value: 'true' },
          { label: t('options.hider.doNotHide'), value: 'false' },
        ]}
        checkedValue={
          shouldHideSource
            ? 'true'
            : shouldHideSource === undefined
              ? ''
              : 'false'
        }
        onChange={updateShouldHideSource}
      />
      <MenuTitle
        title={t('options.hider.basicTitle')}
        iconSrc={<ToolsIcon />}
      />
      <Fieldset
        legend={t('options.hider.algorithmHiderUsageLegend')}
        name="algorithmHiderUsage"
        options={[
          { label: t('options.hider.revealOnClick'), value: 'click' },
          { label: t('options.hider.revealAlways'), value: 'always' },
        ]}
        checkedValue={algorithmHiderUsage ?? ''}
        onChange={updateAlgorithmHiderUsage}
      />
      <Fieldset
        legend={t('options.hider.problemTagLockUsageLegend')}
        name="problemTagLockUsage"
        options={[
          { label: t('options.hider.lockOnClick'), value: 'click' },
          { label: t('options.hider.lockAuto'), value: 'auto' },
        ]}
        checkedValue={problemTagLockUsage ?? ''}
        onChange={updateProblemTagLockUsage}
      />
    </S.Container>
  );
};

export default HiderFieldsetMenu;
