import * as S from './ProblemTimerInfoItem.styled';
import { solvedAcNumericTierIcons, solvedAcRankIcons } from '@/assets/svg/tier';
import { ClockIcon } from '@/assets/svg';
import { formatDate } from '@/utils/formatDate';
import { getTransparentHexColor } from '@/utils/getTransparentHexColor';
import type { IsoString } from '@/types/utils';
import ProgressBar from '@/components/common/ProgressBar';
import { theme } from '@/styles/theme';
import ProblemTimerControls from '@/components/ProblemTimerControls';

interface ProblemTimerInfoItemProps {
  problemId: number;
  title: string;
  tier: keyof typeof solvedAcNumericTierIcons;
  createdAt: IsoString;
  isHidden: boolean;
  hours: number;
  minutes: number;
  seconds: number;
  status: 'play' | 'pause' | 'stop';
  progress: number;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const ProblemTimerInfoItem = (props: ProblemTimerInfoItemProps) => {
  const { problemId, title, tier, createdAt, isHidden, progress, ...rest } =
    props;

  return (
    <S.Container $tier={tier} $isHidden={isHidden}>
      <S.TierBadge
        src={
          isHidden ? solvedAcRankIcons.hidden : solvedAcNumericTierIcons[tier]
        }
        alt=""
        draggable={false}
      />
      <S.MainContainer>
        <S.UpperContainer>
          <S.InformationContainer>
            <S.Title
              href={`https://icpc.me/${problemId}`}
              target="__blank"
              aria-label={`${problemId}번 ${title} 문제`}
              title={title}
              $tier={tier}
              $isHidden={isHidden}
            >
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
          <ProblemTimerControls
            {...rest}
            hasDeleteButton={true}
            color={S.getTierColor(tier, isHidden, theme)}
            height={54}
          />
        </S.UpperContainer>
        <S.ProgressBarWrapper>
          <ProgressBar
            width="100%"
            height="100%"
            color={S.getTierColor(tier, isHidden, theme)}
            progress={progress}
            trackColor={getTransparentHexColor(
              S.getTierColor(tier, isHidden, theme),
              0.2,
            )}
          />
        </S.ProgressBarWrapper>
      </S.MainContainer>
    </S.Container>
  );
};

export default ProblemTimerInfoItem;
