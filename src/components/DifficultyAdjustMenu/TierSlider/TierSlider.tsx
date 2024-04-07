import type { ChangeEvent } from 'react';
import * as S from './TierSlider.styled';
import type { TierWithoutNotRatable } from '~types/randomDefense';
import { isTierWithoutNotRatable } from '~types/typeGuards';

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
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const newStartTier = Number(event.target.value);

          if (isTierWithoutNotRatable(newStartTier)) {
            onChange(newStartTier, endTier);
          }
        }}
      />
      <S.Thumb
        type="range"
        min={0}
        max={30}
        value={endTier}
        aria-label="끝 범위 티어 설정하기"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const newEndTier = Number(event.target.value);

          if (isTierWithoutNotRatable(newEndTier)) {
            onChange(startTier, newEndTier);
          }
        }}
      />
    </S.Container>
  );
};

export default TierSlider;
