import type { solvedAcNumericTierIcons } from '~images/svg/tier';
import type { IsoString } from '~types/utils';

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
  slotName: string;
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
