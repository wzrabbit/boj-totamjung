type CardGridLayoutInfo = DynamicGridLayoutInfo | StaticGridLayoutInfo;

interface DynamicGridLayoutInfo {
  cardWidth: number;
  cardGridGap: number;
  rowCardCounts: number[];
  isOverflow: false;
}

interface StaticGridLayoutInfo {
  cardWidth: number;
  cardGridGap: number;
  innerGridWidth: number;
  innerGridHeight: number;
  isOverflow: true;
}

const minCardWidth = 120;
const cardRatio = 1 / 1.36;

export const calculateCardGridLayout = (
  cardGridWidth: number,
  cardGridHeight: number,
  cardCount: number,
): CardGridLayoutInfo => {
  const {
    rowCount,
    columnCount,
    cardGridGap,
    cardWidth,
    innerGridWidth,
    innerGridHeight,
    isOverflow,
  } = calculateBestGridInfo(cardGridWidth, cardGridHeight, cardCount);

  console.log({ rowCount, columnCount, innerGridWidth, innerGridHeight });

  if (isOverflow) {
    return {
      cardWidth,
      cardGridGap,
      innerGridWidth,
      innerGridHeight,
      isOverflow,
    };
  }

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

    const { cardWidth, cardGridGap, isOverflow } = calculateCardSizeInfo(
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

  if (bestGridInfo.isOverflow) {
    const columnCount = Math.max(
      1,
      Math.floor((cardGridWidth - minCardWidth / 10) / (minCardWidth * 1.1)),
    );

    bestGridInfo = {
      rowCount: Math.ceil(cardCount / columnCount),
      columnCount,
      cardWidth: minCardWidth,
      cardGridGap: minCardWidth / 10,
      isOverflow: true,
    };
  }

  const { rowCount, columnCount, cardWidth, cardGridGap, isOverflow } =
    bestGridInfo;
  const cardHeight = cardWidth / cardRatio;
  const innerGridWidth =
    columnCount * cardWidth + (columnCount + 1) * cardGridGap;
  const innerGridHeight = rowCount * cardHeight + (rowCount + 1) * cardGridGap;

  return {
    rowCount,
    columnCount,
    cardWidth,
    cardGridGap,
    innerGridWidth,
    innerGridHeight,
    isOverflow,
  };
};

const calculateCardSizeInfo = (
  cardGridWidth: number,
  cardGridHeight: number,
  rowCount: number,
  columnCount: number,
) => {
  const cardWidthBasedOnHorizontal =
    (cardGridWidth * 10) / (11 * columnCount + 1);
  const cardWidthBasedOnVertical =
    cardGridHeight / (rowCount * (1 / cardRatio + 0.1) + 0.1);
  const cardWidth = Math.max(
    minCardWidth,
    Math.min(cardWidthBasedOnHorizontal, cardWidthBasedOnVertical) - 1,
  );

  const cardGap = cardWidth / 10;
  const cardHeight = cardWidth / cardRatio;
  const cardTotalWidth = columnCount * cardWidth + (columnCount + 1) * cardGap;
  const cardTotalHeight = rowCount * cardHeight + (rowCount + 1) * cardGap;

  const isOverflow =
    cardTotalWidth > cardGridWidth || cardTotalHeight > cardGridHeight;

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
