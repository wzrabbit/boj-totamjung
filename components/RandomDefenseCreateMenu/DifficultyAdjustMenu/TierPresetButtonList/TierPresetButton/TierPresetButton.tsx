import * as S from './TierPresetButton.styled';
import type { Rank, TierWithoutNotRatable } from '@/types/randomDefense';
import { solvedAcRankIcons } from '@/assets/svg/tier';
import { useTranslation } from '@/i18n';
import type { TranslationKey } from '@/i18n';

interface TierPresetButtonProps {
  rank: Rank;
  onClick: (start: TierWithoutNotRatable, end: TierWithoutNotRatable) => void;
}

const ARIA_LABEL_KEYS: Record<Rank, TranslationKey> = {
  unrated: 'randomDefenseCreate.tierPreset.unratedAriaLabel',
  bronze: 'randomDefenseCreate.tierPreset.bronzeAriaLabel',
  silver: 'randomDefenseCreate.tierPreset.silverAriaLabel',
  gold: 'randomDefenseCreate.tierPreset.goldAriaLabel',
  platinum: 'randomDefenseCreate.tierPreset.platinumAriaLabel',
  diamond: 'randomDefenseCreate.tierPreset.diamondAriaLabel',
  ruby: 'randomDefenseCreate.tierPreset.rubyAriaLabel',
};

const TIER_RANGE = {
  START: {
    unrated: 0,
    bronze: 1,
    silver: 6,
    gold: 11,
    platinum: 16,
    diamond: 21,
    ruby: 26,
  },
  END: {
    unrated: 0,
    bronze: 5,
    silver: 10,
    gold: 15,
    platinum: 20,
    diamond: 25,
    ruby: 30,
  },
} as const;

const TierPresetButton = (props: TierPresetButtonProps) => {
  const { rank, onClick } = props;
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Button
        type="button"
        $rank={rank}
        aria-label={t(ARIA_LABEL_KEYS[rank])}
        onClick={() => {
          onClick(TIER_RANGE.START[rank], TIER_RANGE.END[rank]);
        }}
      >
        <S.TierBadge src={solvedAcRankIcons[rank]} alt="" />
      </S.Button>
    </S.Container>
  );
};

export default TierPresetButton;
