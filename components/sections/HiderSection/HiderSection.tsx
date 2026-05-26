import MenuTitle from '@/components/MenuTitle';
import AlgorithmPool from '@/components/AlgorithmPool';
import HiderFieldsetMenu from '@/components/HiderMenu';
import { SearchIcon } from '@/assets/svg';
import { useTranslation } from '@/i18n';
import * as S from './HiderSection.styled';
import type { OptionsSectionProps } from '@/types/options';

const HiderSection = (props: OptionsSectionProps) => {
  const { show } = props;
  const { t } = useTranslation();

  return show ? (
    <S.Container>
      <S.AlgorithmHiderMenu>
        <MenuTitle
          title={t('options.sections.hider.algorithmsTitle')}
          iconSrc={<SearchIcon />}
        />
        <AlgorithmPool />
      </S.AlgorithmHiderMenu>
      <HiderFieldsetMenu />
    </S.Container>
  ) : null;
};

export default HiderSection;
