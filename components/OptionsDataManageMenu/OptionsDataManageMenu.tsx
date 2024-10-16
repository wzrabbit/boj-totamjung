import * as S from './OptionsDataManageMenu.styled';
import OptionsDataResetModal from './OptionsDataResetModal';
import OptionsDataUploadModal from './OptionsDataUploadModal';
import MenuTitle from '@/components/MenuTitle';
import IconButton from '@/components/common/IconButton';
import SimpleModal from '@/components/common/SimpleModal';
import Text from '@/components/common/Text';
import { SaveIcon, FileDownloadIcon, FileDeleteIcon } from '@/assets/svg';
import useOptionsDataManageMenu from '@/hooks/useOptionsDataManageMenu';
import DataFileUploadButton from './DataFileUploadButton';

const OptionsDataManageMenu = () => {
  const {
    activeModal,
    errorTitle,
    errorMessage,
    setActiveModal,
    resetOptionsData,
    extractOptionsData,
    stageOptionsData,
    uploadOptionsData,
    closeModal,
  } = useOptionsDataManageMenu();

  return (
    <S.Container>
      <MenuTitle title="데이터 관리" iconSrc={<SaveIcon />} />
      <IconButton
        type="button"
        name="설정 데이터 내보내기"
        size="large"
        color="cyan"
        disabled={false}
        ariaLabel="설정 데이터 내보내기"
        iconSrc={<FileDownloadIcon />}
        onClick={() => {
          setActiveModal('extract');
        }}
      />
      <DataFileUploadButton onChange={stageOptionsData} />
      <IconButton
        type="button"
        name="설정 데이터 초기화"
        size="large"
        color="#ff5050"
        disabled={false}
        ariaLabel="설정 데이터 초기화"
        iconSrc={<FileDeleteIcon />}
        onClick={() => {
          setActiveModal('reset');
        }}
      />
      <Text type="normal" fontSize="16px">
        현재 설정을 백업해 두고 싶으시거나, 다른 기기로 데이터를 옮기고 싶으실
        경우 설정 파일에 대한 데이터를 세이브파일 형태로 내보내거나, 업로드할 수
        있습니다.
      </Text>
      <Text type="normal" fontSize="16px">
        토탐정 세이브파일의 확장자는 <b>.ttj</b>입니다.
      </Text>
      <SimpleModal
        title="데이터 내보내기"
        actionType="cancelConfirm"
        width="350px"
        height="auto"
        open={activeModal === 'extract'}
        message="현재 설정을 세이브파일로 내보냅니다. 계속하시려면 [확인] 버튼을 눌러 주세요."
        onConfirm={extractOptionsData}
        onClose={closeModal}
      />
      <OptionsDataUploadModal
        open={activeModal === 'upload'}
        onUpload={uploadOptionsData}
        onClose={closeModal}
      />
      <OptionsDataResetModal
        open={activeModal === 'reset'}
        onReset={resetOptionsData}
        onClose={closeModal}
      />
      <SimpleModal
        title={errorTitle}
        actionType="confirm"
        width="350px"
        height="auto"
        open={activeModal === 'error'}
        message={errorMessage}
        onClose={closeModal}
      />
    </S.Container>
  );
};

export default OptionsDataManageMenu;
