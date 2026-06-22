import { useEffect } from 'react';
import OptionsHeader from '@/components/OptionsHeader';
import HiderSection from '@/components/sections/HiderSection';
import RandomDefenseSection from '@/components/sections/RandomDefenseSection';
import AppearanceAndDataManageSection from '@/components/sections/AppearanceAndDataManageSection';
import useOptionsPage from '@/hooks/options/useOptionsPage';
import useTotamjungSleeping from '@/hooks/options/useTotamjungSleeping';
import SlidingFocusIndicator from '@/components/SlidingFocusIndicator';
import { totamjung, totamjungSleep } from '@/assets/png';
import { useTranslation } from '@/i18n';
import * as S from './Options.styled';

const Options = () => {
  const { selectedCategory, setSelectedCategory } = useOptionsPage();
  const isSleeping = useTotamjungSleeping();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('browserTab.optionsTitle');
  }, [t]);

  return (
    <S.Container>
      <S.OptionsContainer>
        <OptionsHeader
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <S.OptionsBody>
          <HiderSection show={selectedCategory === 'algorithmHider'} />
          <RandomDefenseSection show={selectedCategory === 'randomDefense'} />
          <AppearanceAndDataManageSection
            show={selectedCategory === 'appearanceAndDataManage'}
          />
        </S.OptionsBody>
      </S.OptionsContainer>
      <S.TotamjungImageWrapper>
        <S.StandingTotamjungImage
          src={totamjung}
          alt=""
          $visible={!isSleeping}
        />
        <S.SleepingTotamjungImage
          src={totamjungSleep}
          alt=""
          $visible={isSleeping}
        />
      </S.TotamjungImageWrapper>
      <SlidingFocusIndicator activeScope={document.body} />
    </S.Container>
  );
};

export default Options;
