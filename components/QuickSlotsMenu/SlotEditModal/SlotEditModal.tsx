import { theme } from '@/styles/theme';
import Modal, { ModalActionButtonsContainer } from '@/components/common/Modal';
import IconButton from '@/components/common/IconButton';
import Text from '@/components/common/Text';
import TextLink from '@/components/common/TextLink';
import Textarea from '@/components/common/Textarea';
import Input from '@/components/common/Input';
import ErrorText from '@/components/common/ErrorText';
import useSlotEditModal from '@/hooks/randomDefense/useSlotEditModal';
import { CloseCircleIcon, CheckCircleIcon } from '@/assets/svg';
import * as S from './SlotEditModal.styled';
import { MAX_CUSTOM_QUERY_LENGTH } from '@/constants/randomDefense';

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
          <Text type="primary" fontSize={16}>
            추첨 이름
          </Text>
          <Input
            type="text"
            width="100%"
            height="30px"
            name="title"
            value={title}
            ref={titleRef}
            textAlign="left"
            maxLength={30}
            placeholder="0 ~ 30자"
            hasError={isTitleElementHasErrors}
            aria-label="새로운 추첨 이름을 입력해주세요"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </S.Label>
        <S.Label>
          <Text type="primary" fontSize={16}>
            쿼리
          </Text>
          <Textarea
            width="100%"
            height="150px"
            name="query"
            value={query}
            ref={queryRef}
            maxLength={MAX_CUSTOM_QUERY_LENGTH}
            placeholder={`1 ~ ${MAX_CUSTOM_QUERY_LENGTH}자`}
            hasError={isQueryElementHasErrors}
            ariaLabel="새로운 쿼리를 입력해주세요"
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
        </S.Label>
        <S.InformationTextContainer>
          <Text type="normal" fontSize={14}>
            solved.ac 검색 쿼리 작성법을 모르신다면,{' '}
            <TextLink href="https://solved.ac/search" fontSize={14}>
              solved.ac 문제 고급 검색
            </TextLink>{' '}
            페이지를 확인해 보세요!
          </Text>
          <Text type="normal" fontSize={14}>
            추첨은 비로그인 상태에서 진행되므로, 서포터 전용 쿼리는 사용할 수
            없음에 유의해 주세요.
          </Text>
        </S.InformationTextContainer>
        <ErrorText fontSize={14} errorMessage={errorMessage} />
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
