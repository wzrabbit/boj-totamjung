import useWidget from '~hooks/widget/useWidget';
import * as S from './Widget.styled';

const Widget = () => {
  const {
    isExpanded,
    isScrollingToTop,
    widgetTheme,
    isLoaded,
    scrollToTop,
    endScrollingAnimation,
    toggleWidgetOpen,
    toggleTotamjungTheme,
  } = useWidget();

  return (
    <S.Container>
      {isLoaded && (
        <>
          <S.TopButton
            type="button"
            className={isScrollingToTop ? 'animate' : ''}
            $widgetTheme={widgetTheme}
            onClick={scrollToTop}
            onContextMenu={toggleWidgetOpen}
            aria-label="토탐정 위젯입니다. 클릭하여 웹사이트의 상단으로 이동하거나, 우클릭하여 위젯을 여세요."
          >
            <S.TopIconContainer onAnimationEnd={endScrollingAnimation}>
              <S.TopIconFrag $direction="left" />
              <S.TopIconFrag $direction="right" />
            </S.TopIconContainer>
          </S.TopButton>
          <S.DropdownMenu $widgetTheme={widgetTheme} $isExpanded={isExpanded}>
            <S.DropdownMenuItem>
              <S.DropdownMenuButton type="button" $widgetTheme={widgetTheme}>
                <S.DropdownButtonIcon
                  src={chrome.runtime.getURL('settings.png')}
                />
              </S.DropdownMenuButton>
            </S.DropdownMenuItem>
            <S.DropdownMenuItem>
              <S.DropdownMenuButton
                type="button"
                $widgetTheme={widgetTheme}
                aria-label={
                  widgetTheme === 'none'
                    ? '토탐정 테마 켜기'
                    : '토탐정 테마 끄기'
                }
                onClick={toggleTotamjungTheme}
              >
                <S.DropdownButtonIcon
                  src={chrome.runtime.getURL('palette.png')}
                />
              </S.DropdownMenuButton>
            </S.DropdownMenuItem>
            <S.DropdownMenuItem>
              <S.DropdownMenuButton type="button" $widgetTheme={widgetTheme}>
                <S.DropdownButtonIcon src={chrome.runtime.getURL('dice.png')} />
              </S.DropdownMenuButton>
            </S.DropdownMenuItem>
            <S.DropdownMenuItem>
              <S.DropdownMenuButton type="button" $widgetTheme={widgetTheme}>
                <S.DropdownButtonIcon
                  src={chrome.runtime.getURL('search.png')}
                />
              </S.DropdownMenuButton>
            </S.DropdownMenuItem>
            <S.DropdownMenuItem>
              <S.DropdownMenuButton type="button" $widgetTheme={widgetTheme}>
                <S.DropdownButtonIcon src={chrome.runtime.getURL('lock.png')} />
              </S.DropdownMenuButton>
            </S.DropdownMenuItem>
          </S.DropdownMenu>
        </>
      )}
    </S.Container>
  );
};

export default Widget;
