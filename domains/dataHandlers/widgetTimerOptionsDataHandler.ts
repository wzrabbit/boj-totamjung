import { STORAGE_KEY } from '@/constants/commands';
import { sanitizeWidgetTimerOptions } from './sanitizers/widgetTimerOptionsSanitizer';
import { isWidgetTimerOptions } from './validators/widgetTimerOptionsValidator';
import type { WidgetTimerOptions } from '@/types/widgetTimer';

export const fetchWidgetTimerOptions =
  async (): Promise<WidgetTimerOptions> => {
    const data = await browser.storage.local.get(
      STORAGE_KEY.WIDGET_TIMER_OPTIONS,
    );
    const widgetTimerOptions = data[STORAGE_KEY.WIDGET_TIMER_OPTIONS];

    return sanitizeWidgetTimerOptions(widgetTimerOptions);
  };

export const saveWidgetTimerOptions = (widgetTimerOptions: unknown) => {
  if (!isWidgetTimerOptions(widgetTimerOptions)) {
    return;
  }

  browser.storage.local.set({
    [STORAGE_KEY.WIDGET_TIMER_OPTIONS]: widgetTimerOptions,
  });
};
