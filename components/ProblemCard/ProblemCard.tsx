import { solvedAcRankIcons, solvedAcNumericTierIcons } from '@/assets/svg/tier';
import type { KeyboardEventHandler, Ref } from 'react';
import type { ProblemInfo } from '@/types/randomDefense';
import useCardTweak from '@/hooks/gacha/useCardTweak';
import { useTranslation } from '@/i18n';
import * as S from './ProblemCard.styled';

interface ProblemCardProps {
  problemInfo: ProblemInfo;
  isTierHidden: boolean;
  width: number;
  tabIndex?: number;
  linkButtonRef: Ref<HTMLAnchorElement>;
  onHover: () => void;
  onKeyDown: KeyboardEventHandler<HTMLAnchorElement>;
}

const ProblemCard = (props: ProblemCardProps) => {
  const {
    problemInfo,
    isTierHidden,
    width,
    tabIndex,
    linkButtonRef,
    onHover,
    onKeyDown,
  } = props;
  const { problemId, title, tier } = problemInfo;
  const { rotateX, rotateY, adjustCardTweak, resetCardTweak } = useCardTweak();
  const { t } = useTranslation();

  return (
    <S.HoverTransformContainer>
      <S.InnerContainer
        $width={width}
        $tier={tier}
        $isTierHidden={isTierHidden}
        $rotateX={rotateX}
        $rotateY={rotateY}
        onMouseMove={adjustCardTweak}
        onMouseOut={resetCardTweak}
        onMouseOver={onHover}
      >
        <S.LinkButton
          target="_blank"
          rel="noreferrer noopener"
          href={`https://icpc.me/${problemId}`}
          aria-label={t('widget.problemCard.ariaLabel', [
            String(problemId),
            title,
          ])}
          tabIndex={tabIndex}
          ref={linkButtonRef}
          onKeyDown={onKeyDown}
          $cardWidth={width}
        >
          <S.TierBadge
            $cardWidth={width}
            src={
              isTierHidden
                ? solvedAcRankIcons.hidden
                : solvedAcNumericTierIcons[tier]
            }
            alt=""
            draggable={false}
          />
          <S.ProblemId
            $cardWidth={width}
            $tier={tier}
            $isTierHidden={isTierHidden}
          >{`#${problemId}`}</S.ProblemId>
          <S.Title $cardWidth={width}>{title}</S.Title>
          <S.Overlay $movement={rotateX + rotateY} />
        </S.LinkButton>
      </S.InnerContainer>
    </S.HoverTransformContainer>
  );
};

export default ProblemCard;
