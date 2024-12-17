import { solvedAcRankIcons, solvedAcNumericTierIcons } from '@/assets/svg/tier';
import type { ProblemInfo } from '@/types/gacha';
import useCardTweak from '@/hooks/gacha/useCardTweak';
import * as S from './ProblemCard.styled';

interface ProblemCardProps {
  problemInfo: ProblemInfo;
  isHidden: boolean;
  width: number;
}

const ProblemCard = (props: ProblemCardProps) => {
  const { problemInfo, isHidden, width } = props;
  const { problemId, title, tier } = problemInfo;
  const { rotateX, rotateY, adjustCardTweak, resetCardTweak } = useCardTweak();

  return (
    <S.HoverTransformContainer>
      <S.InnerContainer
        $width={width}
        $tier={tier}
        $isHidden={isHidden}
        $rotateX={rotateX}
        $rotateY={rotateY}
        onMouseMove={adjustCardTweak}
        onMouseOut={resetCardTweak}
      >
        <S.LinkButton
          target="_blank"
          rel="noreferrer noopener"
          href={`https://icpc.me/${problemId}`}
          aria-label={`문제 번호 ${problemId}번 ${title}`}
          $cardWidth={width}
        >
          <S.TierBadge
            $cardWidth={width}
            src={
              isHidden
                ? solvedAcRankIcons.hidden
                : solvedAcNumericTierIcons[tier]
            }
            alt=""
            draggable={false}
          />
          <S.ProblemId
            $cardWidth={width}
            $tier={tier}
            $isHidden={isHidden}
          >{`#${problemId}`}</S.ProblemId>
          <S.Title $cardWidth={width}>{title}</S.Title>
          <S.Overlay $movement={rotateX + rotateY} />
        </S.LinkButton>
      </S.InnerContainer>
    </S.HoverTransformContainer>
  );
};

export default ProblemCard;
