import { useState } from 'react';
import {
  saveOptionsData,
  deleteOptionsData,
} from '@/domains/dataHandlers/optionsDataHandler';
import type { ChangeEventHandler } from 'react';
import { extractTotamjungDataFile } from '@/domains/extractTotamjungDataFile';
import { isOptionsDataResponse } from '@/domains/dataHandlers/validators/optionsDataValidator';
import type { OptionsDataResponse } from '@/types/options';

interface ErrorInfo {
  errorTitle: string;
  errorMessage: string;
}

type ActiveModal = 'none' | 'extract' | 'upload' | 'reset' | 'error';

const useOptionsDataManageMenu = () => {
  const [activeModal, setActiveModal] = useState<ActiveModal>('none');
  const [saveFileData, setSaveFileData] = useState<
    OptionsDataResponse | undefined
  >(undefined);
  const [errorInfo, setErrorInfo] = useState({
    errorTitle: '',
    errorMessage: '',
  });
  const { errorTitle, errorMessage } = errorInfo;

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
        errorTitle: '데이터를 업로드하지 못했습니다',
        errorMessage: '세이브파일의 확장자는 ".ttj" 여야 합니다.',
      });
      return;
    }

    if (saveFile.size > 1048576) {
      displayErrorModal({
        errorTitle: '데이터를 업로드하지 못했습니다',
        errorMessage: '세이브파일의 용량은 1MiB 이하여야 합니다.',
      });
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = async () => {
      try {
        const fileReaderResult = fileReader.result;

        if (typeof fileReaderResult !== 'string') {
          displayErrorModal({
            errorTitle: '데이터를 업로드하지 못했습니다',
            errorMessage: '세이브파일의 형식이 올바르지 않습니다.',
          });
          return;
        }

        const saveFileJson = JSON.parse(fileReaderResult);

        if (
          !('dataVersion' in saveFileJson) ||
          typeof saveFileJson.dataVersion !== 'string'
        ) {
          displayErrorModal({
            errorTitle: '데이터를 업로드하지 못했습니다',
            errorMessage:
              '데이터의 버전 정보를 알 수 없는 세이브파일입니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다.',
          });
          return;
        }

        if (saveFileJson.dataVersion !== 'v1.2') {
          displayErrorModal({
            errorTitle: '데이터를 업로드하지 못했습니다',
            errorMessage: `이 세이브파일의 버전은 ${saveFileJson.dataVersion}으로, 이 버전에서 다룰 수 있는 v1.2보다 높거나, 이 버전에서 인식할 수 없는 버전입니다.`,
          });
          return;
        }

        if (!isOptionsDataResponse(saveFileJson)) {
          displayErrorModal({
            errorTitle: '데이터를 업로드하지 못했습니다',
            errorMessage:
              '데이터의 일부 또는 전부가 손실된 세이브파일인 것 같습니다. 버그라고 생각하시는 경우 개발자에게 문의를 부탁드립니다.',
          });
          return;
        }

        setSaveFileData(saveFileJson);
        setActiveModal('upload');
      } catch (error) {
        displayErrorModal({
          errorTitle: '데이터를 업로드하지 못했습니다',
          errorMessage:
            '데이터의 형식이 올바르지 않습니다. 토탐정의 세이브파일이 아닌 파일의 확장자를 ".ttj"로 바꿨을 경우 이 문제가 발생할 수 있습니다. 세이브파일을 다시 검토해 주시겠어요?',
        });
      }
    };

    fileReader.readAsText(saveFile);
  };

  const uploadOptionsData = async () => {
    if (!saveFileData) {
      return;
    }

    saveOptionsData(saveFileData);
    location.reload();
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
