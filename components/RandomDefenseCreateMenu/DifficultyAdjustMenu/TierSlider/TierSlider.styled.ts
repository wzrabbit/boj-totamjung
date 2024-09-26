import { styled } from 'styled-components';
import { TierWithoutNotRatable } from '@/types/randomDefense';
import { isTierWithoutNotRatable } from '@/types/typeGuards';

const TIER_COUNT = 31;

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 465px;
  height: 15px;
`;

export const Track = styled.div`
  width: 100%;
  height: 3px;

  background: ${({ theme }) =>
    `linear-gradient(to right, ${Array.from({ length: TIER_COUNT })
      .map((_, index) => {
        if (!isTierWithoutNotRatable(index)) {
          return '';
        }

        return `${theme.solvedAcTier[index]} ${(index / TIER_COUNT) * 100}%, ${
          theme.solvedAcTier[index]
        } ${((index + 1) / TIER_COUNT) * 100}%, `;
      })
      .join('')
      .slice(0, -2)})`};

  pointer-events: none;
`;

export const Thumb = styled.input<{ value: TierWithoutNotRatable }>`
  position: absolute;
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
  background-color: transparent;

  pointer-events: none;

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    appearance: none;
  }

  &::-webkit-slider-thumb {
    height: 15px;
    width: 15px;

    border-radius: 7.5px;
    background-color: ${({ theme, value }) => theme.solvedAcTier[value]};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.TRANSPARENT_FAINT_WHITE}
      inset;

    -webkit-appearance: none;
    appearance: none;

    pointer-events: auto;
  }

  cursor: pointer;
`;
