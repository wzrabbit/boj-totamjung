const minCardWidth = 120;
const cardRatio = 1 / 1.36;

export const calculateCardGridLayout = (
  cardGridWidth: number,
  cardGridHeight: number,
  cardCount: number,
) => {
  const { rowCount, columnCount, cardWidth, cardHeight } =
    calculateBestGridInfo(cardGridWidth, cardGridHeight, cardCount);
  const rowCardCounts = calculateRowCardCounts(
    rowCount,
    columnCount,
    cardCount,
  );

  return {
    cardWidth,
    cardHeight,
    rowCardCounts,
  };
};

const calculateBestGridInfo = (
  cardGridWidth: number,
  cardGridHeight: number,
  cardCount: number,
) => {
  for (let columnCount = 1; columnCount <= cardCount; columnCount += 1) {
    const rowCount = Math.ceil(columnCount / cardCount);

    const { cardWidth, cardHeight, isOverflow } = calculateCardSize(
      cardGridWidth,
      cardGridHeight,
      rowCount,
      columnCount,
    );

    if (!isOverflow) {
      return { rowCount, columnCount, cardWidth, cardHeight };
    }
  }

  const { cardWidth, cardHeight } = calculateCardSize(
    cardGridWidth,
    cardGridHeight,
    cardCount,
    1,
  );

  return { rowCount: cardCount, columnCount: 1, cardWidth, cardHeight };
};

const calculateCardSize = (
  cardGridWidth: number,
  cardGridHeight: number,
  rowCount: number,
  columnCount: number,
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

const calculateRowCardCounts = (
  rowCount: number,
  columnCount: number,
  cardCount: number,
) => {
  const rowCardCounts = Array.from({ length: rowCount }).map(() => columnCount);
  const emptySpaceCount = rowCount * columnCount - cardCount;

  for (let rowIndex = 0; rowIndex < emptySpaceCount; rowIndex += 1) {
    rowCardCounts[rowCount - (rowIndex % rowCount) - 1] -= 1;
  }

  return rowCardCounts;
};
