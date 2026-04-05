# 데이터 버전 5 마이그레이션 명세

이 문서는 데이터 버전 4(v1.3.4~)에서 데이터 버전 5로의 변경 사항을 정리합니다.

---

## 스토리지 키 변경

### 제거된 키

| v4 키 | 이동 위치 |
|-------|----------|
| `checkedAlgorithmIds` | `hiderOptions.checkedAlgorithmIds` |
| `timers` | `hiderOptions.timers` |
| `isTierHidden` | `randomDefenseHistoryOptions.isTierHidden` |

### 이름이 변경된 키

| v4 키 | v5 키 |
|-------|-------|
| `quickSlots` | `quickSlotOptions` |
| `totamjungTheme` | `theme` |
| `randomDefenseHistory` | `randomDefenseHistoryOptions` |

### 신규 키

| 키 | 설명 |
|----|------|
| `widgetTimerOptions` | 타이머 위젯 옵션 (신규 기능) |

### 변경 없는 키

`fontNo`, `gachaOptions`, `shouldShowWelcomeMessage`, `hiderOptions` (내부 필드 추가됨)

---

## 타입 변경 상세

### `OptionsData`

```typescript
// v4
interface OptionsData {
  dataVersion: 4;
  checkedAlgorithmIds: CheckedAlgorithmIds;
  quickSlots: QuickSlots;
  totamjungTheme: TotamjungTheme;
  hiderOptions: HiderOptions;            // v4 HiderOptions
  randomDefenseHistory: RandomDefenseHistoryInfo[];
  isTierHidden: boolean;
  fontNo: FontNo;
  timers: Timer[];
  gachaOptions: GachaOptions;
  shouldShowWelcomeMessage: boolean;
}

// v5
interface OptionsData {
  dataVersion: 5;
  hiderOptions: HiderOptions;            // v5 HiderOptions (확장됨)
  quickSlotOptions: QuickSlotOptions;     // 키명 + 타입명 변경
  randomDefenseHistoryOptions: RandomDefenseHistoryOptions;  // 구조 변경
  widgetTimerOptions: WidgetTimerOptions; // 신규
  fontNo: FontNo;
  gachaOptions: GachaOptions;
  shouldShowWelcomeMessage: boolean;
  theme: TotamjungTheme;                 // 키명 변경
}
```

### `HiderOptions`

`checkedAlgorithmIds`와 `timers`가 top-level에서 `hiderOptions` 내부로 이동됩니다. `Timer`는 `TagLockTimer`로 이름이 변경됩니다.

```typescript
// v4
interface HiderOptions {
  problemTagLockDuration: { hours: number; minutes: number };
  shouldHideTier: boolean;
  shouldWarnHighTier: boolean;
  shouldRevealTierOnHover: boolean;
  shouldHideSource: boolean;
  warnTier: RatedTier;
  algorithmHiderUsage: 'click' | 'always';
  problemTagLockUsage: 'click' | 'auto';
}

// v5 — checkedAlgorithmIds, timers 추가
interface HiderOptions {
  problemTagLockDuration: { hours: number; minutes: number };
  shouldHideTier: boolean;
  shouldWarnHighTier: boolean;
  shouldRevealTierOnHover: boolean;
  shouldHideSource: boolean;
  warnTier: RatedTier;
  algorithmHiderUsage: 'click' | 'always';
  problemTagLockUsage: 'click' | 'auto';
  checkedAlgorithmIds: CheckedAlgorithmIds;
  timers: TagLockTimer[];
}
```

### `Timer` → `TagLockTimer`

타입명만 변경됩니다. 구조는 동일합니다.

```typescript
// v4
interface Timer {
  problemId: number;
  expiresAt: IsoString;
}

// v5
interface TagLockTimer {
  problemId: number;
  expiresAt: IsoString;
}
```

### `QuickSlots` → `QuickSlotOptions`

키명과 내부 타입명이 변경됩니다. 구조 자체는 동일합니다.

```typescript
// v4
interface QuickSlots {
  hotkey: Hotkey;
  selectedSlotNo: SlotNo;
  slots: Slots;
}
type Slot = FilledSlot | EmptySlot;
type SlotNo = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;

// v5
interface QuickSlotOptions {
  hotkey: Hotkey;
  selectedSlotNo: QuickSlotNo;
  slots: QuickSlots;            // 기존 Slots → QuickSlots
}
type QuickSlot = FilledQuickSlot | EmptyQuickSlot;  // 기존 Slot → QuickSlot
type QuickSlotNo = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;
```

### `RandomDefenseHistoryInfo[]` + `isTierHidden` → `RandomDefenseHistoryOptions`

기존에 분리되어 있던 두 top-level 필드가 하나의 객체로 병합됩니다. 내부 아이템 타입명도 변경됩니다.

