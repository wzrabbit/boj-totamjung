import * as S from './TierRange.styled';
import { solvedAcNumericTierIcons } from '~images/svg/tier';

interface TierRangeProps {
  startTier: keyof typeof solvedAcNumericTierIcons;
  endTier: keyof typeof solvedAcNumericTierIcons;
}

const TierRange = (props: TierRangeProps) => {
  const { startTier, endTier } = props;

  return (
    <S.Container>
      <S.TierBadge
        src={solvedAcNumericTierIcons[startTier]}
        alt=""
        draggable={false}
      />
      <S.Tilde>~</S.Tilde>
      <S.TierBadge
        src={solvedAcNumericTierIcons[endTier]}
        alt=""
        draggable={false}
      />
    </S.Container>
  );
};

export default TierRange;
