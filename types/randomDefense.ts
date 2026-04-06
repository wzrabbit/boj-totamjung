import type { solvedAcNumericTierIcons } from '@/assets/svg/tier';
import type { IsoString } from '@/types/utils';

export interface RandomDefenseHistoryInfo {
  problemId: number;
  title: string;
  tier: keyof typeof solvedAcNumericTierIcons;
  createdAt: IsoString;
}

export interface RandomDefenseHistoryOptions {
  history: RandomDefenseHistoryInfo[];
  isTierHidden: boolean;
}

export type Rank =
  | 'unrated'
  | 'bronze'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond'
  | 'ruby';

export type Tier = keyof typeof solvedAcNumericTierIcons;

export type TierWithoutNotRatable = Exclude<Tier, 31>;

export type Hotkey = 'Alt' | 'F2' | null;

export interface FilledQuickSlot {
  isEmpty: false;
  title: string;
  query: string;
}

interface EmptyQuickSlot {
  isEmpty: true;
}

export type QuickSlot = FilledQuickSlot | EmptyQuickSlot;

export type QuickSlots = {
  1: QuickSlot;
  2: QuickSlot;
  3: QuickSlot;
  4: QuickSlot;
  5: QuickSlot;
  6: QuickSlot;
  7: QuickSlot;
  8: QuickSlot;
  9: QuickSlot;
  0: QuickSlot;
};

export type QuickSlotNo = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;

export interface QuickSlotOptions {
  hotkey: Hotkey;
  selectedSlotNo: QuickSlotNo;
  slots: QuickSlots;
}

interface QuickSlotValidVerdict {
  isValid: true;
}

interface QuickSlotInvalidVerdict {
  isValid: false;
  errorMessage: string;
  focusElementName?: string;
}

export type QuickSlotVerdict = QuickSlotValidVerdict | QuickSlotInvalidVerdict;

export interface SearchOperatorInfo {
  operator: SearchOperator;
  description: string;
}

export type SearchOperator = 'OR' | 'AND' | 'NOR';

export type Language = 'ko' | 'en' | 'ko/en' | 'all';

export interface RandomDefenseFormData {
  mode: 'easy' | 'manual';
  title: string;
  handle: string;
  solvedMin: string;
  solvedMax: string;
  language: Language;
  startTier: TierWithoutNotRatable;
  endTier: TierWithoutNotRatable;
  searchOperator: SearchOperator;
  algorithmIds: number[];
  customQuery: string;
}

export type RandomDefenseFormDataVerdict =
  | RandomDefenseFormDataValidVerdict
  | RandomDefenseFormDataInvalidVerdict;

interface RandomDefenseFormDataValidVerdict {
  isValid: true;
}

interface RandomDefenseFormDataInvalidVerdict {
  isValid: false;
  errorMessage: string;
  focusElementName?: string;
}

/**
 * RepairableLegacyQuickSlotOptions 타입은, LegacyQuickSlotOptions보다 넓은 범위의 타입으로써, 구버전의 퀵슬롯 데이터의 형식이 유효하지 않더라도 복구할 수 있는 타입을 의미합니다.
 * LegacyQuickSlotOptions가 아니지만, RepairableLegacyQuickSlotOptions에 부합하는 경우, 잘못된 데이터만 초기화하는 식으로 복구가 진행됩니다.
 */
export interface RepairableLegacyQuickSlotOptions {
  1: unknown;
  2: unknown;
  3: unknown;
  4: unknown;
  5: unknown;
  6: unknown;
  7: unknown;
  8: unknown;
  9: unknown;
  0: unknown;
  selectedNo?: unknown;
}

/**
 * RepairableQuickSlotOptions 타입은, QuickSlotOptions보다 넓은 범위의 타입으로써, 퀵슬롯 데이터의 형식이 유효하지 않더라도 복구할 수 있는 타입을 의미합니다.
 * QuickSlotOptions가 아니지만, RepairableQuickSlotOptions에 부합하는 경우, 잘못된 데이터만 초기화하는 식으로 복구가 진행됩니다.
 */
export interface RepairableQuickSlotOptions {
  slots: Omit<RepairableLegacyQuickSlotOptions, 'selectedNo'>;
  hotkey?: unknown;
  selectedSlotNo?: unknown;
}

export type RandomDefenseResult =
  | RandomDefenseFailureResult
  | RandomDefenseSuccessResult;

interface RandomDefenseFailureResult {
  success: false;
  statusCode?: number;
  errorMessage: string;
  errorDescriptions?: string | string[];
}

interface RandomDefenseSuccessResult {
  success: true;
  problemInfos: ProblemInfo[];
}

export interface ProblemInfo {
  problemId: number;
  title: string;
  tier: Tier;
}

export type QuerySuggestionResult =
  | QuerySuggestionSuccessResult
  | QuerySuggestionFailureResult;

export interface QuerySuggestionSuccessResult {
  success: true;
  suggestions: QuerySuggestion[];
}

export interface QuerySuggestionFailureResult {
  success: false;
  errorMessage: string;
}

export interface QuerySuggestion {
  caption: string;
  description: string;
}
