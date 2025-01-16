import Modal, { ModalActionButtonsContainer } from '@/components/common/Modal';
import IconButton from '@/components/common/IconButton';
import Text from '@/components/common/Text';
import * as S from './GachaProblemCountInputModal.styled';
import { CheckCircleIcon } from '@/assets/svg';
import { theme } from '@/styles/theme';
import useGachaProblemCount from '@/hooks/useGachaProblemCount';
import { MAX_PROBLEM_COUNT_PER_RANDOM_DEFENSE } from '@/constants/randomDefense';

interface GachaProblemCountInputModalProps {
  open: boolean;
  onClose: () => void;
  onSubmitProblemCount: (problemCount: number) => void;
}

const GachaProblemCountInputModal = (
  props: GachaProblemCountInputModalProps,
) => {
  const { open, onClose, onSubmitProblemCount } = props;
  const { inputValue, updateInputValue, isInputValueValid } =
    useGachaProblemCount();

  return (
    <Modal title="즉석 추첨" open={open} onClose={onClose}>
      <S.ContentContainer>
        <Text type="normal" fontSize="16px">
          추첨을 진행할 문제 수를 입력해 주세요.
        </Text>
        <S.ProblemCountInput
          type="number"
          min={1}
          max={MAX_PROBLEM_COUNT_PER_RANDOM_DEFENSE}
          value={inputValue}
          onChange={updateInputValue}
          autoFocus
        />
        <Text type="normal" textAlign="right" fontSize="14px">
          {`1문제 이상, ${MAX_PROBLEM_COUNT_PER_RANDOM_DEFENSE}문제 이하`}
        </Text>
        <Text type="gray" textAlign="left" fontSize="16px">
          TIP: 즉석 추첨은 백준 사이트 내에서 슬롯 번호에 대응하는 단축키를 길게
          누르는 것으로도 진행할 수 있습니다.
        </Text>
      </S.ContentContainer>
      <ModalActionButtonsContainer>
        <IconButton
          type="button"
          name="확인"
          size="medium"
          iconSrc={<CheckCircleIcon />}
          color={theme.color.GOLD}
          disabled={!isInputValueValid}
          ariaLabel="확인"
          onClick={() => onSubmitProblemCount(Number(inputValue))}
        />
      </ModalActionButtonsContainer>
    </Modal>
  );
};

export default GachaProblemCountInputModal;
