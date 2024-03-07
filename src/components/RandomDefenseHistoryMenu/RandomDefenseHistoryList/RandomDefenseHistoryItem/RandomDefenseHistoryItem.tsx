import * as S from './RandomDefenseHistoryItem.styled';
import {
  solvedAcNumericTierIcons,
  solvedAcSpecialTierIcons,
} from '~images/svg/tier';
import { ClockIcon, TrashIcon } from '~images/svg';
import { formatDate } from '~utils/formatDate';

interface RandomDefenseHistoryItemProps {
  problemId: number;
  title: string;
  tier: keyof typeof solvedAcNumericTierIcons;
  createdAt: Date;
  isHidden: boolean;
  onDelete: (id: string) => void;
}

const RandomDefenseHistoryItem = (props: RandomDefenseHistoryItemProps) => {
  const { problemId, title, tier, createdAt, isHidden, onDelete } = props;

  return (
    <S.Container $tier={tier} $isHidden={isHidden}>
      <S.LinkButton
        href={`https://icpc.me/${problemId}`}
        target="__blank"
        aria-label={`${problemId}번 ${title} 문제`}
      >
        <S.TierBadge
          src={
            isHidden
              ? solvedAcSpecialTierIcons.hidden
              : solvedAcNumericTierIcons[tier]
          }
          alt=""
          draggable={false}
        />
        <S.InformationContainer>
          <S.Title $tier={tier} $isHidden={isHidden}>
            {title}
          </S.Title>
          <S.Details>
            <S.ProblemId
              $tier={tier}
              $isHidden={isHidden}
            >{`#${problemId}`}</S.ProblemId>
            <S.CreatedAtContainer>
              <ClockIcon />
              <S.CreatedAt>{formatDate(createdAt)}</S.CreatedAt>
            </S.CreatedAtContainer>
          </S.Details>
        </S.InformationContainer>
      </S.LinkButton>
      <S.DeleteButton
        $tier={tier}
        $isHidden={isHidden}
        onClick={() => {
          onDelete(`${problemId}-${createdAt.getTime()}`);
        }}
        aria-label="추첨 기록에서 제거하기"
      >
        <TrashIcon />
      </S.DeleteButton>
    </S.Container>
  );
};

export default RandomDefenseHistoryItem;
