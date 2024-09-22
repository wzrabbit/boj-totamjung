import { theme as styledTheme } from '@/styles/theme';
import type { TotamjungTheme } from '@/types/totamjungTheme';

interface InspectResultIconProps {
  theme: TotamjungTheme;
  icon: 'check' | 'question';
}

/**
 * content script의 컴포넌트의 구성 요소이나, Shadow DOM 외부로 렌더링되는 컴포넌트이기 때문에,
 * styled-components를 사용하지 않고 inline style을 사용하고 있습니다.
 */
const InspectResultIcon = (props: InspectResultIconProps) => {
  const { theme, icon } = props;
  const iconSrc =
    icon === 'check'
      ? chrome.runtime.getURL('inspect-result-check.png')
      : chrome.runtime.getURL('inspect-result-question.png');
  const alt =
    icon === 'check'
      ? '이 문제는 알고 있는 알고리즘만으로 풀 수 있는 문제입니다.'
      : '이 문제를 풀기 위해서는 모르는 알고리즘을 사용해야 할 수 있습니다.';
  const styles = {
    width: '26px',
    height: '26px',
    margin: '1px 0px 5px 7px',
    filter:
      theme === 'totamjung'
        ? styledTheme.filter.LIGHT_BROWN_FILTER
        : styledTheme.filter.BOJ_BLUE_FILTER,
    userSelect: 'none',
  } as const;

  return (
    <img src={iconSrc} style={styles} alt={alt} title={alt} draggable="false" />
  );
};

export default InspectResultIcon;
