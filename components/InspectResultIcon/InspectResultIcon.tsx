import { theme as styledTheme } from '@/styles/theme';
import type { BojExtendedTheme, TotamjungTheme } from '@/types/mainTheme';

interface InspectResultIconProps {
  theme: TotamjungTheme | BojExtendedTheme;
  icon: 'check' | 'question';
}

const iconSources = {
  check: browser.runtime.getURL('/inspect-result-check.png'),
  question: browser.runtime.getURL('/inspect-result-question.png'),
};

const descriptions = {
  check: '이 문제는 알고 있는 알고리즘만으로 풀 수 있는 문제입니다.',
  question:
    '이 문제를 풀기 위해서는 모르는 알고리즘을 사용해야 할 수 있습니다.',
};

const filters: Record<TotamjungTheme | BojExtendedTheme, string> = {
  none: styledTheme.filter.BOJ_BLUE_FILTER,
  totamjung: styledTheme.filter.LIGHT_BROWN_FILTER,
  bojExtendedRigel: styledTheme.bojExtendedFilter.SKY_BLUE,
  bojExtendedDark: styledTheme.bojExtendedFilter.DARK_GRAY,
};

/**
 * content script의 컴포넌트의 구성 요소이나, Shadow DOM 외부로 렌더링되는 컴포넌트이기 때문에,
 * styled-components를 사용하지 않고 inline style을 사용하고 있습니다.
 */
const InspectResultIcon = (props: InspectResultIconProps) => {
  const { theme, icon } = props;

  const styles = {
    width: '26px',
    height: '26px',
    margin: '1px 0px 5px 7px',
    filter: filters[theme],
    userSelect: 'none',
  } as const;

  return (
    <img
      src={iconSources[icon]}
      style={styles}
      alt={descriptions[icon]}
      title={descriptions[icon]}
      draggable="false"
    />
  );
};

export default InspectResultIcon;
