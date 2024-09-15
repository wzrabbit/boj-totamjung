import { useState } from 'react';
import OptionsNav from './OptionsNav';
import SimpleModal from '~components/common/SimpleModal';
import TotamjungInfoModal from './TotamjungInfoModal';
import { settingsTitle, guidebookButton, infoButton } from '~images/png';
import type { OptionsNavCategory } from '~types/options';
import * as S from './OptionsHeader.styled';

interface OptionsHeaderProps {
  selectedCategory: OptionsNavCategory;
  onCategoryChange: (category: OptionsNavCategory) => void;
}

type OptionsHeaderModal = 'none' | 'guidePageOpenConfirm' | 'totamjungInfo';

const OptionsHeader = (props: OptionsHeaderProps) => {
  const { selectedCategory, onCategoryChange } = props;
  const [activeModal, setActiveModal] = useState<OptionsHeaderModal>('none');

  return (
    <S.Container>
      <S.Title>
        <S.OptionsLogoImage src={settingsTitle} alt="토탐정 설정" />
      </S.Title>
      <OptionsNav
        selectedCategory={selectedCategory}
        onChange={onCategoryChange}
      />
      <S.ButtonPanel>
        <S.VersionText>{`v${
          chrome.runtime.getManifest().version
        }`}</S.VersionText>
        <S.Button
          type="button"
          aria-label="도움말"
          onClick={() => {
            setActiveModal('guidePageOpenConfirm');
          }}
        >
          <S.ButtonImage src={guidebookButton} alt="" />
        </S.Button>
        <S.Button
          type="button"
          aria-label="버전 정보 및 문의"
          onClick={() => {
            setActiveModal('totamjungInfo');
          }}
        >
          <S.ButtonImage src={infoButton} alt="" />
        </S.Button>
      </S.ButtonPanel>
      <SimpleModal
        title="도움말 페이지 열기 확인"
        actionType="yesNo"
        width="350px"
        height="auto"
        open={activeModal === 'guidePageOpenConfirm'}
        message="토탐정 도움말 페이지를 열람하시겠어요?"
        onYesSelect={() => {
          window.open(
            'https://github.com/wzrabbit/boj-totamjung/blob/main/GUIDE.md',
          );
          setActiveModal('none');
        }}
        onNoSelect={() => {
          setActiveModal('none');
        }}
      />
      <TotamjungInfoModal
        open={activeModal === 'totamjungInfo'}
        onClose={() => {
          setActiveModal('none');
        }}
      />
    </S.Container>
  );
};

export default OptionsHeader;
