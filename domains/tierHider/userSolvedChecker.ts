import { isSolvedAcSearchProblemResponse } from '@/domains/dataHandlers/validators/solvedAcSearchProblemResponseValidator';

export const isUserSolvedProblem = async (
  handle: string,
  problemId: number,
) => {
  const query = `@${handle} id:${problemId}`;

  try {
    const response = await fetch(
      `https://solved.ac/api/v3/search/problem?query=${query}`,
    );

    if (!response.ok) {
      return 'unknown';
    }

    const responseJson = await response.json();

    if (!isSolvedAcSearchProblemResponse(responseJson)) {
      return 'unknown';
    }

    return responseJson.count === 1;
  } catch (error) {
    return 'unknown';
  }
};
