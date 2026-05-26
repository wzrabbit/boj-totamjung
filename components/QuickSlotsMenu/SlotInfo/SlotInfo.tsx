import * as S from './SlotInfo.styled';
import Text from '@/components/common/Text';
import { useTranslation } from '@/i18n';
import type { QuickSlot } from '@/types/randomDefense';

const SlotInfo = (props: QuickSlot) => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.NamePanel>
        <S.TextLabel $backgroundColor="gold">
          {t('quickSlots.slotInfo.nameLabel')}
        </S.TextLabel>
        <S.NameTextWrapper>
          {props.isEmpty ? (
            <S.NameEmptyText>{t('quickSlots.slotInfo.empty')}</S.NameEmptyText>
          ) : (
            <Text type="primary" fontSize={16}>
              {props.title}
            </Text>
          )}
        </S.NameTextWrapper>
      </S.NamePanel>
      <S.QueryPanel>
        <S.TextLabel $backgroundColor="white">
          {t('quickSlots.slotInfo.queryLabel')}
        </S.TextLabel>
        <S.QueryTextWrapper>
          {props.isEmpty ? (
            <S.QueryEmptyText>
              {t('quickSlots.slotInfo.empty')}
            </S.QueryEmptyText>
          ) : (
            <Text type="code" fontSize={13}>
              {props.query}
            </Text>
          )}
        </S.QueryTextWrapper>
      </S.QueryPanel>
    </S.Container>
  );
};

export default SlotInfo;
