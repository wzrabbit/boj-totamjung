import * as S from './LockTimer.styled';
import { lockWithClockIcon } from '~images/png';
import Text from '~components/common/Text';

const LockTimer = () => {
  return (
    <S.Container>
      <img src={lockWithClockIcon} width="54px" height="46px" alt="" />
      <S.Input name="hours" type="number" aria-label="시간" />
      <Text type="normal" fontSize="16px">
        시간
      </Text>
      <S.Input name="minutes" type="number" aria-label="분" />
      <Text type="normal" fontSize="16px">
        분
      </Text>
    </S.Container>
  );
};

export default LockTimer;
