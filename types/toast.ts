import type { SVGProps } from 'react';

export interface ToastInfo {
  title: string;
  descriptions?: string | string[];
  mainIconSrc: string | SVGProps<SVGSVGElement>;
}
