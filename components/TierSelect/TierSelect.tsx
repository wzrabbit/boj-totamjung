import * as S from './TierSelect.styled';
import { CheckIcon, ArrowDownTriangleIcon } from '@/assets/svg';
import { solvedAcNumericTierIcons } from '@/assets/svg/tier';
import useSelect from '@/hooks/useSelect';
import type { RatedTier } from '@/types/tierHider';

interface TierSelectProps {
  selectedTier: RatedTier;
  onChange: (tier: RatedTier) => void;
}

const ratedTiers: readonly RatedTier[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const ratedTierNames: Record<RatedTier, string> = {
  1: 'Bronze V',
  2: 'Bronze IV',
  3: 'Bronze III',
  4: 'Bronze II',
  5: 'Bronze I',
  6: 'Silver V',
  7: 'Silver IV',
  8: 'Silver III',
  9: 'Silver II',
  10: 'Silver I',
  11: 'Gold V',
  12: 'Gold IV',
  13: 'Gold III',
  14: 'Gold II',
  15: 'Gold I',
  16: 'Platinum V',
  17: 'Platinum IV',
  18: 'Platinum III',
  19: 'Platinum II',
  20: 'Platinum I',
  21: 'Diamond V',
  22: 'Diamond IV',
  23: 'Diamond III',
  24: 'Diamond II',
  25: 'Diamond I',
  26: 'Ruby V',
  27: 'Ruby IV',
  28: 'Ruby III',
  29: 'Ruby II',
  30: 'Ruby I',
};

const TierSelect = (props: TierSelectProps) => {
  const { selectedTier: initSelectedValue, onChange } = props;
  const {
    selectedValue,
    updateSelectedValue,
    isSelectOpen,
    toggleSelect,
    containerRef,
    selectButtonRef,
  } = useSelect<RatedTier>({
    initSelectedValue,
    onChange,
  });

  return (
    <S.Container ref={containerRef}>
      <S.Button
        type="button"
        aria-label="난이도 경고 시작 티어 변경하기"
        $isActivated={isSelectOpen}
        ref={selectButtonRef}
        onClick={toggleSelect}
      >
        <S.TierBadge src={solvedAcNumericTierIcons[selectedValue]} alt="" />
        <S.TierText $tier={selectedValue} $isBold={true}>
          {ratedTierNames[selectedValue]}
        </S.TierText>
        <S.ArrowDownTriangleIconWrapper>
          <ArrowDownTriangleIcon />
        </S.ArrowDownTriangleIconWrapper>
      </S.Button>
      <S.List $isOpen={isSelectOpen}>
        {ratedTiers.map((tier) => (
          <S.ListItem key={tier}>
            <S.ListButton
              type="button"
              aria-label={`${ratedTierNames[tier]}를 경고 시작 티어로 설정하기`}
              onClick={() => {
                updateSelectedValue(tier);
              }}
            >
              <S.TierBadge src={solvedAcNumericTierIcons[tier]} alt="" />
              <S.TierText $tier={tier} $isBold={tier === selectedValue}>
                {ratedTierNames[tier]}
              </S.TierText>
              {tier === selectedValue && (
                <S.CheckIconWrapper>
                  <CheckIcon />
                </S.CheckIconWrapper>
              )}
            </S.ListButton>
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
};

export default TierSelect;
