import type { solvedAcNumericTierIcons } from '@/images/svg/tier';
import type { SolvedAcSearchProblemInfo } from '@/types/solvedAcApi';
import type { IsoString } from '@/types/utils';

export interface RandomDefenseHistoryInfo {
  problemId: number;
  title: string;
  tier: keyof typeof solvedAcNumericTierIcons;
  createdAt: IsoString;
}

export interface LegacyRandomDefenseHistoryInfo {
  no: number;
  title: string;
  tier: keyof typeof solvedAcNumericTierIcons;
  date: string;
}

export interface RandomDefenseHistoryResponse {
  randomDefenseHistory: RandomDefenseHistoryInfo[];
  isHidden: boolean;
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

export type Hotkey = 'Alt' | 'F2';

interface FilledSlot {
  isEmpty: false;
  title: string;
  query: string;
}

interface EmptySlot {
  isEmpty: true;
}

export type Slot = FilledSlot | EmptySlot;

export type QuickSlots = {
  1: Slot;
  2: Slot;
  3: Slot;
  4: Slot;
  5: Slot;
  6: Slot;
  7: Slot;
  8: Slot;
  9: Slot;
  0: Slot;
};

export type SlotNo = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;

export interface QuickSlotsResponse {
  hotkey: Hotkey;
  selectedSlotNo: SlotNo;
  slots: QuickSlots;
}

export type LegacyQuickSlotsResponse = {
  selectedNo: SlotNo;
} & QuickSlots;

interface SlotValidVerdict {
  isValid: true;
}

interface SlotInvalidVerdict {
  isValid: false;
  errorMessage: string;
  focusElementName?: string;
}

export type SlotVerdict = SlotValidVerdict | SlotInvalidVerdict;

export type SearchOperator = 'OR' | 'AND' | 'NOR';

export interface RandomDefenseFormData {
  mode: 'easy' | 'manual';
  title: string;
  handle: string;
  solvedMin: string;
  solvedMax: string;
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
 * RepairableLegacyQuickSlotsResponse 타입은, LegacyQuickSlotsResponse보다 넓은 범위의 타입으로써, 구버전의 퀵슬롯 데이터의 형식이 유효하지 않더라도 복구할 수 있는 타입을 의미합니다.
 * LegacyQuickSlotsResponse가 아니지만, RepairableLegacyQuickSlotsResponse에 부합하는 경우, 잘못된 데이터만 초기화하는 식으로 복구가 진행됩니다.
 */
export interface RepairableLegacyQuickSlotsResponse {
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
 * RepairableQuickSlotsResponse 타입은, QuickSlotsResponse보다 넓은 범위의 타입으로써, 퀵슬롯 데이터의 형식이 유효하지 않더라도 복구할 수 있는 타입을 의미합니다.
 * QuickSlotsResponse가 아니지만, RepairableQuickSlotsResponse에 부합하는 경우, 잘못된 데이터만 초기화하는 식으로 복구가 진행됩니다.
 */
export interface RepairableQuickSlotsResponse {
  slots: Omit<RepairableLegacyQuickSlotsResponse, 'selectedNo'>;
  hotkey?: unknown;
  selectedSlotNo?: unknown;
}

export type RandomDefenseResultResponse =
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
  problemInfo: SolvedAcSearchProblemInfo;
}
