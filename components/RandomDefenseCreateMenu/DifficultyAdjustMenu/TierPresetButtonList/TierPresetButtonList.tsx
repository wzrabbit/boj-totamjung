import * as S from './TierPresetButtonList.styled';
import TierPresetButton from './TierPresetButton';
import { TierWithoutNotRatable } from '@/types/randomDefense';

interface TierPresetButtonListProps {
  onClick: (start: TierWithoutNotRatable, end: TierWithoutNotRatable) => void;
}

const RANK_NAMES = [
  'unrated',
  'bronze',
  'silver',
  'gold',
  'platinum',
  'diamond',
  'ruby',
] as const;

const TierPresetButtonList = (props: TierPresetButtonListProps) => {
  const { onClick } = props;

  return (
    <S.Container>
      {RANK_NAMES.map((rankName) => (
        <TierPresetButton key={rankName} rank={rankName} onClick={onClick} />
      ))}
    </S.Container>
  );
};

export default TierPresetButtonList;
