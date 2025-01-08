export const chooseByProbability = <T>(
  choices: { choice: T; probability: number }[],
): T => {
  const totalProbability = choices.reduce(
    (sum, item) => sum + item.probability,
    0,
  );

  if (Math.abs(totalProbability - 1) > 1e-6) {
    throw new Error(
      `확률의 합은 1이어야 하는데, 실제 확률의 합이 ${totalProbability}였습니다.`,
    );
  }

  const randomValue = Math.random();

  let cumulativeProbability = 0;

  for (const { choice, probability } of choices) {
    cumulativeProbability += probability;
    if (randomValue <= cumulativeProbability) {
      return choice;
    }
  }

  throw new Error('잘못된 확률 정보를 사용하셨습니다. 다시 확인해 주세요.');
};
