import * as S from './HotkeySwitcher.styled';
import Text from '@/components/common/Text';
import { SwitchIcon } from '@/assets/svg';
import type { Hotkey } from '@/types/randomDefense';

interface HotkeySwitcherProps {
  selectedSlotNo: number;
  hotkey: Hotkey;
  onClick: () => void;
}

const isMac = navigator.userAgent.toLowerCase().indexOf('mac') !== -1;

const getHotkeyText = (
  hotkey: Hotkey,
  selectedSlotNo: HotkeySwitcherProps['selectedSlotNo'],
) => {
  if (!hotkey) {
    return '단축키: 미사용';
  }

  if (hotkey === 'F2') {
    return `단축키: F2 + ${selectedSlotNo}`;
  }

  return `단축키: ${isMac ? 'Option' : 'Alt'} + ${selectedSlotNo}`;
};

const HotkeySwitcher = (props: HotkeySwitcherProps) => {
  const { selectedSlotNo, hotkey, onClick } = props;

  return (
    <S.Container>
      <Text type="primary" fontSize={16}>
        {getHotkeyText(hotkey, selectedSlotNo)}
      </Text>
      <S.SwitchButton aria-label="단축키 전환하기" onClick={onClick}>
        <SwitchIcon />
      </S.SwitchButton>
    </S.Container>
  );
};

export default HotkeySwitcher;
