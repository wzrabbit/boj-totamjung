import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal, { ModalActionButtonsContainer } from './Modal';
import IconButton from '@/components/common/IconButton';
import Text from '@/components/common/Text';
import { CheckCircleIcon, CloseCircleIcon } from '@/assets/svg';

/**
 * `Modal`은 범용적으로 사용할 수 있는 모달 컴포넌트입니다.
 */
const meta = {
  title: 'components/common/Modal',
  component: Modal,
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * `<Text>` 컴포넌트만 사용하여 만든 모달의 예시입니다. 기본적으로 모달의 크기는 정해져 있지 않으며, 사용하는 측에서 **모달 내부의 콘텐츠의 크기를 직접 설정**해주는 것으로 조절할 수 있습니다.
 *
 * 본 예시에서는 `<div style={{ width: '300px' }}></div>` 가 콘텐츠의 최상위 요소이며, 가로 길이를 `300px`로 정했음을 알 수 있습니다.
 *
 * ```tsx
 * <Modal
 *   open={isOpen}
 *   title="테스트 모달"
 *   onClose={() => {
 *     setIsOpen(false);
 *   }}
 * >
 *   <div style={{ width: '300px' }}>
 *     <Text type="normal" fontSize="16px">
 *       테스트용 메시지입니다.
 *     </Text>
 *   </div>
 * </Modal>
 * ```
 */
export const TextModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Modal
          open={isOpen}
          title="테스트 모달"
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <div style={{ width: '300px' }}>
            <Text type="normal" fontSize="16px">
              테스트용 메시지입니다.
            </Text>
          </div>
        </Modal>
        <IconButton
          type="button"
          name="모달 열기"
          size="large"
          color="#a15eff"
          disabled={false}
          ariaLabel="모달 열기"
          onClick={() => {
            setIsOpen(() => true);
          }}
        />
      </div>
    );
  },
  args: {
    open: false,
    title: '테스트용 알림창',
  },
};

/**
 * `Modal.tsx` 모듈에서는 `<Modal>`뿐만이 아니라 하단 버튼 메뉴를 구성할 때 사용할 수 있는 `<ModalActionButtonsContainer>` 컴포넌트 또한 제공합니다.
 *
 * 해당 컴포넌트도 불러오신 후, 콘텐츠의 하단에 버튼 컴포넌트들과 함께 사용해 주시면 하단 버튼 메뉴 또한 구성하실 수 있습니다.
 *
 * ```tsx
 * <Modal
 *   open={isOpen}
 *   title="민트 초코 대량구매 확인"
 *   onClose={() => {
 *     alert('아뿔싸, 이런 방법이.');
 *     setIsOpen(false);
 *   }}
 * >
 *   <div style={{ width: '350px' }}>
 *     <Text type="normal" fontSize="16px">
 *       <span style={{ color: '#00ffcc', fontWeight: 600 }}>
 *         민트 초코
 *       </span>{' '}
 *       아이스크림을{' '}
 *       <span style={{ color: '#ff0000', fontWeight: 600 }}>3,000</span>개
 *       구매합니다. 계속하려면 [확인] 을 누르세요.
 *     </Text>
 *   </div>
 *   <ModalActionButtonsContainer>
 *     <IconButton
 *       type="button"
 *       name="취소"
 *       size="medium"
 *       color="#ff665e"
 *       iconSrc={<CloseCircleIcon />}
 *       disabled={false}
 *       ariaLabel="취소"
 *       onClick={() => {
 *          alert('민트초코의 위대함을 모르는 당신이 불쌍해');
 *          setIsOpen(() => false);
 *       }}
 *     />
 *     <IconButton
 *       type="button"
 *       name="확인"
 *       size="medium"
 *       color="#5eff69"
 *       iconSrc={<CheckCircleIcon />}
 *       disabled={false}
 *       ariaLabel="확인"
 *       onClick={() => {
 *         alert('그럴 바엔 치약을 3,000개 구매하는 게 낫지 않나요?');
 *         setIsOpen(() => false);
 *       }}
 *     />
 *   </ModalActionButtonsContainer>
 * </Modal>
 * ```
 */
