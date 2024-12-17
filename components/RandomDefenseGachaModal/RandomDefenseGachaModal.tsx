import IconButton from '../common/IconButton';
import ProblemCardGrid from '../ProblemCardGrid';
import * as S from './RandomDefenseGachaModal.styled';
import Modal from '@/components/common/Modal';
import { CopyIcon, SaveIcon, RepeatIcon } from '@/assets/svg';
import { theme } from '@/styles/theme';
import type { Tier } from '@/types/randomDefense';

interface ProblemInfo {
  problemId: number;
  title: string;
  tier: Tier;
}

interface RandomDefenseGachaModalProps {
  open: boolean;
  onClose: () => void;
  problemInfos: ProblemInfo[];
}

const RandomDefenseGachaModal = (props: RandomDefenseGachaModalProps) => {
  const { open, onClose, problemInfos } = props;

  return (
    <Modal title="즉석 추첨" open={open} padding="0" onClose={onClose}>
      <S.Container>
        <ProblemCardGrid problemInfos={problemInfos} />
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
