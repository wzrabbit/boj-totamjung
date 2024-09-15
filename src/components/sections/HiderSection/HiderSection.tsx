import MenuTitle from '~components/MenuTitle';
import AlgorithmPool from '~components/AlgorithmPool';
import HiderFieldsetMenu from '~components/HiderMenu';
import { SearchIcon } from '~images/svg';
import * as S from './HiderSection.styled';
import type { OptionsSectionProps } from '~types/options';

const HiderSection = (props: OptionsSectionProps) => {
  const { show } = props;

  return show ? (
    <S.Container>
      <S.AlgorithmHiderMenu>
        <MenuTitle
          title="알고 있는 알고리즘 관리하기"
          iconSrc={<SearchIcon />}
        />
        <AlgorithmPool />
      </S.AlgorithmHiderMenu>
      <HiderFieldsetMenu />
    </S.Container>
  ) : null;
};

export default HiderSection;
