import Modal from '@/components/common/Modal';
import Text from '@/components/common/Text';
import IconButton from '@/components/common/IconButton';
import useTypewriterText from '@/hooks/options/useTypewriterText';
import { useEffect, useMemo } from 'react';
import { bug, logoSquare } from '@/assets/png';
import { StickyNoteIcon, GithubIcon } from '@/assets/svg';
import { theme } from '@/styles/theme';
import * as S from './TotamjungInfoModal.styled';
import SimpleModal from '@/components/common/SimpleModal';
import useModalState from '@/hooks/useModalState';
import useTotamjungClickHandler from '@/hooks/options/useTotamjungClickHandler';
import { useTranslation } from '@/i18n';

interface TotamjungInfoModalProps {
  open: boolean;
  onClose: () => void;
}

const TotamjungInfoModal = (props: TotamjungInfoModalProps) => {
  const { open, onClose } = props;
  const { t } = useTranslation();

  const introductoryTextList = useMemo(
    () => [
      t('options.totamjungInfo.intro1'),
      t('options.totamjungInfo.intro2'),
      t('options.totamjungInfo.intro3'),
      t('options.totamjungInfo.intro4'),
      t('options.totamjungInfo.intro5'),
      t('options.totamjungInfo.intro6'),
    ],
    [t],
  );

  const { currentText, startTyping, stopTyping } = useTypewriterText({
    textList: introductoryTextList,
    typingTime: 1600,
    idleTime: 3000,
    erasingTime: 500,
  });
  const { activeModalName, openModal, closeModal } =
    useModalState<'totamjungComplain'>();
  const { increaseClickCount, totamjungScaleX, totamjungScaleY } =
    useTotamjungClickHandler({
      onShowComplainModal: () => openModal('totamjungComplain'),
    });

  useEffect(() => {
    if (open) {
      startTyping();
      return;
    }

    stopTyping();
  }, [open]);

  return (
    <Modal
      title={t('options.totamjungInfo.modalTitle')}
      open={open}
      onClose={onClose}
    >
      <S.ContentContainer>
        <S.DarkBrownGradientElement />
        <S.IntroductoryContainer>
          <S.LogoSquareImage
            src={logoSquare}
            alt=""
            onClick={increaseClickCount}
            $scaleX={totamjungScaleX}
            $scaleY={totamjungScaleY}
          />
          <S.ContentTitle>{t('options.totamjungInfo.appName')}</S.ContentTitle>
          <S.IntroductoryTextContainer>
            <S.TypewriterText>{currentText}</S.TypewriterText>
            <S.Pointer />
          </S.IntroductoryTextContainer>
        </S.IntroductoryContainer>
        <S.InfoContainer>
          <Text type="normal" fontSize={14} textAlign="center">
            {t('options.totamjungInfo.versionLabel')}:{' '}
            <b>{`v${browser.runtime.getManifest().version} - MV${browser.runtime.getManifest().manifest_version}`}</b>{' '}
            {process.env.BUILD_DATE
              ? `/ ${process.env.BUILD_DATE} ${t('options.totamjungInfo.buildSuffix')}`
              : ''}
          </Text>
          <Text type="normal" fontSize={14} textAlign="center">
            {t('options.totamjungInfo.developerLabel')}:{' '}
            <b>{t('options.totamjungInfo.developerHandle')}</b>(
            <S.LightGrayText>curious.wzrabbit@gmail.com</S.LightGrayText>)
          </Text>
        </S.InfoContainer>
        <S.ControlButtonsContainer>
          <IconButton
            type="button"
            name={t('options.totamjungInfo.bugReportButton')}
            size="medium"
            width="100%"
            color={theme.colors.LIGHT_PURPLE}
            iconSrc={bug}
            disabled={false}
            onClick={() => {
              window.open('mailto:curious.wzrabbit@gmail.com');
            }}
          />
          <IconButton
            type="button"
            name={t('options.totamjungInfo.releaseNotesButton')}
            size="medium"
            width="100%"
            color={theme.colors.LEMON}
            iconSrc={<StickyNoteIcon />}
            disabled={false}
            onClick={() => {
              window.open('https://github.com/wzrabbit/boj-totamjung/releases');
            }}
          />
          <IconButton
            type="button"
            name={t('options.totamjungInfo.githubButton')}
            size="medium"
            width="100%"
            color={theme.colors.OFF_WHITE}
            iconSrc={<GithubIcon />}
            disabled={false}
            onClick={() => {
              window.open('https://github.com/wzrabbit/boj-totamjung');
            }}
          />
        </S.ControlButtonsContainer>
        <SimpleModal
          title={t('options.totamjungInfo.complainTitle')}
          width="350px"
          height="auto"
          open={activeModalName === 'totamjungComplain'}
          message={t('options.totamjungInfo.complainMessage')}
          actionType="confirm"
          closeOnBackdropClick={false}
          onClose={closeModal}
        />
      </S.ContentContainer>
    </Modal>
  );
};

export default TotamjungInfoModal;
