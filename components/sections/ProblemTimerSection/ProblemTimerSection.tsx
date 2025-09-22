import * as S from './ProblemTimerSection.styled';
import MenuTitle from '@/components/MenuTitle';
import NamedFrame from '@/components/common/NamedFrame';
import type { OptionsSectionProps } from '@/types/options';
import { ClockIcon } from '@/assets/svg';

const ProblemTimerSection = (props: OptionsSectionProps) => {
  const { show } = props;

  return show ? (
    <S.Container>
      <MenuTitle title="문제 타이머 설정" iconSrc={<ClockIcon />} />
      <S.Menu>
        <NamedFrame
          width="419px"
          height="550px"
          padding="10px"
          title="타이머 설정"
        ></NamedFrame>
        <NamedFrame
          width="628px"
          height="550px"
          padding="10px"
          title="타이머 관리"
        ></NamedFrame>
      </S.Menu>
    </S.Container>
  ) : null;
};

export default ProblemTimerSection;
