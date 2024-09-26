import OptionsHeader from '@/components/OptionsHeader';
import HiderSection from '@/components/sections/HiderSection';
import RandomDefenseSection from '@/components/sections/RandomDefenseSection';
import AppearanceAndDataManageSection from '@/components/sections/AppearanceAndDataManageSection';
import useOptionsPage from '@/hooks/options/useOptionsPage';
import { totamjung } from '@/assets/png';
import * as S from './Options.styled';

const Options = () => {
  const { selectedCategory, setSelectedCategory } = useOptionsPage();
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
        <S.TotamjungImage src={totamjung} alt="" />
      </S.TotamjungImageWrapper>
    </S.Container>
  );
};

export default Options;
