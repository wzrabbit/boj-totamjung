import type { MouseEvent, ChangeEvent, KeyboardEventHandler } from 'react';
import { FileUploadIcon } from '@/assets/svg';
import { useRef } from 'react';
import * as S from './DataFileUploadButton.styled';

interface DataFileUploadButtonProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const DataFileUploadButton = (props: DataFileUploadButtonProps) => {
  const { onChange } = props;
  const fakeUploadButtonRef = useRef<HTMLInputElement>(null);

  const triggerFileInput: KeyboardEventHandler = (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      fakeUploadButtonRef.current?.click();
    }
  };

  return (
    <S.Container>
      <S.FakeUploadButton
        role="button"
        tabIndex={0}
        ref={fakeUploadButtonRef}
        onKeyDown={triggerFileInput}
      >
        <S.UploadIconWrapper>
          <FileUploadIcon />
        </S.UploadIconWrapper>
        <S.Text>설정 데이터 업로드</S.Text>
      </S.FakeUploadButton>
      <S.UploadInput
        type="file"
        accept=".ttj"
        onClick={(event: MouseEvent<HTMLInputElement>) => {
          event.currentTarget.value = '';
        }}
        onChange={onChange}
      />
    </S.Container>
  );
};

export default DataFileUploadButton;
