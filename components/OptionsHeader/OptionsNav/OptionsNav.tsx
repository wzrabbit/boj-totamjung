import { useTranslation } from '@/i18n';
import type { TranslationKey } from '@/i18n';
import * as S from './OptionsNav.styled';
import type { OptionsNavCategory } from '@/types/options';

interface OptionsNavProps {
  selectedCategory: OptionsNavCategory;
  onChange: (category: OptionsNavCategory) => void;
}

const OPTIONS_NAV_CATEGORIES: {
  labelKey: TranslationKey;
  category: OptionsNavCategory;
}[] = [
  { labelKey: 'options.nav.algorithmHider', category: 'algorithmHider' },
  { labelKey: 'options.nav.randomDefense', category: 'randomDefense' },
  {
    labelKey: 'options.nav.appearanceAndDataManage',
    category: 'appearanceAndDataManage',
  },
];

const OptionsNav = (props: OptionsNavProps) => {
  const { selectedCategory, onChange } = props;
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.NavItemList>
        {OPTIONS_NAV_CATEGORIES.map(({ labelKey, category }) => (
          <S.NavItem key={category}>
            <S.CategoryButton
              $isSelected={category === selectedCategory}
              onClick={() => {
                onChange(category);
              }}
            >
              {t(labelKey)}
            </S.CategoryButton>
            <S.Underline $isSelected={category === selectedCategory} />
          </S.NavItem>
        ))}
      </S.NavItemList>
    </S.Container>
  );
};

export default OptionsNav;
