import MenuTitle from '@/components/MenuTitle';
import Fieldset from '@/components/common/Fieldset';
import { FontIcon } from '@/assets/svg';
import useAppearanceFieldsetMenu from '@/hooks/appearance/useAppearanceFieldsetMenu';
import { useTranslation } from '@/i18n';
import type { TranslationKey } from '@/i18n';
import * as S from './AppearanceFieldsetMenu.styled';

interface FontInfo {
  nameKey: TranslationKey;
  fontFamily: string;
  fontSize?: string;
}

const FONT_INFOS: readonly FontInfo[] = [
  { nameKey: 'options.appearance.fonts.default', fontFamily: 'Pretendard' },
  {
    nameKey: 'options.appearance.fonts.nanumGothic',
    fontFamily: 'Nanum Gothic',
    fontSize: '15px',
  },
  {
    nameKey: 'options.appearance.fonts.nanumGothicCoding',
    fontFamily: 'Nanum Gothic Coding',
    fontSize: '15px',
  },
  {
    nameKey: 'options.appearance.fonts.nanumMyeongjo',
    fontFamily: 'Nanum Myeongjo',
  },
  { nameKey: 'options.appearance.fonts.doHyeon', fontFamily: 'Do Hyeon' },
  { nameKey: 'options.appearance.fonts.jua', fontFamily: 'Jua' },
  {
    nameKey: 'options.appearance.fonts.notoSerifKr',
    fontFamily: 'Noto Serif KR',
  },
  {
    nameKey: 'options.appearance.fonts.sunflower',
    fontFamily: 'Sunflower',
    fontSize: '17px',
  },
  { nameKey: 'options.appearance.fonts.yeonSung', fontFamily: 'Yeon Sung' },
  {
    nameKey: 'options.appearance.fonts.cuteFont',
    fontFamily: 'Cute Font',
    fontSize: '22px',
  },
  {
    nameKey: 'options.appearance.fonts.gaegu',
    fontFamily: 'Gaegu',
    fontSize: '17px',
  },
  {
    nameKey: 'options.appearance.fonts.gothicA1',
    fontFamily: 'Gothic A1',
    fontSize: '15px',
  },
  {
    nameKey: 'options.appearance.fonts.gowunBatang',
    fontFamily: 'Gowun Batang',
    fontSize: '15px',
  },
  {
    nameKey: 'options.appearance.fonts.gowunDodum',
    fontFamily: 'Gowun Dodum',
    fontSize: '15px',
  },
  { nameKey: 'options.appearance.fonts.hiMelody', fontFamily: 'Hi Melody' },
  {
    nameKey: 'options.appearance.fonts.ibmPlexSans',
    fontFamily: 'IBM Plex Sans KR',
  },
  { nameKey: 'options.appearance.fonts.poorStory', fontFamily: 'Poor Story' },
  { nameKey: 'options.appearance.fonts.singleDay', fontFamily: 'Single Day' },
  { nameKey: 'options.appearance.fonts.songMyung', fontFamily: 'Song Myung' },
  { nameKey: 'options.appearance.fonts.stylish', fontFamily: 'Stylish' },
  { nameKey: 'options.appearance.fonts.pretendard', fontFamily: 'Pretendard' },
  {
    nameKey: 'options.appearance.fonts.neoDunggeunmo',
    fontFamily: 'NeoDunggeunmo',
  },
  {
    nameKey: 'options.appearance.fonts.spoqaHanSansNeo',
    fontFamily: 'Spoqa Han Sans Neo',
    fontSize: '15px',
  },
  {
    nameKey: 'options.appearance.fonts.notoSerif',
    fontFamily: 'Noto Serif KR',
  },
  { nameKey: 'options.appearance.fonts.hahmlet', fontFamily: 'Hahmlet' },
  { nameKey: 'options.appearance.fonts.diphylleia', fontFamily: 'Diphylleia' },
  { nameKey: 'options.appearance.fonts.cookieRun', fontFamily: 'CookieRun' },
];

const AppearanceFieldsetMenu = () => {
  const { totamjungTheme, fontNo, updateTotamjungTheme, updateFontNo } =
    useAppearanceFieldsetMenu();
  const { t } = useTranslation();

  return (
    <S.Container>
      <MenuTitle
        title={t('options.appearance.themeTitle')}
        iconSrc={browser.runtime.getURL('/palette.png')}
      />
      <Fieldset
        legend={t('options.appearance.themeLegend')}
        name="shouldHideTier"
        options={[
          { label: t('options.appearance.themeUse'), value: 'totamjung' },
          { label: t('options.appearance.themeDoNotUse'), value: 'none' },
        ]}
        checkedValue={totamjungTheme ?? ''}
        onChange={updateTotamjungTheme}
      />
      <MenuTitle
        title={t('options.appearance.fontTitle')}
        iconSrc={<FontIcon />}
      />
      <Fieldset
        legend={t('options.appearance.fontBodyLegend')}
        name="shouldHideTier"
        options={FONT_INFOS.map(({ nameKey, fontFamily, fontSize }, index) => ({
          label: (
            <S.FontText $fontFamily={fontFamily} $fontSize={fontSize ?? '16px'}>
              {t(nameKey)}
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
