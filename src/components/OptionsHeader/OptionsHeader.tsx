import { settingsTitle, guidebookButton, infoButton } from '~images/png';
import * as S from './OptionsHeader.styled';
import OptionsNav from './OptionsNav';
import type { OptionsNavCategory } from '~types/options';

interface OptionsHeaderProps {
  selectedCategory: OptionsNavCategory;
  onCategoryChange: (category: OptionsNavCategory) => void;
}

const OptionsHeader = (props: OptionsHeaderProps) => {
  const { selectedCategory, onCategoryChange } = props;

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
        <S.Button type="button" aria-label="도움말">
          <S.ButtonImage src={guidebookButton} alt="" />
        </S.Button>
        <S.Button type="button" aria-label="버전 정보 및 문의">
          <S.ButtonImage src={infoButton} alt="" />
        </S.Button>
      </S.ButtonPanel>
    </S.Container>
  );
};

export default OptionsHeader;
