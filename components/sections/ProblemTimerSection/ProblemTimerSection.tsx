import MenuTitle from '@/components/MenuTitle';
import * as S from './ProblemTimerSection.styled';
import type { OptionsSectionProps } from '@/types/options';
import { ClockIcon } from '@/assets/svg';

const ProblemTimerSection = (props: OptionsSectionProps) => {
  const { show } = props;

  return show ? (
    <S.Container>
      <MenuTitle title="문제 타이머 설정" iconSrc={<ClockIcon />} />
      <S.Menu>
        <p>여기에 구현...</p>
      </S.Menu>
    </S.Container>
  ) : null;
};

export default ProblemTimerSection;
