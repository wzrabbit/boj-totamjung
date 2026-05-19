import * as S from './HotkeySwitcher.styled';
import Text from '@/components/common/Text';
import { SwitchIcon } from '@/assets/svg';
import { useTranslation } from '@/i18n';
import type { Hotkey } from '@/types/randomDefense';

interface HotkeySwitcherProps {
  selectedSlotNo: number;
  hotkey: Hotkey;
  onClick: () => void;
}

const isMac = navigator.userAgent.toLowerCase().indexOf('mac') !== -1;

const HotkeySwitcher = (props: HotkeySwitcherProps) => {
  const { selectedSlotNo, hotkey, onClick } = props;
  const { t } = useTranslation();

  const hotkeyText = !hotkey
    ? t('quickSlots.hotkey.notInUse')
    : hotkey === 'F2'
      ? t('quickSlots.hotkey.f2Combo', [String(selectedSlotNo)])
      : t('quickSlots.hotkey.altCombo', [
          isMac ? 'Option' : 'Alt',
          String(selectedSlotNo),
        ]);

  return (
    <S.Container>
      <Text type="primary" fontSize={16}>
        {hotkeyText}
      </Text>
      <S.SwitchButton
        aria-label={t('quickSlots.hotkey.switchAriaLabel')}
        onClick={onClick}
      >
        <SwitchIcon />
      </S.SwitchButton>
    </S.Container>
  );
};

export default HotkeySwitcher;
