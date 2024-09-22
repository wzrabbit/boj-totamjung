import { useState, useEffect } from 'react';
import type { ToastInfo } from '@/types/toast';

interface ToastState extends ToastInfo {
  open: boolean;
  progress: number;
}

interface DisplayPeriod {
  startTime: number;
  endTime: number;
}

const emptyToastState = {
  title: '',
  mainIconSrc: '',
  open: false,
  progress: 0,
};

const useToastState = () => {
  const [toastState, setToastState] = useState<ToastState>(emptyToastState);
  const [displayPeriod, setDisplayPeriod] = useState<DisplayPeriod | undefined>(
    undefined,
  );

  useEffect(() => {
    if (!displayPeriod) {
      setToastState((prev) => ({
        ...prev,
        open: false,
      }));

      return;
    }

    const progressTimer = setInterval(() => {
      const { startTime, endTime } = displayPeriod;
      const now = Date.now();

      const newProgress =
        100 - (100 * (now - startTime)) / (endTime - startTime);

      if (newProgress <= 0) {
        setToastState((prev) => ({ ...prev, progress: 0 }));
        setDisplayPeriod(undefined);
        return;
      }

      setToastState((prev) => ({
        ...prev,
        progress: newProgress,
      }));
    }, 50);

    return () => {
      clearInterval(progressTimer);
    };
  }, [displayPeriod]);

  const showToast = (toastInfo: ToastInfo, duration: number) => {
    if (duration <= 0) {
      return;
    }

    setToastState((prev) => ({
      ...prev,
      ...toastInfo,
      open: true,
    }));

    const startTime = Date.now();
    const endTime = startTime + duration;
    setDisplayPeriod({ startTime, endTime });
  };

  const closeToast = () => {
    setToastState((prev) => ({
      ...prev,
      open: false,
    }));
    setDisplayPeriod(undefined);
  };

  return {
    toastState,
    showToast,
    closeToast,
  };
};

export default useToastState;
