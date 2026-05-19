import * as S from './RandomDefenseHistoryItem.styled';
import { solvedAcNumericTierIcons, solvedAcRankIcons } from '@/assets/svg/tier';
import { ClockIcon, TrashIcon } from '@/assets/svg';
import { formatDate } from '@/utils/formatDate';
import type { IsoString } from '@/types/utils';
import type { KeyboardEventHandler, Ref } from 'react';
import { useTranslation } from '@/i18n';

interface RandomDefenseHistoryItemProps {
  problemId: number;
  title: string;
  tier: keyof typeof solvedAcNumericTierIcons;
  createdAt: IsoString;
  isHidden: boolean;
  tabIndex: number;
  linkButtonRef: Ref<HTMLAnchorElement>;
  onKeyDown: KeyboardEventHandler<HTMLLIElement>;
  onDelete: () => void;
}

const RandomDefenseHistoryItem = (props: RandomDefenseHistoryItemProps) => {
  const {
    problemId,
    title,
    tier,
    createdAt,
    isHidden,
    tabIndex,
    linkButtonRef,
    onKeyDown,
    onDelete,
  } = props;
  const { t } = useTranslation();

  return (
    <S.Container $tier={tier} $isHidden={isHidden} onKeyDown={onKeyDown}>
      <S.LinkButton
        href={`https://icpc.me/${problemId}`}
        target="__blank"
        aria-label={t('randomDefenseHistory.item.problemAriaLabel', [
          String(problemId),
          title,
        ])}
        ref={linkButtonRef}
        tabIndex={tabIndex}
      >
        <S.TierBadge
          src={
            isHidden ? solvedAcRankIcons.hidden : solvedAcNumericTierIcons[tier]
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
              <S.CreatedAt>{formatDate(new Date(createdAt))}</S.CreatedAt>
            </S.CreatedAtContainer>
          </S.Details>
        </S.InformationContainer>
      </S.LinkButton>
      <S.DeleteButton
        $tier={tier}
        $isHidden={isHidden}
        tabIndex={tabIndex}
        onClick={onDelete}
        aria-label={t('randomDefenseHistory.item.removeAriaLabel')}
      >
        <TrashIcon />
      </S.DeleteButton>
    </S.Container>
  );
};

export default RandomDefenseHistoryItem;
