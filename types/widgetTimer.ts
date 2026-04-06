import type { IsoString } from '@/types/utils';
import type { HoursMinutes } from '@/types/utils';

export type BasicTimer =
  | { status: 'running'; expiresAt: IsoString }
  | { status: 'paused'; duration: number }
  | null;

export type ProblemTimer = Exclude<BasicTimer, null> & {
  title: string;
  problemId: number;
};

export interface WidgetTimerOptions {
  mode: 'basic' | 'problem' | 'none';
  durationInfo: {
    type: 'fixed' | 'byTier';
    fixed: HoursMinutes;
    byTier: HoursMinutes[];
  };
  basicTimer: BasicTimer;
  problemTimers: ProblemTimer[];
  isTierHidden: boolean;
  shouldDeleteExpiredTimers: boolean;
  warnThreshold: HoursMinutes;
  dangerThreshold: HoursMinutes;
  isCollapsed: boolean;
}
