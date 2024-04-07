import type { ChangeEvent } from 'react';
import * as S from './TierSlider.styled';
import type { TierWithoutNotRatable } from '~types/randomDefense';

interface TierSliderProps {
  startTier: TierWithoutNotRatable;
  endTier: TierWithoutNotRatable;
  onChange: (start: TierWithoutNotRatable, end: TierWithoutNotRatable) => void;
}

const TierSlider = (props: TierSliderProps) => {
  const { startTier, endTier, onChange } = props;

  return (
    <S.Container>
      <S.Track />
      <S.Thumb
        type="range"
        min={0}
        max={30}
        value={startTier}
        aria-label="시작 범위 티어 설정하기"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          // Should be fixed: 불필요한 타입 단언 사용
          onChange(Number(e.target.value) as TierWithoutNotRatable, endTier);
        }}
      />
      <S.Thumb
        type="range"
        min={0}
        max={30}
        value={endTier}
        aria-label="끝 범위 티어 설정하기"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          // Should be fixed: 불필요한 타입 단언 사용
          onChange(startTier, Number(e.target.value) as TierWithoutNotRatable);
        }}
      />
    </S.Container>
  );
};

export default TierSlider;
