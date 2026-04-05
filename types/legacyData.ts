import { solvedAcNumericTierIcons } from '@/assets/svg/tier';
import type { QuickSlotNo, QuickSlots } from '@/types/randomDefense';
import type { IsoString } from '@/types/utils';
import type { RatedTier } from '@/types/tierHider';
import type { FontNo } from '@/types/font';
import type { GachaOptions } from '@/types/gacha';
import type { TotamjungTheme } from '@/types/mainTheme';
import type { RandomDefenseHistoryInfo } from '@/types/randomDefense';
import type { HoursMinutes } from '@/types/utils';

/**
 * v1.2 이전 버전에서의 데이터 타입입니다.
 * 데이터 버전은 1입니다.
 */
export namespace V1 {
  export type DataVersion = 1;

  export interface Timer {
    expire: number;
    hour: string;
    minute: string;
    problem: number;
  }

  export interface Settings {
    font: `font-${number}` | 'none';
    lock: 'click' | 'always';
    predict: 'click' | 'always';
    theme: 'yes' | 'no';
  }

  export type FontNo = 'none' | `font-${number}`;

  export interface RandomDefenseHistoryInfo {
    no: number;
    title: string;
    tier: keyof typeof solvedAcNumericTierIcons;
    date: string;
  }

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

  export type QuickSlotOptions = {
    selectedNo: QuickSlotNo;
  } & QuickSlots;
}

/**
 * v1.2.* 버전에서의 데이터 타입입니다.
 * 데이터 버전은 2지만, 실제 배포 시에는 "v1.2"로 사용했습니다.
 */
export namespace V2 {
  export type DataVersion = 2 | 'v1.2';

  export interface HiderOptions {
    problemTagLockDuration: HoursMinutes;
    shouldHideTier: boolean;
    shouldWarnHighTier: boolean;
    warnTier: RatedTier;
    algorithmHiderUsage: 'click' | 'always';
    problemTagLockUsage: 'click' | 'auto';
  }

  export type OptionsData = {
    dataVersion: V2.DataVersion;
    checkedAlgorithmIds: number[];
    quickSlots: V4.QuickSlotOptions;
    totamjungTheme: string;
    hiderOptions: V2.HiderOptions;
    randomDefenseHistory: RandomDefenseHistoryInfo[];
    isTierHidden: boolean;
    fontNo: FontNo;
    timers: V4.TagLockTimer[];
    shouldShowWelcomeMessage?: boolean;
  };
}

/**
 * v1.3 ~ v1.3.3.2 버전에서의 데이터 타입입니다.
 * 데이터 버전은 3입니다.
 */
export namespace V3 {
  export type DataVersion = 3;

  export interface HiderOptions {
    problemTagLockDuration: HoursMinutes;
    shouldHideTier: boolean;
    shouldWarnHighTier: boolean;
    shouldRevealTierOnHover: boolean;
    warnTier: RatedTier;
    algorithmHiderUsage: 'click' | 'always';
    problemTagLockUsage: 'click' | 'auto';
  }

  export type OptionsData = {
    dataVersion: V3.DataVersion;
    checkedAlgorithmIds: number[];
    quickSlots: V4.QuickSlotOptions;
    totamjungTheme: string;
    hiderOptions: V3.HiderOptions;
    randomDefenseHistory: RandomDefenseHistoryInfo[];
    isTierHidden: boolean;
    fontNo: FontNo;
    timers: V4.TagLockTimer[];
    gachaOptions: GachaOptions;
    shouldShowWelcomeMessage: boolean;
  };
}

/**
 * v1.3.4 버전에서의 데이터 타입입니다.
 * 데이터 버전은 4입니다.
 */
export namespace V4 {
  export type DataVersion = 4;

  export interface HiderOptions {
    problemTagLockDuration: HoursMinutes;
    shouldHideTier: boolean;
    shouldWarnHighTier: boolean;
    shouldRevealTierOnHover: boolean;
    shouldHideSource: boolean;
    warnTier: RatedTier;
    algorithmHiderUsage: 'click' | 'always';
    problemTagLockUsage: 'click' | 'auto';
  }

  export interface TagLockTimer {
    problemId: number;
    expiresAt: IsoString;
  }

  export interface QuickSlotOptions {
    hotkey: 'Alt' | 'F2' | null;
    selectedSlotNo: QuickSlotNo;
    slots: QuickSlots;
  }

  export type OptionsData = {
    dataVersion: V4.DataVersion;
    checkedAlgorithmIds: number[];
    quickSlots: V4.QuickSlotOptions;
    totamjungTheme: TotamjungTheme;
    hiderOptions: V4.HiderOptions;
    randomDefenseHistory: RandomDefenseHistoryInfo[];
    isTierHidden: boolean;
    fontNo: FontNo;
    timers: V4.TagLockTimer[];
    gachaOptions: GachaOptions;
    shouldShowWelcomeMessage: boolean;
  };
}
