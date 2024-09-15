import Widget from '~components/Widget';
import LeftSlideToast from '~components/LeftSlideToast/LeftSlideToast';
import useTotamjungThemeState from '~hooks/useTotamjungThemeState';
import useToastState from '~hooks/useToastState';

const ContentScript = () => {
  const { totamjungTheme, isLoaded, updateTotamjungTheme } =
    useTotamjungThemeState();
  const { toastState, showToast, closeToast } = useToastState();

  return (
    isLoaded && (
      <div style={{ position: 'relative', zIndex: 10000 }}>
        <Widget
          theme={totamjungTheme}
          onChangeTheme={updateTotamjungTheme}
          onToast={showToast}
        />
        <LeftSlideToast
          theme={totamjungTheme}
          onClose={closeToast}
          {...toastState}
        />
      </div>
    )
  );
};

export default ContentScript;
