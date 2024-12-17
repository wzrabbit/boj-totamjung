import * as S from './ProblemCardGrid.styled';
import ProblemCard from '@/components/ProblemCard';
import useProblemCardGrid from '@/hooks/gacha/useProblemCardGrid';
import type { ProblemInfo } from '@/types/gacha';

interface ProblemCardGridProps {
  problemInfos: ProblemInfo[];
}

const ProblemCardGrid = (props: ProblemCardGridProps) => {
  const { problemInfos } = props;
  const cardCount = problemInfos.length;
  const cardGridInfo = useProblemCardGrid({ cardCount });
  const { cardWidth, cardGridGap, isOverflow, cardGridRef } = cardGridInfo;

  let renderingCardIndex = 0;

  return (
    <S.Container ref={cardGridRef}>
      {isOverflow ? (
        <S.StaticGrid
          $width={cardGridInfo.innerGridWidth}
          $height={cardGridInfo.innerGridHeight}
          $gap={cardGridGap}
        >
          {problemInfos.map((problemInfo) => (
            <ProblemCard
              key={problemInfo.problemId}
              width={cardWidth}
              problemInfo={problemInfo}
              isHidden={false}
            />
          ))}
        </S.StaticGrid>
      ) : (
        <S.DynamicGrid $gap={cardGridGap}>
          {cardGridInfo.rowCardCounts.map((rowCardCount, rowIndex) => (
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
        </S.DynamicGrid>
      )}
    </S.Container>
  );
};

export default ProblemCardGrid;
