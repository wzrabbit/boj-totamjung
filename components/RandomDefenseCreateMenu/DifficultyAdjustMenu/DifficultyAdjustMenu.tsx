import * as S from './DifficultyAdjustMenu.styled';
import type { TierWithoutNotRatable } from '@/types/randomDefense';
import TierSlider from './TierSlider';
import TierRange from './TierRange';
import TierPresetButtonList from './TierPresetButtonList';

interface DifficultyAdjustMenuProps {
  startTier: TierWithoutNotRatable;
  endTier: TierWithoutNotRatable;
  onChange: (start: TierWithoutNotRatable, end: TierWithoutNotRatable) => void;
}

const DifficultyAdjustMenu = (props: DifficultyAdjustMenuProps) => {
  const { startTier, endTier, onChange } = props;

  return (
    <S.Container>
      <TierSlider startTier={startTier} endTier={endTier} onChange={onChange} />
      <S.PresetPanel>
        <TierRange startTier={startTier} endTier={endTier} />
        <TierPresetButtonList onClick={onChange} />
      </S.PresetPanel>
    </S.Container>
  );
};

export default DifficultyAdjustMenu;
