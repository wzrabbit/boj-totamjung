import * as S from './OptionsNav.styled';
import type { OptionsNavCategory } from '@/types/options';

interface OptionsNavProps {
  selectedCategory: OptionsNavCategory;
  onChange: (category: OptionsNavCategory) => void;
}

const OPTIONS_NAV_CATEGORIES: {
  displayName: string;
  category: OptionsNavCategory;
}[] = [
  { displayName: '알고리즘 가리개', category: 'algorithmHider' },
  { displayName: '랜덤 디펜스', category: 'randomDefense' },
  { displayName: '문제 타이머', category: 'problemTimer' },
  { displayName: '외관 및 데이터 관리', category: 'appearanceAndDataManage' },
];

const OptionsNav = (props: OptionsNavProps) => {
  const { selectedCategory, onChange } = props;

  return (
    <S.Container>
      <S.NavItemList>
        {OPTIONS_NAV_CATEGORIES.map(({ displayName, category }) => (
          <S.NavItem key={displayName}>
            <S.CategoryButton
              $isSelected={category === selectedCategory}
              onClick={() => {
                onChange(category);
              }}
            >
              {displayName}
            </S.CategoryButton>
            <S.Underline $isSelected={category === selectedCategory} />
          </S.NavItem>
        ))}
      </S.NavItemList>
    </S.Container>
  );
};

export default OptionsNav;
