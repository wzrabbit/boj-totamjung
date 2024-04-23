import * as S from './HotkeySwitcher.styled';
import Text from '~components/common/Text';
import { SwitchIcon } from '~images/svg';
import type { Hotkey } from '~types/randomDefense';

interface HotkeySwitcherProps {
  selectedSlotNumber: number;
  hotkey: Hotkey;
  onClick: () => void;
}

const isMac = navigator.userAgent.toLowerCase().indexOf('mac') !== -1;

const HotkeySwitcher = (props: HotkeySwitcherProps) => {
  const { selectedSlotNumber, hotkey, onClick } = props;

  return (
    <S.Container>
      <Text type="primary" fontSize="16px">{`단축키: ${
        hotkey === 'Alt' ? (isMac ? 'Option' : 'Alt') : 'F2'
      } + ${selectedSlotNumber}`}</Text>
      <S.SwitchButton aria-label="단축키 전환하기" onClick={onClick}>
        <SwitchIcon />
      </S.SwitchButton>
    </S.Container>
  );
};

export default HotkeySwitcher;
