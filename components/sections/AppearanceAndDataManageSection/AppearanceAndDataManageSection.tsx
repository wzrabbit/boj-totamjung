import * as S from './AppearanceAndDataManageSection.styled';
import AppearanceFieldsetMenu from '~components/AppearanceFieldsetMenu';
import OptionsDataManageMenu from '~components/OptionsDataManageMenu';
import type { OptionsSectionProps } from '~types/options';

const AppearanceAndDataManageSection = (props: OptionsSectionProps) => {
  const { show } = props;

  return show ? (
    <S.Container>
      <AppearanceFieldsetMenu />
      <OptionsDataManageMenu />
    </S.Container>
  ) : null;
};

export default AppearanceAndDataManageSection;
