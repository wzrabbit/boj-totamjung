import { solvedAcNumericTierIcons } from '@/assets/svg/tier';
import type { SlotNo, Slots } from '@/types/randomDefense';
import type { HiderOptions as LatestHiderOptions } from './algorithm';
import type { OptionsData as LatestOptionsData } from './options';
import { STORAGE_KEY } from '@/constants/commands';

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

  export interface RepairableQuickSlots {
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

  export type QuickSlots = {
    selectedNo: SlotNo;
  } & Slots;
}

/**
 * v1.2.* 버전에서의 데이터 타입입니다.
 * 데이터 버전은 2지만, 실제 배포 시에는 "v1.2"로 사용했습니다.
 */
export namespace V2 {
  export type DataVersion = 2 | 'v1.2';

  export type OptionsData = Omit<
    LatestOptionsData,
    typeof STORAGE_KEY.GACHA_OPTIONS | typeof STORAGE_KEY.HIDER_OPTIONS
  > & { hiderOptions: V2.HiderOptions };

  export type HiderOptions = Omit<
    LatestHiderOptions,
    'shouldRevealTierOnHover'
  >;
}
