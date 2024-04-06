import * as S from './TierPresetButtonList.styled';
import TierPresetButton from './TierPresetButton';

interface TierPresetButtonListProps {
  onClick: (start: number, end: number) => void;
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
        <TierPresetButton rank={rankName} onClick={onClick} />
      ))}
    </S.Container>
  );
};

export default TierPresetButtonList;
