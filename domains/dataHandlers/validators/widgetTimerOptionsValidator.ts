import { isObject, isIsoString } from '@/types/typeGuards';
import type {
  WidgetTimerOptions,
  BasicTimer,
  ProblemTimer,
} from '@/types/widgetTimer';
import { isHoursMinutes } from '@/types/typeGuards';

const isBasicTimer = (data: unknown): data is BasicTimer => {
  if (data === null) {
    return true;
  }

  if (!isObject(data) || !('status' in data)) {
    return false;
  }

  if (data.status === 'running') {
    return 'expiresAt' in data && isIsoString(data.expiresAt);
  }

  if (data.status === 'paused') {
    return (
      'duration' in data &&
      typeof data.duration === 'number' &&
      data.duration >= 0
    );
  }

  return false;
};

const isProblemTimer = (data: unknown): data is ProblemTimer => {
  if (
    !(
      isObject(data) &&
      'status' in data &&
      'title' in data &&
      'problemId' in data &&
      typeof data.title === 'string' &&
      typeof data.problemId === 'number' &&
      data.problemId >= 1000 &&
      data.problemId % 1 === 0
    )
  ) {
    return false;
  }

  if (data.status === 'running') {
    return 'expiresAt' in data && isIsoString(data.expiresAt);
  }

  if (data.status === 'paused') {
    return (
      'duration' in data &&
      typeof data.duration === 'number' &&
      data.duration >= 0
    );
  }

  return false;
};

const isDurationInfo = (
  data: unknown,
): data is WidgetTimerOptions['durationInfo'] => {
  if (
    !(
      isObject(data) &&
      'type' in data &&
      'fixed' in data &&
      'byTier' in data &&
      typeof data.type === 'string' &&
      ['fixed', 'byTier'].includes(data.type) &&
      isHoursMinutes(data.fixed)
    )
  ) {
    return false;
  }

  if (!Array.isArray(data.byTier) || data.byTier.length !== 31) {
    return false;
  }

  return data.byTier.every((item: unknown) => isHoursMinutes(item));
};

export const isWidgetTimerOptions = (
  data: unknown,
): data is WidgetTimerOptions => {
  return (
    isObject(data) &&
    'mode' in data &&
    'durationInfo' in data &&
    'basicTimer' in data &&
    'problemTimers' in data &&
    'isTierHidden' in data &&
    'shouldDeleteExpiredTimers' in data &&
    'warnThreshold' in data &&
    'dangerThreshold' in data &&
    'isCollapsed' in data &&
    typeof data.mode === 'string' &&
    ['basic', 'problem', 'none'].includes(data.mode) &&
    isDurationInfo(data.durationInfo) &&
    isBasicTimer(data.basicTimer) &&
    Array.isArray(data.problemTimers) &&
    data.problemTimers.every((item: unknown) => isProblemTimer(item)) &&
    typeof data.isTierHidden === 'boolean' &&
    typeof data.shouldDeleteExpiredTimers === 'boolean' &&
    isHoursMinutes(data.warnThreshold) &&
    isHoursMinutes(data.dangerThreshold) &&
    typeof data.isCollapsed === 'boolean'
  );
};
