import Modal, { ModalActionButtonsContainer } from '@/components/common/Modal';
import IconButton from '@/components/common/IconButton';
import Input from '@/components/common/Input';
import Text from '@/components/common/Text';
import * as S from './GachaProblemCountInputModal.styled';
import { CheckCircleIcon } from '@/assets/svg';
import useGachaProblemCount from '@/hooks/useGachaProblemCount';
import { MAX_PROBLEM_COUNT_PER_RANDOM_DEFENSE } from '@/constants/randomDefense';
import type { MainTheme } from '@/types/mainTheme';
import { theme as styledTheme } from '@/styles/theme';

export const lightThemes: readonly MainTheme[] = ['none', 'solvedAcLight'];

interface GachaProblemCountInputModalProps {
  open: boolean;
  theme?: MainTheme;
  portalTarget?: HTMLElement | null;
  shouldShowHotkeyMessage: boolean;
  onClose: () => void;
  onSubmitProblemCount: (problemCount: number) => void;
}

const GachaProblemCountInputModal = (
  props: GachaProblemCountInputModalProps,
) => {
  const {
    open,
    theme = 'totamjung',
    portalTarget,
    shouldShowHotkeyMessage,
    onClose,
    onSubmitProblemCount,
  } = props;
  const { inputValue, updateInputValue, isInputValueValid } =
    useGachaProblemCount();

  const isLightTheme = lightThemes.includes(theme);

  return (
    <Modal
      title="즉석 추첨"
      theme={theme}
      portalTarget={portalTarget}
      open={open}
      onClose={onClose}
    >
      <S.ContentContainer>
        <Text type={isLightTheme ? 'black' : 'normal'} fontSize={16}>
          추첨을 진행할 문제 수를 입력해 주세요.
        </Text>
        <Input
          type="number"
          width="100%"
          height={40}
          borderWidth={2}
          borderRadius={6}
          horizontalPadding={8}
          fontSize={18}
          min={1}
          max={MAX_PROBLEM_COUNT_PER_RANDOM_DEFENSE}
          value={inputValue}
          theme={theme}
          onChange={updateInputValue}
          autoFocus
        />
        <Text
          type={isLightTheme ? 'black' : 'normal'}
          fontSize={14}
          textAlign="right"
        >{`1문제 이상, ${MAX_PROBLEM_COUNT_PER_RANDOM_DEFENSE}문제 이하`}</Text>
        {shouldShowHotkeyMessage && (
          <Text
            type="custom"
            fontSize={16}
            color={
              isLightTheme ? styledTheme.color.BLACK : styledTheme.color.WHITE
            }
            opacity={0.8}
          >
            TIP: 즉석 추첨은 백준 사이트 내에서 슬롯 번호에 대응하는 단축키를
            길게 누르는 것으로도 진행할 수 있습니다.
          </Text>
        )}
      </S.ContentContainer>
      <ModalActionButtonsContainer theme={theme}>
        <IconButton
          type="button"
          name="확인"
          size="medium"
          iconSrc={<CheckCircleIcon />}
          color={
            lightThemes.includes(theme)
              ? styledTheme.color.DARK_GRAY
              : styledTheme.color.GOLD
          }
          disabled={!isInputValueValid}
          onClick={() => onSubmitProblemCount(Number(inputValue))}
        />
      </ModalActionButtonsContainer>
    </Modal>
  );
};

export default GachaProblemCountInputModal;
