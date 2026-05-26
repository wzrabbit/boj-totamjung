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
import { useTranslation } from '@/i18n';

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
  const { t } = useTranslation();

  const isLightTheme = lightThemes.includes(theme);

  return (
    <Modal
      title={t('gachaProblemCount.modalTitle')}
      theme={theme}
      portalTarget={portalTarget}
      open={open}
      onClose={onClose}
    >
      <S.ContentContainer>
        <Text type={isLightTheme ? 'black' : 'normal'} fontSize={16}>
          {t('gachaProblemCount.promptMessage')}
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
        >
          {t('gachaProblemCount.rangeLabel', [
            String(MAX_PROBLEM_COUNT_PER_RANDOM_DEFENSE),
          ])}
        </Text>
        {shouldShowHotkeyMessage && (
          <Text
            type="custom"
            fontSize={16}
            color={
              isLightTheme
                ? styledTheme.colors.BLACK
                : styledTheme.colors.OFF_WHITE
            }
            opacity={0.8}
          >
            {t('gachaProblemCount.hotkeyTip')}
          </Text>
        )}
      </S.ContentContainer>
      <ModalActionButtonsContainer theme={theme}>
        <IconButton
          type="button"
          name={t('gachaProblemCount.confirmButton')}
          size="medium"
          iconSrc={<CheckCircleIcon />}
          color={
            lightThemes.includes(theme)
              ? styledTheme.colors.GRAY_800
              : styledTheme.colors.GOLD
          }
          disabled={!isInputValueValid}
          onClick={() => onSubmitProblemCount(Number(inputValue))}
        />
      </ModalActionButtonsContainer>
    </Modal>
  );
};

export default GachaProblemCountInputModal;
