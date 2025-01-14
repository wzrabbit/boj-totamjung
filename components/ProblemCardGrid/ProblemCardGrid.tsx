import * as S from './ProblemCardGrid.styled';
import ProblemCard from '@/components/ProblemCard';
import useProblemCardGrid from '@/hooks/gacha/useProblemCardGrid';
import type { ProblemInfo } from '@/types/randomDefense';

interface ProblemCardGridProps {
  problemInfos: ProblemInfo[];
  isTierHidden: boolean;
  onCardHover: () => void;
}

const ProblemCardGrid = (props: ProblemCardGridProps) => {
  const { problemInfos, isTierHidden, onCardHover } = props;
  const cardCount = problemInfos.length;
  const cardGridInfo = useProblemCardGrid({ cardCount });
  const { cardWidth, cardGridGap, isOverflow, isLoaded, cardGridRef } =
    cardGridInfo;

  let renderingCardIndex = 0;

  return (
    <S.Container
      ref={cardGridRef}
      $visible={isLoaded}
      $overflowY={isOverflow ? 'auto' : 'visible'}
    >
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
              isTierHidden={isTierHidden}
              onHover={onCardHover}
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
                    isTierHidden={isTierHidden}
                    onHover={onCardHover}
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
