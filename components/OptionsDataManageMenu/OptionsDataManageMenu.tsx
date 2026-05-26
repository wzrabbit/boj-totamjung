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
import { useTranslation } from '@/i18n';

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
  const { t } = useTranslation();

  return (
    <S.Container>
      <MenuTitle title={t('options.dataManage.title')} iconSrc={<SaveIcon />} />
      <IconButton
        type="button"
        name={t('options.dataManage.exportButton')}
        size="large"
        color="cyan"
        disabled={false}
        iconSrc={<FileDownloadIcon />}
        onClick={() => {
          setActiveModal('extract');
        }}
      />
      <DataFileUploadButton onChange={stageOptionsData} />
      <IconButton
        type="button"
        name={t('options.dataManage.resetButton')}
        size="large"
        color="#ff5050"
        disabled={false}
        iconSrc={<FileDeleteIcon />}
        onClick={() => {
          setActiveModal('reset');
        }}
      />
      <Text type="normal" fontSize={16}>
        {t('options.dataManage.description1')}
      </Text>
      <Text type="normal" fontSize={16}>
        {t('options.dataManage.description2Prefix')} <b>.ttj</b>
        {t('options.dataManage.description2Suffix')}
      </Text>
      <SimpleModal
        title={t('options.dataManage.extractModalTitle')}
        actionType="cancelConfirm"
        width="350px"
        height="auto"
        open={activeModal === 'extract'}
        message={t('options.dataManage.extractModalMessage')}
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
