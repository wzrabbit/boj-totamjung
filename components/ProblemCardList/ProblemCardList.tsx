import * as S from './ProblemCardList.styled';
import ProblemCard from '@/components/ProblemCard';
import useProblemCardList from '@/hooks/gacha/useProblemCardList';
import type { Tier } from '@/types/randomDefense';

interface ProblemInfo {
  problemId: number;
  title: string;
  tier: Tier;
}

interface ProblemCardListProps {
  problemInfos: ProblemInfo[];
}

const ProblemCardList = (props: ProblemCardListProps) => {
  const { problemInfos } = props;
  const cardCount = problemInfos.length;
  const { cardWidth, cardGridGap, rowCardCounts, isOverflow, cardGridRef } =
    useProblemCardList({
      cardCount,
    });

  let renderingCardIndex = 0;

  return (
    <S.Container ref={cardGridRef} $gap={cardGridGap} $isOverflow={isOverflow}>
      {rowCardCounts.map((rowCardCount, rowIndex) => (
        <S.Row key={rowIndex} $gap={cardGridGap}>
          {Array.from({ length: rowCardCount }).map(() => {
            if (!problemInfos[renderingCardIndex]) {
              return null;
            }

            const problemInfo = problemInfos[renderingCardIndex];
            renderingCardIndex += 1;

            return (
              <ProblemCard
                key={problemInfo.problemId}
                width={cardWidth}
                problemInfo={problemInfo}
                isHidden={false}
              />
            );
          })}
        </S.Row>
      ))}
    </S.Container>
  );
};

export default ProblemCardList;
