import * as S from './SlotInfo.styled';
import Text from '~components/common/Text';

interface FilledSlotInfo {
  isEmpty: false;
  name: string;
  query: string;
}

interface EmptySlotInfo {
  isEmpty: true;
}

type SlotInfoProps = FilledSlotInfo | EmptySlotInfo;

const SlotInfo = (props: SlotInfoProps) => {
  return (
    <S.Container>
      <S.NamePanel>
        <S.TextLabel $backgroundColor="gold">추첨 이름</S.TextLabel>
        <S.NameTextWrapper>
          {props.isEmpty ? (
            <S.NameEmptyText>{'(비어 있음)'}</S.NameEmptyText>
          ) : (
            <Text type="primary" fontSize="16px">
              {props.name}
            </Text>
          )}
        </S.NameTextWrapper>
      </S.NamePanel>
      <S.QueryPanel>
        <S.TextLabel $backgroundColor="white">쿼리</S.TextLabel>
        <S.QueryTextWrapper>
          {props.isEmpty ? (
            <S.QueryEmptyText>{'(비어 있음)'}</S.QueryEmptyText>
          ) : (
            <Text type="code" fontSize="13px">
              {props.query}
            </Text>
          )}
        </S.QueryTextWrapper>
      </S.QueryPanel>
    </S.Container>
  );
};

export default SlotInfo;