```typescript
// v4 — 두 개의 별도 필드
randomDefenseHistory: RandomDefenseHistoryInfo[];
isTierHidden: boolean;

// v5 — 하나의 객체로 병합
interface RandomDefenseHistoryOptions {
  history: RandomDefenseHistoryInfo[];  // 최대 300개
  isTierHidden: boolean;
}

// RandomDefenseHistoryInfo (타입명 유지)
interface RandomDefenseHistoryInfo {
  problemId: number;
  title: string;
  tier: keyof typeof solvedAcNumericTierIcons;
  createdAt: IsoString;
}
```

### `WidgetTimerOptions` (신규)

타이머 위젯 기능을 위한 완전히 새로운 타입입니다.

```typescript
interface WidgetTimerOptions {
  mode: 'basic' | 'problem' | 'none';
  durationInfo: {
    type: 'fixed' | 'byTier';
    fixed: { hours: number; minutes: number };
    byTier: { hours: number; minutes: number }[];  // length 31, index = tier(0~30)
  };
  basicTimer: BasicTimer;
  problemTimers: ProblemTimer[];  // 최대 300개
  isTierHidden: boolean;
  shouldDeleteExpiredTimers: boolean;
  warnThreshold: { hours: number; minutes: number };
  dangerThreshold: { hours: number; minutes: number };
  isCollapsed: boolean;
}

type BasicTimer =
  | { status: 'running'; expiresAt: IsoString }
  | { status: 'paused'; duration: number }  // duration: ms
  | null;

type ProblemTimer = Exclude<BasicTimer, null> & {
  title: string;
  problemId: number;
};
```

#### 필드 설명

| 필드 | 설명 |
|------|------|
| `mode` | `'basic'`: 단일 타이머, 사이트 전역. `'problem'`: 문제별 개별 타이머. `'none'`: 비활성화 |
| `durationInfo.type` | `'fixed'`: 고정 시간. `'byTier'`: 난이도별 시간 |
| `durationInfo.fixed` | 고정 모드일 때 사용하는 시간 |
| `durationInfo.byTier` | 난이도별 모드일 때 사용하는 시간 배열 (index 0~30 = tier 0~30) |
| `basicTimer` | basic 모드의 타이머 상태. 미사용 시 `null` |
| `problemTimers` | problem 모드의 문제별 타이머 목록 |
| `isTierHidden` | 타이머 위젯에서 난이도 표시 숨김 여부 |
| `shouldDeleteExpiredTimers` | 만료된 타이머 자동 삭제 여부 (problem 모드에서 유효) |
| `warnThreshold` | 경고 상태 진입 기준 시간. `{ hours: 0, minutes: 0 }`이면 비활성화 |
| `dangerThreshold` | 위험 상태 진입 기준 시간. `{ hours: 0, minutes: 0 }`이면 비활성화 |
| `isCollapsed` | 위젯 접힘 상태 |

#### 검증 규칙

- `hours`: 0~99 정수, `minutes`: 0~59 정수 (`durationInfo`, `warnThreshold`, `dangerThreshold` 공통)
- `dangerThreshold <= warnThreshold`. 단, `warnThreshold`가 0시간 0분(비활성화)이면 `dangerThreshold`는 자유
- `durationInfo.byTier`: 길이 31
- `problemTimers`: 최대 300개
- `ProblemTimer.problemId`: >= 1000, 정수

---

## 마이그레이션 규칙 (v4 → v5)

### 필드 이동

| v4 | v5 |
|----|-----|
| `checkedAlgorithmIds` | `hiderOptions.checkedAlgorithmIds` (값 그대로 이동) |
| `timers` | `hiderOptions.timers` (값 그대로 이동) |
| `isTierHidden` | `randomDefenseHistoryOptions.isTierHidden` (값 그대로 이동) |
| `randomDefenseHistory` | `randomDefenseHistoryOptions.history` (값 그대로 이동) |

### 필드명 변경

| v4 | v5 |
|----|-----|
| `quickSlots` | `quickSlotOptions` (값 그대로 유지) |
| `totamjungTheme` | `theme` (값 그대로 유지) |

### 신규 필드 기본값

`widgetTimerOptions`는 v4에 존재하지 않으므로 다음 기본값으로 생성됩니다:

```typescript
{
  mode: 'none',
  durationInfo: {
    type: 'fixed',
    fixed: { hours: 1, minutes: 0 },
    byTier: Array(31).fill({ hours: 0, minutes: 0 }),
  },
  basicTimer: null,
  problemTimers: [],
  isTierHidden: false,
  shouldDeleteExpiredTimers: false,
  warnThreshold: { hours: 0, minutes: 15 },
  dangerThreshold: { hours: 0, minutes: 5 },
  isCollapsed: false,
}
```

### 마이그레이션 체인

기존 체인에 v4 → v5 단계가 추가됩니다:

```
v1 → v2 → v3 → v4 → v5
```

---

## 타입 리네이밍 요약

