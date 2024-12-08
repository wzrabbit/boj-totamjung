const maxCardCount = 50;
const minCardWidth = 120;
const cardRatio = 1 / 1.36;

export const calculateCardGridLayout = (
  cardGridWidth: number,
  cardGridHeight: number,
  cardCount: number,
) => {
  const { rowCount, columnCount } = calculateBestRowColumnCount(
    cardGridWidth,
    cardGridHeight,
    cardCount,
  );
};

const calculateBestRowColumnCount = (
  cardGridWidth: number,
  cardGridHeight: number,
  cardCount: number,
) => {
  for (let columnCount = 1; columnCount <= cardCount; columnCount += 1) {
    const { rowCount, isOverflow } = calculateCardGridInfo(
      cardGridWidth,
      cardGridHeight,
      rowCoiu
      columnCount,
      cardCount,
    );

    if (!isOverflow) {
      return { rowCount, columnCount };
    }
  }

  return { rowCount: cardCount, columnCount: 1 };
};

const calculateCardSize = (
  cardGridWidth: number,
  cardGridHeight: number,
  rowCount: number,
  columnCount: number,
  cardCount: number,
) => {
  const cardWidth = Math.max(
    minCardWidth,
    (cardGridWidth * 10) / (11 * columnCount - 1),
  );
  const cardGap = cardWidth / 10;
  const cardHeight = cardWidth / cardRatio;
  const cardTotalHeight = rowCount * cardHeight + (rowCount - 1) * cardGap;

  const isOverflow =
    cardGridWidth < minCardWidth || cardTotalHeight > cardGridHeight;

  return {
    cardWidth,
    cardHeight,
    isOverflow,
  };
};
