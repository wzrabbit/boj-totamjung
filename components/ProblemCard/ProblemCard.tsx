import { solvedAcRankIcons, solvedAcNumericTierIcons } from '@/assets/svg/tier';
import type { Tier } from '@/types/randomDefense';
import * as S from './ProblemCard.styled';

interface ProblemCardProps {
  problemInfo: ProblemInfo;
  isHidden: boolean;
}

interface ProblemInfo {
  problemId: number;
  title: string;
  tier: Tier;
}

const ProblemCard = (props: ProblemCardProps) => {
  const { problemInfo, isHidden } = props;
  const { problemId, title, tier } = problemInfo;

  return (
    <S.Container $tier={tier} $isHidden={isHidden}>
      <S.LinkButton
        target="_blank"
        rel="noreferrer noopener"
        href={`https://icpc.me/${problemId}`}
        aria-label={`${problemId}번 ${title}`}
      >
        <S.TierBadge
          src={
            isHidden ? solvedAcRankIcons.hidden : solvedAcNumericTierIcons[tier]
          }
          alt=""
          draggable={false}
        />
        <S.ProblemId
          $tier={tier}
          $isHidden={isHidden}
        >{`#${problemId}`}</S.ProblemId>
        <S.Title>{title}</S.Title>
      </S.LinkButton>
    </S.Container>
  );
};

export default ProblemCard;
