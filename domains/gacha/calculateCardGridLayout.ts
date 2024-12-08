const minCardWidth = 120;
const cardRatio = 1 / 1.36;

export const calculateCardGridLayout = (
  cardGridWidth: number,
  cardGridHeight: number,
  cardCount: number,
) => {
  console.log('--------------------------------');
  const { rowCount, columnCount, cardGridGap, cardWidth, isOverflow } =
    calculateBestGridInfo(cardGridWidth, cardGridHeight, cardCount);
  const rowCardCounts = calculateRowCardCounts(
    rowCount,
    columnCount,
    cardCount,
  );

  return {
    cardWidth,
    cardGridGap,
    rowCardCounts,
    isOverflow,
  };
};

const calculateBestGridInfo = (
  cardGridWidth: number,
  cardGridHeight: number,
  cardCount: number,
) => {
  let bestGridInfo = {
    rowCount: 0,
    columnCount: 0,
    cardWidth: 0,
    cardGridGap: 0,
    isOverflow: true,
  };

  for (let columnCount = 1; columnCount <= cardCount; columnCount += 1) {
    const rowCount = Math.ceil(cardCount / columnCount);

    const { cardWidth, cardGridGap, isOverflow } = calculateCardSize(
      cardGridWidth,
      cardGridHeight,
      rowCount,
      columnCount,
    );

    if (!isOverflow && cardWidth > bestGridInfo.cardWidth) {
      bestGridInfo = {
        rowCount,
        columnCount,
        cardWidth,
        cardGridGap,
        isOverflow,
      };
    }
  }

  if (!bestGridInfo.isOverflow) {
    return bestGridInfo;
  }

  const columnCount = Math.max(
    1,
    Math.floor((cardGridWidth - minCardWidth / 10) / minCardWidth),
  );
  const rowCount = Math.ceil(cardCount / columnCount);
  const cardWidth = minCardWidth;
  const cardGridGap = minCardWidth / 10;

  return {
    rowCount,
    columnCount,
    cardWidth,
    cardGridGap,
    isOverflow: true,
  };
};

const calculateCardSize = (
  cardGridWidth: number,
  cardGridHeight: number,
  rowCount: number,
  columnCount: number,
) => {
  const cardWidth =
    Math.max(minCardWidth, (cardGridWidth * 10) / (11 * columnCount + 1)) - 1;

  const cardGap = cardWidth / 10;
  const cardHeight = cardWidth / cardRatio;
  const cardTotalWidth = columnCount * cardWidth + (columnCount + 1) * cardGap;
  const cardTotalHeight = rowCount * cardHeight + (rowCount + 1) * cardGap;

  const isOverflow =
    cardTotalWidth > cardGridWidth || cardTotalHeight > cardGridHeight;

  console.log({
    rowCount,
    columnCount,
    cardTotalWidth,
    cardGridWidth,
    cardTotalHeight,
    cardGridHeight,
  });

  return {
    cardWidth,
    cardGridGap: cardWidth / 10,
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
