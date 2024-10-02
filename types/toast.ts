import type { SVGProps, ReactElement } from 'react';

export interface ToastInfo {
  title: string;
  descriptions?: string | string[];
  mainIconSrc: string | ReactElement<SVGProps<SVGSVGElement>>;
}
