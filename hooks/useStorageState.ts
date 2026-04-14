import { useState, useEffect } from 'react';
import { COMMANDS } from '@/constants/commands';
import type { Browser } from 'wxt/browser';

/** 데이터 핸들러 함수를 직접 호출하여 스토리지에 접근하는 설정입니다. Options 페이지에서 사용합니다. */
interface FunctionStorageConfig<T> {
  type: 'function';
  fetchFunction: () => Promise<T>;
  saveFunction: (data: unknown) => void | Promise<void>;
}

/** Background 서비스워커를 통해 메시지로 스토리지에 접근하는 설정입니다. Content Script에서 사용합니다. */
interface MessageStorageConfig {
  type: 'message';
  fetchCommand: (typeof COMMANDS)[keyof typeof COMMANDS];
  saveCommand: (typeof COMMANDS)[keyof typeof COMMANDS];
}

type UseStorageStateParams<T, U = T> = {
  storageKey: string;
  defaultValue: T | U;
  validatorFunction: (data: unknown) => data is T;
} & (FunctionStorageConfig<T> | MessageStorageConfig);

type UseStorageStateResult<T, U> =
  | { data: T | U; isLoaded: false; setData: (value: T | U) => void }
  | { data: T; isLoaded: true; setData: (value: T) => void };

/**
 * `browser.storage.local`의 값을 React 상태로 관리하는 커스텀 훅입니다.
 *
 * - 마운트 시 스토리지에서 데이터를 불러옵니다.
 * - `setData`로 상태가 변경되면 자동으로 스토리지에 저장합니다.
 * - `browser.storage.onChanged`를 통해 외부 변경을 감지하여 즉시 UI에 반영합니다.
 * - `isLoaded`가 `true`이면 `data`는 `T` 타입으로 좁혀집니다.
 *
 * @template T 로딩 완료 후의 데이터 타입
 * @template U 로딩 전 기본값의 타입 (생략 시 T와 동일)
 */
const useStorageState = <T, U = T>(
  params: UseStorageStateParams<T, U>,
): UseStorageStateResult<T, U> => {
  const { type, storageKey, defaultValue, validatorFunction } = params;
  const [data, setData] = useState<T | U>(defaultValue);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleStorageChange = (
      changes: { [key: string]: Browser.storage.StorageChange },
      areaName: string,
    ) => {
      if (areaName !== 'local' || !(storageKey in changes)) {
        return;
      }

      const { newValue } = changes[storageKey];

      if (!validatorFunction(newValue)) {
        return;
      }

      setData(newValue);
    };
    browser.storage.onChanged.addListener(handleStorageChange);

    return () => {
      browser.storage.onChanged.removeListener(handleStorageChange);
    };
  }, [storageKey, validatorFunction]);

  useEffect(() => {
    const fetchData = async () => {
      const result =
        type === 'function'
          ? await params.fetchFunction()
          : await browser.runtime.sendMessage({
              command: params.fetchCommand,
            });

      if (!validatorFunction(result)) {
        return;
      }

      setData(result);
      setIsLoaded(true);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    if (type === 'function') {
      params.saveFunction(data);
    } else {
      browser.runtime.sendMessage({
        command: params.saveCommand,
        [storageKey]: data,
      });
    }
  }, [data]);

  return { data, isLoaded, setData } as UseStorageStateResult<T, U>;
};

export default useStorageState;
