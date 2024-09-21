export interface FontNoResponse {
  fontNo: number;
}

export type LegacyFontNo = 'none' | `font-${number}`;

export interface LegacyFontNoResponse {
  font: LegacyFontNo;
}
