import Modal from '@/components/common/Modal';
import Text from '@/components/common/Text';
import IconButton from '@/components/common/IconButton';
import useTypewriterText from '@/hooks/options/useTypewriterText';
import { useEffect } from 'react';
import { bug, logoSquare } from '@/assets/png';
import { StickyNoteIcon, GithubIcon } from '@/assets/svg';
import { theme } from '@/styles/theme';
import * as S from './TotamjungInfoModal.styled';
import SimpleModal from '@/components/common/SimpleModal';
import useModalState from '@/hooks/useModalState';
import useTotamjungClickHandler from '@/hooks/options/useTotamjungClickHandler';

interface TotamjungInfoModalProps {
  open: boolean;
  onClose: () => void;
}

const INTRODUCTORY_TEXT_LIST = [
  '"알고리즘 분류를 공개하지 않고도 내가 알고 있는 알고리즘만을 이용하여 풀 수 있는 문제인지 확인해 볼 수 있어요"',
  '"알고리즘 분류를 공개할 수 없도록 타이머를 활용하여 일정 시간동안 잠글 수 있어요"',
  '"자주 사용하는 솔브드 검색 쿼리들을 슬롯에 저장해 두고, 백준 내에서 단축키 한 번으로 해당 쿼리로 랜덤 디펜스를 진행할 수 있어요"',
  '"멋지고 웅장한 토탐정 테마를 사용할 수 있어요"',
  '"문제 본문에 다양한 폰트를 취향에 맞게 적용할 수 있어요"',
  '"솔브드에서 제공하는 어려운 문제 경고를 백준에서도 사용할 수 있어요"',
];

const TotamjungInfoModal = (props: TotamjungInfoModalProps) => {
  const { open, onClose } = props;
  const { currentText, startTyping, stopTyping } = useTypewriterText({
    textList: INTRODUCTORY_TEXT_LIST,
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
    <Modal title="토탐정 정보" open={open} onClose={onClose}>
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
          <S.ContentTitle>토탐정</S.ContentTitle>
          <S.IntroductoryTextContainer>
            <S.TypewriterText>{currentText}</S.TypewriterText>
            <S.Pointer />
          </S.IntroductoryTextContainer>
        </S.IntroductoryContainer>
        <S.InfoContainer>
          <Text type="normal" fontSize={14} textAlign="center">
            버전:{' '}
            <b>{`v${browser.runtime.getManifest().version} - MV${browser.runtime.getManifest().manifest_version}`}</b>{' '}
            {process.env.BUILD_DATE ? `/ ${process.env.BUILD_DATE} 빌드` : ''}
          </Text>
          <Text type="normal" fontSize={14} textAlign="center">
            개발: <b>요술토끼</b>(
            <S.LightGrayText>curious.wzrabbit@gmail.com</S.LightGrayText>)
          </Text>
        </S.InfoContainer>
        <S.ControlButtonsContainer>
          <IconButton
            type="button"
            name="버그/건의 제보하기"
            size="medium"
            width="100%"
            color={theme.color.LIGHT_PURPLE}
            iconSrc={bug}
            disabled={false}
            onClick={() => {
              window.open('mailto:curious.wzrabbit@gmail.com');
            }}
          />
          <IconButton
            type="button"
            name="릴리즈 노트 보기"
            size="medium"
            width="100%"
            color={theme.color.LEMON}
            iconSrc={<StickyNoteIcon />}
            disabled={false}
            onClick={() => {
              window.open('https://github.com/wzrabbit/boj-totamjung/releases');
            }}
          />
          <IconButton
            type="button"
            name="Github 저장소 방문하기"
            size="medium"
            width="100%"
            color={theme.color.WHITE}
            iconSrc={<GithubIcon />}
            disabled={false}
            onClick={() => {
              window.open('https://github.com/wzrabbit/boj-totamjung');
            }}
          />
        </S.ControlButtonsContainer>
        <SimpleModal
          title="왜 그런 짓을..."
          width="350px"
          height="auto"
          open={activeModalName === 'totamjungComplain'}
          message="그만 좀 두드려 주시면 안 될까요!?"
          actionType="confirm"
          closeOnBackdropClick={false}
          onClose={closeModal}
        />
      </S.ContentContainer>
    </Modal>
  );
};

export default TotamjungInfoModal;
