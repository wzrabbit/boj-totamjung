import { theme as styledTheme } from '@/styles/theme';
import { useTranslation } from '@/i18n';
import type { BojExtendedTheme, TotamjungTheme } from '@/types/mainTheme';

interface InspectResultIconProps {
  theme: TotamjungTheme | BojExtendedTheme;
  icon: 'check' | 'question';
}

const iconSources = {
  check: browser.runtime.getURL('/inspect-result-check.png'),
  question: browser.runtime.getURL('/inspect-result-question.png'),
};

const filters: Record<TotamjungTheme | BojExtendedTheme, string> = {
  none: styledTheme.filters.BOJ_BLUE,
  totamjung: styledTheme.filters.BROWN_300,
  bojExtendedRigel: styledTheme.bojExtendedFilters.SKY_BLUE,
  bojExtendedDark: styledTheme.bojExtendedFilters.GRAY_600,
};

/**
 * content script의 컴포넌트의 구성 요소이나, Shadow DOM 외부로 렌더링되는 컴포넌트이기 때문에,
 * styled-components를 사용하지 않고 inline style을 사용하고 있습니다.
 */
const InspectResultIcon = (props: InspectResultIconProps) => {
  const { theme, icon } = props;
  const { t } = useTranslation();

  const description =
    icon === 'check' ? t('widget.inspect.check') : t('widget.inspect.question');

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
      alt={description}
      title={description}
      draggable="false"
    />
  );
};

export default InspectResultIcon;
