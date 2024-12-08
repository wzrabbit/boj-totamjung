import ProblemCard from '@/components/ProblemCard/ProblemCard';
import type { ProblemInfo } from '@/types/gacha';
import * as S from './ProblemCardGrid.styled';

interface ProblemCardGridProps {
  problemInfos: ProblemInfo[];
  isHidden: boolean;
}

const ProblemCardGrid = () => {
  return <S.Container></S.Container>;
};