| v4 | v5 |
|----|-----|
| `Timer` | `TagLockTimer` |
| `QuickSlots` | `QuickSlotOptions` |
| `Slots` | `QuickSlots` |
| `Slot` | `QuickSlot` |
| `FilledSlot` | `FilledQuickSlot` |
| `EmptySlot` | `EmptyQuickSlot` |
| `SlotNo` | `QuickSlotNo` |
| `SlotVerdict` | `QuickSlotVerdict` |
| `RandomDefenseHistoryResponse` | `RandomDefenseHistoryOptions` |
| `RepairableQuickSlots` | `RepairableQuickSlotOptions` |
| `RepairableLegacyQuickSlots` | `RepairableLegacyQuickSlotOptions` |

---

## 영향받는 파일 목록

타입 리네이밍 및 스토리지 키 변경으로 인해 수정이 필요한 파일들입니다. 마이그레이션 인프라(validators, sanitizers, converters) 외에 컴포넌트, 훅, 데이터 핸들러도 포함됩니다.

### 컴포넌트

| 파일 | 영향받는 타입 |
|------|-------------|
| `components/QuickSlotsMenu/QuickSlotsMenu.tsx` | `QuickSlots`, `SlotNo` |
| `components/QuickSlotsMenu/SlotInfo/SlotInfo.tsx` | `Slot` |
| `components/QuickSlotsMenu/SlotPagination/SlotPagination.tsx` | `SlotNo` |
| `components/QuickSlotsMenu/SlotEditModal/SlotEditModal.tsx` | `SlotVerdict` 관련 |
| `components/RandomDefenseCreateMenu/RandomDefenseCreateMenu.tsx` | `SlotNo` |
| `components/RandomDefenseCreateButton/RandomDefenseCreateButton.tsx` | `SlotNo` |
| `components/RandomDefenseGachaModal/RandomDefenseGachaModal.tsx` | `FilledSlot` |
| `components/RandomDefenseHistoryMenu/RandomDefenseHistoryList/RandomDefenseHistoryList.tsx` | `RandomDefenseHistoryInfo` |
| `components/ProblemTagLockTimer/ProblemTagLockTimer.tsx` | `Timer` 관련 |

### 훅

| 파일 | 영향받는 타입 |
|------|-------------|
| `hooks/randomDefense/useQuickSlotMenu.ts` | `SlotNo`, `QuickSlots` |
| `hooks/randomDefense/useRandomDefenseCreateMenu.ts` | `SlotNo` |
| `hooks/randomDefense/useRandomDefenseHistoryMenu.ts` | `RandomDefenseHistoryInfo` |
| `hooks/useRandomDefenseSection.ts` | `Slots`, `SlotNo` |
| `hooks/widget/useWidget.ts` | `FilledSlot` |
| `hooks/widget/useRandomDefense.ts` | `FilledSlot`, `QuickSlots`, `SlotNo` |
| `hooks/gacha/useRandomDefenseGachaModal.ts` | `FilledSlot` |
| `hooks/useTotamjungThemeState.ts` | `TOTAMJUNG_THEME` 커맨드 |

### 데이터 핸들러

| 파일 | 영향받는 타입/키 |
|------|----------------|
| `domains/dataHandlers/checkedAlgorithmsHandler.ts` | `STORAGE_KEY.CHECKED_ALGORITHM_IDS` → `hiderOptions` 내부로 이동 |
| `domains/dataHandlers/timersDataHandler.ts` | `Timer`, `STORAGE_KEY.TIMERS` → `hiderOptions` 내부로 이동 |
| `domains/dataHandlers/quickSlotsDataHandler.ts` | `STORAGE_KEY.QUICK_SLOTS` → `QUICK_SLOT_OPTIONS` |
| `domains/dataHandlers/randomDefenseHistoryDataHandler.ts` | `STORAGE_KEY.RANDOM_DEFENSE_HISTORY`, `IS_TIER_HIDDEN` → `RANDOM_DEFENSE_HISTORY_OPTIONS` |
| `domains/dataHandlers/totamjungThemeDataHandler.ts` | `STORAGE_KEY.TOTAMJUNG_THEME` → `THEME` |
| `domains/dataHandlers/optionsDataHandler.ts` | 전체 `OptionsData` 구조 변경 |
| `domains/randomDefense/slotValidator.ts` | `Slot` 관련 타입 |
| `domains/dataHandlers/converters/legacyToLatestTimers.ts` | `Timer` → `TagLockTimer` |
| `domains/dataHandlers/converters/legacyToLatestQuickSlotsConverter.ts` | `QuickSlots` 관련 |
| `domains/dataHandlers/converters/legacyToLatestRandomDefenseHistory.ts` | `RandomDefenseHistoryInfo` |

### 엔트리포인트

| 파일 | 영향 |
|------|------|
| `entrypoints/background/main.ts` | 커맨드 핸들러에서 데이터 핸들러 호출 — 함수명/키 변경에 따라 수정 필요 |
| `entrypoints/injectionScript.content.ts` | `TOTAMJUNG_THEME` 커맨드 |
