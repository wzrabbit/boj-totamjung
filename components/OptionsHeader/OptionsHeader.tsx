import { useState } from 'react';
import OptionsNav from './OptionsNav';
import SimpleModal from '@/components/common/SimpleModal';
import TotamjungInfoModal from './TotamjungInfoModal';
import LanguageSelector from './LanguageSelector';
import { settingsTitle, guidebookButton, infoButton } from '@/assets/png';
import { useTranslation } from '@/i18n';
import type { OptionsNavCategory } from '@/types/options';
import { TOTAMJUNG_GUIDE_URL } from '@/constants/urls';
import * as S from './OptionsHeader.styled';

interface OptionsHeaderProps {
  selectedCategory: OptionsNavCategory;
  onCategoryChange: (category: OptionsNavCategory) => void;
}

type OptionsHeaderModal = 'none' | 'guidePageOpenConfirm' | 'totamjungInfo';

const OptionsHeader = (props: OptionsHeaderProps) => {
  const { selectedCategory, onCategoryChange } = props;
  const [activeModal, setActiveModal] = useState<OptionsHeaderModal>('none');
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Title>
        <S.OptionsLogoImage src={settingsTitle} alt={t('extensionName')} />
      </S.Title>
      <OptionsNav
        selectedCategory={selectedCategory}
        onChange={onCategoryChange}
      />
      <S.ButtonPanel>
        <S.VersionText>{`v${
          browser.runtime.getManifest().version
        }`}</S.VersionText>
        <LanguageSelector />
        <S.Button
          type="button"
          aria-label={t('options.nav.guideAriaLabel')}
          onClick={() => {
            setActiveModal('guidePageOpenConfirm');
          }}
        >
          <S.ButtonImage src={guidebookButton} alt="" />
        </S.Button>
        <S.Button
          type="button"
          aria-label={t('options.nav.infoAriaLabel')}
          onClick={() => {
            setActiveModal('totamjungInfo');
          }}
        >
          <S.ButtonImage src={infoButton} alt="" />
        </S.Button>
      </S.ButtonPanel>
      <SimpleModal
        title={t('options.nav.guideConfirmTitle')}
        actionType="yesNo"
        width="350px"
        height="auto"
        open={activeModal === 'guidePageOpenConfirm'}
        message={t('options.nav.guideConfirmMessage')}
        onYesSelect={() => {
          window.open(TOTAMJUNG_GUIDE_URL.LANDING);
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
