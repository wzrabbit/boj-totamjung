import { useState } from 'react';
import {
  saveOptionsData,
  deleteOptionsData,
} from '@/domains/dataHandlers/optionsDataHandler';
import type { ChangeEventHandler } from 'react';
import { extractTotamjungDataFile } from '@/domains/extractTotamjungDataFile';
import {
  isOptionsData,
  isV2OptionsData,
  isV3OptionsData,
  isV4OptionsData,
} from '@/domains/dataHandlers/validators/optionsDataValidator';
import type { OptionsData } from '@/types/options';
import { VALID_VERSIONS } from '@/constants/validVersions';
import { useTranslation } from '@/i18n';

interface ErrorInfo {
  errorTitle: string;
  errorMessage: string;
}

type ActiveModal = 'none' | 'extract' | 'upload' | 'reset' | 'error';

const useOptionsDataManageMenu = () => {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState<ActiveModal>('none');
  const [saveFileData, setSaveFileData] = useState<OptionsData | undefined>(
    undefined,
  );
  const [errorInfo, setErrorInfo] = useState({
    errorTitle: '',
    errorMessage: '',
  });
  const { errorTitle, errorMessage } = errorInfo;
  const errorTitleText = t('hooks.dataUpload.errorTitle');

  const displayErrorModal = (info: ErrorInfo) => {
    setErrorInfo(info);
    setActiveModal('error');
  };

  const resetOptionsData = async () => {
    const isDeletionSuccessful = await deleteOptionsData();

    if (isDeletionSuccessful) {
      setActiveModal('none');
      location.reload();
    }
  };

  const extractOptionsData = async () => {
    extractTotamjungDataFile();
    setActiveModal('none');
  };

  const stageOptionsData: ChangeEventHandler<HTMLInputElement> = async (
    event,
  ) => {
    const files = event.target.files;

    if (!files) {
      return;
    }

    const saveFile = files[0];
    const extension = saveFile.name.split('.').at(-1);

    if (extension !== 'ttj') {
      displayErrorModal({
        errorTitle: errorTitleText,
        errorMessage: t('hooks.dataUpload.errorExtensionMessage'),
      });
      return;
    }

    if (saveFile.size > 1048576) {
      displayErrorModal({
        errorTitle: errorTitleText,
        errorMessage: t('hooks.dataUpload.errorSizeMessage'),
      });
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = async () => {
      try {
        const fileReaderResult = fileReader.result;

        if (typeof fileReaderResult !== 'string') {
          displayErrorModal({
            errorTitle: errorTitleText,
            errorMessage: t('hooks.dataUpload.errorFormatMessage'),
          });
          return;
        }

        const saveFileJson = JSON.parse(fileReaderResult);
        const { dataVersion } = saveFileJson;

        if (
          !('dataVersion' in saveFileJson) ||
          (dataVersion !== 'v1.2' && typeof dataVersion !== 'number')
        ) {
          displayErrorModal({
            errorTitle: errorTitleText,
            errorMessage: t('hooks.dataUpload.errorUnknownVersionMessage'),
          });
          return;
        }

        if (!VALID_VERSIONS.includes(dataVersion)) {
          displayErrorModal({
            errorTitle: errorTitleText,
            errorMessage: t('hooks.dataUpload.errorTooHighVersionMessage', [
              String(dataVersion),
            ]),
          });
          return;
        }

        if (
          ['v1.2', 2].includes(dataVersion) &&
          !isV2OptionsData(saveFileJson)
        ) {
          displayErrorModal({
            errorTitle: errorTitleText,
            errorMessage: t('hooks.dataUpload.errorV2CorruptedMessage'),
          });
          return;
        }

        if (dataVersion === 3 && !isV3OptionsData(saveFileJson)) {
          displayErrorModal({
            errorTitle: errorTitleText,
            errorMessage: t('hooks.dataUpload.errorV3CorruptedMessage'),
          });
          return;
        }

        if (dataVersion === 4 && !isV4OptionsData(saveFileJson)) {
          displayErrorModal({
            errorTitle: errorTitleText,
            errorMessage: t('hooks.dataUpload.errorV4CorruptedMessage'),
          });
          return;
        }

        if (dataVersion === 5 && !isOptionsData(saveFileJson)) {
          displayErrorModal({
            errorTitle: errorTitleText,
            errorMessage: t('hooks.dataUpload.errorCorruptedMessage'),
          });
          return;
        }

        setSaveFileData(saveFileJson);
        setActiveModal('upload');
      } catch (error) {
        displayErrorModal({
          errorTitle: errorTitleText,
          errorMessage: t('hooks.dataUpload.errorInvalidDataMessage'),
        });
      }
    };

    fileReader.readAsText(saveFile);
  };

  const uploadOptionsData = async () => {
    if (!saveFileData) {
      return;
    }

    const isSaveSuccessful = await saveOptionsData(saveFileData);

    if (isSaveSuccessful) {
      location.reload();
    }
  };

  const closeModal = () => {
    setActiveModal('none');
  };

  return {
    activeModal,
    errorTitle,
    errorMessage,
    setActiveModal,
    resetOptionsData,
    extractOptionsData,
    stageOptionsData,
    uploadOptionsData,
    closeModal,
  };
};

export default useOptionsDataManageMenu;
