import { Tier } from '@/types/randomDefense';
import type { QuerySuggestion } from '@/types/randomDefense';

/**
 * `solved.ac/api/v3/search/problem`으로 solved.ac API에 쿼리 요청을 했을 경우 예상되는 정상 응답값입니다.
 * 실제로 사용할 데이터만을 타입으로 포함했음에 유의하여 주십시오.
 */
export interface SolvedAcSearchProblemResponse {
  count: number;
  items: SolvedAcSearchProblemInfo[];
}

export interface SolvedAcSearchProblemInfo {
  problemId: number;
  titleKo: string;
  level: Tier;
  isLevelLocked: boolean;
}

/**
 * `solved.ac/api/v3/search/suggestion`으로 solved.ac API에 쿼리 요청을 했을 경우 예상되는 정상 응답값입니다.
 * 실제로 사용할 데이터만을 타입으로 포함했음에 유의하여 주십시오.
 */
export interface SolvedAcQuerySuggestionResponse {
  autocomplete: QuerySuggestion[];
  tags: SolvedAcQuerySuggestionTagInfo[];
}

export interface SolvedAcQuerySuggestionTagInfo {
  caption: string;
  name: string;
}
