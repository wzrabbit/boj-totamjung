import ProblemTimer from './ProblemTimer';
import type { MainTheme } from '@/types/mainTheme';

/**
 * ProblemTimer 의 (테마 × 긴급도) 매트릭스 비교 뷰.
 * 디자인 검수와 회귀 확인을 위해 모든 조합을 한 화면에 펼쳐 보여준다.
 */

const MATRIX_THEMES: {
  key: MainTheme;
  label: string;
  pageBackground: string;
}[] = [
  { key: 'none', label: '테마 없음', pageBackground: '#ffffff' },
  { key: 'totamjung', label: '토탐정', pageBackground: '#1a0e0a' },
  {
    key: 'bojExtendedDark',
    label: 'BOJ 확장 · 어둡게',
    pageBackground: '#202020',
  },
  {
    key: 'bojExtendedRigel',
    label: 'BOJ 확장 · Rigel',
    pageBackground: '#001a26',
  },
  { key: 'solvedAcLight', label: '솔브드 · 밝게', pageBackground: '#f7f8f9' },
  { key: 'solvedAcDark', label: '솔브드 · 어둡게', pageBackground: '#15202b' },
  { key: 'solvedAcBlack', label: '솔브드 · 암전', pageBackground: '#000000' },
];

const MATRIX_URGENCIES: {
  key: 'normal' | 'warn' | 'danger';
  label: string;
  hours: number;
  minutes: number;
  seconds: number;
  progress: number;
  headerColor: string;
}[] = [
  {
    key: 'normal',
    label: 'Normal · 정상',
    hours: 0,
    minutes: 42,
    seconds: 18,
    progress: 68,
    headerColor: '#5a4438',
  },
  {
    key: 'warn',
    label: 'Warn · 경고',
    hours: 0,
    minutes: 0,
    seconds: 18,
    progress: 24,
    headerColor: '#a87000',
  },
  {
    key: 'danger',
    label: 'Danger · 위험',
    hours: 0,
    minutes: 0,
    seconds: 4,
    progress: 5,
    headerColor: '#c8001a',
  },
];

const noop = () => {};

const ProblemTimerThemeStateMatrix = () => (
  <div
    style={{
      fontFamily: 'Pretendard, sans-serif',
      border: '1px solid rgba(0,0,0,0.1)',
      borderRadius: 12,
      overflow: 'hidden',
      background: '#ffffff',
      boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
    }}
  >
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr 1fr 1fr',
        background: '#f7f4ef',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      <div
        style={{
          padding: '12px 16px',
          fontSize: 11,
          color: '#8d7669',
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        THEME
      </div>
      {MATRIX_URGENCIES.map((urgencyColumn) => (
        <div
          key={urgencyColumn.key}
          style={{
            padding: '12px 16px',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1,
            borderLeft: '1px solid rgba(0,0,0,0.06)',
            color: urgencyColumn.headerColor,
          }}
        >
          {urgencyColumn.label}
        </div>
      ))}
    </div>
    {MATRIX_THEMES.map((themeRow, index) => (
      <div
        key={themeRow.key}
        style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr 1fr 1fr',
          borderBottom:
            index < MATRIX_THEMES.length - 1
              ? '1px solid rgba(0,0,0,0.06)'
              : 'none',
          alignItems: 'stretch',
        }}
      >
        <div style={{ padding: '14px 16px' }}>
          <div
            style={{
              fontSize: 14,
              color: '#1a0e0a',
              fontWeight: 700,
              marginBottom: 2,
            }}
          >
            {themeRow.label}
          </div>
          <div style={{ fontSize: 11, color: '#8d7669' }}>{themeRow.key}</div>
        </div>
        {MATRIX_URGENCIES.map((urgencyColumn) => (
          <div
            key={urgencyColumn.key}
            style={{
              padding: '12px 16px',
              borderLeft: '1px solid rgba(0,0,0,0.04)',
              background: themeRow.pageBackground,
              minHeight: 64,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ProblemTimer
              theme={themeRow.key}
              hours={urgencyColumn.hours}
              minutes={urgencyColumn.minutes}
              seconds={urgencyColumn.seconds}
              progress={urgencyColumn.progress}
              status="play"
              urgency={urgencyColumn.key}
              onPlay={noop}
              onPause={noop}
              onStop={noop}
              onEdit={noop}
            />
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default ProblemTimerThemeStateMatrix;
