import * as S from './TierDropdown.styled';
import { CheckIcon, ArrowDownTriangleIcon } from '@/assets/svg';
import { solvedAcNumericTierIcons } from '@/assets/svg/tier';
import useTierDropdown from '@/hooks/tierHider/useTierDropdown';
import type { RatedTier } from '@/types/tierHider';

interface TierDropdownProps {
  selectedTier: RatedTier;
  onChange: (tier: RatedTier) => void;
}

const RATED_TIERS: RatedTier[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const RATED_TIER_NAMES: Record<RatedTier, string> = {
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

const TierDropdown = (props: TierDropdownProps) => {
  const { selectedTier: initSelectedTier, onChange } = props;
  const {
    selectedTier,
    updateSelectedTier,
    isDropdownOpen,
    openDropdown,
    containerRef,
  } = useTierDropdown({
    initSelectedTier,
    onChange,
  });

  return (
    <S.Container ref={containerRef}>
      <S.Button
        type="button"
        aria-label="난이도 경고 시작 티어 변경하기"
        $isActivated={isDropdownOpen}
        onClick={openDropdown}
      >
        <S.TierBadge src={solvedAcNumericTierIcons[selectedTier]} alt="" />
        <S.TierText $tier={selectedTier} $isBold={true}>
          {RATED_TIER_NAMES[selectedTier]}
        </S.TierText>
        <S.ArrowDownTriangleIconWrapper>
          <ArrowDownTriangleIcon />
        </S.ArrowDownTriangleIconWrapper>
      </S.Button>
      <S.List $isOpen={isDropdownOpen}>
        {RATED_TIERS.map((tier) => (
          <S.ListItem key={tier}>
            <S.ListButton
              type="button"
              aria-label={`${RATED_TIER_NAMES[tier]}를 경고 시작 티어로 설정하기`}
              onClick={() => {
                updateSelectedTier(tier);
              }}
            >
              <S.TierBadge src={solvedAcNumericTierIcons[tier]} alt="" />
              <S.TierText $tier={tier} $isBold={tier === selectedTier}>
                {RATED_TIER_NAMES[tier]}
              </S.TierText>
              {tier === selectedTier && (
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

export default TierDropdown;
