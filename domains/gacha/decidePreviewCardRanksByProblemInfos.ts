import type { Rank, Tier } from '@/types/randomDefense';
import type { PreviewCardRanks } from '@/types/gacha';
import type { ProblemInfo } from '@/types/randomDefense';
import { isRank } from '@/types/typeGuards';

const normalRankNames: Rank[] = [
  'bronze',
  'silver',
  'gold',
  'platinum',
  'diamond',
  'ruby',
];

export const decidePreviewCardRanksByProblemInfos = (
  problemInfos: ProblemInfo[],
): PreviewCardRanks => {
  if (problemInfos.length === 0) {
    throw Error(
      '프리뷰 카드 랭크 계산을 위해서는 최소 1문제의 정보가 제공되어야 합니다.',
    );
  }

  if (problemInfos.length === 1) {
    const firstTier = problemInfos[0].tier;
    return [getRankByTier(firstTier)];
  }

  if (problemInfos.length === 2) {
    const firstTier = problemInfos[0].tier;
    const secondTier = problemInfos[1].tier;
    return [getRankByTier(firstTier), getRankByTier(secondTier)];
  }

  const rankCount: Record<Rank, number> = {
    unrated: 0,
    bronze: 0,
    silver: 0,
    gold: 0,
    platinum: 0,
    diamond: 0,
    ruby: 0,
  };

  problemInfos.forEach(({ tier }) => {
    rankCount[getRankByTier(tier)] += 1;
  });

  const rankCountEntries = Object.entries(rankCount).sort(
    (a, b) => b[1] - a[1],
  );

  if (!isRankCountEntries(rankCountEntries)) {
    throw Error('프리뷰 카드 랭크 계산 중 데이터 불일치를 발견했습니다.');
  }

  const [firstRank, firstRankCount] = rankCountEntries[0];
  const secondRank = rankCountEntries[1][0];
  const thirdRank = rankCountEntries[2][0];

  if (firstRankCount === problemInfos.length) {
    return [firstRank, firstRank, firstRank];
  }

  if (firstRankCount * 2 > problemInfos.length) {
    return [firstRank, firstRank, secondRank];
  }

  return [firstRank, secondRank, thirdRank];
};

const getRankByTier = (tier: Tier): Rank => {
  if (tier === 0 || tier === 31) {
    return 'unrated';
  }

  return normalRankNames[Math.floor((tier - 1) / 5)];
};

const isRankCountEntries = (
  entries: [string, number][],
): entries is [Rank, number][] => {
  return entries.every(([key]) => isRank(key));
};
