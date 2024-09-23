import * as S from './TierPresetButton.styled';
import type { Rank, TierWithoutNotRatable } from '@/types/randomDefense';
import { solvedAcRankIcons } from '@/assets/svg/tier';

interface TierPresetButtonProps {
  rank: Rank;
  onClick: (start: TierWithoutNotRatable, end: TierWithoutNotRatable) => void;
}

const ARIA_LABEL_TEXTS = {
  unrated: '언레이티드 티어로 범위 설정하기',
  bronze: '브론즈 5부터 브론즈 1 티어까지로 범위 설정하기',
  silver: '실버 5부터 실버 1 티어까지로 범위 설정하기',
  gold: '골드 5부터 골드 1 티어까지로 범위 설정하기',
  platinum: '플래티넘 5부터 플래티넘 1 티어까지로 범위 설정하기',
  diamond: '다이아몬드 5부터 다이아몬드 1 티어까지로 범위 설정하기',
  ruby: '루비 5부터 루비 1 티어까지로 범위 설정하기',
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

const TierPresetButtonProps = (props: TierPresetButtonProps) => {
  const { rank, onClick } = props;

  return (
    <S.Container>
      <S.Button
        type="button"
        $rank={rank}
        aria-label={ARIA_LABEL_TEXTS[rank]}
        onClick={() => {
          onClick(TIER_RANGE.START[rank], TIER_RANGE.END[rank]);
        }}
      >
        <S.TierBadge src={solvedAcRankIcons[rank]} alt="" />
      </S.Button>
    </S.Container>
  );
};

export default TierPresetButtonProps;
