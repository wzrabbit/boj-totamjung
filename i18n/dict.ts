import ko from '@/locales/ko.json';
import en from '@/locales/en.json';
import type { ResolvedLanguage, TranslationKey } from './types';

const DICTIONARIES: Record<ResolvedLanguage, unknown> = { ko, en };

const isStringRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const resolveNestedKey = (
  source: unknown,
  path: string,
): string | undefined => {
  const segments = path.split('.');
  let current: unknown = source;

  for (const segment of segments) {
    if (!isStringRecord(current)) {
      return undefined;
    }
    current = current[segment];
  }

  return typeof current === 'string' ? current : undefined;
};

export const getMessage = (
  language: ResolvedLanguage,
  key: TranslationKey,
  substitutions?: readonly string[],
): string => {
  const raw =
    resolveNestedKey(DICTIONARIES[language], key) ??
    resolveNestedKey(DICTIONARIES.ko, key) ??
    key;

  return raw.replace(/\$(\$|\d+)/g, (_, matched: string) => {
    if (matched === '$') {
      return '$';
    }
    const index = Number(matched) - 1;
    return substitutions?.[index] ?? '';
  });
};
