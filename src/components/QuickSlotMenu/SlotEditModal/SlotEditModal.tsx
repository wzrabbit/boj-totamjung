import { theme } from '~styles/theme';
import Modal, { ModalActionButtonsContainer } from '~components/common/Modal';
import IconButton from '~components/common/IconButton';
import Text from '~components/common/Text';
import Textarea from '~components/common/Textarea';
import Input from '~components/common/Input';
import ErrorText from '~components/common/ErrorText';
import useSlotEditModal from '~hooks/randomDefense/useSlotEditModal';
import { CloseCircleIcon, CheckCircleIcon } from '~images/svg';
import * as S from './SlotEditModal.styled';

interface SlotEditModalProps {
  title: string;
  query: string;
  open: boolean;
  onClose: () => void;
  onSlotChange: (title: string, query: string) => void;
}

const SlotEditModal = (props: SlotEditModalProps) => {
  const {
    title: initTitle,
    query: initQuery,
    open,
    onClose,
    onSlotChange,
  } = props;
  const {
    title,
    query,
    errorMessage,
    isTitleElementHasErrors,
    isQueryElementHasErrors,
    setQuery,
    setTitle,
    submitSlotInfo,
    titleRef,
    queryRef,
  } = useSlotEditModal({
    initTitle,
    initQuery,
    onSlotChange,
  });

  return (
    <Modal title="추첨 수정" open={open} onClose={onClose}>
      <S.Form>
        <S.Label>
          <Text type="primary" fontSize="16px">
            추첨 이름
          </Text>
          <Input
            type="text"
            width="100%"
            name="title"
            value={title}
            ref={titleRef}
            textAlign="left"
            maxLength={30}
            placeholder="0 ~ 30자"
            hasError={isTitleElementHasErrors}
            ariaLabel="새로운 추첨 이름을 입력해주세요"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </S.Label>
        <S.Label>
          <Text type="primary" fontSize="16px">
            쿼리
          </Text>
          <Textarea
            width="100%"
            height="150px"
            name="query"
            value={query}
            ref={queryRef}
            maxLength={300}
            placeholder="1 ~ 300자"
            hasError={isQueryElementHasErrors}
            ariaLabel="새로운 쿼리를 입력해주세요"
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
        </S.Label>
        <ErrorText fontSize="14px" errorMessage={errorMessage} />
      </S.Form>
      <ModalActionButtonsContainer>
        <IconButton
          type="button"
          name="취소"
          size="medium"
          iconSrc={<CloseCircleIcon />}
          color={theme.color.LIGHT_GRAY}
          disabled={false}
          ariaLabel="취소"
          onClick={onClose}
        />
        <IconButton
          type="button"
          name="확인"
          size="medium"
          iconSrc={<CheckCircleIcon />}
          color={theme.color.GOLD}
          disabled={false}
          ariaLabel="확인"
          onClick={submitSlotInfo}
        />
      </ModalActionButtonsContainer>
    </Modal>
  );
};

export default SlotEditModal;
