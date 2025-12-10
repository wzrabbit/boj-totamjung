import Widget from '@/components/Widget';
import LeftSlideToast from '@/components/LeftSlideToast/LeftSlideToast';
import useTotamjungThemeState from '@/hooks/useTotamjungThemeState';
import useToastState from '@/hooks/useToastState';
import useExternalThemeInfo from '@/hooks/widget/useExternalThemeInfo';

const ContentScript = () => {
  const { totamjungTheme, isLoaded, updateTotamjungTheme } =
    useTotamjungThemeState();
  const { externalTheme } = useExternalThemeInfo();
  const { toastState, showToast, closeToast } = useToastState();

  const totamjungRootRef = useRef<HTMLDivElement>(null);
  const theme = externalTheme ?? totamjungTheme;

  return (
    <div ref={totamjungRootRef} style={{ position: 'relative', zIndex: 10000 }}>
      {isLoaded && totamjungRootRef.current && (
        <>
          <Widget
            theme={theme}
            rootElement={totamjungRootRef.current}
            onChangeTheme={updateTotamjungTheme}
            onToast={showToast}
          />
          <LeftSlideToast theme={theme} onClose={closeToast} {...toastState} />
          <SlidingFocusIndicator portalTarget={totamjungRootRef.current} />
        </>
      )}
    </div>
  );
};

export default ContentScript;