export const TextWithControlButtons: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Modal
          open={isOpen}
          title="민트 초코 대량구매 확인"
          onClose={() => {
            alert('아뿔싸, 이런 방법이.');
            setIsOpen(false);
          }}
        >
          <div style={{ maxWidth: '350px' }}>
            <Text type="normal" fontSize="16px">
              <span style={{ color: '#00ffcc', fontWeight: 600 }}>
                민트 초코
              </span>{' '}
              아이스크림을{' '}
              <span style={{ color: '#ff0000', fontWeight: 600 }}>3,000</span>개
              구매합니다. 계속하려면 [확인] 을 누르세요.
            </Text>
          </div>
          <ModalActionButtonsContainer>
            <IconButton
              type="button"
              name="취소"
              size="medium"
              color="#ff665e"
              iconSrc={<CloseCircleIcon />}
              disabled={false}
              ariaLabel="취소"
              onClick={() => {
                alert('민트초코의 위대함을 모르는 당신이 불쌍해');
                setIsOpen(() => false);
              }}
            />
            <IconButton
              type="button"
              name="확인"
              size="medium"
              color="#5eff69"
              iconSrc={<CheckCircleIcon />}
              disabled={false}
              ariaLabel="확인"
              onClick={() => {
                alert('그럴 바엔 치약을 3,000개 구매하는 게 낫지 않나요?');
                setIsOpen(() => false);
              }}
            />
          </ModalActionButtonsContainer>
        </Modal>
        <IconButton
          type="button"
          name="모달 열기"
          size="large"
          color="#a15eff"
          disabled={false}
          ariaLabel="모달 열기"
          onClick={() => {
            setIsOpen(() => true);
          }}
        />
      </div>
    );
  },
  args: {
    open: false,
    title: '테스트용 알림창',
  },
};

/**
 * 제목이 매우 길어 화면에 표시할 수 없는 경우 뒷 내용은 생략(...)되어 표시됩니다.
 *
 * 모달의 가로 길이는 사용자의 웹 브라우저에 따라 축소/확대될 수도 있으므로, **콘텐츠의 크기는 이를 고려하여 고정값인 `width`보다는 유동적인 대응이 가능한 `min-width`, `max-width` 등을 더 추천합니다.**
 */
export const VeryLongTitle: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Modal
          open={isOpen}
          title="이 제목은 너무 길어서 도저히 한 화면에 표시할 수 없을 정도입니다. 여러분의 모니터에서 테스트할 때는 어느 정도일지 모르겠지만 아무튼 이 제목도 굉장히 길기 때문에 감당이 힘들 것이라고 생각합니다."
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <div style={{ maxWidth: '100%' }}>
            <Text type="normal" fontSize="16px">
              기본적으로 콘텐츠가 차지하는 크기가 작더라도, 제목의 길이가 길면,
              모달의 길이는 제목의 길이를 한 줄에 표시할 수 있도록 늘어나요.
              그렇지만, 모달을 띄운 창의 크기가 작다면 이마저도 한계가 있을
              거에요.
            </Text>
            <Text type="primary" fontSize="16px">
              그 때에는, 줄임표(...)를 사용해 제목을 생략시켜서 표시하도록
              작동해요.
            </Text>
          </div>
          <ModalActionButtonsContainer>
            <IconButton
              type="button"
              name="그렇군요"
              size="medium"
              color="#a3a3a3"
              iconSrc={<CheckCircleIcon />}
              disabled={false}
              ariaLabel="전혀 안 궁금하지만 이해했다고 대충 대답하기"
              onClick={() => {
                setIsOpen(() => false);
              }}
            />
          </ModalActionButtonsContainer>
        </Modal>
        <IconButton
          type="button"
          name="모달 열기"
          size="large"
          color="#a15eff"
          disabled={false}
          ariaLabel="모달 열기"
          onClick={() => {
            setIsOpen(() => true);
          }}
        />
      </div>
    );
  },
  args: {
    open: false,
    title: '테스트용 알림창',
  },
};
