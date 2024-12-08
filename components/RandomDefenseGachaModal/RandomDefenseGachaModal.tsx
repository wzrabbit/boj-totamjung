import IconButton from '../common/IconButton';
import ProblemCard from '../ProblemCard';
import * as S from './RandomDefenseGachaModal.styled';
import Modal from '@/components/common/Modal';
import { CopyIcon, SaveIcon, RepeatIcon } from '@/assets/svg';
import { theme } from '@/styles/theme';

interface RandomDefenseGachaModalProps {
  open: boolean;
  onClose: () => void;
}

const RandomDefenseGachaModal = (props: RandomDefenseGachaModalProps) => {
  const { open, onClose } = props;

  return (
    <Modal title="즉석 추첨" open={open} padding="0" onClose={onClose}>
      <S.Container>
        <S.ProblemCardList>
          <ProblemCard
            problemInfo={{ title: 'A+B', problemId: 1000, tier: 1 }}
            isHidden={false}
          />
        </S.ProblemCardList>
        <S.ControlPanel>
          <IconButton
            type="button"
            name="문제 목록 복사"
            size="large"
            color={theme.color.LIGHT_GRAY}
            iconSrc={<CopyIcon />}
            disabled={false}
            ariaLabel="문제 목록 복사"
            onClick={() => {}}
          />
          <IconButton
            type="button"
            name="추첨 기록 저장"
            size="large"
            color={theme.color.LEMON}
            iconSrc={<SaveIcon />}
            disabled={false}
            ariaLabel="추첨 기록 저장"
            onClick={() => {}}
          />
          <IconButton
            type="button"
            name="다시 추첨하기!"
            size="large"
            color={theme.color.ORANGE}
            iconSrc={<RepeatIcon />}
            disabled={false}
            ariaLabel="다시 추첨하기!"
            onClick={() => {}}
          />
        </S.ControlPanel>
      </S.Container>
    </Modal>
  );
};

export default RandomDefenseGachaModal;
