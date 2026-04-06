import { DEFAULT_WIDGET_TIMER_OPTIONS } from '@/constants/defaultValues';
import { isWidgetTimerOptions } from '../validators/widgetTimerOptionsValidator';
import type { WidgetTimerOptions } from '@/types/widgetTimer';

export const sanitizeWidgetTimerOptions = (
  widgetTimerOptions: unknown,
): WidgetTimerOptions => {
  return isWidgetTimerOptions(widgetTimerOptions)
    ? widgetTimerOptions
    : DEFAULT_WIDGET_TIMER_OPTIONS;
};
