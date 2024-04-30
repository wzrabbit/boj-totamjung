import { useState } from 'react';
import { theme } from '~styles/theme';
import Modal, { ModalActionButtonsContainer } from '~components/common/Modal';
import IconButton from '~components/common/IconButton';
import Text from '~components/common/Text';
import Textarea from '~components/common/Textarea';
import Input from '~components/common/Input';
import { CloseCircleIcon, CheckCircleIcon } from '~images/svg';
import * as S from './SlotEditModal.styled';

interface SlotEditModalProps {
  name: string;
  query: string;
  open: boolean;
  onClose: () => void;
  onSlotChange: (name: string, query: string) => void;
}

const SlotEditModal = (props: SlotEditModalProps) => {
  const { name, query, open, onClose, onSlotChange } = props;
  const [newName, setNewName] = useState(name);
  const [newQuery, setNewQuery] = useState(query);

  return (
    <Modal title="추첨 수정" open={open} onClose={onClose}>
      <S.ModalContent>
        <S.Label>
          <Text type="primary" fontSize="16px">
            추첨 이름
          </Text>
          <Input
            type="text"
            width="100%"
            value={newName}
            textAlign="left"
            maxLength={30}
            placeholder="0 ~ 30자"
            hasError={false}
            ariaLabel="새로운 추첨 이름을 입력해주세요"
            onChange={(event) => {
              setNewName(() => event.target.value);
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
            value={newQuery}
            placeholder="1 ~ 300자"
            hasError={false}
            ariaLabel="새로운 쿼리를 입력해주세요"
            onChange={(event) => {
              setNewQuery(() => event.target.value);
            }}
          />
        </S.Label>
      </S.ModalContent>
      <ModalActionButtonsContainer>
        <IconButton
          name="취소"
          size="medium"
          width="70px"
          iconSrc={<CloseCircleIcon />}
          color={theme.color.LIGHT_GRAY}
          disabled={false}
          ariaLabel="취소"
          onClick={onClose}
        />
        <IconButton
          name="확인"
          size="medium"
          width="70px"
          iconSrc={<CheckCircleIcon />}
          color={theme.color.GOLD}
          disabled={false}
          ariaLabel="확인"
          onClick={() => {
            onSlotChange(newName, newQuery);
          }}
        />
      </ModalActionButtonsContainer>
    </Modal>
  );
};

export default SlotEditModal;
