import MenuTitle from '~components/MenuTitle';
import Fieldset from '~components/common/Fieldset';
import { FontIcon } from '~images/svg';
import UseAppearanceFieldsetMenu from '~hooks/appearance/useAppearanceFieldsetMenu';
import * as S from './AppearanceFieldsetMenu.styled';

const FONT_INFOS = [
  { name: '설정하지 않음', fontFamily: 'Pretendard' },
  { name: '나눔고딕', fontFamily: 'Nanum Gothic', fontSize: '15px' },
  {
    name: '나눔고딕 코딩',
    fontFamily: 'Nanum Gothic Coding',
    fontSize: '15px',
  },
  { name: '나눔명조', fontFamily: 'Nanum Myeongjo' },
  { name: '배달의민족 도현', fontFamily: 'Do Hyeon' },
  { name: '배달의민족 주아', fontFamily: 'Jua' },
  { name: '본명조', fontFamily: 'Noto Serif KR' },
  { name: '해바라기', fontFamily: 'Sunflower', fontSize: '17px' },
  { name: '배달의민족 연성', fontFamily: 'Yeon Sung' },
  { name: 'Cute Font', fontFamily: 'Cute Font', fontSize: '22px' },
  { name: 'Gaegu', fontFamily: 'Gaegu', fontSize: '17px' },
  { name: '고딕 A1', fontFamily: 'Gothic A1', fontSize: '15px' },
  { name: '고운바탕체', fontFamily: 'Gowun Batang', fontSize: '15px' },
  { name: '고운돋움체', fontFamily: 'Gowun Dodum', fontSize: '15px' },
  { name: '하이멜로디', fontFamily: 'Hi Melody' },
  { name: 'IBM Plex Sans', fontFamily: 'IBM Plex Sans KR' },
  { name: '푸어스토리', fontFamily: 'Poor Story' },
  { name: 'DS싱글데이', fontFamily: 'Single Day' },
  { name: '송명체', fontFamily: 'Song Myung' },
  { name: 'a스타일리쉬', fontFamily: 'Stylish' },
  { name: 'Pretendard', fontFamily: 'Pretendard' },
  { name: '둥근모꼴 Neo', fontFamily: 'NeoDunggeunmo' },
  {
    name: 'Spoqa Han Sans Neo',
    fontFamily: 'Spoqa Han Sans Neo',
    fontSize: '15px',
  },
  { name: 'Noto Serif', fontFamily: 'Noto Serif KR' },
  { name: 'Hahmlet', fontFamily: 'Hahmlet' },
  { name: 'Diphylleia', fontFamily: 'Diphylleia' },
];

const AppearanceFieldsetMenu = () => {
  const { totamjungTheme, fontNo, updateTotamjungTheme, updateFontNo } =
    UseAppearanceFieldsetMenu();

  return (
    <S.Container>
      <MenuTitle
        title="테마 설정"
        iconSrc={chrome.runtime.getURL('palette.png')}
      />
      <Fieldset
        legend="토탐정 테마 사용 여부"
        name="shouldHideTier"
        options={[
          { label: '사용', value: 'totamjung' },
          { label: '사용하지 않음', value: 'none' },
        ]}
        checkedValue={totamjungTheme ?? ''}
        onChange={updateTotamjungTheme}
      />
      <MenuTitle title="폰트 설정" iconSrc={<FontIcon />} />
      <Fieldset
        legend="문제 본문 폰트 설정"
        name="shouldHideTier"
        options={FONT_INFOS.map(({ name, fontFamily, fontSize }, index) => ({
          label: (
            <S.FontText $fontFamily={fontFamily} $fontSize={fontSize}>
              {name}
            </S.FontText>
          ),
          value: String(index),
        }))}
        checkedValue={fontNo === undefined ? '' : String(fontNo)}
        onChange={updateFontNo}
      />
    </S.Container>
  );
};

export default AppearanceFieldsetMenu;
